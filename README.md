# Traumhandyverlosung

Moderne Landingpage für eine Smartphone-Verlosung (Next.js 14, App Router, Tailwind, minimale UI-Komponenten).

## Lokal starten
```bash
npm install
npm run dev
# http://localhost:3000
```

## Push zu GitHub
```bash
git init
git add .
git commit -m "Initial commit – Traumhandyverlosung"
git branch -M main
git remote add origin https://github.com/<DEIN_USERNAME>/traumhandyverlosung.git
git push -u origin main
```

## Deploy (Vercel)
1. Repo bei GitHub erstellen & pushen
2. In Vercel auf „Add New Project“ → Repo auswählen → Deploy
3. Fertig!

### Hinweis
- Die UI-Komponenten unter `components/ui/` sind minimal und kompatibel zur Import-Struktur aus dem Chat (ähnlich shadcn/ui), benötigen **keine** extra Installation.
- Wenn du echtes shadcn/ui einsetzen willst, lösche den Ordner `components/ui/` und folge der shadcn-Anleitung (Komponenten generieren) und passe ggf. Styles an.
- Rechtstexte (AGB, Datenschutz, Impressum) sind Platzhalter.
