# 🚀 Quick Start - Webybox

## Instalacja i uruchomienie (5 minut)

### 1. Zainstaluj zależności

```bash
npm install
```

To zainstaluje:
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- next-themes (dark mode)
- clsx + tailwind-merge (utility)

### 2. Uruchom serwer deweloperski

```bash
npm run dev
```

### 3. Otwórz przeglądarkę

Przejdź do: **http://localhost:3000**

---

## ✅ Co już działa

- ✅ **Logo SVG** - w headerze i hero section
- ✅ **Dark mode** - toggle w headerze, zapamiętywanie wyboru
- ✅ **Kolory brandu** - `#BC96E4` i `#341C4D` z Twojego logo
- ✅ **Responsywność** - mobile-first design
- ✅ **Wszystkie sekcje** - Header, Hero, Features, Projects, About, Contact, Footer
- ✅ **Privacy policy** - osobna strona `/privacy`
- ✅ **SEO metadata** - title, description, Open Graph
- ✅ **Accessibility** - focus states, ARIA labels

---

## 📝 Dostosowanie zawartości

### Zmień email kontaktowy

Edytuj: `components/sections/Contact.tsx`

```typescript
const email = "twoj@email.com";  // Linia 10
```

### Zmień link do GitHub

Edytuj: `components/sections/Contact.tsx`

```tsx
<a href="https://github.com/twoj-username">  // Linia 59
```

### Dodaj/edytuj projekty

Edytuj: `components/sections/Projects.tsx`

```typescript
const projects = [
  {
    name: "Twoja Aplikacja",
    description: "Opis aplikacji...",
    status: "Coming soon",
    tags: ["Mobile", "Web"],
  },
  // ... więcej projektów
];
```

### Zmień features

Edytuj: `components/sections/Features.tsx`

```typescript
const features = [
  {
    icon: <svg>...</svg>,
    title: "Twój feature",
    description: "Opis feature...",
  },
  // ... więcej features
];
```

---

## 🎨 Dostosowanie designu

### Zmień kolory

Edytuj: `tailwind.config.ts`

```typescript
colors: {
  brand: {
    violet: {
      400: "#BC96E4",  // Główny kolor akcji
      950: "#341C4D",  // Ciemny kolor
      // ... pozostałe odcienie
    }
  }
}
```

### Zmień czcionkę

Edytuj: `app/layout.tsx`

```typescript
import { Inter } from "next/font/google";
// Zmień na: import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// Zmień na: const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });
```

---

## 🏗️ Build produkcyjny

```bash
# Stwórz build
npm run build

# Uruchom produkcyjny serwer
npm start
```

---

## 📦 Struktura projektu

```
webybox/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout (metadata, ThemeProvider)
│   ├── page.tsx           # Strona główna
│   ├── privacy/page.tsx   # Polityka prywatności
│   └── globals.css        # Globalne style
├── components/
│   ├── ui/                # Komponenty design systemu
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Container.tsx
│   ├── sections/          # Sekcje landing page
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── ThemeProvider.tsx  # Wrapper next-themes
│   └── ThemeToggle.tsx    # Przełącznik dark/light
├── lib/
│   └── utils.ts           # Utility functions
├── public/
│   ├── webybox-logo.svg   # ✅ Logo z wordmark
│   └── webybox-icon.svg   # ✅ Ikona
├── tailwind.config.ts     # Tailwind + kolory brandu
├── tsconfig.json
├── next.config.ts
└── package.json
```

---

## 🐛 Troubleshooting

### Port 3000 zajęty?

```bash
npm run dev -- -p 3001
```

### Problemy z cache?

```bash
rm -rf .next
npm run dev
```

### TypeScript errors?

```bash
npm run lint
```

---

## 🎯 Następne kroki

1. **Wygeneruj favicony** - Zobacz `FAVICON-GUIDE.md`
2. **Dostosuj treści** - Email, GitHub, projekty
3. **Deploy** - Vercel, Netlify, lub inny hosting
4. **Dodaj analytics** - Google Analytics, Plausible, itp.
5. **Custom domain** - Skonfiguruj swoją domenę

---

## 💡 Porady

- **Dark mode** działa automatycznie według ustawień systemowych
- **SVG logo** skaluje się idealnie na każdym urządzeniu
- **Tailwind classes** można łatwo modyfikować w każdym komponencie
- **TypeScript** pomaga uniknąć błędów
- **Mobile-first** - testuj na telefonie!

---

## 📚 Przydatne linki

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [next-themes Docs](https://github.com/pacocoursey/next-themes)
- [Heroicons](https://heroicons.com) - ikony użyte w projekcie

---

**Powodzenia z Webybox! 🚀**
