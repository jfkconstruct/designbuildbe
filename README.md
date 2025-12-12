# Design.Build.Be

A learning studio website built with React + Vite.

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/src
  /components
    Layout.jsx        # Shared layout with Nav + Footer
    Nav.jsx           # Navigation component
    Footer.jsx        # Footer component
    CraftScene.jsx    # Hero diorama SVG
    ProductCard.jsx   # Reusable product card
  /pages
    Home.jsx          # Homepage
    About.jsx         # About page (placeholder)
    NoteBuddy.jsx     # Product page (placeholder)
  /styles
    global.css        # Global styles & CSS variables
  App.jsx             # Router setup
  main.jsx            # Entry point
```

## Deploy to Cloudflare Pages

### Option 1: Direct Upload
1. Run `npm run build`
2. Go to Cloudflare Dashboard → Workers & Pages → Create
3. Upload the `dist` folder
4. Add custom domain

### Option 2: GitHub Integration (Recommended)
1. Push this repo to GitHub
2. Go to Cloudflare Dashboard → Workers & Pages → Create
3. Connect to your GitHub repo
4. Build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy
6. Add custom domain: designbuildbe.com

Auto-deploys on every push to main.

## Adding New Pages

1. Create page component in `/src/pages/`
2. Create CSS module in `/src/pages/`
3. Add route in `App.jsx`
4. Add nav link in `Nav.jsx` (if needed)

## Color Palette

- Cream: `#FAF8F5`
- Cream Dark: `#E8DFD4`
- Terra Cotta: `#C4703E`
- Sage: `#4A7C59`
- Espresso: `#2C2416`

## Fonts

- Headings/Body: Source Serif 4
- UI/Labels: DM Sans
