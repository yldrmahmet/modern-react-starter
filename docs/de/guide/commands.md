# Befehle

Wähle deinen Paketmanager. Befehle ändern sich für jeden.

## Dev-Server starten

::: code-group

```bash [npm]
npm run dev
```

```bash [bun]
bun dev
```

```bash [pnpm]
pnpm dev
```

```bash [yarn]
yarn dev
```

:::

Öffnet `http://localhost:5173`. Änderungen erscheinen sofort.

## Für Produktion bauen

::: code-group

```bash [npm]
npm run build
```

```bash [bun]
bun run build
```

```bash [pnpm]
pnpm build
```

```bash [yarn]
yarn build
```

:::

Erstellt den `dist/` Ordner. Lade diesen auf deinen Server hoch.

::: details Warum `bun run build` und nicht `bun build`?

Das sind unterschiedliche Befehle:

| Befehl | Was es macht |
|--------|--------------|
| `bun build` | Verwendet Buns Bundler |
| `bun run build` | Führt das "build" Script in package.json aus |

Wir verwenden `bun run build` weil es **Vites Bundler** ausführt.

**Warum Vite, nicht Buns Bundler?**
- Vite hat mehr Features
- Vite hat mehr Plugins
- Vite ist seit Jahren mit React getestet

**Bun ist schnell für Code-Ausführung. Vite ist besser für Builds.**

:::

## Code prüfen

::: code-group

```bash [npm]
npm run check
```

```bash [bun]
bun check
```

```bash [pnpm]
pnpm check
```

```bash [yarn]
yarn check
```

:::

Führt alle Prüfungen aus:
- ESLint (Bugs finden)
- Prettier (Format prüfen)
- TypeScript (Typen prüfen)

## Bugs finden (Lint)

::: code-group

```bash [npm]
npm run lint
```

```bash [bun]
bun lint
```

```bash [pnpm]
pnpm lint
```

```bash [yarn]
yarn lint
```

:::

Bugs automatisch beheben:

::: code-group

```bash [npm]
npm run lint -- --fix
```

```bash [bun]
bun lint --fix
```

```bash [pnpm]
pnpm lint --fix
```

```bash [yarn]
yarn lint --fix
```

:::

## Code formatieren

::: code-group

```bash [npm]
npm run format
```

```bash [bun]
bun format
```

```bash [pnpm]
pnpm format
```

```bash [yarn]
yarn format
```

:::

Macht Code schön. Behebt Leerzeichen, Anführungszeichen usw.

## Tests ausführen

::: code-group

```bash [npm]
npm test
```

```bash [bun]
bun test
```

```bash [pnpm]
pnpm test
```

```bash [yarn]
yarn test
```

:::

Führt Tests aus. Beobachtet Änderungen.

Einmal ausführen (für CI):

::: code-group

```bash [npm]
npm run test:run
```

```bash [bun]
bun test:run
```

```bash [pnpm]
pnpm test:run
```

```bash [yarn]
yarn test:run
```

:::

## Demo-Inhalte entfernen

::: code-group

```bash [npm]
npm run clean
```

```bash [bun]
bun clean
```

```bash [pnpm]
pnpm clean
```

```bash [yarn]
yarn clean
```

:::

Entfernt Demo-Dateien. Gibt dir eine saubere "Hello World" App.

## Alle Befehle

| Befehl | Was es macht |
|--------|--------------|
| `dev` | Dev-Server starten |
| `build` | Für Produktion bauen |
| `check` | Alle Prüfungen ausführen |
| `lint` | Bugs finden |
| `format` | Code verschönern |
| `test` | Tests ausführen (beobachten) |
| `test:run` | Tests ausführen (einmal) |
| `clean` | Demo-Dateien entfernen |
