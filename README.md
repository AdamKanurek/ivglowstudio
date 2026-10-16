# IV Glow studio – web

One-page prezentační web kosmetického salonu. Postaveno na [Astro](https://astro.build) se statickým výstupem – výsledkem je obyčejné HTML/CSS/JS, které jde nahrát na jakýkoli webhosting.

## Vývoj

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # výstup do dist/
npm run preview   # náhled produkčního buildu
```

## Kde co upravit

| Co | Soubor |
| --- | --- |
| Ceník (názvy, ceny, popisy) | `src/data/services.ts` |
| Telefon, Instagram, adresa, menu | `src/data/site.ts` |
| Cíl tlačítka „Objednat se“ | `booking` v `src/data/site.ts` |
| Recenze (sekce se zobrazí, až bude pole neprázdné) | `src/data/reviews.ts` |
| Texty sekcí | `src/components/*.astro` |
| Barvy, fonty | `src/styles/global.css` (`:root`) |
| Fotky | `src/assets/img/` – originály, Astro je při buildu zmenší a převede do WebP/AVIF |
| Doména (SEO, sitemap) | `site` v `astro.config.mjs` + `public/robots.txt` |

Logo `src/assets/logo.png` je vyříznuté z `logo-src.png` skriptem `scripts/make-logo.mjs`.

## Nasazení na klasický webhosting

1. `npm run build`
2. Obsah složky `dist/` nahrát přes FTP do kořene webu (např. `www/`).

## Rezervace a platby do budoucna

- **Rezervační služba (Reservio, Bookio, Noona…)** – stačí změnit `booking.href` v `src/data/site.ts` na odkaz služby, případně vložit jejich widget do `src/components/BookingButton.astro` nebo do sekce Kontakt. Zálohy/platby řeší služba.
- **Vlastní systém** – do Astra lze přidat React komponentu (`npx astro add react`) jako „island“ a napojit ji na samostatné API a platební bránu (GoPay, Comgate, Stripe). Zbytek webu zůstává beze změny.

## Lišta se souhlasem s cookies

Web zatím nepoužívá žádné cookies, proto je lišta připravená, ale **vypnutá**
(`enabled: false` v `src/data/consent.ts`). Zapnout ji, až na web přibude služba,
která ukládá nepovinné cookies (Google Analytics, vložená mapa Google, Instagram feed…):

1. V `src/data/consent.ts` nastavit `enabled: true`.
2. Skript služby vložit tak, aby se spustil až po souhlasu – místo `<script src="…">` použít:
   ```html
   <script type="text/plain" data-consent="analytics" data-src="https://…"></script>
   ```
   (kategorie `analytics` nebo `marketing`; funguje i pro skripty s obsahem místo `data-src`).
3. Upravit stránku `src/pages/cookies.astro` – doplnit, jaké cookies a služby web používá.
4. Při každé změně používaných služeb zvýšit `version` – návštěvníků se lišta zeptá znovu.

Lišta: „Odmítnout vše“ je stejně výrazné jako „Přijmout vše“, nic není předem zaškrtnuté,
volbu jde změnit odkazem „Nastavení cookies“ v patičce (zobrazí se jen při zapnuté liště).
Ostatní skripty se mohou ptát přes `window.ivglowConsent.has('analytics')`
nebo poslouchat událost `ivglow:consent`.
