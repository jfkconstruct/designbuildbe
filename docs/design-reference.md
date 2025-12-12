# Design.Build.Be: Design & Development Summary

## Brand Positioning

**What it is:** A learning studio that makes educational apps for kids

**Core line:** "We build learning tools that treat kids like capable humans."

**Belief statement:** "Kids don't need to wait until they're older to build, create, make."

**Target audience:** Parents and educators who are intentional about learning, not the "download another app" crowd. The *user* is the kid, the *buyer* is the adult.

**Tone:** Calm authority. Warm but precise. Not hype, not minimalist-cold. The feeling of someone who's already built the thing they're teaching you to build.

---

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Cream | `#FAF8F5` | Background, light UI |
| Cream Dark | `#E8DFD4` | Secondary backgrounds |
| Terra Cotta | `#C4703E` | Primary accent, "Design" |
| Terra Light | `#D4804E` | Hover states, highlights |
| Sage | `#4A7C59` | Secondary accent, "Build" |
| Sage Light | `#5A8C69` | Lighter greens |
| Espresso | `#2C2416` | Text, dark backgrounds, "Be" |
| Espresso Light | `#5C5242` | Secondary text |

---

## Typography

**Headings/Body:** Source Serif 4 (warm, authoritative)

**UI/Labels/Nav:** DM Sans (clean, modern sans-serif)

**Formatting rule:** Never use em dashes

---

## Visual Identity: The Diorama

**Influence:** Yoshi's Crafted World aesthetic

**Key characteristics:**
- Felt textures with visible fiber patterns
- Corrugated cardboard (roofs, structures)
- Construction paper (doors, shapes, scraps)
- Visible construction (tape holding roof, fold lines)
- Soft drop shadows for depth
- Scattered craft elements (buttons, yarn, paper scraps)
- Imperfect, hand-made feeling

**What it signals:** "We understand the magic of making things with your hands. Our digital tools carry that same spirit."

**Design tension:** Left side of hero is clean/typographic (authority), right side is rich/handmade (magic). The contrast is intentional.

---

## Site Structure

```
/                   Homepage
/about              Full story, philosophy
/notebuddy          Product page (in development)
```

**Future pages to add:**
- Blog
- Individual product pages as apps launch
- Contact/newsletter signup

---

## Homepage Sections

1. **Hero**
   - "A Learning Studio" label
   - Main headline with "capable humans" in sage italic
   - Supporting copy
   - Craft diorama (right third, dominant)

2. **What We Believe / How We Build**
   - Two-column dark section
   - Terra cotta labels
   - Accessible, parent-facing philosophy

3. **Products**
   - "Learning tools with intention"
   - Product cards with accent color top bars
   - NoteBuddy (terra) and Math app (sage)

4. **For Parents & Educators**
   - Centered, cream-dark background
   - Direct address to buyer

5. **Footer**
   - Logo, tagline, copyright

---

## About Page Sections

1. **Who We Are:** Parents first, small studio, big belief
2. **What We Noticed:** Kids apps are slop, kids deserve better
3. **What We're Building:** Tools that equip, not just entertain
4. **Why It's Personal:** Time with kids (coaching, dojo, classroom), earned belief in their capability

---

## Products

**NoteBuddy** (Music Learning)
- Piano fundamentals
- Pattern recognition meets play
- Status: In Development
- Accent: Terra cotta

**Math App** (Math Foundations)
- Multiplication mastery through understanding
- Status: In Design
- Accent: Sage

---

## Tech Stack

- React 18
- Vite 5
- React Router 6
- CSS Modules
- Cloudflare Pages (deployment)

**Project structure:**
```
/src
  /components    (Layout, Nav, Footer, CraftScene, ProductCard)
  /pages         (Home, About, NoteBuddy)
  /styles        (global.css with CSS variables)
```

---

## Deployment

**Cloudflare Pages via GitHub:**
1. Push repo to GitHub
2. Connect in Cloudflare Dashboard
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add custom domain: designbuildbe.com

Auto-deploys on every push to main.

---

## Future Development Notes

- Blog: Consider MDX or headless CMS integration
- Product pages: Each app gets its own page with deeper feature breakdown
- Email capture: Add newsletter signup before launch
- TikTok integration: Link to channel, potentially embed content
- Mobile nav: Currently hidden on mobile, needs hamburger menu implementation
- Animations: Current animations are CSS-based, could enhance with Framer Motion if needed

---

## Key Design Decisions Log

| Decision | Rationale |
|----------|-----------|
| Craft diorama over abstract graphic | Evokes "kids making things," aligns with philosophy |
| No LEGO aesthetic | Too manufactured, pre-designed; craft materials = "no permission needed" |
| Color palette consistency | Diorama matches site palette for cohesion |
| Clean typography vs. rich visual | Contrast signals "serious studio that values play" |
| Philosophy moved to About | Homepage needed parent-facing language, not internal framework |
| "What We Believe / How We Build" | Accessible, direct, answers parent questions |
| No em dashes | Personal style preference |
