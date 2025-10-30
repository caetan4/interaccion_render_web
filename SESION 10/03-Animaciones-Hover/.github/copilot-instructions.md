<!--
Guidance for AI coding agents working on this repository.
Keep this concise (20-50 lines). Reference specific files and exact commands.
-->
# Copilot instructions for this repo

Quick summary
- This is a minimal Vite + Three.js template. Source files live under `src/`. Static assets live in `static/`. Builds output to `dist/`.
- The app is a single-page demo: `src/index.html` -> `src/script.js` (entry module) which mounts a WebGL `canvas.webgl` and runs an animation loop.

Quick start (PowerShell)
```powershell
npm install
npm run dev    # start vite dev server (default port 5173)
npm run build  # create production build in dist/
```

Key files and why they matter
- `package.json` — project scripts and deps (`three`, `lil-gui`, `vite`). Keep `dev`/`build` scripts intact.
- `vite.config.js` — important custom config:
  - `root: 'src/'` (sources live in `src/`)
  - `publicDir: '../static/'` (put assets in `static/` — served as-is)
  - `build.outDir: '../dist'` and `sourcemap: true`
  - plugin `vite-plugin-restart` watches `../static/**` and restarts the server on changes
- `src/index.html` — entry HTML; it loads `./style.css` and `./script.js` as an ES module.
- `src/script.js` — main app logic. Patterns to follow: scene/camera/renderer setup, a resize handler updating camera.aspect and renderer size, and a single animation loop using `requestAnimationFrame` and a `THREE.Clock`.

Project-specific conventions and patterns
- Single entry module: edits should usually be inside `src/` (do not move `index.html` out of `src/` without changing `vite.config.js`).
- Static assets: place under `static/` (not `src/`) when you want them served unchanged (e.g., images, glTF files). The plugin restarts the server when static files change.
- Module type: `package.json` sets `"type": "module"` — use ESM imports (no CommonJS `require`).
- Renderer and resize handling: `script.js` clamps pixel ratio via `Math.min(window.devicePixelRatio, 2)` — preserve this when changing renderer setup to avoid high-DPI performance issues.
- Canvas query: the code selects `document.querySelector('canvas.webgl')`. Changing that selector in HTML requires matching changes in `script.js`.

Development tips for AI edits
- Small UI/visual changes: edit `src/script.js` and `src/style.css`. Keep logic modular and prefer adding new modules under `src/` and importing them from `script.js`.
- Adding dependencies: update `package.json` and run `npm install`. Keep versions compatible with ESM/Vite.
- Debugging build or runtime errors:
  - Use the dev server (`npm run dev`) and browser devtools; sourcemaps are enabled by default (`vite.config.js`).
  - If the dev server is not opening automatically, Vite typically serves at `http://localhost:5173` — check the terminal output.

What to avoid or be careful with
- Do not change `vite.config.js` `root` / `publicDir` / `build.outDir` without updating paths across the project — the repo relies on `src/` as web root and `static/` as public assets.
- Avoid introducing CommonJS modules or `require()` calls (project is ESM).
- Keep `canvas` class `webgl` present unless intentionally refactoring DOM selection.

Missing pieces
- There are no tests, linters, or CI configuration. If adding them, add tooling config files at repository root and update `package.json` scripts.

Examples from the codebase (what to look at)
- `src/script.js` — animation loop, resize handler, camera config (PerspectiveCamera 45deg, near 0.1, far 100), and a simple wireframe sphere mesh.
- `vite.config.js` — publicDir and restart plugin configuration; use this as the authority for where assets should live.

If something is unclear or you need more examples (e.g., how to add a GUI control with `lil-gui`, or how to load a glTF model from `static/`), say which area and I will expand this file with minimal, focused examples.

---
Please review these instructions and tell me if you'd like more detail in any section.
