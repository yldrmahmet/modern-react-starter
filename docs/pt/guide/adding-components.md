# Adicionar Componentes

## O que é shadcn/ui?

[shadcn/ui](https://ui.shadcn.com) te dá componentes prontos:
- Botões
- Diálogos (popups)
- Formulários
- Cards
- Tabelas
- E mais...

**Importante:** Componentes vão para SEU código. Não para node_modules. Você pode alterá-los.

## Adicionar um Componente

::: code-group

```bash [npm]
npx shadcn add button
```

```bash [bun]
bunx shadcn add button
```

```bash [pnpm]
pnpm dlx shadcn add button
```

```bash [yarn]
yarn dlx shadcn add button
```

:::

Isso cria `src/components/ui/button.tsx`.

## Adicionar Vários Componentes

::: code-group

```bash [npm]
npx shadcn add dialog card form input
```

```bash [bun]
bunx shadcn add dialog card form input
```

```bash [pnpm]
pnpm dlx shadcn add dialog card form input
```

```bash [yarn]
yarn dlx shadcn add dialog card form input
```

:::

## Componentes Populares

| Componente | O Que Faz |
|------------|-----------|
| button | Botão clicável |
| dialog | Janela popup |
| card | Caixa com conteúdo |
| input | Campo de texto |
| form | Formulário com validação |
| table | Tabela de dados |
| select | Menu dropdown |
| tabs | Navegação por abas |
| sonner | Notificações |

Ver todos: [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

## Como Usar

```tsx
import { Button } from "@/components/ui/button"

export default function MyPage() {
  return (
    <Button onClick={() => alert("Olá!")}>
      Clique Aqui
    </Button>
  )
}
```

## Exemplo de Diálogo

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function MyPage() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Abrir Popup</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Olá!</DialogTitle>
        </DialogHeader>
        <p>Isso é um popup.</p>
      </DialogContent>
    </Dialog>
  )
}
```

## Alterar Componentes

Componentes estão em `src/components/ui/`. Abra e edite-os.

Exemplo - adicionar botão verde:

```tsx
// src/components/ui/button.tsx

const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        // Adicione o seu:
        success: "bg-green-500 text-white hover:bg-green-600",
      }
    }
  }
)
```

Agora use:

```tsx
<Button variant="success">Salvar</Button>
```

## Alterar Cores

Edite `src/index.css`:

```css
:root {
  --primary: oklch(0.5 0.2 260);  /* Altere esta cor */
}
```

Quer um gerador de temas? Vá para [ui.shadcn.com/themes](https://ui.shadcn.com/themes)
