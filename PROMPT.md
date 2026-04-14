# The Mill at Sutters — Website Build Prompt

Use this prompt with a frontend AI tool or hand it to a developer. It is a complete creative brief and technical specification for the restaurant's website.

---

## Project Overview

Build a complete, production-quality static website for **The Mill at Sutters**, a high-end bar and grill located at **214 NY-59 Unit 1, Airmont, NY 10901**. The restaurant features exceptional food, an extensive cocktail and spirits menu, live music performances, and stays open late into the night.

The website must feel **original, handcrafted, and atmospheric** — not like a template, not like generic AI output. Every design decision should serve the brand: rustic craftsmanship, warmth, and the electric energy of a great night out.

---

## Brand Identity

**Name:** The Mill at Sutters
**Concept:** High-end bar & grill — upscale food and craft cocktails in a space that feels lived-in, storied, and alive with energy.
**Name Meaning:** Evokes an old grain mill — craftsmanship, history, something built to last. A nod to Sutter's Mill and the Gold Rush spirit of discovery and reward. The name should feel like there's a real story behind it.
**Personality:** Warm but bold. Welcoming but not casual. The kind of place you dress up a little for, then end up closing down at 2am with new friends.
**Tagline options to choose the best from:**
- "Where the Night Comes Alive"
- "Craft. Fire. Live Music."
- "Good Food. Better Drinks. The Best Nights."
- "Forged from Good Taste"

---

## Visual Design Direction

### Color Palette — Use EXACTLY These Values
```
--color-bg:           #0f1a0f    /* near-black forest green — primary background */
--color-bg-warm:      #1c1410    /* warm near-black — alternating section bg */
--color-surface:      #1e2b1e    /* card/panel surfaces */
--color-amber:        #c17f3b    /* main amber/cognac — CTA buttons, accents */
--color-amber-light:  #e09d55    /* hover state, highlights */
--color-brass:        #b8860b    /* aged brass — dividers, icons, micro-details */
--color-cream:        #f0e8d8    /* body text on dark backgrounds */
--color-cream-muted:  #a89880    /* secondary text, captions */
--color-charcoal:     #2a2a2a    /* text on light surfaces */
--color-gold:         #d4aa45    /* special highlights, pull quotes */
```

