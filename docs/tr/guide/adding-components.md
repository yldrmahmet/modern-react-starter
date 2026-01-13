# Bileşen Ekleme

## shadcn/ui Nedir?

[shadcn/ui](https://ui.shadcn.com) hazır bileşenler sunuyor:
- Butonlar
- Modallar (açılır pencereler)
- Formlar
- Kartlar
- Tablolar
- Ve daha fazlası...

**Önemli:** Bileşenler senin proje dosyalarına ekleniyor. node_modules'a değil. İstediğin gibi değiştirebilirsin.

## Bileşen Ekle

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

Bu komut `src/components/ui/button.tsx` dosyasını oluşturur.

## Birden Fazla Bileşen Ekle

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

## Popüler Bileşenler

| Bileşen | Ne İşe Yarıyor |
|---------|----------------|
| button | Tıklanabilir buton |
| dialog | Açılır pencere (modal) |
| card | İçerik kutusu |
| input | Metin girişi |
| form | Doğrulamalı form |
| table | Veri tablosu |
| select | Açılır liste |
| tabs | Sekme navigasyonu |
| sonner | Bildirimler |

Tümünü gör: [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

## Nasıl Kullanılır

```tsx
import { Button } from "@/components/ui/button"

export default function MyPage() {
  return (
    <Button onClick={() => alert("Merhaba!")}>
      Tıkla
    </Button>
  )
}
```

## Modal Örneği

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
        <Button>Modalı Aç</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Merhaba!</DialogTitle>
        </DialogHeader>
        <p>Bu bir modal pencere.</p>
      </DialogContent>
    </Dialog>
  )
}
```

## Bileşenleri Özelleştir

Bileşenler `src/components/ui/` klasöründe. Aç ve düzenle.

Örnek - yeşil buton ekle:

```tsx
// src/components/ui/button.tsx

const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        // Kendi varyantını ekle:
        success: "bg-green-500 text-white hover:bg-green-600",
      }
    }
  }
)
```

Şimdi kullanabilirsin:

```tsx
<Button variant="success">Kaydet</Button>
```

## Renkleri Değiştir

`src/index.css` dosyasını düzenle:

```css
:root {
  --primary: oklch(0.5 0.2 260);  /* Bu rengi değiştir */
}
```

Tema oluşturucu mu istiyorsun? [ui.shadcn.com/themes](https://ui.shadcn.com/themes) adresine git
