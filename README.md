# Usman Siddiqui — Creative Developer Portfolio

A premium, scroll-linked immersive portfolio built with **Next.js 14**, **TypeScript**, **Framer Motion**, and **Tailwind CSS**. Features cinematic project detail pages inspired by Apple product showcases and Awwwards-winning websites.

## ✨ Features

- **Scrollytelling Hero** — Canvas-based frame-by-frame scroll animation
- **Cinematic Project Pages** — Fullscreen heroes, scroll-driven screenshot showcases with browser frames, exploded 3D layouts
- **Smooth Scrolling** — Lenis integration for silk-smooth scroll experience
- **Glassmorphism Design** — Dark theme with glass panels, soft shadows, and premium gradients
- **Responsive** — Fully mobile-friendly with simplified animations on smaller screens
- **Accessibility** — `prefers-reduced-motion` support disables heavy animations
- **Performance** — Static site generation (SSG), lazy-loaded images via `next/image`, GPU-accelerated animations

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | Framework (App Router, SSG) |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations & scroll-linked transforms |
| Lenis | Smooth scrolling |
| Lucide React | Icon system |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout (Outfit font, theme)
│   ├── globals.css                 # Global styles & glassmorphism utilities
│   └── projects/[slug]/           # Dynamic project detail pages
│       ├── page.tsx               # Server component (metadata, static params)
│       └── ProjectPageClient.tsx  # Client component (cinematic experience)
├── components/
│   ├── Navbar.tsx                 # Main navigation
│   ├── ScrollyCanvas.tsx          # Frame-by-frame scroll canvas
│   ├── Overlay.tsx                # Scroll-synced text overlays
│   ├── Projects.tsx               # Project cards grid
│   ├── About.tsx, Skills.tsx, etc # Content sections
│   ├── icons/                     # Shared icon components
│   └── project/                   # Cinematic project page components
│       ├── ProjectHero.tsx        # Fullscreen hero
│       ├── ScrollSequence.tsx     # 6-stage scroll showcase
│       ├── BrowserFrame.tsx       # macOS browser frame
│       ├── FeatureHighlight.tsx   # Feature sections
│       └── ...
├── data/
│   └── projects.ts               # Project metadata & content
public/
├── projects/                     # Project screenshots
└── sequence/                     # Scrollytelling frame images
```

## 📝 License

This project is private. All rights reserved.
