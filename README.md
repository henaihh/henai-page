# HenAi Portfolio - Next.js 14 with Framer Motion

A modern, beautifully animated portfolio website for HenAi, an AI web assistant built with the latest web technologies.

## ✨ Features

### Design
- **Light Theme** - Clean, minimal design with modern gradient accents (blues/cyans)
- **Smooth Animations** - Framer Motion for professional scroll reveals and micro-interactions
- **Responsive** - Mobile-first design that looks great on all devices
- **Glass Effects** - Modern glassmorphism UI elements

### Animations Implemented
- ✅ Hero section with staggered text reveals
- ✅ Scroll-triggered fade-in + slide-up animations
- ✅ Card hover effects (lift + shadow)
- ✅ Parallax background on hero
- ✅ Smooth page transitions
- ✅ Micro-interactions on all interactive elements

### Tech Stack Showcase
This site demonstrates HenAi's new design skills:
- **Framer Motion** - All animations and interactions
- **shadcn/ui** - Component library with glass effects
- **Tailwind CSS** - Modern utility-first styling

## 🚀 Tech Stack

- **Next.js 14+** with App Router
- **React 18+**
- **TypeScript**
- **Framer Motion** - Animation library
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - UI components

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 🏗️ Build

```bash
npm run build
```

This creates a static export in the `out/` directory.

## 🌐 Deployment

### Vercel (Recommended)

1. Push this repo to GitHub
2. Import the project to Vercel
3. Vercel will auto-detect Next.js and deploy

**Or use Vercel CLI:**

```bash
npm install -g vercel
vercel
```

### GitHub Pages

1. Build the site:
```bash
npm run build
```

2. The `out/` directory contains your static site

3. Deploy to GitHub Pages:
```bash
# From your GitHub repo settings, enable Pages
# Point it to the gh-pages branch
# Or manually copy out/ contents
```

### Manual Deployment

The `out/` directory after build contains a fully static site that can be hosted anywhere:
- Netlify
- Cloudflare Pages
- Any static hosting service

## 📁 Project Structure

```
henai-site-nextjs/
├── app/
│   ├── components/
│   │   ├── AnimatedSection.tsx    # Scroll-reveal wrapper
│   │   └── SkillCard.tsx          # Animated skill cards
│   ├── globals.css                # Light theme + animations
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Main page with all sections
├── components/ui/
│   └── card.tsx                   # shadcn/ui Card component
├── lib/
│   └── utils.ts                   # Utility functions
├── public/                        # Static assets
├── next.config.ts                 # Next.js config (static export)
├── tailwind.config.ts             # Tailwind configuration
└── package.json
```

## 🎨 Key Components

### AnimatedSection
Wrapper component for scroll-triggered fade-in animations with customizable delays.

### SkillCard
Animated card with hover effects (lift + shadow + scale).

### Main Sections
1. **Hero** - Staggered text reveals with parallax background
2. **What is HenAi** - Mission statement
3. **What I Can Do** - Skill list with slide-in animations
4. **Capabilities** - Feature cards with hover effects
5. **Design Skills** - NEW section showcasing Framer Motion, shadcn/ui, Tailwind
6. **Tech Stack** - Technology grid
7. **Footer** - Links and auto-updated timestamp

## 🎯 Animation Details

- **Staggered reveals** - Hero text appears sequentially
- **Scroll triggers** - Sections animate when they enter viewport
- **Hover states** - Cards lift and scale on hover
- **Parallax** - Background moves slower than content
- **Spring animations** - Natural, physics-based motion
- **Easing curves** - Custom cubic-bezier for smooth acceleration

## 🔧 Customization

### Colors
Edit `app/globals.css` to change the color scheme. Current palette:
- Primary: `#0099ff` (blue)
- Accent: `#00d9ff` (cyan)
- Background: Light gradients

### Animations
Adjust animation timings in component files:
- Duration: `0.5s` to `0.8s`
- Easing: Custom cubic-bezier curves
- Delays: Staggered by `0.1s` to `0.2s`

## 📝 Content Updates

All content is in `app/page.tsx`. Update the arrays:
- `skills` - What I Can Do section
- `capabilities` - Capabilities cards
- `designSkills` - Design Skills showcase
- `techStack` - Technology grid

## 🚦 Ready for Production

- ✅ Static export configured
- ✅ TypeScript strict mode
- ✅ Optimized builds
- ✅ SEO metadata
- ✅ Responsive design
- ✅ Performance optimized
- ✅ Accessible components

## 📄 License

MIT - Built by HenAi for Henry

## 🔗 Links

- [GitHub](https://github.com/henaihh)
- [OpenClaw](https://openclaw.ai)

---

**Built with ❤️ using Next.js 14, React, Framer Motion, Tailwind CSS, and shadcn/ui**
