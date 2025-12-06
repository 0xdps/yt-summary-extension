# Quick Setup Guide

## What Changed

This repository has been completely reset and refocused as a **YouTube-only** video summarization extension. All non-YouTube functionality has been removed.

## Next Steps to Complete Setup

### 1. Update Repository Information

Edit `package.json` and update:
- `author`: Replace "Your Name" with your actual name
- `repository.url`: Replace with your actual GitHub repository URL

### 2. Update README Links

Edit `README.md` and:
- Replace `<your-repo-url>` with your actual repository URL
- Add your own screenshots to the `screenshots/` directory
- Update installation links when you publish to stores

### 3. Update Manifest Files

Edit both `src/manifest.json` and `src/manifest.v2.json`:
- Update icons if you want to use custom ones
- Verify version number (currently 1.7.0)

### 4. Branding (Optional)

If you want to change the name from "YouTube Summary with ChatGPT":

1. Update `src/config/index.ts` - Change `APP_TITLE`
2. Update all `src/_locales/*/messages.json` files
3. Update `README.md` title and descriptions
4. Update `package.json` name and description

### 5. Configure Git

```bash
# Initialize git (if not already done)
git init

# Add your remote repository
git remote add origin https://github.com/yourusername/your-repo-name.git

# Make initial commit
git add .
git commit -m "Initial commit: YouTube-only extension"
git push -u origin main
```

### 6. Test the Extension

```bash
# Build the extension
npm run build

# The output will be in:
# - build/chromium/ (for Chrome/Edge)
# - build/firefox.zip (for Firefox)
```

### 7. Development Workflow

```bash
# Development mode (auto-rebuild on changes)
npm run dev

# Production build
npm run build

# Lint code
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

## What Was Removed

- ✗ Google search integration
- ✗ Bing search integration  
- ✗ Bilibili video support
- ✗ Generic webpage summaries
- ✗ PubMed, GitHub, Nikkei, NewsPicks support
- ✗ Amazon review summaries
- ✗ All search engine configurations

## What Remains

- ✓ YouTube video summarization
- ✓ ChatGPT integration
- ✓ English language support (other locales removed for simplicity)
- ✓ Transcript extraction
- ✓ Custom prompts
- ✓ Dark/Light mode
- ✓ iOS/macOS Safari support

## File Structure

```
src/
├── assets/           # Images and styles
├── background/       # Background service worker
├── config/          # Configuration and settings
├── content-script/  # YouTube page injection
├── options/         # Extension settings page
├── popup/          # Extension popup (if needed)
├── utils/          # Utility functions
├── _locales/       # Translations (English only)
├── manifest.json   # Chrome manifest (v3)
└── manifest.v2.json # Firefox manifest (v2)
```

## Publishing Checklist

Before publishing to Chrome Web Store or Firefox Add-ons:

- [ ] Update version number in manifests
- [ ] Add proper icons (16, 32, 48, 128px)
- [ ] Test on multiple YouTube videos
- [ ] Test on Chrome and Firefox
- [ ] Update store descriptions
- [ ] Add screenshots for store listings
- [ ] Review privacy policy requirements
- [ ] Test with different ChatGPT/API configurations

## Support

- Documentation: See README.md
- Contributing: See CONTRIBUTING.md
- Changelog: See CHANGELOG.md
