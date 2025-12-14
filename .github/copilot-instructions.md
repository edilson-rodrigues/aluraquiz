<!-- Copilot / AI agent instructions for edilson-rodrigues/aluraquiz -->
# Quick orientation for AI coding agents

This repo is a small Next.js + React quiz app (styled-components). The goal of these notes is to help an AI agent become productive quickly by documenting the key architecture, conventions, workflows and concrete file examples.

## Big picture
- Tech: Next.js (pages router), React 18, `styled-components` ([package.json](package.json)).
- Data source: local `db.json` (root) is the canonical mock data used by the app and by the API route. See [db.json](db.json).
- API: `pages/api/db.js` simply returns `db.json` with permissive CORS headers. See [pages/api/db.js](pages/api/db.js).
- Routing and data flow:
  - `/quiz` page uses the local `db.json`: see [pages/quiz.js](pages/quiz.js).
  - Dynamic community quizzes are at `pages/quiz/[id].js` — it uses `getServerSideProps` to fetch `https://{project}.{user}.vercel.app/api/db` and passes `dbExterno` into the `Quiz` screen. See [pages/quiz/[id].js](pages/quiz/[id].js).
  - The `Quiz` screen lives at [src/screens/Quiz/index.js](src/screens/Quiz/index.js) and composes the UI from `src/components/*`.

## Component & code conventions
- Components are organized into folders under `src/components/` with an `index.js` export (e.g. `src/components/Questions/index.js`). Use the same folder-per-component pattern for new components.
- Widgets pattern: small presentational components (e.g. `Widget`, `Button`, `AlternativesForm`) are composed together — prefer reusing them rather than introducing global markup.
- Styling: `styled-components` theme values are defined in `db.json.theme` and passed via `ThemeProvider` in pages that render external quizzes (see `pages/quiz/[id].js`). Update theme values in `db.json` when changing colors used across components.

## Data shape (practical examples)
- `db.json` structure (most important keys): `bg` (background image URL), `title`, `description`, `questions` (array), `external`, `theme`. See [db.json](db.json).
- Each question object minimally contains: `image`, `title`, `description`, `answer` (index), `alternatives` (array of strings). Follow this exact shape when adding questions.

## Runtime / developer workflows
- Local dev: `yarn dev` (runs `next`).
- Build: `yarn build` → `next build`. If you encounter build errors, inspect logs and Next.js version in [package.json](package.json) (`next@16.0.7` in this repo).
- Start production preview: `yarn start`.
- Lint: `yarn lint` runs `eslint` with Airbnb config (auto-fix enabled in `lint` script).

## Integrations and external communication
- Community quizzes: `pages/quiz/[id].js` expects `context.query.id` of the form `githubUser__projectName`. The page will attempt to fetch `https://{projectName}.{gitHubUser}.vercel.app/api/db`. Keep fetch logic intact when updating server-side fetching.
- The API route (`/api/db`) is intentionally permissive about CORS — changes to headers will affect cross-origin fetches by `quiz/[id].js`.

## When you make edits — practical tips
- If you change the theme colors, update `db.json.theme` and verify `Quiz` pages render correctly (colors are read from the theme in `pages/quiz/[id].js`).
- To add a new question, append an object to `db.json.questions` matching the existing shape. The UI expects `answer` to be an integer index into `alternatives`.
- Avoid changing the top-level structure of `db.json` (other code assumes keys like `questions`, `bg`, `theme`).

## Files to check for typical tasks
- App entry / meta: [pages/_app.js](pages/_app.js) and [pages/_document.js](pages/_document.js)
- Data & API: [db.json](db.json) and [pages/api/db.js](pages/api/db.js)
- Main quiz UI: [src/screens/Quiz/index.js](src/screens/Quiz/index.js)
- Question component: [src/components/Questions/index.js](src/components/Questions/index.js)
- Alternatives form pattern: [src/components/AlternativesForm/index.js](src/components/AlternativesForm/index.js)

## Avoid assumptions
- No automated tests are present. Do not add test changes that depend on CI until a test harness is added.
- Do not assume additional API endpoints exist beyond `/api/db` unless introduced in the codebase.

## If you need more context
- Ask for the intended change, target branch, and whether the change should update `db.json` (local example data) or be supported as a persistent back-end change.

---
If anything in this guide is unclear or you want a different level of detail (for example, code examples to add a new question or change the theme), tell me which area to expand. 
