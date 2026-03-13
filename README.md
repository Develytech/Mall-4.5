# Devely – Hantverkar-mall (Hero • Om oss • Tjänster • Bildgalleri • Kontakt)

Detta repo är en mall för att snabbt bygga en modern, premium och enkel företagshemsida för hantverkare/servicetjänster.
Sidan är single-page och content-driven: all text och innehåll hämtas från `src/content/` och får inte hårdkodas i komponenter.

---

CRITICAL IMPLEMENTATION RULE

You MUST read the entire README before writing code.
Skipping sections is not allowed.

Before finishing you MUST verify every rule in:
GLOBAL RULES
CONFIG
WEBSITE SPEC
FILE MAP

## 0) GLOBAL RULES (MUST FOLLOW)

Treat this README as the only input source.
Do NOT invent missing values. If a field is empty, keep it empty.
Only JavaScript (no TypeScript).
React + Vite project.
Use plain CSS (no Tailwind). No extra libs.
Keep components reusable and content-driven (no company text hardcoded in components).
All visible website content must be written in Swedish when CONFIG.language.content is "sv-SE".
Must be responsive (mobile-first) and accessible.
ALL text/content files must be UTF-8 encoded (ÅÄÖ must render correctly).
Motion must respect prefers-reduced-motion.
Premium constraint: keep UI minimal and calm. Avoid app-like UI patterns (glassy buttons, heavy cards, strong shadows).
No placeholder lorem content; use provided text only.
If a component behavior is described in WEBSITE SPEC, the component MUST implement it exactly.
Navigation clicks MUST scroll smoothly to the section.
Use `scroll-behavior: smooth;`.
All section IDs are predefined.
Navigation must be generated from CONFIG.navigation.
All primary UI colors MUST be derived from CONFIG.branding.
Small utility colors, borders, overlays, and neutral rgba values MAY be hardcoded only when explicitly specified in WEBSITE SPEC.

Button width rule (MUST)

Buttons must use content-based sizing by default.

Rules:
- Do NOT use `width: 100%` for hero CTA, About CTA, or other section CTA buttons unless explicitly required.
- Do NOT create oversized CTA bars when a compact button is intended.
- Prefer `width: fit-content`, `display: inline-flex`, or equivalent intrinsic sizing.
- Button width should be controlled with padding and optional min-width, not by stretching across the parent container.
- Section CTA buttons should feel balanced relative to the text column width.

Asset rule (MUST)

All static assets MUST be stored in `public/assets/`.

Assets MUST NOT be stored inside `src/`.

Assets must be referenced using absolute paths starting with `/assets/...`.

Examples:
- /assets/brand/logo.png
- /assets/brand/hero.jpg
- /assets/about/about.jpg
- /assets/gallery/01.jpg

Viewport edge rule (MUST)

The page MUST not produce accidental horizontal overflow.

Rules:
- No section may create a visible white edge, side gutter, or horizontal scroll caused by width calculations.
- Avoid using `100vw` for inner layout layers when `100%` is the correct fit.
- Full-bleed sections must visually align with the viewport edges.

Modal / fullscreen lock rule (MUST)

Any fullscreen viewer, overlay, or modal-like mobile interaction MUST fully lock background page scroll while open.

Rules:
- The page behind the overlay must remain visually fixed.
- Underlying sections must not scroll into view while the overlay is active.
- Closing the overlay must restore the previous scroll position.




IMPORTANT: Contact form MUST be real (API). Mock submit is forbidden in this template.

---

# 1) CONFIG (EDIT THIS PER COMPANY) — YAML

language:
content: "sv-SE"
codeComments: "en"

company:
name: "Ljus & Kraft Stockholm AB"
domain: ""
location: "Stockholm med kranskommuner"
tagline: "Elinstallationer med precision och känsla för detaljer"
description: "Ljus & Kraft Stockholm utför elinstallationer för privatpersoner och företag i Stockholm. Företaget levererar säkra, genomtänkta och hållbara lösningar."

contact:
email: "oscar@lksgroup.se"
phone: "+46 73 655 41 98"

branding:
accentColor: "#1f2933"
backgroundColor: "#f8fafc"
textColor: "#111827"
footerBackground: "#1f2933"
footerTextColor: "#ffffff"
logoPath: "/assets/brand/logo.png"
fontFamily: "system"

layout:
containerMaxWidthPx: 1360
wideContainerMaxWidthPx: 1760
fullBleedMaxWidthPx: 9999
containerFluidVw: 92
wideContainerFluidVw: 98
narrowContainerMaxWidthPx: 1120
narrowContainerFluidVw: 92
sectionPaddingYMobilePx: 72
sectionPaddingYDesktopPx: 104
borderRadiusPx: 8
shadowStyle: "soft"
headerHeightPx: 72
gutterTight: "clamp(18px, 2vw, 44px)"
gutterStandard: "clamp(26px, 3vw, 80px)"
gutterWide: "clamp(34px, 4vw, 120px)"

layoutUsage:
header:   { width: "wide", gutter: "tight" }
hero:     { width: "standard", gutter: "wide" }
about:    { width: "standard", gutter: "standard" }
services: { width: "standard", gutter: "standard" }
gallery:  { width: "wide", gutter: "tight" }
contact:  { width: "wide", gutter: "standard" }
footer:   { width: "wide", gutter: "tight" }

