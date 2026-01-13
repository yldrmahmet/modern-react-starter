# Contributing to create-ronins-react

First off, thanks for taking the time to contribute!

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/yldrmahmet/create-ronins-react/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Your environment (OS, Node version, package manager)

### Suggesting Features

1. Check existing issues and discussions first
2. Open a new issue with the `enhancement` label
3. Describe the feature and why it would be useful

### Pull Requests

1. Fork the repo and create your branch from `main`
2. Make your changes
3. Test your changes locally:
   ```bash
   # Test the CLI
   node index.js test-app
   cd test-app
   bun install
   bun dev
   bun check
   ```
4. Commit with a clear message (no emojis):
   ```bash
   git commit -m "feat: add new feature"
   git commit -m "fix: resolve issue with..."
   ```
5. Push and open a PR

### Commit Message Format

```
type: description

# Types:
# feat     - New feature
# fix      - Bug fix
# docs     - Documentation only
# style    - Formatting, no code change
# refactor - Code change without feature/fix
# test     - Adding tests
# chore    - Build process, dependencies
```

### Code Style

- Use TypeScript
- Follow existing code patterns
- No `React.FC` - use function declarations
- All code and comments in English

## Development Setup

```bash
git clone https://github.com/yldrmahmet/create-ronins-react.git
cd create-ronins-react

# Test locally
node index.js my-test-app
cd my-test-app
bun install
bun dev
```

## Questions?

Feel free to open an issue or reach out!
