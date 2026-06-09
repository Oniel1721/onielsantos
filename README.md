# onielsantos

Personal portfolio website built with Next.js 16, React 19, Tailwind CSS 4, and TypeScript.

## Stack

- **Framework:** Next.js 16
- **UI:** React 19, Tailwind CSS 4
- **Linter/Formatter:** Biome
- **Package manager:** Bun

## Project Structure

```
/
├── public/
├── src/
│   ├── app/
│   │   └── page.tsx
│   └── components/
│       ├── Profile.tsx
│       ├── TechList.tsx
│       ├── ExperienceList.tsx
│       ├── Testimonials.tsx
│       ├── Nav.tsx
│       ├── Footer.tsx
│       └── ...
└── package.json
```

## Commands

| Command          | Action                               |
| :--------------- | :----------------------------------- |
| `bun install`    | Install dependencies                 |
| `bun run dev`    | Start dev server at `localhost:3000` |
| `bun run build`  | Build for production                 |
| `bun run start`  | Start production server              |
| `bun run lint`   | Run Biome linter                     |
| `bun run format` | Run Biome lint with auto-fix         |