motion:
preset: "fade-up"
durationMs: 520
staggerMs: 90

hero:
imagePath: "/assets/brand/hero.jpg"
badge: "ELINSTALLATION • LJUSDESIGN • STYRSYSTEM • PROJEKTERING"
headline: "Elinstallationer med precision och känsla för detaljer."
subtext: "För privatpersoner och företag i Stockholm."
description:

* "Vi levererar säkra, genomtänkta och hållbara lösningar."
* "Ert installationsföretag med det lilla extra."
  secondaryAction:
  label: "Kontakta oss"
  target: "contact"

navigation:

* label: "Om oss"
  target: "about"
* label: "Tjänster"
  target: "services"
* label: "Bildgalleri"
  target: "gallery"
* label: "Kontakta oss"
  target: "contact"

about:
eyebrow: "OM OSS – ELEKTRIKER I STOCKHOLM"
headline: "En trygg elpartner i Stockholm"
paragraphs:

* "Vi hjälper privatpersoner, BRF:er och företag i Stockholm med allt från servicejobb till större installationer. Du får tydlig dialog, väl utfört arbete och lösningar som håller över tid, oavsett uppdragets storlek."
* "Vi arbetar tryggt i både äldre fastigheter och nyproduktion. Med noggrann planering, säker installation och tydlig dokumentation skapar vi ett slutresultat som fungerar i vardagen och ser professionellt ut."
* "Snabb återkoppling och transparent prissättning är en självklarhet. Du får en tydlig offert, en ansvarig kontaktperson och uppföljning från start till färdig leverans."
  bullets:
* "Auktoriserade & certifierade elektriker"
* "Tydlig offert – inga överraskningar"
* "Återkoppling inom 24h"
  cta:
  label: "Kontakta oss"
  target: "contact"
  image:
  src: "/assets/about/about.jpg"
  alt: "Elektriker som installerar utrustning"
  overlay:
  label: "STOCKHOLM"
  text: "Elinstallation • Service • Projektering"

services:
sectionTitle: "Tjänster"
sectionText: "Elinstallationer och tekniska lösningar med fokus på kvalitet, säkerhet och långsiktig funktion."
presentation: "textual"
items:

* title: "Elinstallation"
  desc: "Elinstallationer för både privatpersoner och företag, utförda enligt gällande regler och med hög yrkesstandard."
* title: "Eldesign & Ljusdesign"
  desc: "Planering och utformning av el- och ljuslösningar anpassade efter funktion, estetik och energieffektivitet."
* title: "Projektering"
  desc: "Strukturerad projektering som säkerställer rätt lösning från tidigt skede till färdig installation."
* title: "Styrsystem"
  desc: "Installation och anpassning av styrsystem för belysning och tekniska funktioner i fastigheter."
* title: "Belysning"
  desc: "Installation av funktionell och energieffektiv belysning för bostäder, kommersiella lokaler och industri."

gallery:
sectionTitle: "Bildgalleri"
sectionText: "Ett urval av bilder från våra installationer och arbeten."
behavior:
aspectRatio: "9/16"
desktopColumns: 3
gapPx: 22
edgePaddingPx: 22
imageFit: "cover"
hideScrollbarOnMobile: true
images:

* src: "/assets/gallery/01.jpg"
  alt: "Elinstallation i projekt"
* src: "/assets/gallery/02.jpg"
  alt: "Elcentral installation"
* src: "/assets/gallery/03.jpg"
  alt: "Belysningsinstallation"

contactSection:
sectionTitle: "Kontakt"
sectionText: "Hör av dig med frågor eller underlag, så återkommer vi."
contactText: "Ljus & Kraft Stockholm utför alla typer av elinstallationer."
form:
enabled: true
submitBehavior: "api"
endpoint: "/api/contact"
method: "POST"
contentType: "application/json"
fields:
nameLabel: "Namn"
emailLabel: "E-post"
phoneLabel: "Telefon"
messageLabel: "Meddelande"
namePlaceholder: "Ditt namn"
emailPlaceholder: "din@mail.se"
phonePlaceholder: "Valfritt"
messagePlaceholder: "Beskriv kort vad du behöver hjälp med..."
submitText: "Skicka"
successMessage: "Tack! Vi återkommer så snart vi kan."
errorMessage: "Något gick fel. Försök igen eller kontakta oss via telefon/e-post."

footer:
description: "Elinstallationer för privatpersoner och företag i Stockholm med kranskommuner."
navigationTitle: "Snabblänkar"
contactTitle: "Kontakt"
textTemplate: "© {YEAR} {COMPANY}. Alla rättigheter förbehållna."

---

## 2) WEBSITE SPEC

### Scope

Build a single-page website.
The site must feel premium: calm, minimal, consistent.
Avoid app-like UI. Content-first layout.

### Sections (order is mandatory)

1. Hero
2. Om oss (About)
3. Tjänster (Services)
4. Bildgalleri (Gallery)
5. Kontakt (Contact)
6. Footer

### Section IDs (MUST)

Hero → `#hero`
About → `#about`
Services → `#services`
Gallery → `#gallery`
Contact → `#contact`

Each section component MUST include the matching `id` attribute.

Example:

```html
<section id="about">...</section>
```

### Header (MUST)