**Do NOT use:** generic restaurant red (#cc0000), corporate blue, pure white (#ffffff), pure black (#000000), gray (#808080 family), pastel anything.

### Typography
Load from Google Fonts:
- **Display/Headings:** `Playfair Display` (weights 700, 900) — for all major headings, section titles
- **Body:** `DM Sans` (weights 300, 400, 500) — for all paragraph text, nav, UI labels
- **Accent:** `Dancing Script` (weight 700) — used SPARINGLY for atmosphere: pull quotes, special labels, the tagline only

**Scale:**
- Hero headline: `clamp(56px, 8vw, 110px)`, Playfair Display 900, cream
- Section headings: `clamp(36px, 5vw, 64px)`, Playfair Display 700
- Subheadings: `24px`, DM Sans 500, amber
- Body: `17px` line-height 1.7, DM Sans 300
- Captions/labels: `13px` uppercase letter-spacing 0.15em, DM Sans 500

### Aesthetic Rules — Non-Negotiable
1. **Dark backgrounds everywhere** — no white or light-background sections except Contact/Hours
2. **Full-bleed sections** — no card grids floating in white space, no boxed layouts
3. **Overlapping typographic elements** — large display text bleeds over image edges, off-grid placement
4. **Warm glow effects** — use CSS radial gradients simulating candlelight/amber spot lighting in sections. Example: `radial-gradient(ellipse 60% 40% at 30% 50%, rgba(193,127,59,0.12) 0%, transparent 70%)`
5. **No flat UI components** — buttons have depth (subtle box-shadow with amber), no Material Design or Bootstrap aesthetics
6. **Texture suggestion** — use CSS noise/grain overlay on hero: a `::before` pseudo-element with `opacity: 0.04` SVG noise filter or base64 grain texture
7. **Asymmetry and tension** — alternate left/right alignment in alternating sections, use `padding` variations to break grid monotony
8. **Brass dividers** — decorative `<hr>` or `::after` elements using `--color-brass`, 1px, 60px wide, centered, with `◆` or `✦` diamond character on either side

---

## File Structure

```
/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── (placeholder references — no actual images needed)
```

Use CSS for all decorative backgrounds (gradients, patterns). For image placeholders, use `<div class="img-placeholder">` with CSS background gradients that suggest the mood of the photo that would go there. Label each placeholder clearly with `data-label="Describe what photo goes here"` and show the label in a centered `position: absolute` span.

---

## Site Structure & Section Specs

---

### SECTION 1: Navigation

**Behavior:** Fixed/sticky to top. Transparent over hero, transitions to `rgba(15,26,15,0.97)` with `backdrop-filter: blur(8px)` on scroll (add class `.scrolled` via JS).

**Layout:**
- Left: Logo — wordmark "The Mill at Sutters" in Playfair Display 700, two-line stacked, small `◆` separator between "Mill" and "at Sutters" in brass color
- Center: Navigation links — `MENU` | `EVENTS` | `ABOUT` | `GALLERY` | `PRIVATE EVENTS`
- Right: CTA button — `Reserve a Table` — amber background, dark text, no border-radius (sharp corners), 12px 28px padding, DM Sans 500 uppercase

**Mobile (< 768px):** Hamburger icon (3 lines, brass color) → full-screen overlay nav, dark green bg, links stacked centered in large Playfair Display text, close button top right.

---

### SECTION 2: Hero

**Purpose:** Stop a visitor cold. Make them want to be there tonight.

**Layout:**
- `min-height: 100vh`
- Background: Full-bleed image placeholder (dark, moody — label it "Hero: Atmospheric interior shot of the restaurant, warm candlelight, bar in background, live music stage visible")
- On top of image: dark overlay `linear-gradient(to bottom, rgba(10,18,10,0.5) 0%, rgba(10,18,10,0.85) 100%)`
- Plus: amber warm glow `radial-gradient(ellipse 50% 60% at 20% 60%, rgba(193,127,59,0.15) 0%, transparent 65%)`

**Content (vertically centered, left-aligned, max-width 700px, left: 8vw):**
```
[Accent font, gold, 18px] ✦ Airmont, New York ✦
[Display h1, cream, max-size 110px, bold]
Where the
Night Comes
Alive.
[Body, cream-muted, 20px, max-width 480px]
Craft food. Exceptional cocktails.
Live music every weekend.
[Two buttons side by side]
[Button 1 — filled amber] View the Menu
[Button 2 — outline cream/transparent] Make a Reservation
```

**Bottom of hero:** Subtle scroll indicator — a thin vertical line (brass) with a small chevron, animated with CSS `@keyframes` bouncing up/down. Text: `scroll` in tiny uppercase DM Sans.

**Decorative:** In the top-right corner of the hero, a large watermark/ghost text in Playfair Display 900 at `font-size: 20vw`, `opacity: 0.03`, `color: white`, text: `MILL` — adds depth without being visible.

---

### SECTION 3: About / The Story

**Background:** `--color-bg-warm` with subtle radial glow center-right in amber.

**Layout (desktop):** Two-column grid, 55/45 split.
- Left col: Image placeholder (label: "Interior detail: aged wood bar top, brass fixtures, warm backlit bottles") — `aspect-ratio: 4/5`, a thin brass border `2px solid var(--color-brass)` offset `8px 8px 0 0` using `outline` or `::after` technique
- Right col: Text content, vertically centered

**Content (right col):**
```
[Small label, brass, uppercase, letter-spacing] ✦ Our Story
[H2, Playfair Display] Rooted in Craft.
Built for the Night.

[Body text, cream-muted]
The Mill at Sutters was born from a simple idea: that a great night out shouldn't mean choosing between incredible food and a real atmosphere. Situated in Airmont, New York, we built a space where hand-crafted cocktails meet fire-kissed cooking, and where the music is always live.

Whether you're here for date night, celebrating something worth celebrating, or just chasing down the kind of evening you'll still be talking about on Monday — you're in the right place.

[Pull quote — Dancing Script, gold, 28px, left border brass 3px, padding-left 24px]
"This is the kind of place that ruins every other restaurant for you."

[Small text, cream-muted] Open Tuesday–Sunday · Kitchen open late
```

**Stats bar (full-width, below two-col):** Three figures separated by brass `|` dividers:
- `12+` — Years in the neighborhood
- `200+` — Cocktails & spirits
- `Live Music` — Every Friday & Saturday

---

### SECTION 4: Menu

**Background:** `--color-bg` (darkest)

**Header:**
```
[Label] ✦ Eat & Drink
[H2] The Menu
[Subtitle, cream-muted] Locally sourced. Fire-finished. Never ordinary.
```

**Tab Navigation:**
Four tabs: `FOOD` | `COCKTAILS & SPIRITS` | `WINE & BEER` | `CHEF'S SPECIALS`

Tab styles:
- Inactive: DM Sans 500 uppercase, letter-spacing, `--color-cream-muted`, no background, border-bottom `2px solid transparent`
- Active: `--color-amber`, border-bottom `2px solid var(--color-amber)`
- Tab underline bar: `--color-surface` full width, 1px

**Tab content: FOOD**

Layout: Two-column list. Each item:
```html
<div class="menu-item">
  <div class="menu-item-header">
    <span class="item-name">Duck Confit Flatbread</span>
    <span class="item-dots">·····················</span>
    <span class="item-price">$22</span>
  </div>
  <p class="item-desc">Slow-rendered duck, fig mostarda, arugula, aged goat cheese, truffle oil</p>
</div>
```

Item name: Playfair Display 500, cream
Price: DM Sans 500, `--color-amber`
Description: DM Sans 300, `--color-cream-muted`, 14px

**Populate with these realistic placeholder items:**

*Starters:*
- Truffle Fries with Parmesan & Herbs — $14
- Crispy Calamari, lemon aioli, calabrian chili — $18
- Duck Confit Flatbread, fig mostarda, goat cheese — $22
- Burrata, heirloom tomato, basil oil, grilled bread — $19
- Wagyu Beef Sliders (3), caramelized onion, aged cheddar — $26

*Mains:*
- 12oz Ribeye, herb butter, roasted bone marrow, crispy potatoes — $58
- Pan-Seared Salmon, cauliflower purée, lemon caper beurre blanc — $38
- Short Rib Tagliatelle, 48-hour braised beef, porcini, grana padano — $42
- Half Roasted Chicken, pan jus, roasted root vegetables — $34
- Wild Mushroom Risotto, truffle, parmesan, crispy sage (v) — $32

*Desserts:*
- Warm Chocolate Fondant, vanilla bean ice cream, salted caramel — $14
- Seasonal Cheesecake, graham crust, berry compote — $13
- Crème Brûlée, classic, torched tableside — $12

**Tab content: COCKTAILS & SPIRITS**

*Signature Cocktails:*
- The Sutter's Gold — rye whiskey, honey syrup, lemon, ginger beer, smoked rosemary — $18
- Mill Mule — house-infused pepper vodka, ginger beer, lime, cucumber — $16
- Ember Old Fashioned — bourbon, demerara, angostura & mole bitters, orange peel (expressed) — $20
- The Airmont Sour — gin, elderflower, fresh lemon, egg white, lavender bitters — $17
- Dark Forest — mezcal, crème de cassis, blackberry shrub, lime, tajín rim — $18
- Candlelight Negroni — barrel-aged gin, Campari, sweet vermouth, orange — $19

*Spirits Bar (categories listed, not individual items):*
- Whiskey & Bourbon: 50+ selections, American, Scotch, Japanese, Irish
- Tequila & Mezcal: 30+ selections, blanco to añejo
- Gin: 20+ craft gins, domestic & imported
- Rum & Cognac: Aged selections, rare pours available
- Vodka: Premium and flavored house-infused options

*Note: Ask your server about our Whiskey Flight program and rotating barrel selections.*

**Tab content: WINE & BEER**

*Wine (short list):*
- Chardonnay, Sonoma Coast — glass $16 / bottle $62
- Pinot Gris, Willamette Valley — glass $15 / bottle $58
- Cabernet Sauvignon, Napa Valley — glass $22 / bottle $88
- Pinot Noir, Russian River Valley — glass $20 / bottle $78
- Prosecco — glass $14
- Champagne selections available — ask your server

*Draft Beer:*
- Local rotating craft tap (ask your server)
- Stella Artois, Guinness, Blue Moon, Modelo
- Non-alcoholic: Athletic Brewing Co. Run Wild IPA

**Tab content: CHEF'S SPECIALS**

Style this differently — larger layout, feature card per special with a warm image placeholder, brass badge "TONIGHT'S SPECIAL":

- **Fire-Roasted Halibut** — seasonal market preparation, ask your server for tonight's details — Market Price
- **Tomahawk Ribeye for Two** — 40oz dry-aged, sides for two, bottle of red from our sommelier — $185
- **Tasting Menu** — 5-course chef's selection, available for full table only, 48hr advance notice — $95pp

---

### SECTION 5: Events & Live Music Calendar

**Background:** `--color-bg-warm`

**Header:**
```
[Label] ✦ What's On
[H2] Live Music & Events
[Subtitle] Every weekend is an event. Check what's happening this month.
```

**Controls bar:**
- Left: Filter chips — `ALL` | `LIVE MUSIC` | `FOOD SPECIALS` | `PRIVATE EVENTS`
  - Active chip: amber background, dark text
  - Inactive: transparent, cream border, cream text
- Right: Month navigation — `< April 2026 >` in DM Sans

**Calendar view toggle:** Small toggle — `CALENDAR` | `LIST` — switching between views.

**Calendar view:** A CSS grid calendar (7 columns, 5-6 rows). Days with events show a small colored dot below the date number (brass = music, amber = food special, green = private event). Clicking a day opens an inline event detail card.

**Upcoming Events List (pre-populated placeholder data):**

```
Friday, April 18 — 9:00 PM
LIVE MUSIC: The River Blades
[Tag: Live Music]
Classic rock covers and original Americana. No cover charge.

Saturday, April 19 — 8:30 PM
LIVE MUSIC: DJ Marcus Bell
[Tag: Live Music]
Late-night DJ set — 80s, 90s, and soul. Dance floor opens at 10pm.

Tuesday, April 22 — All Night
FOOD SPECIAL: Wagyu Tuesday
[Tag: Food Special]
Half-price Wagyu Beef Sliders and $14 Ember Old Fashioneds all evening.

Friday, April 25 — 9:00 PM
LIVE MUSIC: Hollow Creek
[Tag: Live Music]
Southern rock and blues. Two sets. Free entry.

Saturday, April 26 — 7:00 PM
PRIVATE EVENT: Reserved — Private Dining Room
[Tag: Private Event]

Wednesday, April 30 — All Night
FOOD SPECIAL: Wine Wednesday
[Tag: Food Special]
All bottles 30% off. Sommelier on floor for guidance.
```

Each event card:
- Dark surface `--color-surface` background
- Left border `4px solid` — color-coded by type
- Band name / event title in Playfair Display
- Date/time in DM Sans 500 amber
- Description in DM Sans 300 cream-muted
- "Add to Calendar" link (small, brass color, no styling — just a link)

---

### SECTION 6: Gallery

**Background:** `--color-bg`

**Header:**
```
[Label] ✦ Inside the Mill
[H2] See It for Yourself
```

**Filter tabs:** `ALL` | `FOOD` | `ATMOSPHERE` | `LIVE MUSIC`

**Layout:** Masonry-style CSS grid using `columns: 3` on desktop, `columns: 2` on tablet, `columns: 1` on mobile. `break-inside: avoid` on items.

**Image placeholders — use CSS gradients for each:**
- 8 placeholders in varied aspect ratios (some portrait, some landscape, one square)
- Each has a centered label and a warm-toned gradient suggesting the photo content:

```css
/* Atmosphere examples */
.gallery-item:nth-child(1) { 
  background: linear-gradient(135deg, #1a1206 0%, #3d2a12 50%, #1a1206 100%);
  /* label: "Atmosphere: Bar interior, warm backlit bottles, evening crowd" */
}
.gallery-item:nth-child(2) {
  background: linear-gradient(160deg, #0d1a0d 0%, #2d1f0a 60%, #0d1a0d 100%);
  /* label: "Food: Close-up wagyu sliders with steam, bokeh background" */
}
/* etc — vary all 8 */
```

Hover effect: slight scale `1.03`, `overflow: hidden` on container.
Lightbox: On click, show fullscreen overlay with the placeholder enlarged + label text. Close on click outside or Esc.

---

### SECTION 7: Reservations

**Background:** Alternating warm `--color-bg-warm` — with a large ambient amber radial glow

**Layout:** Two columns on desktop.

**Left col — text:**
```
[Label] ✦ Join Us
[H2] Make a
Reservation
[Body, cream-muted]
Walk-ins always welcome, but we recommend booking ahead,
especially on weekends when we have live music.

[Contact alternatives:]
📞  (845) 555-0192       [placeholder phone]
📧  hello@themillatnj.com [placeholder email]
```

**Right col — form:**
Fields (all styled with dark backgrounds, brass bottom-border only, no full borders):
- Full Name
- Email
- Phone
- Party Size (select: 1–2, 3–4, 5–6, 7–8, 8+)
- Date (date input)
- Time (select: 5:00 PM through 11:00 PM in 30-min increments)
- Occasion (select: None / Birthday / Anniversary / Business / Other)
- Special Requests (textarea, 3 rows)

Submit button: Full-width, amber, uppercase, DM Sans 500, "Request Reservation" — note below: *"You'll receive a confirmation within 2 hours."*

Form is UI-only — no backend. On submit, JS shows a success state with a brief thank-you message in the form area.

---

### SECTION 8: Private Events

**Background:** `--color-bg` with a subtle large image placeholder behind a heavy dark overlay (label: "Private events room: long table, candlelight, intimate setting")

**Content (centered, max-width 700px):**
```
[Label] ✦ Private Events
[H2] The Whole Mill Is Yours
[Body, cream-muted]
From intimate dinners to full restaurant buyouts, The Mill at Sutters is the setting your event deserves. Our private dining room accommodates up to 40 guests. Full buyout available for up to 120.

[Feature list — 3 items in a horizontal row:]
🎤  Live Entertainment Available
🍽️  Custom Curated Menus
🥂  Full Bar & Cocktail Service

[CTA button — amber, centered] Inquire About Private Events
```

Clicking the button scrolls to or reveals a simple contact form: Name, Email, Phone, Event Type, Guest Count, Preferred Date, Message. Same styling as reservations form.

---

### SECTION 9: Contact, Hours & Location

**Background:** This is the ONE section that can use a slightly lighter surface — `#141a14` — still dark but slightly distinguishable.

**Three-column layout:**

**Col 1 — Find Us:**
```
The Mill at Sutters
214 NY-59 Unit 1
Airmont, NY 10901

(845) 555-0192
hello@themillatnj.com

[Map placeholder — styled div, aspect 16/9, with label "Google Maps embed — 214 NY-59 Airmont NY"]
```
Map placeholder: dark-tinted CSS gradient with a brass `◆` pin marker in center.

**Col 2 — Hours:**
```
KITCHEN HOURS
Tuesday – Thursday   5:00 PM – 11:00 PM
Friday – Saturday    4:00 PM – 12:00 AM
Sunday               3:00 PM – 10:00 PM
Monday               Closed

BAR & LOUNGE
(stays open 1–2 hours after kitchen close)
Friday & Saturday    Until 2:00 AM

LIVE MUSIC
Most Fridays & Saturdays   9:00 PM – 1:00 AM
Check the events calendar for full schedule
```

**Col 3 — Follow Us:**
```
[H3] Stay in the Loop

@themillatnj
[Large social icons: Instagram, Facebook, TikTok]
(icon buttons — brass color, hover amber)

[Newsletter signup — inline form]
Your email          [Join Us →]
"No spam. Just events, specials,
and last-minute openings."
```

---

### SECTION 10: Footer

**Background:** `#080f08` — darkest surface

**Layout:**
- Top row: Logo left, nav links center (same as header nav), "Reserve a Table" button right
- Divider: brass line `1px` with `◆` center ornament
- Bottom row: "© 2024 The Mill at Sutters. All rights reserved." left · "Airmont, NY" center · social icons right

---

## JavaScript Requirements

All in `script.js`, vanilla JS only:

1. **Nav scroll behavior:** Add `.scrolled` class to `<nav>` when `scrollY > 80`. CSS handles the background transition.

2. **Mobile nav:** Toggle `.open` on full-screen nav overlay via hamburger click. Close on nav link click.

3. **Menu tabs:** Click handler on tab buttons. Toggle `.active` class, show/hide corresponding `.tab-panel`. Smooth opacity transition.

4. **Events filter chips:** Click handler. Filter `.event-card` items by their `data-type` attribute. Smooth fade.

5. **Events calendar/list toggle:** Toggle between `#calendar-view` and `#list-view` visibility.

6. **Basic calendar render:** JS-rendered calendar grid for current month. Days with events (based on hardcoded event data array) get a colored dot. Click to show event details below the grid.

7. **Gallery filter:** Same chip pattern as events — filter `.gallery-item` by `data-category`.

8. **Gallery lightbox:** Click on gallery item → show `#lightbox` overlay with enlarged image/placeholder and label. Close on overlay click or Escape key.

9. **Reservation form success state:** On submit, prevent default, validate fields not empty, show `.form-success` message, hide form.

10. **Scroll animations:** `IntersectionObserver` on elements with `.reveal` class. Add `.visible` when in viewport. CSS handles `opacity 0 → 1` and `translateY(24px) → 0` transition.

---

## Accessibility & Performance

- All image placeholders: meaningful `alt` text describing what the real photo would be
- Color contrast: all text on dark backgrounds must meet WCAG AA (cream on dark green passes)
- Focus styles: visible `:focus-visible` outlines in amber for keyboard users
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<h1>`–`<h3>` hierarchy
- No `<div>` soup — use semantic elements where appropriate
- Lazy load attribute on all `<img>` tags
- No external JS dependencies — zero CDN scripts except Google Fonts

---

## Content & Copy Tone

All copy should sound like it was written by a real person who loves this place:
- **Not:** "Welcome to The Mill at Sutters, your premier dining destination in Airmont, NY."
- **Yes:** "We built this place because Airmont deserved somewhere worth getting dressed up for."

Voice: direct, confident, warm. A little literary. Never corporate, never generic restaurant-speak. Short sentences. Present tense. First person plural ("we", "our") sparingly, not constantly.

---

## What Good Looks Like

When complete, the website should feel like it was designed by someone who:
- Has eaten a hundred great meals and wants you to eat one here
- Understands that atmosphere is as important as the food
- Knows that a great bar takes years to build and five seconds to feel
- Respects the visitor enough to show, not just tell

If any section could belong to any other restaurant, redesign it until it couldn't.

---

*End of prompt. Build it all in one pass: `index.html`, `styles.css`, `script.js`. No build step, no frameworks, no dependencies beyond Google Fonts.*
