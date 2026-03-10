# MelonPatch Brand Style Guide

Platform-agnostic brand reference for MelonPatch. Use this guide when building anything that carries the MelonPatch name: websites, iOS apps, desktop tools, marketing materials, pitch decks, social assets, or print.

Founded 2026. Indie software studio building AI-powered tools.

---

## 1. Brand Overview and Values

### Who we are

MelonPatch is a small, independent software studio. We build AI-powered tools that we actually want to use. No venture-scale ambitions, no growth-at-all-costs thinking. We ship useful software and write honestly about the process.

### Core values

- **Substance over style.** Every product, feature, and piece of content should justify its existence. No filler.
- **Clarity.** In code, in design, in communication. Say what you mean, then stop.
- **Craft.** Sweat the details. Good spacing, good color, good type. These things matter.
- **Independence.** We own our platform, our audience, and our decisions.

### Design philosophy

MelonPatch design is minimal and editorial. It draws from print design traditions: generous whitespace, careful typographic hierarchy, restrained color use. Where it departs from tradition, it does so with purpose: brutalist-inspired card interactions, organic decorative shapes, and dark mode treated as a first-class experience rather than an afterthought.

The overall feeling should be: calm, confident, considered.

---

## 2. Logo

### Construction

The MelonPatch logo is text-based. There is no icon or logomark separate from the type.

- **Typeface**: Inter
- **Weight**: 800 (Extra Bold)
- **Letter spacing**: -0.02em (slightly tightened)

### Full logo

The word "MELONPATCH" is split into two halves with distinct color treatment:

| Context | "MELON" color | "PATCH" color |
|---------|---------------|---------------|
| Light backgrounds | Kaitoke Green #014421 | Gray 400 #9ca3af |
| Dark backgrounds | Moon Mist #D0D8C3 | Gray 400 #9ca3af |
| On primary green | White #ffffff | Moon Mist #D0D8C3 |

### Abbreviated logo

The abbreviation "MP" follows the same split:

| Context | "M" color | "P" color |
|---------|-----------|-----------|
| Light backgrounds | Kaitoke Green #014421 | Gray 400 #9ca3af |
| Dark backgrounds | Moon Mist #D0D8C3 | Gray 400 #9ca3af |

### Usage rules

- Always render the logo in the specified typeface and weight. Do not substitute fonts.
- Maintain the -0.02em letter spacing. The logo should feel compact, not loose.
- Never rotate, distort, outline, or add effects (shadows, gradients, strokes) to the logo.
- Minimum clear space around the logo: the height of the letter "M" on all sides.
- Do not place the logo on busy photography or patterns without a solid background container.
- The logo may be rendered at any size, but should remain legible. For very small contexts (favicons, app icons), use only the "MP" abbreviation.

### App icons