Header is fixed.
Over hero: transparent background.
After scrolling more than 40px:

* background becomes solid (white or near-white)
* subtle shadow
* smooth transition 150ms–220ms

Navigation rules:

* All main sections MUST appear in the header navigation.
* Navigation items MUST be generated from CONFIG.navigation.
* Navigation clicks MUST scroll to the corresponding section.
* Desktop navigation remains inline.

Header branding rules:

* The header MUST render only the logo image from `CONFIG.branding.logoPath`.
* The company name MUST NOT appear as text in the header.
* Do NOT render company name next to the logo.
* Do NOT render text fallback branding.
* Do NOT render any placeholder square, empty logo container, or broken image icon.
* If the logo asset is missing or fails to load, render no visual fallback content.
* Missing logo MUST NOT break header spacing or alignment.

Logo layout rules:

* Logo must be vertically centered within the header row.
* Logo must scale proportionally without distortion.
* Recommended max-height: 36px–44px.
* The logo must fit visually inside `CONFIG.layout.headerHeightPx`.

### Mobile header and mobile navigation (MUST)

On mobile screens, the header MUST switch to a compact mobile navigation pattern.

Closed state:

* Only the logo and hamburger toggle may be visible.
* No navigation links may be visible.
* The mobile navigation panel MUST be fully hidden.
* Hidden means not visually visible and not occupying layout space.
* Header content must stay on a single row.
* Header height must remain compact and controlled.

Open state:

* Navigation links MUST be shown in a vertical stack.
* The mobile menu MUST contain the same items as desktop.
* Links MUST still be generated from CONFIG.navigation.
* Tapping a navigation item MUST close the mobile menu and scroll to the section.

Layout rules:

* Logo on the left.
* One hamburger toggle on the right.
* Logo area must be allowed to shrink without breaking layout.
* Navigation text must never overlap the logo.
* No navigation item may remain partially visible when menu is closed.
* The mobile navigation panel MUST be rendered separately from the header row.
* The menu panel may appear below the header or as a full overlay panel.
* Wide logos must still fit within the mobile header layout.

Hamburger rules:

* Mobile toggle MUST be a semantic button element.
* Use only three horizontal lines.
* The control MUST appear as a standalone hamburger icon.
* Do NOT show a visible button box, border, or background behind the icon.
* Minimum tap area: 44px.
* Mobile toggle MUST be hidden on desktop.
* Menu state must be communicated with `aria-expanded`.
* Mobile navigation must be keyboard accessible.

### Section scroll animation

Sections SHOULD use a subtle entrance animation when they enter the viewport.

Behavior:

* fade in
* slight upward slide

Animation rules:

* Initial state: `opacity: 0; transform: translateY(30px);`
* Final state: `opacity: 1; transform: translateY(0);`
* duration: 500–700ms
* easing: ease-out
* trigger when section enters viewport
* use IntersectionObserver or equivalent
* animation runs only once per section
* respect prefers-reduced-motion

### Hero section

Full viewport height.
Large background image + dark overlay for readability.
Content: badge, headline, subtext.
Hero background is full-bleed; hero text content follows `layoutUsage.hero`.

Hero full-bleed mobile rules (MUST)

The hero MUST fully cover the viewport width on mobile without any visible white edge, side gutter, or page background bleed.

Rules:
- The hero section itself MUST be true full-bleed.
- The hero background image layer MUST be positioned against the hero bounds, not against an inner content container.
- The hero overlay layer MUST cover the exact same bounds as the hero background.
- No white strip, side gutter, or page background may be visible on the left or right edges of the hero on mobile.
- Do NOT use width: 100vw on inner hero layers if it causes overflow or offset.
- Prefer width: 100% on hero section, hero media layer, and hero overlay layer.
- The hero MUST not inherit horizontal padding from any shared container.
- Hero text content may sit inside an inner container, but the background and overlay MUST remain full-bleed.
- The page MUST prevent unintended horizontal overflow.

Required implementation constraints (MUST):
- `html, body` MUST have `margin: 0; padding: 0;`
- The main app/root wrappers MUST NOT introduce horizontal margin or overflow.
- The page MUST use `overflow-x: clip;` or `overflow-x: hidden;`
- The hero section MUST use `position: relative; overflow: clip;` or `overflow: hidden;`
- The hero background layer MUST use absolute positioning with all four edges pinned:
  - `position: absolute;`
  - `inset: 0;`
- The hero overlay layer MUST also use:
  - `position: absolute;`
  - `inset: 0;`
- The hero media wrapper MUST NOT use transforms, negative margins, or calc-based width that can create edge gaps on some phones.
- The hero section MUST use `width: 100%;`
- The hero background image MUST use:
  - `width: 100%;`
  - `height: 100%;`
  - `object-fit: cover;`
  - `display: block;`

Required CSS behavior example:

html, body {
  margin: 0;
  padding: 0;
  overflow-x: clip;
}

#root,
.app,
.page {
  width: 100%;
  overflow-x: clip;
}

.hero {
  position: relative;
  width: 100%;
  min-height: 100svh;
  overflow: clip;
}

.hero__media,
.hero__overlay {
  position: absolute;
  inset: 0;
}

.hero__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

Hero height rule (MUST)

The hero should use a mobile-safe viewport height approach.

