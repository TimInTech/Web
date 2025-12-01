# TimInTech LinkHub 🚀

Eine moderne, futuristische LinkHub-Alternative im Dark-Mode-Design. Alle deine Social Media Links und Projekte an einem Ort.

![LinkHub Preview](./assets/preview.png)

## ✨ Features

- 🌌 **Futuristisches Dark-Mode-Design** mit Glass-Morphism-Effekten
- 🎨 **Brand-Farben** für jede Plattform (GitHub, Amazon, Spotify, etc.)
- ⚡ **Smooth Animations** und Hover-Effekte mit Neon-Glow
- 📱 **Fully Responsive** - perfekt auf Desktop, Tablet und Mobile
- 🚀 **High Performance** - Optimiert für schnelle Ladezeiten
- 🔗 **Dynamisches Link-Loading** aus JSON-Datei
- 🎯 **Share-Funktionen** für WhatsApp, Telegram, Twitter und Copy-to-Clipboard
- ♿ **Accessibility** - WCAG 2.1 konform
- 📊 **Analytics-Ready** - Einfache Integration von Tracking-Code
- 🔄 **Offline-Support** via Service Worker (PWA-ready)

## 🛠️ Technologie-Stack

- **Pure HTML5** - Semantisches Markup
- **Modern CSS3** - Custom Properties, Grid, Flexbox, Animations
- **Vanilla JavaScript** - Kein Framework benötigt
- **JSON** - Einfache Datenverwaltung
- **SVG Icons** - Embedded Brand-Icons

## 📁 Projektstruktur

```
linkhub/
├── index.html              # Haupt-HTML-Datei
├── styles/
│   └── main.css           # Alle Styles inkl. Animationen
├── scripts/
│   └── main.js            # JavaScript-Logik
├── data/
│   └── links.json         # Link-Datenbank
├── assets/
│   └── icons/             # Zusätzliche Assets
└── README.md              # Diese Datei
```

## 🚀 Schnellstart

### Lokale Entwicklung

1. **Klone das Repository:**
   ```bash
   git clone https://github.com/TimInTech/Web.git
   cd Web/linkhub
   ```

2. **Starte einen lokalen Server:**
   ```bash
   # Mit Python 3
   python -m http.server 8000

   # Mit Node.js (http-server)
   npx http-server -p 8000

   # Mit PHP
   php -S localhost:8000
   ```

3. **Öffne im Browser:**
   ```
   http://localhost:8000
   ```

### Links anpassen

Öffne `data/links.json` und füge deine eigenen Links hinzu:

```json
{
  "title": "Deine Plattform",
  "description": "Kurzbeschreibung",
  "url": "https://example.com/profile",
  "icon": "github",
  "color": "#ffffff",
  "bgColor": "#000000"
}
```

**Verfügbare Icons:** `github`, `amazon`, `komoot`, `reddit`, `spotify`, `youtube`, `twitter`, `threads`, `pinterest`

## 🎨 Customization

### Farben ändern

Bearbeite die CSS-Variablen in `styles/main.css`:

```css
:root {
  --color-neon-cyan: #00f7ff;
  --color-neon-purple: #7b2ff7;
  --color-neon-blue: #0080ff;
  /* ... weitere Farben */
}
```

### Neue Icons hinzufügen

Füge neue SVG-Icons in `scripts/main.js` im `ICONS`-Objekt hinzu:

```javascript
const ICONS = {
  deinIcon: `<svg>...</svg>`,
  // ...
};
```

## 📱 Responsive Breakpoints

- **Desktop:** > 768px
- **Tablet:** 480px - 768px
- **Mobile:** < 480px

## 🌐 Deployment

### GitHub Pages

1. Pushe das Projekt zu GitHub
2. Gehe zu Settings → Pages
3. Wähle Branch: `main` und Ordner: `/linkhub` (oder root)
4. Speichern und fertig!

### Vercel / Netlify

Verbinde dein GitHub-Repository und deploye automatisch bei jedem Push.

### Cloudflare Pages

1. Verbinde dein GitHub-Repo
2. Build-Command: *(leer)*
3. Output-Directory: `/linkhub`

## 🔧 Performance-Optimierung

- ✅ CSS und JS sind minimiert für Production
- ✅ SVG-Icons sind direkt embedded (kein HTTP-Request)
- ✅ Lazy-Loading für Animationen
- ✅ Service Worker für Offline-Caching
- ✅ Preconnect zu Google Fonts

## ♿ Accessibility

- Semantisches HTML5
- ARIA-Labels für alle interaktiven Elemente
- Keyboard-Navigation support
- Focus-Visible Styles
- Reduced-Motion Support für Animationen
- High-Contrast Mode Support

## 📊 Analytics Integration

Um Analytics zu integrieren, füge deinen Tracking-Code in `index.html` vor `</head>` ein:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Contributing

Contributions sind willkommen! Öffne gerne Issues oder Pull Requests.

## 📄 Lizenz

MIT License - siehe [LICENSE](../LICENSE) Datei für Details.

## 👤 Author

**TimInTech**
- GitHub: [@TimInTech](https://github.com/TimInTech)
- Web: [timintech.github.io](https://timintech.github.io/Web/)

## 🙏 Credits

- Fonts: [Inter](https://fonts.google.com/specimen/Inter) von Google Fonts
- Icons: Embedded SVGs basierend auf Simple Icons
- Design: Inspiriert von modernen SaaS-Landing-Pages

---

Made with ❤️ and Code by [TimInTech](https://github.com/TimInTech)