For iOS app icons and similar square formats, use the "MP" abbreviation centered on a solid Kaitoke Green (#014421) background with white/Moon Mist type. Rounded corners follow platform conventions (do not bake in corner radius on iOS).

---

## 3. Color System

### Primary palette

| Name | Hex | RGB | Role |
|------|-----|-----|------|
| Kaitoke Green | `#014421` | 1, 68, 33 | Primary brand color. Headings, buttons, accents, key UI elements |
| Kaitoke Light | `#026b34` | 2, 107, 52 | Hover states, lighter accent variant |
| Kaitoke Dark | `#01331a` | 1, 51, 26 | Pressed states, deeper accent variant |

### Secondary palette

| Name | Hex | RGB | Role |
|------|-----|-----|------|
| Moon Mist | `#D0D8C3` | 208, 216, 195 | Secondary brand color. Tags, labels, dark mode headings, decorative elements |
| Moon Mist Light | `#e2e8d8` | 226, 232, 216 | Light background tints, hero sections |
| Moon Mist Dark | `#b8c2a8` | 184, 194, 168 | Decorative blobs, muted accents |

### Neutral palette

| Name | Hex | RGB | Role |
|------|-----|-----|------|
| Off-white | `#f8f9f6` | 248, 249, 246 | Light mode card/section backgrounds |
| White | `#ffffff` | 255, 255, 255 | Light mode primary surfaces |
| Gray 400 | `#9ca3af` | 156, 163, 175 | Navigation links, metadata, secondary text |
| Gray 500 | `#6b7280` | 107, 114, 128 | Body text, descriptions |
| Gray 600 | `#4b5563` | 75, 85, 99 | Paragraph text (light mode) |
| Gray 900 | `#111827` | 17, 24, 39 | Headings in light mode |

### Dark mode surface colors

| Name | Hex | RGB | Role |
|------|-----|-----|------|
| Dark Background | `#0f1612` | 15, 22, 18 | Primary background |
| Dark Surface | `#1a241e` | 26, 36, 30 | Cards, elevated sections, secondary surfaces |
| Dark Elevated | `#253029` | 37, 48, 41 | Tertiary surface, highest elevation level |

### Dark mode text colors

| Name | Hex | RGB | Role |
|------|-----|-----|------|
| Dark Text | `#e8ece5` | 232, 236, 229 | Primary body text in dark mode |
| Dark Text Muted | `#9aa896` | 154, 168, 150 | Secondary/muted text in dark mode |

### Accent and status colors

| Name | Hex | RGB | Role |
|------|-----|-----|------|
| Active Green | `#10b981` | 16, 185, 129 | Success states, "live" indicators, positive feedback |
| Warning Yellow | `#eab308` | 234, 179, 8 | In-progress states, warnings, "coming soon" indicators |
| Discord Blue | `#5865F2` | 88, 101, 242 | Discord links and community references only |
| Discord Blue Hover | `#4752c4` | 71, 82, 196 | Hover state for Discord elements |

### Color usage principles

- **Restraint.** The palette is intentionally limited. Kaitoke Green and Moon Mist carry the brand. Do not introduce new hues without strong justification.
- **Green is the anchor.** Kaitoke Green is the primary visual identifier. It should appear on every MelonPatch surface, whether as text, a button, a border, or an accent.
- **Semantic colors are functional, not decorative.** Active Green and Warning Yellow communicate status. Do not use them for branding or decoration.
- **Opacity as a tool.** Rather than adding more color swatches, use the primary and secondary colors at reduced opacity for borders (10%), decorative elements (5-8%), and background tints. This keeps the palette cohesive.

### Color on color

| Combination | Contrast | Use case |
|-------------|----------|----------|
| White text on Kaitoke Green | 7.5:1 (AAA) | Buttons, banners, headers |
| Kaitoke Green text on White | 7.5:1 (AAA) | Headings, links |
| Moon Mist text on Dark Background | 9.2:1 (AAA) | Dark mode headings |
| Gray 600 text on White | 7.0:1 (AAA) | Body text |
| Gray 400 text on Dark Background | 5.1:1 (AA) | Dark mode secondary text |

Always verify contrast ratios meet WCAG AA (4.5:1 for body text, 3:1 for large text) at minimum.

---

## 4. Typography

### Font stack

| Role | Family | Source | Weights used |
|------|--------|--------|--------------|
| Primary (UI + body) | Inter | Google Fonts / system | 300, 400, 500, 600, 700, 800, 900 |
| Display (editorial) | Playfair Display | Google Fonts | 400, 500, 600, 700 |
| Monospace (labels, code) | SF Mono, Fira Code | System / Google Fonts | 400 |

### When to use each

- **Inter** is the default. Use it for all UI text, body copy, navigation, buttons, form elements, and headings.
- **Playfair Display** is reserved for editorial and display contexts: pull quotes, hero statements, feature headlines in marketing materials. It should never be used for UI elements or body text.
- **Monospace** is used for section counters, metadata labels, code snippets, and small technical details. Always set in uppercase with wide letter spacing (0.1em).

### Heading scale

| Level | Size range | Weight | Letter spacing | Usage |
|-------|-----------|--------|----------------|-------|
| Display / Hero | 48-128px | 900 (Black) | -0.04em (tighter) | Landing page heroes, splash screens |
| Page title | 36-72px | 900 (Black) | -0.04em (tighter) | Product page titles, blog post titles |
| Section heading | 30-36px | 900 (Black) | -0.025em (tight) | Major section headers |
| Subsection heading | 20-24px | 700 (Bold) | Default | Card titles, subsections |
| Label | 12px | 400-500 | 0.1em (widest) | Monospace. Counters, metadata |

Headings in light mode: Gray 900 (#111827) or Kaitoke Green (#014421).
Headings in dark mode: Moon Mist (#D0D8C3).

### Body text scale

| Context | Size | Weight | Line height | Color (light) | Color (dark) |
|---------|------|--------|-------------|----------------|--------------|
| Intro / lead paragraph | 18-20px | 300 (Light) | 1.6 (relaxed) | Gray 600 | Gray 400 |
| Standard body | 16px | 400 (Regular) | 1.5 | Gray 600 | Gray 400 |
| Small / supporting | 14px | 400-500 | 1.5 | Gray 500 | Gray 400 |
| Monospace metadata | 12px | 400 | 1.5 | Gray 400 | Gray 500 |

### Typography principles

- **Weight creates hierarchy, not size alone.** The jump from 400 body to 900 heading is deliberate. Use the full weight range.
- **Tight tracking on headings, default on body.** Headings are pulled in (-0.02 to -0.04em). Body text is left at default spacing for readability.
- **Light weight for introductions.** Lead paragraphs use weight 300 to create an elegant, approachable entry point before denser body copy.

---

## 5. Spacing and Layout

### Spacing scale

MelonPatch uses an 8px base grid. All spacing values are multiples of 8.

| Token | Value | Common use |
|-------|-------|------------|
| xs | 8px (0.5rem) | Inline padding, tight gaps |
| sm | 16px (1rem) | Icon gaps, small padding |
| md | 24px (1.5rem) | Card padding, element spacing |
| lg | 32px (2rem) | Section inner padding, grid gaps |
| xl | 48px (3rem) | Subsection vertical spacing |
| 2xl | 64px (4rem) | Blog section padding |
| 3xl | 96px (6rem) | Standard section padding |
| 4xl | 128px (8rem) | Major section spacing, hero padding |

### Content widths

| Width | Pixels | Usage |
|-------|--------|-------|
| Full | 1280px | Main content container, max width |
| Narrow | 768px | Blog content, focused reading, FAQ sections |
| Tight | 672px | CTA blocks, contact forms |
| Column | 576px | Hero text columns, constrained content |

All content containers are horizontally centered with 32px (2rem) horizontal padding on each side.

### Layout principles

- **Generous whitespace is non-negotiable.** The space between major sections (128px / 8rem) is a defining characteristic of MelonPatch design. Do not compress it. Whitespace communicates confidence and editorial quality.
- **Grid gaps match the density of content.** Dense grids (features, specs) use 24px gaps. Spacious grids (products, team) use 32px gaps.
- **Responsive behavior.** Layouts collapse to single-column on mobile. Multi-column grids begin at medium breakpoints (~768px). Three-column grids begin at large breakpoints (~1024px).
- **Horizontal padding stays consistent.** 32px on both sides at all breakpoints. This creates a calm, predictable reading frame.

---

## 6. Dark Mode

### Philosophy

Dark mode is not a dimmed version of light mode. It is a fully considered parallel design with its own surface hierarchy, contrast ratios, and color relationships.

### Surface hierarchy

Dark mode uses three green-tinted neutral surfaces to create depth without relying on shadows:

| Level | Color | Hex | Usage |
|-------|-------|-----|-------|
| Ground | Dark Background | `#0f1612` | Page background, base layer |
| Surface | Dark Surface | `#1a241e` | Cards, panels, elevated UI elements |
| Elevated | Dark Elevated | `#253029` | Popovers, layered cards, tertiary containers |

The green tint in dark surfaces is intentional. It connects dark mode to the Kaitoke Green brand identity without being obvious. Pure blacks (#000000) and generic dark grays (#1a1a1a) are never used.

### Color mapping

| Light mode | Dark mode equivalent |
|------------|---------------------|
| White (#ffffff) surfaces | Dark Surface (#1a241e) |
| Off-white (#f8f9f6) surfaces | Dark Background (#0f1612) |
| Kaitoke Green headings/accents | Moon Mist headings/accents |
| Gray 900 headings | Moon Mist headings |
| Gray 600 body text | Gray 400 body text |
| Kaitoke Green borders at 10% opacity | Moon Mist borders at 10% opacity |
| Kaitoke Green shadows | Moon Mist shadows at lower opacity |

### Dark mode rules

- Alternating sections should toggle between Dark Background and Dark Surface to create visual layering, mirroring the off-white/white alternation in light mode.
- Borders use Moon Mist at 10% opacity. On hover, borders brighten to full Moon Mist.
- Shadows in dark mode use Moon Mist-based RGBA values at very low opacity (4-5%). Heavy shadows look wrong on dark surfaces.
- The primary brand color (Kaitoke Green) remains usable in dark mode for filled buttons and active states. It has sufficient contrast against dark surfaces.
- Text contrast must meet WCAG AA standards in dark mode. Test every text/background combination.

---

## 7. Motion and Animation

### Core animations

| Type | Transform | Duration | Easing | Trigger |
|------|-----------|----------|--------|---------|
| Fade up | translateY(30px) to 0, opacity 0 to 1 | 800ms | ease | Scroll into view |
| Slide left | translateX(-40px) to 0, opacity 0 to 1 | 800ms | ease | Scroll into view |
| Slide right | translateX(40px) to 0, opacity 0 to 1 | 800ms | ease | Scroll into view |
| Scale in | scale(0.95) to 1, opacity 0 to 1 | 800ms | ease | Scroll into view |
| Stagger children | translateY(20px) to 0, opacity 0 to 1 | 500ms per item, +100ms delay | ease | Scroll into view |

### Interaction animations

| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Card hover | border-color, box-shadow, transform | 300ms | ease |
| Button hover | background-color | 200ms | ease |
| Toggle/expand | transform (rotation, translation) | 300ms | ease |
| Drawer/panel | transform (translateX) | 300ms | ease |
| Backdrop | opacity | 300ms | ease |

### Decorative motion

Organic "blob" shapes float subtly in the background of hero sections and key visual areas:

- Shape: Irregular rounded forms (border-radius with varied values like 50% 40% 60% 30%)
- Opacity: 7% (very subtle)
- Animation: Slow floating drift, 20-second cycle
- Multiple blobs use staggered animation delays to avoid synchronized movement

### Motion principles

- **Animations fire once.** Scroll-triggered reveals play when an element enters the viewport and do not replay. This keeps the experience clean on scroll-back.
- **Speed communicates function.** Scroll reveals (800ms) are cinematic and deliberate. Hover states (300ms) are responsive and snappy. Buttons (200ms) are near-instant.
- **Stagger creates narrative.** When multiple elements appear together, they enter sequentially with 100ms delays. This guides the eye and creates a sense of order.
- **Respect reduced motion.** If the user's system requests reduced motion (prefers-reduced-motion: reduce), disable all transform-based animations. Opacity fades may remain.
- **Decorative motion is ambient.** Blob animations should be invisible unless you look for them. They add life without demanding attention.

---

## 8. Iconography and Visual Elements

### Icon style

MelonPatch does not use a branded icon set. Icons are functional and minimal:

- **Style**: Outline/stroke icons. 1.5-2px stroke weight. No fills unless indicating active/selected state.
- **Size**: Icons sit in 40x40px containers with rounded corners (8px radius) and a subtle background tint.
- **Color**: Kaitoke Green on light backgrounds, Moon Mist on dark backgrounds.
- **Source**: Use SF Symbols on Apple platforms. On web and other platforms, use a consistent outline icon set (Heroicons, Phosphor, or similar).

### Decorative rule lines

A signature MelonPatch element: horizontal gradient lines used alongside section headers.

- Construction: A 1px line with a gradient from transparent, through the brand color at low opacity, back to transparent.
- Light mode: Kaitoke Green at 20% opacity at center.
- Dark mode: Moon Mist at 10% opacity at center.
- Always used in combination with a section number and heading, never alone.

### Section numbering

Major sections are numbered with a monospace counter:

- Font: Monospace, 12px, uppercase
- Color: Kaitoke Green at 30% opacity (light) / Moon Mist at 20% opacity (dark)
- Format: Two-digit numbers ("01", "02", "03")
- Position: Inline before the section heading, separated by 16px

### Decorative blobs

Organic, rounded shapes used as background decoration:

- Color: Moon Mist Dark (#b8c2a8) in light mode, Kaitoke Green in dark mode
- Opacity: 7% maximum. These must be barely visible.
- Shape: Irregular rounded forms, not circles or ellipses
- Behavior: Slow floating animation (see Motion section)
- Placement: Behind hero sections and key content areas. Never overlapping text or interactive elements in a way that reduces readability.

### Status indicators

| Status | Color | Hex | Treatment |
|--------|-------|-----|-----------|
| Live / Active | Active Green | `#10b981` | Solid dot with subtle pulse animation |
| In Progress / Coming Soon | Warning Yellow | `#eab308` | Solid dot, no animation |

Status dots: 8px diameter, border-radius 50%.

### Photography and imagery

MelonPatch currently uses no photography. If introduced:

- Prefer muted, desaturated tones that complement the green/sage palette.
- Avoid stock photography. Use original screenshots, product imagery, or abstract/editorial photography.
- Apply a subtle green-tinted overlay if needed to maintain brand consistency.

---

## 9. Tone and Voice

### Character

MelonPatch speaks like a smart friend who builds software. Not a corporation. Not a lifestyle brand. Not a hype machine.

### Voice attributes

| Attribute | What it means | What it does not mean |
|-----------|---------------|----------------------|
| Direct | Get to the point. Short sentences. Active voice. | Blunt, rude, or dismissive |
| Confident | We know what we are building and why. | Arrogant, boastful, or comparative to competitors |
| Honest | Admit what is in progress. Do not oversell. | Self-deprecating or apologetic |
| Human | Write like a person, not a press release. | Slangy, meme-heavy, or trying too hard to be casual |

### Writing rules

1. **Short sentences.** If a sentence has more than one comma, consider splitting it.
2. **No jargon unless your audience shares it.** "LLM" is fine for a developer blog post. It is not fine for an App Store description.
3. **No filler.** Every sentence should carry weight. Cut "we are excited to announce" and "we are thrilled to share." Just say what happened.
4. **Avoid em dashes.** Use periods, commas, or restructure the sentence instead.
5. **No emojis in written content.** They are acceptable only in casual Discord messages or social replies.
6. **Active voice by default.** "We built this" not "This was built by us."
7. **Say "we" not "the team at MelonPatch."** Keep it human.

### Headline style

- Headings are sentence case, not title case. "How we built our reading engine" not "How We Built Our Reading Engine."
- Exception: the logo and product names follow their own capitalization rules.

### Example phrasing

| Instead of this | Write this |
|-----------------|------------|
| "We're thrilled to announce the launch of..." | "Libro is live on the App Store." |
| "Our cutting-edge AI-powered solution leverages..." | "Libro uses AI to help you read books in other languages." |
| "Stay tuned for more exciting updates!" | (Nothing. Post again when there is something to say.) |
| "At MelonPatch, we believe that..." | "We think..." |

### Content cadence

Publish only when there is something worth saying. No arbitrary schedules, no filler posts, no content for content's sake. Silence is better than noise.

---

## 10. Component Patterns

These patterns describe visual and behavioral conventions. They are not tied to any specific platform or framework. Implement them in whatever technology fits your context.

### Navigation bar

- Fixed to the top of the viewport. Stays visible on scroll.
- Background: semi-transparent with a backdrop blur effect (frosted glass).
- A thin bottom border in the brand color at low opacity separates it from content.
- Links are small, uppercase, monospace-styled, and widely spaced.
- On small screens: collapse to a hamburger icon. The hamburger uses three horizontal bars, with the bottom bar shorter than the others. The menu slides in from the right as a drawer panel.

### Section header

The standard section header is a horizontal arrangement of three elements:

1. A monospace number ("01") in a muted brand color
2. The section title in a large, heavy heading
3. A decorative gradient rule line that fills the remaining horizontal space

These three elements are baseline-aligned. The rule line sits on the text baseline and extends to the right edge. Generous bottom margin (80px) separates the header from its content.

### Cards

All cards share common traits:

- A thin 1px border in the brand color at 10% opacity
- Solid background (white in light mode, dark surface in dark mode)
- No border radius (sharp corners reinforce the editorial aesthetic)
- Hover: border brightens to full brand color

Card variants differ in hover behavior:

**Product card (brutalist offset)**
- On hover: the entire card shifts up and left by 4px
- A solid offset shadow appears at 8px right and 8px down
- This creates a "lifted from the page" brutalist effect

**Feature card (subtle lift)**
- On hover: the card lifts up by 2px
- A soft, diffused shadow appears below

**Content card (minimal lift)**
- On hover: the card lifts up by 2px
- A lighter, tighter shadow appears below

### Buttons

**Primary button**
- Solid Kaitoke Green background, white text
- No border radius (sharp corners)
- Generous horizontal padding (32px), moderate vertical padding (12px)
- Text: 14px, medium weight, slightly wide letter spacing
- Hover: background lightens to Kaitoke Light

**Secondary button / text link**
- No background
- Text in Kaitoke Green (light mode) or Moon Mist (dark mode)
- Underline with wide offset (4px below text)
- Underline color at 30% opacity, brightening to full on hover

**Pill button (contact/social)**
- Rounded corners (16px radius)
- Used sparingly for external links (Discord, email, social)

### FAQ / Accordion

- Each item has a thin border and generous padding (24px)
- The expand/collapse indicator is a monospace "+" character that rotates 45 degrees to become an "x" when open
- Answer text appears below with a top margin, in a smaller size and muted color
- No border radius. Consistent with the card aesthetic.

### Content / prose blocks

Long-form text content (blog posts, documentation) follows these conventions:

- Maximum width: 768px, centered
- Paragraph spacing: 20px between paragraphs
- Line height: 1.8 for comfortable reading
- Headings within prose: h2 at 24px/700, h3 at 20px/600, with generous top margins
- Blockquotes: 3px left border in brand color, left padding, italic, muted color
- Inline code: monospace, slightly smaller than surrounding text, with a subtle background tint (brand color at 6% opacity)

---

## Quick Reference

### Brand at a glance

| Element | Value |
|---------|-------|
| Primary color | Kaitoke Green #014421 |
| Secondary color | Moon Mist #D0D8C3 |
| Primary font | Inter |
| Display font | Playfair Display |
| Logo weight | 800, letter-spacing -0.02em |
| Section spacing | 128px (8rem) |
| Base grid | 8px |
| Corner radius | None (sharp) for cards and primary buttons |
| Dark mode background | #0f1612 (green-tinted) |
| Voice | Direct, confident, honest, human |
