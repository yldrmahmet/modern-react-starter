# Komponenten hinzufügen

## Was ist shadcn/ui?

[shadcn/ui](https://ui.shadcn.com) gibt dir fertige Komponenten:
- Buttons
- Dialoge (Popups)
- Formulare
- Cards
- Tabellen
- Und mehr...

**Wichtig:** Komponenten kommen in DEINEN Code. Nicht in node_modules. Du kannst sie ändern.

## Komponente hinzufügen

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

Das erstellt `src/components/ui/button.tsx`.

## Mehrere Komponenten hinzufügen

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

## Beliebte Komponenten

| Komponente | Was sie macht |
|------------|---------------|
| button | Klickbarer Button |
| dialog | Popup-Fenster |
| card | Box mit Inhalt |
| input | Textfeld |
| form | Formular mit Validierung |
| table | Datentabelle |
| select | Dropdown-Menü |
| tabs | Tab-Navigation |
| sonner | Benachrichtigungen |

Alle ansehen: [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

## Wie verwenden

```tsx
import { Button } from "@/components/ui/button"

export default function MyPage() {
  return (
    <Button onClick={() => alert("Hallo!")}>
      Klick mich
    </Button>
  )
}
```

## Dialog-Beispiel

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
        <Button>Popup öffnen</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hallo!</DialogTitle>
        </DialogHeader>
        <p>Das ist ein Popup.</p>
      </DialogContent>
    </Dialog>
  )
}
```

## Komponenten ändern

Komponenten sind in `src/components/ui/`. Öffne und bearbeite sie.

Beispiel - grünen Button hinzufügen:

```tsx
// src/components/ui/button.tsx

const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        // Füge deinen eigenen hinzu:
        success: "bg-green-500 text-white hover:bg-green-600",
      }
    }
  }
)
```

Jetzt verwenden:

```tsx
<Button variant="success">Speichern</Button>
```

## Farben ändern

Bearbeite `src/index.css`:

```css
:root {
  --primary: oklch(0.5 0.2 260);  /* Diese Farbe ändern */
}
```

Willst du einen Theme-Generator? Gehe zu [ui.shadcn.com/themes](https://ui.shadcn.com/themes)
