# MelonPatch Style Guide

Internal reference for visual design decisions, tokens, and component patterns.

## Color System

### Brand Colors (Tailwind theme tokens in `input.css`)

| Token | Hex | Usage |
|-------|-----|-------|
| `kaitoke` | `#014421` | Primary brand. Headings, buttons, accents |
| `kaitoke-light` | `#026b34` | Button hover, lighter accent |
| `kaitoke-dark` | `#01331a` | Darker variant |
| `moon-mist` | `#D0D8C3` | Secondary. Tags, dark mode headings |
| `moon-mist-light` | `#e2e8d8` | Hero background (light mode) |
| `moon-mist-dark` | `#b8c2a8` | Decorative blobs |

### Dark Mode Surfaces (Tailwind theme tokens)

| Token | Hex | Usage |
|-------|-----|-------|
| `dark-bg` | `#0f1612` | Primary background, footer, hero |
| `dark-surface` | `#1a241e` | Cards, elevated sections, mobile nav |
| `dark-elevated` | `#253029` | Tertiary surface (hero blog offset card) |

To change dark mode colors site-wide, edit the three values in `input.css` lines 10-12.

### Neutral Colors (Tailwind defaults)

- **Off-white**: `#f8f9f6` (light mode card/section backgrounds)
- **Gray 400**: `#9ca3af` (nav links, meta text)
- **Gray 500**: `#6b7280` (body text, descriptions)
- **Gray 600**: `#4b5563` (paragraph text)
- **Gray 900**: `#111827` (dark headings in light mode)

### Accent Colors

- **Green 500**: `#10b981` with `animate-pulse` for "coming soon" status
- **Yellow 500**: `#eab308` for "in development" status
- **Discord Blue**: `#5865F2` (hover: `#4752c4`)

---

## Typography

### Font Stack

- **Primary**: Inter (weights 300-900) via Google Fonts
- **Display**: Playfair Display (weights 400-700) via Google Fonts
- **Monospace**: `'SF Mono', 'Fira Code', monospace` (`.mono` class)

Fonts are loaded via `<link>` tags with `preconnect`, not CSS `@import`.

### Heading Scale

| Element | Size | Weight | Tracking | Color |
|---------|------|--------|----------|-------|
| Hero h1 | `text-6xl` / `md:text-8xl` / `lg:text-9xl` | 900 | `tighter` | `text-kaitoke dark:text-moon-mist` |
| Product h1 | `text-5xl` / `md:text-7xl` | 900 | `tighter` | same |
| Blog post h1 | `text-4xl` / `md:text-5xl` | 900 | `tight` | same |
| Section h2 | `text-3xl` / `md:text-4xl` | 900 | `tight` | same |
| Card h3 | `text-xl` to `text-2xl` | 700 | default | `text-gray-900 dark:text-moon-mist` |

### Body Text

| Context | Size | Weight | Leading | Color |
|---------|------|--------|---------|-------|
| Intro paragraph | `text-lg` / `text-xl` | 300 | `relaxed` | `text-gray-600 dark:text-gray-400` |
| Body text | `text-base` | 400 | default | same |
| Small/meta | `text-sm` | 400-500 | default | `text-gray-500 dark:text-gray-400` |
| Mono labels | `text-xs` | 400 | `tracking-widest` | `text-gray-400 dark:text-gray-500` |

### Logo

- `.logo-text`: `font-weight: 800; letter-spacing: -0.02em`
- Nav: "M" in kaitoke + "P" in gray-400
- Footer: "MELON" in white/moon-mist + "PATCH" in moon-mist/gray-400

---

## Spacing

### Container Widths

| Class | Width | Usage |
|-------|-------|-------|
| `max-w-7xl` | 1280px | Main content wrapper |
| `max-w-3xl` | 768px | Blog content, FAQ, narrow sections |
| `max-w-2xl` | 672px | CTA/contact sections |
| `max-w-xl` | 576px | Hero text column |

