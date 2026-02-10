# Favicon Generation Guide

This guide explains how to generate favicon files for Webybox from the existing SVG icon.

## Quick Method (Recommended)

### Using RealFaviconGenerator.net

1. **Visit:** [https://realfavicongenerator.net](https://realfavicongenerator.net)

2. **Upload:** `public/webybox-icon.svg`

3. **Configure:**
   - **iOS:** Keep default settings
   - **Android:** Use theme color `#BC96E4`
   - **Windows:** Use tile color `#341C4D`
   - **macOS Safari:** Keep default

4. **Generate and Download**

5. **Place files in `public/` directory:**
   ```
   public/
   ├── favicon-16x16.png
   ├── favicon-32x32.png
   ├── apple-touch-icon.png
   ├── android-chrome-192x192.png
   ├── android-chrome-512x512.png
   ├── favicon.ico
   └── site.webmanifest (optional)
   ```

## Alternative Method: Using Favicon.io

1. **Visit:** [https://favicon.io/favicon-converter/](https://favicon.io/favicon-converter/)

2. **Upload:** `public/webybox-icon.svg`

3. **Download** the generated zip file

4. **Extract** and place files in `public/` directory

## Manual Method (macOS/Linux)

If you have ImageMagick installed:

```bash
# Navigate to project root
cd /Users/kamilbysiec/LocalRepository/development/js/webybox

# Convert SVG to PNG (requires rsvg-convert)
rsvg-convert -w 512 -h 512 public/webybox-icon.svg > temp-512.png

# Generate different sizes
convert temp-512.png -resize 16x16 public/favicon-16x16.png
convert temp-512.png -resize 32x32 public/favicon-32x32.png
convert temp-512.png -resize 180x180 public/apple-touch-icon.png
convert temp-512.png -resize 192x192 public/android-chrome-192x192.png
convert temp-512.png public/android-chrome-512x512.png

# Generate .ico file
convert public/favicon-32x32.png public/favicon-16x16.png public/favicon.ico

# Clean up
rm temp-512.png
```

## OG Image (Social Media Preview)

For the Open Graph image (`og-image.png`), create a 1200x630px banner:

### Option 1: Use Figma/Canva

1. Create a 1200x630px canvas
2. Add the Webybox logo
3. Add text: "Webybox - Indie Dev Studio"
4. Use brand colors: `#BC96E4` and `#341C4D`
5. Export as PNG to `public/og-image.png`

### Option 2: Simple Logo Export

If you just want to use the logo:

```bash
rsvg-convert -w 1200 -h 630 -b "#341C4D" public/webybox-logo.svg > public/og-image.png
```

## Verify Installation

After generating and placing files, verify they're working:

1. **Start dev server:** `npm run dev`
2. **Open:** `http://localhost:3000`
3. **Check browser tab** for favicon
4. **Use browser DevTools** to inspect `<head>` for meta tags

## Files Checklist

- [ ] `favicon-16x16.png` (16x16px)
- [ ] `favicon-32x32.png` (32x32px)
- [ ] `apple-touch-icon.png` (180x180px)
- [ ] `favicon.ico` (multi-size .ico file)
- [ ] `og-image.png` (1200x630px)
- [ ] `android-chrome-192x192.png` (optional, for PWA)
- [ ] `android-chrome-512x512.png` (optional, for PWA)

## Notes

- The layout.tsx already references these files in metadata
- SVG files are already optimized and included
- Favicon files are optional but recommended for better cross-browser support
- OG image is important for social media sharing previews

---

**Brand Colors Reference:**
- Primary: `#BC96E4`
- Dark: `#341C4D`
