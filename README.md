# Aleena Nawab — Portfolio

A React + TypeScript portfolio built with Vite and Tailwind CSS v4, styled around a
terminal / glassmorphic-neon aesthetic. Content is pulled from `src/data.ts` — edit
that file to update projects, experience, or skills without touching any UI code.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

### Vercel (recommended, matches your existing projects)
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: **Vite**. No config needed — click Deploy.

Or from the CLI:
```bash
npm i -g vercel
vercel
```

### Netlify
1. Push to GitHub, then Netlify → Add new site → Import from Git.
2. Build command: `npm run build`  ·  Publish directory: `dist`

Or drag-and-drop: run `npm run build` locally, then drag the `dist` folder onto
netlify.com/drop.

## Editing content

- `src/data.ts` — your name, summary, projects, experience, skills, education.
- `public/resume.pdf` — swap this file to update the downloadable resume (keep the filename `resume.pdf`, or update the links in `Nav.tsx` and `Hero.tsx`).
- `src/index.css` — color tokens live at the top under `:root` if you want to adjust the palette.
