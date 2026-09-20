# Promonist — modular React + TypeScript + SCSS

This is the supplied **one-page Promonist design**, reorganized to match your dashboard's `src/components/`, `src/pages/` and `src/styles/` approach. Everything is a `.tsx` TypeScript component and each visible section has its own `.scss` file. Sass compiles these files to regular CSS automatically in Vite.

## Run

Requires Node.js 20.19+ or 22.12+. In the extracted folder:

```bash
npm install
npm run dev
```

For a production build: `npm run build`. For a TypeScript check: `npm run typecheck`.

## Structure

```text
promonist-component-structure/
├── public/images/                       supplied logo + hero + before/after photos
├── src/
│   ├── App.tsx                           only renders <Home />
│   ├── main.tsx                          mounts the app and imports global styles
│   ├── components/
│   │   ├── navbar/Navbar.tsx             navbar.scss
│   │   ├── hero/Hero.tsx                 hero.scss
│   │   ├── showcase/Showcase.tsx         showcase.scss
│   │   ├── beforeAfter/BeforeAfter.tsx   beforeAfter.scss
│   │   └── infoDialog/InfoDialog.tsx     infoDialog.scss, dialogContent.ts
│   ├── pages/home/Home.tsx               home.scss
│   ├── data/comparisons.ts               photo paths and captions
│   └── styles/global.scss               shared/reset/focus styling
├── index.html
├── package.json
├── tsconfig*.json
└── vite.config.ts
```

`App.tsx` contains no layout, navigation, or business logic. `Home.tsx` composes the navbar and sections and owns the open-dialog state. Each component handles its own presentation and styles. This project includes *all image assets* copied from the original delivered project.

**Scope:** The supplied design only depicts a landing page. Pricing, Reviews, Log in, and Sign up remain **informational dialogs**, not live account flows. This ZIP does **not** claim to contain a backend, database, AI image generator, or social-platform publishing integrations.
