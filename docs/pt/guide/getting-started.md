# Começar

## Crie Seu App

Escolha seu gerenciador de pacotes e execute:

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

Abra `http://localhost:5173` no seu navegador. Pronto!

## Modo Limpo

Quer um app mínimo? Sem páginas de demo? Use `--clean`:

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

Isso remove:
- Páginas de demo
- Arquivo de logo

Você recebe um simples app "Hello World".

## Usar Pasta Atual

Quer criar na pasta atual? Use `.`:

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
A pasta deve estar vazia.
:::

## Próximos Passos

- [Estrutura do Projeto](/pt/guide/project-structure) — Ver todos os arquivos
- [Comandos](/pt/guide/commands) — Ver todos os comandos
- [Adicionar Componentes](/pt/guide/adding-components) — Adicionar botões, diálogos, etc.
