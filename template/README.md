# React Template

Production-ready React starter with modern tooling.

## Quick Start

```bash
# Option 1: Create (Recommended)
bun create ronins-react my-app
cd my-app
bun install
bun dev

# Option 2: Clone
git clone https://github.com/yldrmahmet/create-ronins-react.git my-app
cd my-app
bun install
bun dev
```

> Also works with `npm create ronins-react` and `pnpm create ronins-react`

## Tech Stack

| Category      | Tool                       |
|---------------|----------------------------|
| Build         | Vite 7 + SWC               |
| Framework     | React 19                   |
| Language      | TypeScript 5.9             |
| Styling       | Tailwind CSS 4             |
| UI Components | shadcn/ui                  |
| Routing       | React Router 7             |
| Server State  | TanStack Query 5           |
| Validation    | Zod 4                      |
| Linting       | ESLint 9 (flat config)     |
| Formatting    | Prettier                   |
| Git Hooks     | Husky                      |
| Dead Code     | Knip                       |
| Testing       | Vitest                     |
| CI/CD         | GitHub Actions             |

## Commands

```bash
bun dev           # Development server (:5173)
bun run build     # Production build
bun check         # Lint + format + typecheck + audit
bun test          # Run tests
```

## Project Structure

```
src/
├── app/
│   ├── routes/          # Page components
│   ├── providers.tsx    # Global providers
│   └── router.tsx       # Router config
├── components/ui/       # shadcn/ui components
├── lib/utils.ts         # Utilities
├── main.tsx             # Entry point
└── index.css            # Tailwind
```

## Adding Components

```bash
bunx shadcn add button input dialog
```

## License

MIT
