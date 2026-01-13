# Başlangıç

## Uygulamanı Oluştur

Paket yöneticini seç ve çalıştır:

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

Tarayıcında `http://localhost:5173` adresini aç. Hazırsın!

## Sade Başlangıç

Minimum bir proje mi istiyorsun? Demo sayfaları olmasın mı? `--clean` kullan:

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

Şunları kaldırır:
- Demo sayfaları
- Logo dosyası

Sade bir "Merhaba Dünya" projesi elde edersin.

## Mevcut Klasörde Oluştur

Şu an bulunduğun klasörde mi oluşturmak istiyorsun? `.` kullan:

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
Klasör boş olmalı.
:::

## Sonraki Adımlar

- [Proje Yapısı](/tr/guide/project-structure) — Tüm dosyaları incele
- [Komutlar](/tr/guide/commands) — Kullanabileceğin komutlar
- [Bileşen Ekle](/tr/guide/adding-components) — Buton, modal gibi bileşenler ekle