Preferred implementation:
- Use `min-height: 100svh` or equivalent mobile-safe viewport height.
- Avoid hero height behavior that reveals page background due to browser UI chrome changes.

CTA rules:

* Hero MUST include exactly one CTA.
* That CTA MUST be the secondary action from `CONFIG.hero.secondaryAction`.
* The CTA MUST scroll to the Contact section.
* Do NOT render any additional hero buttons or links.
* Hero CTA SHOULD use the primary button style if rendered as a visible button.
* Hero CTA MUST feel compact and intentional, not stretched.
* Hero CTA MUST NOT span the full content width.
* Hero CTA MUST use intrinsic sizing (`width: fit-content` or equivalent).
* Hero CTA SHOULD align to the left edge of the hero text block.
* Recommended hero CTA min-width: 220px.
* Recommended hero CTA max-width: 320px.
* Hero CTA horizontal padding SHOULD remain compact and premium, not oversized.

### About section (MUST match reference layout)

Goal: text left, image right, overlay chip on image.

Desktop layout:

Desktop layout:

* two-column layout
* Left: eyebrow, headline, 2–3 paragraphs, bullet list with checkmarks, one secondary CTA button
* Right: large image with rounded corners and very subtle shadow
* The About CTA MUST sit below the bullet list and align with the left text column
* The About CTA MUST use the shared secondary button style
* The About CTA MUST feel compact and editorial, not stretched
* The About CTA MUST NOT span the full text column width
* The About CTA MUST use intrinsic sizing (`width: fit-content` or equivalent)
* Recommended About CTA min-width: 200px
* Recommended About CTA max-width: 280px

Mobile layout:

* single column
* text first, image below
* overlay remains readable on the image

Tone:

* Swedish
* factual
* trustworthy
* no buzzwords

### Services section

Services MUST render as one simple vertical list.

Layout rules:
- Use a single-column layout on both desktop and mobile.
- Do NOT split services into two or more columns.
- Do NOT render services as cards.
- Do NOT render icons unless explicitly provided in content.

Visual rules:
- Use subtle dividers between items.
- Use typography and spacing to separate each service.
- Keep the section calm, minimal, and content-first.
- Services should read as capabilities, not features.

Structure:
- Section title
- Section intro text
- One vertical list of service items
- Each service item contains:
  - title
  - description

### Gallery section — iPhone-format, bara bilder (MUST)

Purpose:
Show portrait project photos in a curated, premium rail.

Content rules:

* Only images.
* No visible captions.
* No visible titles.
* No visible filenames.
* No visible labels, badges, or overlays on gallery cards.
* Alt text is required for accessibility only and MUST NOT appear visually.

Mobile rail rules:
Gallery MUST render:

* `.gallery__railWrap`
* `.gallery__rail`

Canonical mobile rail:

* `.gallery { overflow: hidden; }`
* `.gallery__railWrap { min-width: 0; width: 100%; max-width: 100%; }`
* `.gallery__rail { display:flex; flex-wrap:nowrap; overflow-x:auto; overflow-y:hidden; -webkit-overflow-scrolling:touch; scroll-behavior:auto; }`
* Use CSS vars from YAML for gap and edge padding.
* Rail padding must be `0 var(--g-edge)`.
* Gap must be `var(--g-gap)`.
* Mobile cards MUST NOT shrink.
* `.gallery__card { flex: 0 0 72vw; max-width: 260px; }`
* Portrait ratio must be `9/16`.
* `object-fit` uses `gallery.behavior.imageFit`.
* Hide scrollbar on mobile if YAML says so.
* Next image MUST partially peek from the right.
* Horizontal swipe MUST remain the primary mobile browsing method.

Desktop rail rules:

* Show exactly 3 full portrait cards.
* No partial peeking cards.
* Do NOT use clamp(), vw-based widths, or JS layout calculations for desktop card width.
* Use CSS-only rail formula:

  * `--g-cols = 3`
  * `--g-cardW: calc((100% - (2 * var(--g-edge)) - ((var(--g-cols) - 1) * var(--g-gap))) / var(--g-cols))`
* Each card uses `flex: 0 0 var(--g-cardW)`.

Desktop edge fade:

- Use a subtle, short gradient fade at the rail edges.
- The fade MUST feel soft and low-contrast.
- The fade MUST NOT look like a solid white overlay.
- The fade MUST NOT wash out the images.
- The right fade should be visible only as a gentle hint that more content exists.
- The fade width should be visually restrained.
- The fade opacity must remain low enough that it does not compete with the gallery images.
- Fade overlays MUST have `pointer-events: none`.

Fade color rule (MUST):
- The fade should blend with the gallery background color, not appear as stark pure white unless the background itself is pure white.
- Avoid high-opacity white gradients.

Example fade gradient:

linear-gradient(
 to right,
 rgba(248,250,252,0) 0%,
 rgba(248,250,252,0.65) 100%
)

Desktop interaction (MUST): arrows, desktop only

Primary navigation on desktop MUST use left/right arrow buttons positioned outside the gallery rail.

Arrow positioning rules (MUST):
- These arrow rules apply only at desktop breakpoint and above.
- Arrow buttons MUST be positioned relative to the gallery rail wrapper, NOT the entire section.
- The arrows MUST sit horizontally outside the visible image cards.
- The left arrow MUST appear just to the left of the first visible image.
- The right arrow MUST appear just to the right of the last visible image.
- Arrows MUST be vertically centered relative to the gallery cards.
- Arrow positioning MUST NOT depend on the section heading or intro text.

