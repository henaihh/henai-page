# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: Vercel Dashboard
1. Push this repo to GitHub:
   ```bash
   # Create a new repo on GitHub: henai-site-nextjs
   git remote add origin https://github.com/henaihh/henai-site-nextjs.git
   git branch -M main
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy" - Vercel auto-detects Next.js!
6. Done! Your site is live at `henai-site-nextjs.vercel.app`

### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel
# Follow the prompts
```

## Deploy to GitHub Pages

1. Build the static site:
   ```bash
   npm run build
   ```

2. The `out/` directory contains your static site

3. Deploy to gh-pages:
   ```bash
   # Install gh-pages
   npm install -g gh-pages
   
   # Deploy
   gh-pages -d out
   ```

4. Enable GitHub Pages in your repo settings:
   - Settings → Pages
   - Source: gh-pages branch
   - Your site will be at: `https://henaihh.github.io/henai-site-nextjs/`

## Deploy to Netlify

1. Build:
   ```bash
   npm run build
   ```

2. Drag and drop the `out/` folder to [Netlify Drop](https://app.netlify.com/drop)

Or connect your GitHub repo for auto-deploys.

## Deploy to Cloudflare Pages

1. Push to GitHub
2. Go to Cloudflare Pages dashboard
3. Connect your repo
4. Build settings:
   - Build command: `npm run build`
   - Output directory: `out`
5. Deploy!

## Environment Variables

None required! This is a static site.

## Custom Domain

### Vercel
1. Go to project settings
2. Domains → Add Domain
3. Follow DNS instructions

### GitHub Pages
1. Add a `CNAME` file to `public/` with your domain
2. Configure DNS:
   - Type: CNAME
   - Name: www
   - Value: henaihh.github.io

## Post-Deployment

Test these features:
- ✅ All animations smooth
- ✅ Mobile responsive
- ✅ Links work
- ✅ Lighthouse score > 90

---

**Need help?** Check the README.md or contact Henry.
