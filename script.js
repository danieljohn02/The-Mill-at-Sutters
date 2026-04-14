/* ═══════════════════════════════════════════
   THE MILL AT SUTTERS — Script
   Vanilla JS, no dependencies.
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── 1. Nav scroll behavior ─── */
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });

  /* ─── 2. Mobile nav ─── */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileClose = document.querySelector('.mobile-nav-close');

  function openMobileNav() {
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMobileNav);
  mobileClose.addEventListener('click', closeMobileNav);
  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMobileNav);
  });

  /* ─── 3. Menu tabs ─── */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-tab');

      tabButtons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      tabPanels.forEach(function (panel) {
        panel.classList.remove('active');
        panel.hidden = true;
      });

      var activePanel = document.getElementById('panel-' + target);
      if (activePanel) {
        activePanel.classList.add('active');
        activePanel.hidden = false;
      }
    });
  });

  /* ─── 4. Events filter chips ─── */
  var eventChips = document.querySelectorAll('#events .events-controls .chip');
  var eventCards = document.querySelectorAll('.event-card');

  eventChips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      eventChips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');

      var filter = chip.getAttribute('data-filter');
      eventCards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-type') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* ─── 5. Calendar/List toggle ─── */
  var toggleBtns = document.querySelectorAll('.toggle-btn');
  var calendarView = document.getElementById('calendar-view');
  var listView = document.getElementById('list-view');

  toggleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      toggleBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var view = btn.getAttribute('data-view');
      if (view === 'calendar') {
        calendarView.hidden = false;
        listView.hidden = true;
      } else {
        calendarView.hidden = true;
        listView.hidden = false;
      }
    });
  });

  /* ─── 6. Calendar render ─── */
  var events = [
    { day: 18, month: 3, year: 2026, type: 'live-music', dotClass: 'dot-music', title: 'The River Blades', time: '9:00 PM', desc: 'Classic rock covers and original Americana. No cover charge.' },
    { day: 19, month: 3, year: 2026, type: 'live-music', dotClass: 'dot-music', title: 'DJ Marcus Bell', time: '8:30 PM', desc: 'Late-night DJ set — 80s, 90s, and soul. Dance floor opens at 10pm.' },
    { day: 22, month: 3, year: 2026, type: 'food-special', dotClass: 'dot-food', title: 'Wagyu Tuesday', time: 'All Night', desc: 'Half-price Wagyu Beef Sliders and $14 Ember Old Fashioneds all evening.' },
    { day: 25, month: 3, year: 2026, type: 'live-music', dotClass: 'dot-music', title: 'Hollow Creek', time: '9:00 PM', desc: 'Southern rock and blues. Two sets. Free entry.' },
    { day: 26, month: 3, year: 2026, type: 'private-event', dotClass: 'dot-private', title: 'Reserved — Private Dining Room', time: '7:00 PM', desc: '' },
    { day: 30, month: 3, year: 2026, type: 'food-special', dotClass: 'dot-food', title: 'Wine Wednesday', time: 'All Night', desc: 'All bottles 30% off. Sommelier on floor for guidance.' }
  ];

  var calendarGrid = document.getElementById('calendar-grid');
  var calendarDetail = document.getElementById('calendar-event-detail');

  function renderCalendar(year, month) {
    calendarGrid.innerHTML = '';
    var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayNames.forEach(function (d) {
      var el = document.createElement('div');
      el.className = 'calendar-day-header';
      el.textContent = d;
      calendarGrid.appendChild(el);
    });

    var firstDay = new Date(year, month, 1).getDay();
    var daysInMonth = new Date(year, month + 1, 0).getDate();

    for (var i = 0; i < firstDay; i++) {
      var empty = document.createElement('div');
      empty.className = 'calendar-day empty';
      calendarGrid.appendChild(empty);
    }

    for (var day = 1; day <= daysInMonth; day++) {
      var cell = document.createElement('div');
      cell.className = 'calendar-day';

      var num = document.createElement('span');
      num.className = 'day-number';
      num.textContent = day;
      cell.appendChild(num);

      var dayEvents = events.filter(function (e) {
        return e.day === day && e.month === month && e.year === year;
      });

      if (dayEvents.length > 0) {
        cell.classList.add('has-event');
        var dotsWrap = document.createElement('div');
        dayEvents.forEach(function (ev) {
          var dot = document.createElement('span');
          dot.className = 'event-dot ' + ev.dotClass;
          dotsWrap.appendChild(dot);
        });
        cell.appendChild(dotsWrap);

        cell.addEventListener('click', (function (evts) {
          return function () {
            calendarDetail.classList.add('show');
            calendarDetail.innerHTML = evts.map(function (ev) {
              return '<h4>' + ev.title + '</h4>' +
                '<p class="detail-time">' + ev.time + '</p>' +
                (ev.desc ? '<p class="detail-desc">' + ev.desc + '</p>' : '');
            }).join('<hr style="border:none;border-top:1px solid rgba(184,134,11,0.15);margin:12px 0">');
          };
        })(dayEvents));
      }

      calendarGrid.appendChild(cell);
    }
  }

  // April 2026 = month index 3
  var currentMonth = 3;
  var currentYear = 2026;
  var monthLabel = document.getElementById('month-label');
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  function updateCalendar() {
    monthLabel.textContent = monthNames[currentMonth] + ' ' + currentYear;
    renderCalendar(currentYear, currentMonth);
    calendarDetail.classList.remove('show');
    calendarDetail.innerHTML = '';
  }

  document.querySelector('.month-prev').addEventListener('click', function () {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    updateCalendar();
  });
  document.querySelector('.month-next').addEventListener('click', function () {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    updateCalendar();
  });

  renderCalendar(currentYear, currentMonth);

  /* ─── 7. Gallery filter ─── */
  var galleryChips = document.querySelectorAll('#gallery .gallery-filters .chip');
  var galleryItems = document.querySelectorAll('.gallery-item');

  galleryChips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      galleryChips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');

      var filter = chip.getAttribute('data-filter');
      galleryItems.forEach(function (item) {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  /* ─── 8. Gallery lightbox ─── */
  var lightbox = document.getElementById('lightbox');
  var lightboxImage = document.getElementById('lightbox-image');
  var lightboxLabel = document.getElementById('lightbox-label');
  var lightboxClose = document.querySelector('.lightbox-close');

  galleryItems.forEach(function (item) {
    item.addEventListener('click', openLightbox);
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox.call(item);
      }
    });

    function openLightbox() {
      var inner = item.querySelector('.gallery-item-inner');
      var style = inner.getAttribute('style');
      var label = inner.querySelector('.placeholder-label').textContent;

      lightboxImage.setAttribute('style', style + '; width: 60vw; max-width: 800px; min-height: 400px;');
      lightboxLabel.textContent = label;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
    }
  });

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', function (e) {
    e.stopPropagation();
    closeLightbox();
  });
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });

  /* ─── 9. Reservation form ─── */
  var resForm = document.getElementById('reservation-form');
  var resSuccess = document.getElementById('form-success');

  resForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic required-field check
    var valid = true;
    resForm.querySelectorAll('[required]').forEach(function (field) {
      if (!field.value.trim()) {
        valid = false;
        field.style.borderBottomColor = '#c0392b';
        field.addEventListener('input', function handler() {
          field.style.borderBottomColor = '';
          field.removeEventListener('input', handler);
        });
      }
    });

    if (!valid) return;

    resForm.hidden = true;
    resSuccess.hidden = false;
  });

  /* ─── Private events form ─── */
  var privateBtn = document.getElementById('private-events-cta');
  var privateFormWrap = document.getElementById('private-events-form');
  var privateForm = document.getElementById('private-form');
  var privateSuccess = document.getElementById('private-form-success');

  privateBtn.addEventListener('click', function () {
    privateFormWrap.hidden = false;
    privateFormWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  privateForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = true;
    privateForm.querySelectorAll('[required]').forEach(function (field) {
      if (!field.value.trim()) {
        valid = false;
        field.style.borderBottomColor = '#c0392b';
        field.addEventListener('input', function handler() {
          field.style.borderBottomColor = '';
          field.removeEventListener('input', handler);
        });
      }
    });
    if (!valid) return;
    privateForm.hidden = true;
    privateSuccess.hidden = false;
  });

  /* ─── Newsletter (just visual) ─── */
  var nlForm = document.getElementById('newsletter-form');
  nlForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = nlForm.querySelector('input');
    if (input.value.trim()) {
      input.value = '';
      input.placeholder = 'Thanks! You\'re in.';
    }
  });

  /* ─── 10. Scroll reveal ─── */
  var reveals = document.querySelectorAll('.reveal');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(function (el) { observer.observe(el); });

})();