Required structure:

.gallery
 └ gallery__viewport
    ├ gallery__arrow--left
    ├ gallery__rail
    └ gallery__arrow--right

Implementation rule:

.gallery__viewport MUST be the positioning context for arrows.

Example positioning logic:

.gallery__viewport {
 position: relative;
}

.gallery__arrow {
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
}

.gallery__arrow--left {
 left: -52px;
}

.gallery__arrow--right {
 right: -52px;
}

Arrow click behavior:
- Arrows MUST scroll exactly one card per click.
- Step MUST equal the rendered card width plus the configured gap.
- The rail MUST use scroll-behavior: auto.
- Arrow click MAY animate smoothly unless prefers-reduced-motion is active.

Desktop constraints:
- Do NOT implement wheel-to-horizontal translation.
- Do NOT add wheel event handlers.
- Do NOT use scroll snapping on desktop.
- Desktop gallery images MUST NOT open fullscreen.
- Do NOT attach modal, lightbox, dialog, or fullscreen behavior on desktop.
- Cursor must not imply fullscreen opening on desktop.

Mobile gallery controls (MUST)

On mobile screens, the gallery MUST NOT render desktop arrow buttons.

Rules:
- Left/right arrow buttons MUST be hidden on mobile.
- Desktop arrow positioning styles MUST NOT affect mobile layout.
- Mobile gallery browsing MUST rely only on horizontal swipe/scroll and fullscreen tap interaction.
- No square, boxed, or placeholder controls may appear above or beside the mobile rail.

Breakpoint rule:
- Arrow buttons may exist only at desktop breakpoint and above.
- On screens below 900px, arrow buttons MUST NOT be visible and MUST NOT occupy layout space.

Implementation requirement (MUST):
- The desktop arrow button elements MUST either not be rendered at all below 900px, OR be explicitly hidden with CSS.
- If CSS is used, it MUST use `display: none !important;` for the desktop arrow elements below 900px.
- Any desktop arrow wrapper MUST also be removed from mobile layout flow.
- Mobile view MUST not reserve space for arrow controls.

Required mobile CSS behavior example:

@media (max-width: 899px) {
  .gallery__arrow,
  .gallery__arrow--left,
  .gallery__arrow--right,
  .gallery__controls {
    display: none !important;
  }
}

Arrow visual spec:

* Diameter: 42px
* Border radius: 999px
* Border: 1px solid rgba(31, 41, 51, 0.38)
* Background: rgba(255, 255, 255, 0.72)
* Icon color: #1b232b default, #0f141a hover
* Disabled opacity: 0.3
* Use inline SVG only
* viewBox 0 0 24 24
* stroke width 1.8
* round caps and joins
* SVG path: `d="M8.5 5.5l7 6.5-7 6.5"`
* Right arrow as-is
* Left arrow rotated or mirrored

Accessibility:

* Rail must be focusable (`tabIndex=0`).
* Arrow buttons must be keyboard operable.
* Arrow buttons must have visible focus state.
* Images must have meaningful alt text.
* Respect prefers-reduced-motion.

Premium constraints:

* Photos should feel like photos.
* Minimal border.
* Subtle radius.
* No heavy shadows.
* No glass effects.
* No strong borders.

### Mobile fullscreen viewer (MUST)

Mobile only.
The fullscreen viewer MUST NOT exist on desktop.
Enable only when viewport width is below 900px.

When a user taps an image on mobile:

* open a true fullscreen viewer
* display the tapped image first
* allow swipe left/right between images
* allow closing via visible close button or tap outside

Fullscreen structure MUST always include:

1. one fixed overlay container
2. one visible close button
3. one visible index indicator
4. one active image area

Fullscreen overlay rules:

* `position: fixed`
* `inset: 0`
* `width: 100vw`
* `height: 100vh`
* `z-index: 2000`
* dark background overlay
* background page scrolling MUST be locked while open
* overlay MUST fully cover the viewport

Scroll lock rules (MUST)

When the mobile fullscreen viewer is open, the background page MUST be fully locked.

Rules:
- The document body MUST NOT remain scrollable while fullscreen is open.
- The root page content behind the overlay MUST NOT move vertically.
- The user MUST NOT be able to scroll to the next section behind the fullscreen viewer.
- Opening fullscreen MUST freeze the current page scroll position.
- Closing fullscreen MUST restore the previous page scroll position.
- The fullscreen overlay MUST behave as a true modal layer, not as a section overlay inside normal page flow.

Implementation requirements (MUST):
- When fullscreen opens, the implementation MUST lock page scroll using body-level scroll locking.
- It is acceptable to use a lock pattern equivalent to:
  - storing `window.scrollY`
  - applying `position: fixed` to `body`
  - setting `top` to the negative stored scroll value
  - restoring the scroll position on close
- Using only `overflow: hidden` is NOT sufficient if the page can still move on mobile browsers.
- The fullscreen viewer MUST NOT rely on the gallery section's own scrolling context for page locking.
- The fullscreen viewer MUST NOT be rendered as a descendant of any transformed or animated section wrapper if that can affect fixed positioning.
- A fullscreen viewer nested inside an element using `transform`, including `transform: translateY(0)`, is NOT acceptable if it causes the overlay to be fixed relative to the section instead of the viewport.
- The recommended implementation is to render the mobile fullscreen viewer via a portal mounted to `document.body`.


