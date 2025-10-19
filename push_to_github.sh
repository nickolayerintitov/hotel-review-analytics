#!/bin/bash

echo "🚀 Pushing Hotel Review Analytics to GitHub..."
echo "=============================================="

# Check if we're in the right directory
if [ ! -f "hotel_v2.ipynb" ]; then
    echo "❌ Error: Please run this script from the website directory"
    exit 1
fi

# Check git status
echo "📊 Git Status:"
git status --short

echo ""
echo "🔐 Authentication Required:"
echo "You'll need to authenticate with GitHub. Choose one of the following:"
echo ""
echo "Option 1: Use Personal Access Token"
echo "1. Go to https://github.com/settings/tokens"
echo "2. Generate a new token with 'repo' permissions"
echo "3. Use your username and the token as password when prompted"
echo ""
echo "Option 2: Use GitHub CLI (if installed)"
echo "1. Run: gh auth login"
echo "2. Follow the prompts"
echo ""

# Try to push
echo "🔄 Attempting to push to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 Repository: https://github.com/nickolayerintitov/hotel-review-analytics"
    echo ""
    echo "📋 Next steps:"
    echo "1. Visit your repository on GitHub"
    echo "2. Enable GitHub Pages if you want to host the website"
    echo "3. Share your project with others!"
else
    echo ""
    echo "❌ Push failed. Please try one of the authentication methods above."
    echo ""
    echo "Manual steps:"
    echo "1. git push -u origin main"
    echo "2. Enter your GitHub username and password/token when prompted"
fi
