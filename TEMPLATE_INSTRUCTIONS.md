# 🏔️ Universal Tourism Website — Starter Template Guide

Yeh ek **White-Label, Production-Ready Tourism & Travel Website Starter Template** hai jo Next.js 14 (App Router), TypeScript, aur Tailwind CSS par bana hai.

Is template ko use kar ke aap kisi bhi naye client ki website **sirf 1 minute** me launch kar sakte hain.

---

## ⚡ Quick Start: Antigravity AI Prompt (Copy & Paste)

Jab bhi aap is template se naya project shuru karein, Antigravity chat me sirf ye prompt aur client ka logo paste kar dain:

```text
Naya tourism project configure karna hai:

1. Company Name: [Client Ka Pura Naam, e.g. Karakoram Horizon Travels]
2. Short Name: [Short Name, e.g. Karakoram Horizon]
3. Tagline: [Optional Tagline]
4. Phone & WhatsApp: [+92 300 1234567]
5. Office Address: [Office 12, Floor 2, Commercial Area, City]
6. Social Links:
   - Instagram: https://instagram.com/client_handle
   - Facebook: https://facebook.com/client_page
7. Logo: [Logo Image attach kar dain]
8. Color Palette: [Logo se sample kr lo YA Emerald Green & Gold / Deep Navy & Coral]
9. Reviews & Rating: 5.0 ★ (12 Reviews)
10. Custom Tours / Prices: [Agar specific prices/tours hon to de dain, warna default packages]

Ye data apply kar ke rounded circular favicon generate karo aur dev server run kr do!
```

---

## 📁 Project Architecture & Control Files

Is website ka **100% data aur colors** sirf 2 files se control hota hai:

### 1. `src/config.ts` (Business Data & Content)
- **Company Profile**: `businessName`, `shortName`, `tagline`, `subTagline`, `email`.
- **Contact Info**: `phone`, `hotlineDisplay`, `whatsappNumber`, `whatsappLink` (automatic pre-filled booking message).
- **Address & Socials**: `addresses.lahore`, `socials.instagram`, `socials.facebook`, `socials.tiktok`.
- **Social Proof**: `stats`, verified reviews rating (`5.0 ★ (8)`).
- **Tour Packages**: 
  - Price, duration, category (`group`, `custom`, `by-air`, `weekend`).
  - Pricing tiers: Quad, Triple, Twin, Private Couple sharing.
  - Departure schedule: `Every Thursday & Friday Night` etc.
  - Highlights, inclusions, exclusions, day-by-day itineraries.
- **FAQs, Testimonials & Gallery Moments**.

### 2. `src/theme.config.ts` (Color Engine & Themes)
Isme **6 Ready-made Luxury Presets** hain:
- `logoBrand`: Deep Navy (`#17244e`), Mountain Teal (`#0f766e`), Sunrise Orange (`#ff9f49`).
- `ocean`: Ocean Azure (`#0284c7`) & Sunset Gold (`#f59e0b`).
- `emerald`: Alpine Emerald (`#059669`) & Goldenrod (`#eab308`).
- `sapphire`: Royal Sapphire (`#2563eb`) & Coral Rose (`#f43f5e`).
- `imperialGold`: Imperial Gold (`#d97706`) & Midnight Onyx (`#0a0a0c`).
- `crimson`: Karakoram Crimson (`#e11d48`) & Sunset Amber (`#f59e0b`).

Theme switch karne ke liye sirf line change karni hai:
```typescript
export const activeThemeKey: keyof typeof themePresets = "emerald";
```
Ya `activeTheme` me custom HEX colors daal dain — pura UI (buttons, cards, badges, gradients, glowing stars, header, footer) khud adapt ho jayega!

### 3. Branding Assets (`public/`)
- `public/images/logo.png` — Main Client Logo (Square / High Res).
- `public/favicon.png` & `public/favicon.ico` — Anti-aliased circular favicon.

---

## 🛠️ Developer Commands

```bash
# Dependencies install karein
npm install

# Local development server start karein (http://localhost:3000)
npm run dev

# Production build test karein
npm run build
```

---

## 🌟 GitHub Template Setup Checklist
1. GitHub repository settings me jaa kar **☑ Template repository** enable karein.
2. Naye client ke waqt **"Use this template"** click karein.
3. Antigravity me open kar ke upar wala prompt paste karein!
