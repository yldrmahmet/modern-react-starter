# Erste Schritte

## Erstelle deine App

Wähle deinen Paketmanager und führe aus:

::: code-group

```bash [npm]
npm create ronins-react@latest my-app
cd my-app
npm install
npm run dev
```

```bash [bun]
bun create ronins-react@latest my-app
cd my-app
bun install
bun dev
```

```bash [pnpm]
pnpm create ronins-react@latest my-app
cd my-app
pnpm install
pnpm dev
```

```bash [yarn]
yarn create ronins-react@latest my-app
cd my-app
yarn
yarn dev
```

:::

Öffne `http://localhost:5173` in deinem Browser. Fertig!

## Clean-Modus

Willst du eine minimale App? Keine Demo-Seiten? Verwende `--clean`:

::: code-group

```bash [npm]
npm create ronins-react@latest my-app --clean
```

```bash [bun]
bun create ronins-react@latest my-app --clean
```

```bash [pnpm]
pnpm create ronins-react@latest my-app --clean
```

```bash [yarn]
yarn create ronins-react@latest my-app --clean
```

:::

Das entfernt:
- Demo-Seiten
- Logo-Datei

Du bekommst eine einfache "Hello World" App.

## Aktuellen Ordner verwenden

Willst du im aktuellen Ordner erstellen? Verwende `.`:

::: code-group

```bash [npm]
mkdir my-app && cd my-app
npm create ronins-react@latest .
```

```bash [bun]
mkdir my-app && cd my-app
bun create ronins-react@latest .
```

```bash [pnpm]
mkdir my-app && cd my-app
pnpm create ronins-react@latest .
```

```bash [yarn]
mkdir my-app && cd my-app
yarn create ronins-react@latest .
```

:::

::: warning
Der Ordner muss leer sein.
:::

## Nächste Schritte

- [Projektstruktur](/de/guide/project-structure) — Alle Dateien ansehen
- [Befehle](/de/guide/commands) — Alle Befehle ansehen
- [Komponenten hinzufügen](/de/guide/adding-components) — Buttons, Dialoge usw. hinzufügen
