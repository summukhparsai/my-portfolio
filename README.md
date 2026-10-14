# Sumukh Parsai: Portfolio

Frontend-only portfolio built with Next.js 14, React 18, TypeScript, Framer Motion and React Three Fiber.
Two switchable themes: **Glassmorphism** (default, dark charcoal glass with a soft violet glow) and **Claymorphism**. No backend, database or API keys.

## Run locally
Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build
```bash
npm run build
npm start
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New > Project**, import the repository.
3. Keep the defaults (Framework: Next.js) and click **Deploy**.

## Edit your details
All content is in `lib/data.ts`: name, title, intro, links, about text, stats, skills, projects, experience, education.
- Photo: replace `public/images/profile.jpg` (keep the name, or update `profile.photo`).
- Resume: replace `public/Sumukh_Parsai_Resume.pdf`.

## Add, remove or update projects
Edit the `projects` array in `lib/data.ts`. Each entry needs `name`, `description`, `repo`, `image` (a file in `public/images/projects/`), `imageAlt` and `position` (which part of the screenshot to show, e.g. `"50% 0%"`). Delete an entry to remove it.

## Change theme colors
Open `app/globals.css`. Each theme is one block of CSS variables:
`[data-theme="glass"]` and `[data-theme="clay"]`. Change `--accent`, `--bg`, `--surface`, `--text`, `--muted` and button variables there.

## Modify or extend the themes
Components never hard-code colors; they use the variables above (`--surface`, `--shadow`, `--blur`, `--r`, `--btn1-*`, `--btn2-*`, `--chip-*`).
To add a third theme, add a `[data-theme="yourname"]` block with the same variables, then allow the value in `app/layout.tsx` (theme script) and `components/ThemeToggle.tsx`.
The selected theme is saved in `localStorage` and applied by an inline script before first paint, so there is no flash.

## 3D and fallbacks
The hero 3D object (`components/Scene.tsx`) loads only in the browser. If WebGL is unavailable, the device is low-powered, or the visitor prefers reduced motion, a lightweight CSS orb is shown instead.

## Verify before publishing
Check that the email, GitHub and LinkedIn URLs in `lib/data.ts` are correct. The resume PDF in `public/` has the same links.
