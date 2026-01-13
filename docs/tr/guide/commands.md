# Komutlar

Paket yöneticine göre komutlar değişiyor.

## Geliştirme Sunucusu

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

`http://localhost:5173` açılır. Değişiklikler anında yansır.

## Üretime Hazırlama

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

`dist/` klasörü oluşur. Bunu sunucuna yükle.

::: details Neden `bun build` değil de `bun run build`?

İkisi farklı şeyler:

| Komut | Ne Yapıyor |
|-------|------------|
| `bun build` | Bun'un kendi derleyicisini kullanır |
| `bun run build` | package.json'daki "build" komutunu çalıştırır |

`bun run build` kullanıyoruz çünkü **Vite'ın derleyicisini** çalıştırıyor.

**Neden Vite, Bun değil?**
- Vite'ın daha fazla özelliği var
- Vite'ın daha fazla eklentisi var
- Vite yıllardır React ile test edilmiş

**Bun kod çalıştırmada hızlı. Vite derleme için daha iyi.**

:::

## Kod Kontrolü

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

Tüm kontrolleri çalıştırır:
- ESLint (hata tespiti)
- Prettier (format kontrolü)
- TypeScript (tip kontrolü)

## Hata Tespiti (Lint)

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

Hataları otomatik düzelt:

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

## Kod Düzenleme

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

Kodu düzenler. Boşlukları, tırnakları vb. standartlaştırır.

## Testler

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

Testleri çalıştırır. Değişiklikleri izler.

Tek seferlik çalıştırma (CI için):

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

## Demo İçeriği Temizle

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

Demo dosyalarını siler. Sade bir "Merhaba Dünya" projesi kalır.

## Tüm Komutlar

| Komut | Görevi |
|-------|--------|
| `dev` | Geliştirme sunucusunu başlat |
| `build` | Üretime hazırla |
| `check` | Tüm kontrolleri çalıştır |
| `lint` | Hataları tespit et |
| `format` | Kodu düzenle |
| `test` | Testleri çalıştır (izleme modu) |
| `test:run` | Testleri çalıştır (tek sefer) |
| `clean` | Demo dosyalarını temizle |
