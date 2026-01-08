# React Template

Production-ready React starter with modern tooling.

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

## Quick Start

```bash
# Clone
git clone https://github.com/yldrmahmet/modern-react-starter.git
cd modern-react-starter

# Install
bun install

# Dev
bun dev
```

## Commands

```bash
bun dev           # Development server (:5173)
bun run build     # Production build (Vite)
bun check         # Lint + format + typecheck + audit
bun lint          # ESLint
bun format        # Prettier
bun typecheck     # TypeScript check
bun knip          # Dead code detection
bun test          # Run tests (watch)
bun test:run      # Run tests once
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
