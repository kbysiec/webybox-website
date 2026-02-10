# Webybox - Indie Dev Studio Landing Page

Modern, minimalist landing page built with Next.js 15, TypeScript, and Tailwind CSS featuring full dark mode support.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Logo files (already included):**

   The following SVG logo files are already in the `public/` directory:
   - ✅ `webybox-logo.svg` - Full logo with wordmark (header)
   - ✅ `webybox-icon.svg` - Icon only (hero section)

   **Optional - Add favicon files for better browser support:**

   Generate these from `webybox-icon.svg` and place in `public/`:
   - `favicon-16x16.png` - 16x16px favicon
   - `favicon-32x32.png` - 32x32px favicon
   - `apple-touch-icon.png` - 180x180px for Apple devices
   - `og-image.png` - 1200x630px for social media sharing

   Use [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net) to generate.

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
webybox/
├── app/
│   ├── layout.tsx          # Root layout with metadata & ThemeProvider
│   ├── page.tsx            # Home page (all sections)
│   ├── privacy/page.tsx    # Privacy policy page
│   └── globals.css         # Global styles & CSS variables
├── components/
│   ├── ui/                 # Design system components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Container.tsx
│   ├── ThemeToggle.tsx     # Dark/Light mode toggle
│   ├── ThemeProvider.tsx   # next-themes wrapper
│   └── sections/           # Landing page sections
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Projects.tsx
│       ├── About.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── lib/
│   └── utils.ts            # Utility functions (cn)
├── public/                 # Static assets (add your files here!)
├── tailwind.config.ts      # Tailwind configuration with brand colors
└── tsconfig.json
```

## 🎨 Brand Colors

The design uses the exact colors from your logo, defined in `tailwind.config.ts`:

- **Primary Violet:** `#BC96E4` (brand.violet.400) - Main brand accent
- **Deep Ink:** `#341C4D` (brand.ink.950) - Primary dark color
- **Accent Mint:** `#3dd5cc` (brand.mint.500) - Secondary accent (used sparingly)

All colors have full 50-950 shades for flexible design usage in both light and dark modes.

## 🌓 Dark Mode

Dark mode is fully implemented using `next-themes`:

- **Toggle:** Sun/moon icon in the header
- **Default:** Uses system preference (`prefers-color-scheme`)
- **Persistent:** User's choice is saved in localStorage
- **Accessible:** All components optimized for both modes

## ✨ Features

- **Responsive Design:** Mobile-first, looks great on all devices
- **Modern Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS
- **Accessibility:** Focus states, ARIA labels, semantic HTML
- **Performance:** Optimized images, minimal dependencies
- **SEO Ready:** Metadata, Open Graph, Twitter Cards
- **Smooth Animations:** CSS-only fade and slide effects
- **Clean Code:** TypeScript, organized structure, reusable components

## 📝 Customization

### Update Content

1. **Edit sections:** Modify files in `components/sections/`
2. **Change projects:** Edit the `projects` array in `components/sections/Projects.tsx`
3. **Update features:** Edit the `features` array in `components/sections/Features.tsx`
4. **Change contact info:** Update email and links in `components/sections/Contact.tsx`

### Update Metadata

Edit SEO information in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  // ... more metadata
};
```

### Modify Colors

Update brand colors in `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    violet: {
      400: "#BC96E4", // Brand violet from logo
      950: "#341C4D", // Deep ink from logo
      // ... other shades
    }
  }
}
```

## 🏗️ Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📦 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Theme:** next-themes
- **Icons:** Heroicons (inline SVG)
- **Font:** Inter (Google Fonts)

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📧 Contact Configuration

Update the contact information in:

1. **Email:** `components/sections/Contact.tsx` - Change `contact@webybox.com`
2. **GitHub:** `components/sections/Contact.tsx` - Update GitHub URL
3. **Footer:** `components/sections/Footer.tsx` - Modify operator info

## 🎯 Next Steps

- [x] Logo files added (SVG format)
- [x] Brand colors configured (#BC96E4, #341C4D)
- [ ] Generate and add favicon files (optional)
- [ ] Update contact email and GitHub link
- [ ] Customize project descriptions when ready
- [ ] Configure your domain and deployment
- [ ] Add analytics (optional)

## 📄 License

© 2026 Webybox. Operated by Agile Players Kamil Bysiec.

---

Built with ❤️ using modern web technologies.
