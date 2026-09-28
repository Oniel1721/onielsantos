# onielsantos.com

Personal site of Oniel Santos, Senior Full-Stack Engineer. Built with [Astro](https://astro.build), deployed on Vercel.

## Stack

- **Astro 7**: static output, no UI framework and no runtime dependencies.
- **Plain CSS**: design tokens (OKLCH colors, fluid `clamp()` type scale, spacing, motion) as custom properties in `src/styles/global.css`, with component-scoped styles in each `.astro` file.
- **Astro Fonts API**: Geist, Geist Mono and Instrument Serif are self-hosted at build time, with metric-matched fallbacks so fonts don't shift the layout.
- **~2 KB of client JS** (`src/scripts/site.ts`): theme toggle (View Transitions), nav state, mobile menu, scroll reveals, card spotlight and copy-to-clipboard.

## Scripts

| Command           | Action                                  |
| ----------------- | --------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`  |
| `npm run preview` | Preview the production build locally    |

Requires Node.js 22.12+.

## Structure

```
src/
├── assets/          # Images processed by astro:assets
├── components/      # Page sections (Hero, Work, Experience…) and primitives
│   └── mockups/     # HTML/CSS product mockups used in Selected Work
├── data/site.ts     # Links and navigation
├── layouts/         # Document shell, meta tags, theme bootstrap
├── pages/           # index + 404
├── scripts/site.ts  # All client-side behavior
└── styles/global.css
```

## Notes

- Dark and light themes follow the system preference; a manual choice is saved in `localStorage`.
- Every animation uses only `transform`/`opacity` and respects `prefers-reduced-motion`. Looping illustrations pause while off-screen.
- `public/og.png` is the social preview image (1200×630).

