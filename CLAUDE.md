# triemers.github.io — Claude context

Portfolio site for Tori Riemersma, lead product designer. Visual language: Josef Müller-Brockmann Swiss/International Typographic Style — strict grid, Helvetica, geometric borders as structure, no decoration.

## File map

```
index.html                        # Home page
pages/
  about.html
  chronicle-header.html           # Case study: Chronicle header redesign
  chronicle-design-system.html    # Case study: Chronicle design system
  lostcanyonimports.html          # Case study: Lost Canyon Imports e-commerce
  404.html
components/
  site-header.js                  # <site-header> web component
  site-footer.js                  # <site-footer> web component
  case-card.js                    # <case-card> web component (attrs: number, href, target, title, description, media-type, src, poster)
styles/
  styles.css                      # Global tokens + typography + header/footer + media queries
  index.css                       # Home page layout only
  casestudies.css                 # Case study layout + image modal + before/after slider
scripts/
  scripts.js                      # Image modals, before/after slider drag, IntersectionObserver scroll-in
files/
  ResumeLong.pdf
images/
  about/                          # Headshots + personal photos
  chronicle/                      # Chronicle case study assets (png, mp4, gif)
  lostcanyon/                     # LCI case study assets (png, mp4)
  *.png                           # Card thumbnails for home grid
```

## Design tokens (styles/styles.css :root)

| Token | Value |
|---|---|
| --fontFamily | 'Helvetica', sans-serif |
| --bgColor | #fafafa |
| --primaryTextColor | #333333 |
| --secondaryTextColor | #666666 |
| --linkTextColor | #582630 |
| --accentOne | #CC5500 (burnt orange) |
| --black | #333333 |
| --border | 2px solid #cecdcd |
| --borderRadius | 0px |
| --fontSizeXL | 3.75rem (60px) — h1 |
| --fontSizeL | 2rem (32px) — subheads |
| --fontSizeM | 1.25rem (20px) — descriptions |
| --fontSizeS | 1.125rem (18px) — body/nav |
| --fontSizeXS | 14px |
| --fontSizeXXS | 0.75rem (12px) — captions |

## Home page layout (index.css)

4-column grid throughout. Sections separated by `var(--border)` horizontal rules.

1. `.name-section` — full-width, `TORI RIEMERSMA` uppercase with letter-spacing
2. `.intro-section` — 4-col grid: col 1 = `.intro-role` (accent left-border), cols 2–4 = `.intro-bio`
3. `.cases-section` — `.cases-grid` 4-col grid, each `<case-card>` separated by left-border dividers
4. `.resume-section` — 3-col grid: Resume link / Education / Experience

## Case study layout (casestudies.css)

`.case-study-wrapper` (margin: 60px) contains:
- `.lead-block` — flex row: `.contents-section` (sticky sidebar, 25% width) + `.lead-content`
- `.case-section` — repeating sections, same sidebar/content pattern, border-top dividers

Scroll-in animation: `.case-body`, `.myImg`, `.card-img`, `.slider-container` start `opacity:0 / translateY(30px)`, get `.visible` class from IntersectionObserver in scripts.js.

Image modal: `.myImg` → `.myModal` / `.modal-content`. Triggered in scripts.js.

Before/after slider: `.slider-container` > `.slider` > `.before` + `.after` + `.slider-handle`. Drag logic in scripts.js.

## Known issues / tech debt

- `border-radius: 20px` / `10px` on `.lead-img`, `.modal-content`, `.myImg`, `.card-img-small`, `.slider-container`, `.slider img` in casestudies.css — violates `--borderRadius: 0px` token
- `body { height: 100vh }` in styles.css is a leftover GPT hack (noted in comment) — causes layout issues on tall pages
- `p { display: inline }` globally in styles.css forces every section to override it back to `block`
- Logo is `🦖 TRUX` — emoji breaks Swiss register

## Git

Active branch: `2026-may-portfolio-update`. Remote: origin (GitHub Pages).
