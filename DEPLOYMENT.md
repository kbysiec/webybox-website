# 🚀 GitHub Pages Deployment Guide

## Konfiguracja Repozytorium

### 1. Utwórz repozytorium na GitHub

```bash
# Jeśli jeszcze nie masz repozytorium:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TWOJ-USERNAME/webybox.git
git push -u origin main
```

### 2. Włącz GitHub Pages

1. Przejdź do swojego repozytorium na GitHub
2. Kliknij **Settings** (Ustawienia)
3. W menu bocznym kliknij **Pages**
4. W sekcji "Build and deployment":
   - **Source:** wybierz `GitHub Actions`

### 3. Automatyczny Deployment

Po skonfigurowaniu Pages, każdy push do brancha `main` automatycznie uruchomi deployment!

```bash
# Zmień coś w projekcie
git add .
git commit -m "Update content"
git push
```

GitHub Actions automatycznie:
1. Zbuduje projekt (`npm run build`)
2. Wygeneruje statyczne pliki do folderu `out/`
3. Opublikuje je na GitHub Pages

### 4. Twoja strona będzie dostępna pod adresem:

```
https://TWOJ-USERNAME.github.io/webybox/
```

## 📝 Ważne Zmiany w Konfiguracji

### next.config.ts
```typescript
{
  output: "export",              // Generuje statyczne pliki
  basePath: "/webybox",          // Dopasuj do nazwy repo
  images: { unoptimized: true }, // GitHub Pages nie obsługuje optymalizacji obrazów
}
```

### GitHub Actions Workflow
Plik: `.github/workflows/deploy.yml`
- Automatycznie builduje i deployuje na każdy push do `main`
- Używa Node.js 20
- Cache npm dla szybszych buildów

## 🔧 Lokalne Testowanie

Przetestuj build produkcyjny lokalnie:

```bash
# Build projektu
npm run build

# Serwuj folder out/
npx serve out
```

Lub użyj http-server:
```bash
npm install -g http-server
http-server out -p 3000
```

## 🎯 Custom Domain (Opcjonalnie)

Jeśli chcesz użyć własnej domeny:

1. Dodaj plik `public/CNAME` z Twoją domeną:
   ```
   webybox.com
   ```

2. Zaktualizuj `next.config.ts`:
   ```typescript
   basePath: "", // Usuń basePath dla custom domain
   ```

3. W ustawieniach DNS dodaj rekord:
   ```
   Type: CNAME
   Name: www
   Value: TWOJ-USERNAME.github.io
   ```

## 🐛 Troubleshooting

### Strona nie działa po deployment

1. **Sprawdź basePath** - upewnij się, że w `next.config.ts` basePath to `/webybox`
2. **Sprawdź GitHub Actions** - idź do zakładki "Actions" i zobacz logi
3. **Sprawdź Pages settings** - upewnij się, że source to "GitHub Actions"

### Obrazy się nie ładują

- Upewnij się, że `images: { unoptimized: true }` jest w next.config.ts
- Używaj relatywnych ścieżek do obrazów: `/icon.svg` nie `icon.svg`

### CSS się nie ładuje

- Upewnij się, że masz plik `public/.nojekyll`
- Sprawdź czy build się powiódł w GitHub Actions

## 📊 Monitorowanie Deployments

1. Idź do zakładki **Actions** w repozytorium
2. Zobacz status każdego deploymentu
3. Kliknij na deployment, aby zobaczyć szczegółowe logi

## 🔄 Aktualizacja Strony

```bash
# 1. Wprowadź zmiany
# 2. Commit i push
git add .
git commit -m "Update: opis zmian"
git push

# 3. Deployment dzieje się automatycznie!
# 4. Sprawdź status w Actions
# 5. Strona zaktualizuje się w ~1-2 minuty
```

## ⚡ Quick Commands

```bash
# Development
npm run dev

# Production build (lokalnie)
npm run build

# Test production build
npx serve out

# Deploy (automatyczny przez GitHub Actions)
git push
```

---

**Gotowe!** 🎉 Twoja strona jest teraz live na GitHub Pages!

**URL:** https://TWOJ-USERNAME.github.io/webybox/
