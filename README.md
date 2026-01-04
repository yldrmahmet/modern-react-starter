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

## Quick Start

```bash
# Clone
git clone https://github.com/yldrmahmet/react-template.git
cd react-template

# Install
bun install

# Dev
bun dev
```

## Commands

```bash
bun dev           # Development server (:5173)
bun build         # Production build
bun check         # Lint + format + typecheck + audit
bun lint          # ESLint
bun format        # Prettier
bun typecheck     # TypeScript check
bun knip          # Dead code detection
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