Fullscreen image rules:

* The fullscreen image MUST be completely independent from `.gallery__card` layout.
* The fullscreen viewer MUST render its own image element.
* Rail card dimensions MUST NOT affect fullscreen image size.
* Use:

  * `max-width: 92vw`
  * `max-height: 88vh`
  * `object-fit: contain`
* The image MUST be centered on screen.
* The image MUST remain portrait.

Fullscreen layout separation rules (MUST)

- The fullscreen viewer MUST be rendered outside the normal gallery rail flow.
- The fullscreen viewer MUST NOT occupy layout space in the page document.
- The fullscreen viewer MUST NOT push, resize, or reveal underlying page sections.
- Contact or other sections below the gallery MUST never become visible due to fullscreen image layout.
- The fullscreen viewer MUST use its own fixed-position wrapper and its own centering layout.
- The fullscreen image MUST not be positioned by normal document flow, margins, or section spacing.
- The fullscreen viewer SHOULD be mounted outside the normal React section subtree when section-level animation wrappers are used.
- If section reveal animations use `transform`, the fullscreen viewer MUST be rendered outside that transformed subtree.


Close control rules:

* A visible close button MUST always exist in fullscreen mode.
* It MUST be positioned in the top-right area.
* It MUST stay above the image.
* Preferred icon: `✕`.

Index indicator rules:

* A visible image index MUST always exist in fullscreen mode.
* It MUST show the active position and total, for example `1 / 3`.
* It MUST be placed near the top-center or bottom-center overlay area.
* It MUST NOT be centered over the main image content.

Failure prohibition:

* It is not acceptable to open fullscreen mode without a visible close button.
* It is not acceptable to open fullscreen mode without a visible index indicator.
* It is not acceptable that the background page remains scrollable while fullscreen is open.
* It is not acceptable that underlying sections become visible because the page scrolls behind the fullscreen viewer.
* It is not acceptable that fullscreen behaves like an in-page expanded image instead of a true fixed overlay.


### Contact section (MUST be API)

Purpose:
This is one of the most important conversion sections.
It MUST feel balanced, structured, trustworthy, and visually centered.

Shared wrapper rules:

* The contact section MUST use one shared inner wrapper.
* That wrapper MUST contain:

  1. title block
  2. intro text
  3. two-column contact grid
* The title block and the grid MUST NOT use different container widths.
* The section MUST NOT feel left-heavy.

Title block rules:

* The heading and intro text MUST be inside the same title wrapper.
* That title wrapper MUST be centered inside the shared contact wrapper.
* The intro text MUST wrap symmetrically around the same visual center as the heading.
* The intro text MUST NOT appear shifted left or right relative to the heading.
* Recommended title wrapper max-width: 620px–760px.
* Recommended alignment: `margin-left:auto; margin-right:auto; text-align:center;`

Overall width:

* Shared contact wrapper max-width should be approximately 980px–1120px.
* Use `margin-left:auto` and `margin-right:auto`.
* The contact content MUST NOT stretch across the full page width.

Desktop grid:

* balanced two-column grid
* left column: minmax(260px, 340px)
* right column: minmax(420px, 560px)
* gap around 72px–96px
* form column MUST NOT exceed 560px

Mobile layout:

* contact info first
* form below
* stack vertically
* generous vertical spacing

Left column content:
Display available data from CONFIG:

* phone
* email
* location
* `contactSection.contactText`

Do NOT render duplicate location information.

Left column structure:

* clearly separated info blocks
* each block has a small label and a value
* values must feel more important than labels
* avoid excessive empty spacing
* the left column must feel compact, readable, and intentional
* the support text must feel like a clearly grouped final block, not detached

Info label style:

* font-size: 13px
* letter-spacing: 0.08em
* font-weight: 700
* color: #6b7280
* labels must be readable and must not look like placeholder text

Value style:

* values should use stronger contrast than labels
* values should feel primary

Phone MUST use `tel:`.
Email MUST use `mailto:`.

Form fields:

* name
* email
* phone (optional)
* message

Labels MUST be visible.
Do NOT rely on placeholders alone.

Form behavior:

* submit MUST call `CONFIG.contactSection.form.endpoint`
* method MUST use `CONFIG.contactSection.form.method`
* content type MUST use `CONFIG.contactSection.form.contentType`
* request body MUST be JSON
* fields sent:

  * name
  * email
  * phone
  * message
  * company (hidden honeypot, sent as empty string)

Messages MUST use:

* `CONFIG.contactSection.form.successMessage`
* `CONFIG.contactSection.form.errorMessage`

Form design:

* full width inputs and textarea
* minimum padding around 14px
* border radius around 10–14px
* subtle border
* focus state uses branding accent color
* textarea must be visually taller

Desktop form width rules (MUST)

- The form column MUST visually occupy the intended right column width.
- Form controls MUST fill the available width of the form column.
- All text inputs and textarea MUST use `width: 100%`.
- Inputs and textarea MUST NOT use narrow fixed widths such as 220px, 240px, 280px, or similar.
- Inputs and textarea MUST NOT use content-based sizing.
- The form element itself MUST use `width: 100%`.
- The form column wrapper MUST use `width: 100%`.
- Any inner form stack/wrapper MUST use `width: 100%`.
- On desktop, the visible form width should read as a proper form column, not as a narrow centered stack of small fields.


