# Paco Coursey — Portfolio Clone (Astro)

A single-page portfolio site built with [Astro](https://astro.build), inspired by the layout and content of [paco.me](https://paco.me/).

## Getting started

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321`.

## Build for production

```bash
npm run build
npm run preview
```

The static output is generated in `dist/`.

## Deploy to GitHub Pages

Push this repository to GitHub, then open **Settings > Pages** and set the source to **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` builds and deploys the site after each push to `main`.

For a project repository, the site will be available at `https://<your-username>.github.io/<repository-name>/`. A repository named `<your-username>.github.io` is also supported as a user site.

## Project structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # <head>, global styles, dark theme
│   └── pages/
│       └── index.astro       # Home page (intro, building/projects/writing, now, connect)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Customizing

- Edit the arrays at the top of `src/pages/index.astro` (`building`, `projects`, `writing`) to change the linked items.
- Colors and type live in the `:root` CSS variables inside `src/layouts/Layout.astro`.
- Swap the favicon in `public/favicon.svg`.

## Notes

This is an independent, from-scratch recreation built for learning/personal use — it copies the layout and public content from paco.me but contains no code or assets taken from the original site. Please don't pass it off as the original site or as work by Paco Coursey.