All containers use `mx-auto px-8`.

### Section Padding

- **Major sections**: `py-32` (8rem)
- **Standard sections**: `py-24` (6rem)
- **Blog sections**: `py-16` (4rem)
- **Footer**: `py-8` (2rem)
- **Top of page** (below fixed nav): `pt-32` (8rem)

### Grid Layouts

| Grid | Breakpoints | Gap |
|------|-------------|-----|
| Products | `md:grid-cols-2` | `gap-8` |
| Features | `md:grid-cols-2 lg:grid-cols-3` | `gap-6` |
| Team | `sm:grid-cols-2 md:grid-cols-3` | `gap-8` |

---

## Components

### Navigation

- **Fixed header**: `fixed top-0 w-full z-50`
- **Background**: `bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md`
- **Border**: `border-b border-moon-mist/30 dark:border-moon-mist/10`
- **Desktop links**: `text-xs font-medium tracking-widest uppercase` with `gap-10`
- **Mobile drawer**: `w-64` from right, `bg-white dark:bg-dark-surface shadow-2xl`
- **Hamburger**: three bars (`w-6 h-0.5`, third bar `w-4`)

### Section Headers

Standard pattern used across all major sections:

```html
<div class="flex items-baseline gap-4 mb-20 reveal">
  <span class="mono text-xs text-kaitoke/30 dark:text-moon-mist/20">01</span>
  <h2 class="text-3xl md:text-4xl font-black text-kaitoke dark:text-moon-mist tracking-tight">Title</h2>
  <div class="flex-1 rule"></div>
</div>
```

### Cards

All cards share: `border: 1px solid`, hover transitions on `border-color`, `transform`, `box-shadow`.

**Product Card**
- Background: `bg-white dark:bg-dark-surface`
- Hover: `translate(-4px, -4px)`, shadow `8px 8px 0`
- Contains: counter overlay, status badge, tags, CTA link

**Feature Card**
- Background: `bg-[#f8f9f6] dark:bg-dark-bg`
- Hover: `translateY(-2px)`, shadow `0 8px 24px`
- Contains: icon box (`w-10 h-10 rounded-lg`), title, description

**Blog Card**
- Background: `bg-[#f8f9f6] dark:bg-dark-bg`
- Hover: `translateY(-2px)`, shadow `0 4px 16px`
- Contains: date/category meta, title, description, "read more" CTA

**Hero Blog Widget**
- Background: `rgba(248, 249, 246, 0.9)` / `var(--color-dark-surface)`
- Offset card behind: `absolute top-2 left-2` with `dark:bg-dark-elevated`
- Shadow: `4px 4px 0` + `8px 8px 0` (double shadow for depth)
- Hover: `translate(-2px, -2px)`, deeper shadows

### Buttons

**Primary (solid)**
```
px-8 py-3 bg-kaitoke text-white text-sm font-medium tracking-wide
hover:bg-kaitoke-light transition-colors
```

**Secondary (underline link)**
```
text-sm font-medium text-kaitoke dark:text-moon-mist
underline underline-offset-4 decoration-kaitoke/30
hover:decoration-kaitoke transition-colors
```

**Contact buttons** use `rounded-2xl` with icon SVGs.

### FAQ Accordion

```html
<details class="group border border-kaitoke/10 dark:border-moon-mist/10 p-6">
  <summary class="flex items-center justify-between cursor-pointer list-none">
    <h3>Question</h3>
    <span class="mono text-xs text-gray-400 group-open:rotate-45 transition-transform">+</span>
  </summary>
  <p class="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Answer</p>
</details>
```

### Decorative Rule

```css
.rule {
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(1,68,33,0.2), transparent);
}
/* dark mode */
.dark .rule {
  background: linear-gradient(to right, transparent, rgba(208,216,195,0.1), transparent);
}
```

---

## Animations

### Scroll Reveals