Submit button:

* use `branding.accentColor`
* visually prominent
* clearly clickable
* not a text link or ghost button
* MUST use intrinsic sizing (`width: fit-content` or equivalent)
* min-width: 220px
* SHOULD NOT exceed 260px unless the label requires it
* margin-top: 16px
* MUST NOT span the full form width by default
* MUST align with the left edge of the form fields
* MUST use the same shared button structure and border-radius as other site buttons

Clarification:
- Compact button sizing applies to the submit button only.
- It MUST NOT affect input or textarea widths.
- Form fields MUST remain full width within the form column.


Visual constraints:

* no heavy shadows
* no thick borders
* no oversized empty space
* keep calm and premium

### Footer

Footer MUST be present and content-driven.

Desktop layout:

* three-column layout
* column 1: company name + description
* column 2: navigation links from CONFIG.navigation
* column 3: contact information
* bottom row: copyright text

Mobile layout:

* stack all footer columns vertically
* keep generous spacing between groups
* copyright row below all content

Footer content rules:

* company name from `CONFIG.company.name`
* description from `CONFIG.footer.description`
* navigation title from `CONFIG.footer.navigationTitle`
* contact title from `CONFIG.footer.contactTitle`
* navigation links reuse `CONFIG.navigation`
* contact column shows phone, email, location when available
* use `CONFIG.branding.footerBackground` and `CONFIG.branding.footerTextColor`

Footer color lock:

* All visible footer text, links, labels, and metadata MUST use the footer text color.
* No footer text may fall back to body text color, browser default link color, or muted global text color.
* Reduced emphasis footer text may use lower opacity of the same footer text color, but it MUST remain readable.
* Footer links MUST use the footer text color.
* Hover and focus states MUST remain readable on the footer background.

Footer behavior:

* calm and minimal
* no heavy borders
* no strong shadows
* no oversized cards
* phone uses `tel:`
* email uses `mailto:`

### Button system

Buttons MUST use a consistent shared shape across the site.

Shared button rules (MUST):
- All buttons MUST use the same visual structure:
  - same border-radius
  - same vertical rhythm
  - same font treatment
  - same general padding style
- Buttons MUST feel compact and premium, not oversized
- Buttons MUST NOT span full width by default unless explicitly required by the component spec
- Buttons MUST use intrinsic sizing (`display: inline-flex` or `inline-block`, and `width: fit-content` or equivalent)
- Buttons MUST NOT default to `width: 100%`
- Buttons MUST NOT stretch to fill their parent column unless explicitly required by the component spec
- Buttons SHOULD use compact horizontal padding rather than large fixed widths
- Buttons SHOULD visually fit the label, with a controlled minimum width for balance
- Buttons MUST remain left-aligned within content columns unless the component spec explicitly requires centered alignment

Primary buttons (MUST):
- Primary buttons SHOULD use branding.accentColor as background
- Primary buttons MUST use white text for contrast
- Primary buttons MUST feel clearly clickable
- Recommended use:
  - hero CTA
  - form submit button
- Primary buttons SHOULD generally use:
  - min-width: 220px
  - max-width: 320px
- Primary buttons MUST feel balanced relative to surrounding text width

Secondary buttons (MUST):
- Secondary buttons MUST use the same structure and border-radius as primary buttons
- Secondary buttons MUST be visually lighter than primary buttons
- Secondary buttons SHOULD use:
  - transparent or very subtle background
  - thin border
  - text in branding.accentColor
- Secondary buttons MUST feel compact and editorial, not promotional
- Recommended use:
  - About section CTA
  - smaller inline section CTAs
- Secondary buttons SHOULD generally use:
  - min-width: 180px
  - max-width: 280px
- Secondary buttons MUST NOT appear as full-width outlined bars unless explicitly required

Hover / interaction rules:
- Secondary button hover SHOULD use a very subtle background tint
- Primary button hover SHOULD darken slightly
- Hover and focus states MUST remain minimal and premium

### Typography + spacing constraints

Use layout config values for section paddings.
Use layoutUsage width/gutter per section.
Do not force one global container for all sections.
Keep long text blocks readable.

---

## 3) FILE MAP

Root:

* README.md
* package.json
* vite.config.js

Public assets (served as-is):
public/
assets/
brand/
logo.png
hero.jpg
about/
about.jpg
gallery/
01.jpg
02.jpg
03.jpg

Source structure:
src/
App.jsx
main.jsx

src/content/
site.js
services.js
gallery.js

src/components/
Header.jsx
Hero.jsx
About.jsx
Services.jsx
Gallery.jsx
Contact.jsx
Footer.jsx

src/hooks/
useScrollPosition.js
useReducedMotion.js

src/styles/
global.css

Functions (Cloudflare Pages Functions or equivalent):
functions/
api/
contact.js
ping.js

Rules:

