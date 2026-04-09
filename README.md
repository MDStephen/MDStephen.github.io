# Portfolio — Next.js + Tailwind

Clean, dark, scroll-based personal portfolio for CS students.

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

---

## Customize

### Personal info

Edit `data/info.js` — name, tagline, links, resume URL.

### Projects

Edit `data/projects.js` — the only file you need to touch to add projects.

Each project:

```js
{
  id: 4,                         // unique number
  name: 'My Project',
  description: '1–2 sentences.',
  category: 'Personal',          // School | Game Jam | Hackathon | Personal | Open Source
  tech: ['React', 'Python'],     // must match keys in TECH_COLORS for colored pills
  demo: 'https://...',           // or null
  repo: 'https://github.com/...', // or null
}
```

To add a new tech pill color, add an entry to `TECH_COLORS` in `data/projects.js`:

```js
'MyTech': { bg: '#1a1a2e', text: '#818cf8' },
```

### Skills

Edit `data/skills.js` — grouped by category.

### Resume

Drop your PDF at `public/resume.pdf`. The download button points there automatically.

---

## Deploy to GitHub Pages

1. Install gh-pages (already in devDependencies):
   
   ```bash
   npm install
   ```

2. In `package.json`, set the `homepage` field:
   
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO"
   ```

3. Deploy:
   
   ```bash
   npm run deploy
   ```

That's it. The script builds, exports static files, and pushes to the `gh-pages` branch.

> **Note**: If the repo is `username.github.io` (user site), skip the homepage field — GitHub will serve from `main` by default.

---

## Stack

- **Next.js 14** — static export (`output: 'export'`)
- **Tailwind CSS 3**
- **IBM Plex Mono** + **DM Sans** — Google Fonts
- **gh-pages** — one-command deploy
