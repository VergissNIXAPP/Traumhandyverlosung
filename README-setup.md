# Traumhandyverlosung – Einbindung

Diese Komponente ist für **Next.js 14 (App Router)** mit **Tailwind** und **shadcn/ui** gedacht.

## 1) Neues Projekt erstellen
```bash
npx create-next-app@latest traumhandy
cd traumhandy
```

## 2) Tailwind installieren und einrichten
Folge der offiziellen Anleitung (Kurzform):
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
`tailwind.config.js` content:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { extend: {} },
  plugins: [],
}
```
In `app/globals.css` Tailwind-Basics hinzufügen (falls nicht vorhanden):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 3) shadcn/ui & lucide & framer-motion
```bash
npm install framer-motion lucide-react class-variance-authority tailwind-merge
# shadcn installieren
npx shadcn@latest init
# anschließend die benötigten Komponenten hinzufügen
npx shadcn@latest add button card badge input label select accordion dialog progress
```

> Hinweis: `@/components/ui/...` kommt von shadcn/ui. Die Befehle oben generieren die Dateien in `components/ui/`.

## 4) Komponente ablegen
Lade die Datei **Traumhandyverlosung.tsx** nach `app/Traumhandyverlosung.tsx` oder `components/Traumhandyverlosung.tsx`.

## 5) Seite anlegen (App Router)
Ersetze `app/page.tsx` mit:
```tsx
import React from "react";
import Traumhandyverlosung from "./Traumhandyverlosung";

export default function Page() {
  return <Traumhandyverlosung />;
}
```

## 6) Dev-Server starten
```bash
npm run dev
# öffne http://localhost:3000
```

---

### Deployment
- **Vercel**: Repo zu GitHub pushen → „Import Project“ in Vercel → deploy.
- **Netlify/Render**: Analog, Build-Command `next build`, Output `.next`.

### Nächste Schritte (optional)
- Checkout (Stripe/Mollie) anbinden
- Gewinnerziehung serverseitig (Cron/Edge) + E-Mail
- Rechtstexte/Impressum von Fachleuten prüfen
