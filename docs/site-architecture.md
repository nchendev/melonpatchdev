# Site Architecture

Internal reference for the technical decisions behind melonpatch.dev.

## Stack

- **Static HTML + Tailwind CSS v4** (no framework, no SSG)
- **Tailwind CLI** for production builds (`npm run build:css`)
- **Vanilla JS** for dark mode, scroll animations, mobile nav
- **Vercel** for hosting (target)
- **Google Fonts** (Inter + Playfair Display) loaded via `<link>` tags

### Why static HTML

A landing page and blog for an indie studio doesn't need React, Next.js, or a static site generator. Static HTML loads instantly, is trivially deployable, and has zero build complexity beyond Tailwind. If the site grows to 50+ pages, reconsider. Until then, this is the right call.

### Why not a static site generator (Hugo, Eleventy, etc.)

Considered it. Not worth the setup cost right now. The main pain point of raw HTML is duplicated nav/footer across pages. We have 4-5 pages. When we hit ~10+ pages and the duplication becomes a real maintenance burden, migrate to Eleventy (it works with existing HTML files with minimal changes).

## File Structure

```
melonpatchdev/
  index.html              Main landing page
  products/
    ai-ebook-reader.html   Dedicated product page
  blog/
    index.html             Blog listing page
    posts/
      _template.html       Copy this for new posts
      hello-from-the-garden.html
  css/
    input.css              Tailwind v4 source (theme, variants, sources)
    tailwind.css           Built output (committed, rebuild after HTML changes)
    shared.css             Custom styles (animations, components, dark mode)
  js/
    shared.js              Dark mode toggle, IntersectionObserver reveals, mobile nav
  assets/
    favicon.svg            SVG favicon (Kaitoke Green, "MP")
    og-image.svg           OG image (SVG source)
    og-image.html          OG image (open in browser and screenshot for PNG)
  docs/                    Internal docs (not published)
  robots.txt               Allows all crawlers including AI bots
  sitemap.xml              All public URLs
  llms.txt                 LLM-readable site summary
```

## Build Process

```bash
npm run build:css    # One-time production build (minified)
npm run dev:css      # Watch mode for development
```

After changing any HTML file, rebuild Tailwind so new utility classes are included in the output.

## Design Decisions

### Color palette

- **Kaitoke Green** (#014421) - primary, used for text, buttons, accents
- **Moon Mist** (#D0D8C3) - secondary, used for backgrounds, tags, dark mode text
- Dark mode surfaces: #0f1612 (bg), #1a241e (surface), #253029 (elevated surface)

### Dark mode implementation

Dark mode is applied via a `.dark` class on `<html>`. A synchronous inline script in `<head>` (before any CSS) reads localStorage and applies the class immediately to prevent a white flash (FOUC). The toggle button and persistence logic live in shared.js.

Both `<html>` and `<body>` get the `.dark` class. Tailwind's `dark:` variant reads from `<html>`, custom CSS in shared.css reads from `body.dark`. Both are kept in sync.

### Scroll animations

Uses `IntersectionObserver` (not scroll events). Elements with `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale`, or `.stagger-children` start invisible and animate in when they enter the viewport. Each element is unobserved after triggering to avoid unnecessary work.

### Fonts

Loaded via `<link>` tags in `<head>`, not CSS `@import`. The `@import` approach creates a chained request (HTML -> CSS -> font CSS -> fonts) which blocks rendering longer. `<link>` tags allow the browser to discover and fetch fonts in parallel with stylesheets.

### No wildcard transitions

We intentionally do NOT use `* { transition: ... }`. While convenient for dark mode toggling, it causes unintended animation on layout changes, SVGs, pseudo-elements, and conflicts with Tailwind's transition utilities. Transitions are applied per-component where needed.

## Adding a New Blog Post

1. Copy `blog/posts/_template.html`
2. Rename to `blog/posts/your-slug.html`
3. Replace all `POST_TITLE`, `POST_SLUG`, `POST_DATE`, `POST_DESCRIPTION`, `POST_CATEGORY` placeholders
4. Write content inside the `<div class="prose">` block using standard HTML tags
5. Add a card to `blog/index.html` (copy an existing `<a class="blog-card">` block)
6. Add a `<url>` entry to `sitemap.xml`
7. Run `npm run build:css`

## Adding a New Product Page

1. Create `products/your-product.html` (use ai-ebook-reader.html as reference)
2. Add a product card to the Products section in `index.html`
3. Add structured data (JSON-LD SoftwareApplication) in the page's `<head>`
4. Add to `sitemap.xml`
5. Update `llms.txt` with the new product
6. Run `npm run build:css`
