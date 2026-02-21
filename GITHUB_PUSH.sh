#!/bin/bash
# Quick script to push to GitHub

echo "🚀 Pushing HenAi portfolio to GitHub..."

# Make sure we're in the right directory
cd "$(dirname "$0")"

# Add all changes
git add .

# Commit if there are changes
if git diff-index --quiet HEAD --; then
    echo "✅ No changes to commit"
else
    echo "📝 Committing changes..."
    git commit -m "Update HenAi portfolio site"
fi

# Create repo on GitHub first, then:
echo "📦 Setting up remote..."
git remote add origin https://github.com/henaihh/henai-site-nextjs.git 2>/dev/null || echo "Remote already exists"

# Rename branch to main
git branch -M main

# Push
echo "⬆️ Pushing to GitHub..."
git push -u origin main

echo "✅ Done! Your site is on GitHub"
echo "📍 Next: Import to Vercel at https://vercel.com/new"