* All listed files must exist.
* Components must import content from `src/content/`.
* No company-specific strings hardcoded in components.
* Styling must be in `src/styles/global.css`.
* Contact form MUST be end-to-end functional via `/api/contact`.
* Contact form field labels/placeholders MUST come from `CONFIG.contactSection.form.fields`.
* Contact form MUST include name, email, phone (optional), and message.
* Contact success/error UI messages MUST come from `CONFIG.contactSection.form.successMessage` and `CONFIG.contactSection.form.errorMessage`.
* Assets must be referenced via absolute `/assets/...` paths.
* `Footer.jsx` MUST render company info, navigation, and contact info from CONFIG.
- Buttons MUST implement a shared button system with primary and secondary variants as defined in WEBSITE SPEC.

## Backend Functions (Cloudflare Pages)

The project MUST implement backend endpoints using Cloudflare Pages Functions.
The functions directory MUST follow the FILE MAP exactly.

functions/
api/
contact.js
ping.js

## Footer Component

### src/components/Footer.jsx

The footer MUST be content-driven and use the following config sources:

* `siteConfig.company.name`
* `siteConfig.footer.description`
* `siteConfig.footer.navigationTitle`
* `siteConfig.footer.contactTitle`
* `siteConfig.navigation`
* `siteConfig.contact`
* `siteConfig.company.location`
* `siteConfig.footer.textTemplate`

The component MUST render:

1. Company column

   * company name
   * footer description
2. Navigation column

   * title from `footer.navigationTitle`
   * links generated from `navigation`
3. Contact column

   * title from `footer.contactTitle`
   * clickable phone link if present
   * clickable email link if present
   * location text if present
4. Bottom row

   * copyright text generated from `footer.textTemplate`
   * replace `{YEAR}` with current year
   * replace `{COMPANY}` with company name

Rules:

* No hardcoded company-specific content
* Navigation MUST reuse CONFIG.navigation
* Footer MUST be responsive
* Footer MUST use semantic links
* Footer MUST remain visually minimal and premium

### functions/api/ping.js

This endpoint is used to verify that Pages Functions are working.

The file MUST contain exactly:

```javascript
export async function onRequestGet() {
 return new Response(JSON.stringify({ ok: true, version: "ping-v1" }), {
   status: 200,
   headers: {
     "Content-Type": "application/json; charset=utf-8"
   }
 });
}
```

---

## contact.js

### functions/api/contact.js

This endpoint processes the contact form and sends email via Resend.

The implementation MUST match the following behaviour:

* Accept JSON requests
* Validate required fields
* Reject invalid email
* Use honeypot spam protection
* Send mail using Resend API
* Use reply_to so the receiver can reply directly to the sender

The file MUST contain the following implementation:

```javascript
function json(data, status = 200) {
 return new Response(JSON.stringify(data), {
   status,
   headers: {
     "Content-Type": "application/json; charset=utf-8",
     "Cache-Control": "no-store",
   },
 });
}

function isEmail(s) {
 return typeof s === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

function clean(s, max = 4000) {
 if (typeof s !== "string") return "";
 return s.replace(/\s+/g, " ").trim().slice(0, max);
}

function isHoneypotTripped(body) {
 return typeof body?.company === "string" && body.company.trim().length > 0;
}

export async function onRequestPost({ request, env }) {
 const ct = request.headers.get("content-type") || "";
 if (!ct.includes("application/json")) {
   return json({ error: "Fel format. Skicka JSON." }, 415);
 }

 let body;
 try {
   body = await request.json();
 } catch {
   return json({ error: "Ogiltig JSON." }, 400);
 }

 if (isHoneypotTripped(body)) {
   return json({ ok: true });
 }

 const name = clean(body?.name, 120);
 const email = clean(body?.email, 200);
 const phone = clean(body?.phone, 60);
 const message = clean(body?.message, 4000);

 if (!name) return json({ error: "Namn saknas." }, 400);
 if (!isEmail(email)) return json({ error: "Ogiltig e-postadress." }, 400);
 if (!message) return json({ error: "Meddelande saknas." }, 400);

 const resendKey = env.RESEND_API_KEY;
 const toEmail = env.CONTACT_TO_EMAIL;
 const fromEmail = env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

 if (!resendKey || !toEmail) {
   return json(
     { error: "E-postleverantör är inte konfigurerad (saknar RESEND_API_KEY eller CONTACT_TO_EMAIL)." },
     501
   );
 }

 const subject = `Ny förfrågan från ${name}`;
 const text =
   `Namn: ${name}\n` +
   `E-post: ${email}\n` +
   (phone ? `Telefon: ${phone}\n` : "") +
   `\nMeddelande:\n${message}\n`;

 const resp = await fetch("https://api.resend.com/emails", {
   method: "POST",
   headers: {
     Authorization: `Bearer ${resendKey}`,
     "Content-Type": "application/json",
   },
   body: JSON.stringify({
     from: fromEmail,
     to: [toEmail],
     subject,
     reply_to: email,
     text,
   }),
 });

 if (!resp.ok) {
   const details = await resp.text().catch(() => "");
   return json({ error: "Kunde inte skicka meddelandet.", details }, 502);
 }

 return json({ ok: true });
}

export async function onRequestOptions() {
 return new Response(null, {
   status: 204,
   headers: {
     "Access-Control-Allow-Origin": "*",
     "Access-Control-Allow-Methods": "POST, OPTIONS",
     "Access-Control-Allow-Headers": "Content-Type",
   },
 });
}
```
