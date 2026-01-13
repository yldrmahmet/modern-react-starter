# Comandos

Escolha seu gerenciador de pacotes. Os comandos mudam para cada um.

## Iniciar Servidor de Desenvolvimento

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

Abre `http://localhost:5173`. Mudanças aparecem instantaneamente.

## Build para Produção

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

Cria a pasta `dist/`. Faça upload para seu servidor.

::: details Por que `bun run build` e não `bun build`?

São comandos diferentes:

| Comando | O Que Faz |
|---------|-----------|
| `bun build` | Usa o bundler do Bun |
| `bun run build` | Executa o script "build" no package.json |

Usamos `bun run build` porque executa o **bundler do Vite**.

**Por que Vite, não o bundler do Bun?**
- Vite tem mais recursos
- Vite tem mais plugins
- Vite é testado com React há anos

**Bun é rápido para executar código. Vite é melhor para build.**

:::

## Verificar Código

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

Executa todas as verificações:
- ESLint (encontrar bugs)
- Prettier (verificar formatação)
- TypeScript (verificar tipos)

## Encontrar Bugs (Lint)

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

Corrigir bugs automaticamente:

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

## Formatar Código

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

Deixa o código bonito. Corrige espaços, aspas, etc.

## Executar Testes

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

Executa testes. Observa mudanças.

Executar uma vez (para CI):

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

## Remover Conteúdo Demo

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

Remove arquivos demo. Te dá um app limpo "Hello World".

## Todos os Comandos

| Comando | O Que Faz |
|---------|-----------|
| `dev` | Iniciar servidor dev |
| `build` | Build para produção |
| `check` | Executar todas verificações |
| `lint` | Encontrar bugs |
| `format` | Embelezar código |
| `test` | Executar testes (observar) |
| `test:run` | Executar testes (uma vez) |
| `clean` | Remover arquivos demo |