Triggered by `IntersectionObserver` in `shared.js`. Each element is unobserved after activating.

| Class | Initial State | Active State | Duration |
|-------|--------------|--------------|----------|
| `.reveal` | `translateY(30px), opacity: 0` | `translateY(0), opacity: 1` | 0.8s ease |
| `.reveal-left` | `translateX(-40px), opacity: 0` | `translateX(0), opacity: 1` | 0.8s ease |
| `.reveal-right` | `translateX(40px), opacity: 0` | `translateX(0), opacity: 1` | 0.8s ease |
| `.reveal-scale` | `scale(0.95), opacity: 0` | `scale(1), opacity: 1` | 0.8s ease |
| `.stagger-children > *` | `translateY(20px), opacity: 0` | `translateY(0), opacity: 1` | 0.5s ease, +0.1s per child |

Use inline `style="transition-delay: Xs;"` for cascading reveals within a section.

### Garden Blobs

```css
.garden-blob {
  position: absolute;
  border-radius: 50% 40% 60% 30% / 40% 50% 30% 60%;
  opacity: 0.07;
  animation: blob-float 20s ease-in-out infinite;
}
```

Multiple blobs use `animation-delay` offsets (-7s, -14s) for varied movement.

### Card Hover Transitions

All cards use `transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease`.

### Mobile Nav

- Drawer: `transform: translateX(100%)` to `translateX(0)`, 0.3s ease
- Backdrop: `opacity: 0` to `opacity: 1`, 0.3s ease

---

## Dark Mode

### Implementation

1. Inline `<head>` script adds `.dark` to `<html>` before paint (prevents FOUC)
2. `shared.js` syncs `.dark` to `<body>` on init
3. Toggle click toggles both `<html>` and `<body>`
4. Preference stored in `localStorage` key `melonpatch-dark`
5. Falls back to `prefers-color-scheme: dark` if no stored preference

### Selector Strategy

- **Tailwind classes**: `dark:` variant reads from `<html>.dark`
- **shared.css rules**: `body.dark` selector reads from `<body>.dark`
- **index.html inline styles**: `.dark` descendant selector reads from `<html>.dark`

### Surface Hierarchy

| Light Mode | Dark Mode | Token |
|------------|-----------|-------|
| `#f8f9f6` (off-white) | `#0f1612` | `dark-bg` |
| `#ffffff` (white) | `#1a241e` | `dark-surface` |
| -- | `#253029` | `dark-elevated` |

Alternating sections use `dark-bg` and `dark-surface` to create visual layering.

### Dark Mode Toggle

- Fixed position: `bottom: 24px; right: 24px`
- Size: 48px circle
- Border: `2px solid kaitoke` (light) / `moon-mist` (dark)
- Background: `moon-mist` (light) / `dark-elevated` (dark)
- Icon: sun/moon emoji via JS
- Hover: `scale(1.1)`

---

## Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Default | < 640px | Single column, stacked layout, hamburger nav |
| `sm` | 640px | Team grid 2 cols, buttons side-by-side |
| `md` | 768px | Desktop nav visible, product/feature grids expand |
| `lg` | 1024px | Hero blog widget visible, features 3 cols |

### Notable Responsive Rules

- Hero blog widget: `hidden lg:block` (1024px+)
- Desktop nav: `hidden md:flex` (768px+)
- Mobile nav: `md:hidden`
- Hero h1 scales: `text-6xl` -> `md:text-8xl` -> `lg:text-9xl`

---

## File Reference

| File | Purpose |
|------|---------|
| `css/input.css` | Tailwind v4 theme tokens, dark variant, source paths |
| `css/tailwind.css` | Compiled Tailwind output (rebuild after HTML changes) |
| `css/shared.css` | Custom CSS: animations, components, dark mode, prose |
| `js/shared.js` | Dark mode toggle, IntersectionObserver reveals, mobile nav |
| `index.html` | Inline styles for hero-only components (blobs, wave, blog card) |
