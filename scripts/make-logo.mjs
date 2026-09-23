// Jednorázový skript: vyřízne logo z podkladu 2000×2000 a odstraní bílé pozadí.
// Spuštění: node scripts/make-logo.mjs
import sharp from 'sharp';

const src = 'src/assets/logo-src.png';
const crop = { left: 590, top: 750, width: 900, height: 340 };

const { data, info } = await sharp(src)
  .extract(crop)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

// „Un-blend“ proti bílé: alfa podle nejtmavšího kanálu, barva se dopočítá zpět.
for (let i = 0; i < data.length; i += 4) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const a = Math.min(1, (255 - Math.min(r, g, b)) / 150);
  if (a < 0.04) {
    data[i + 3] = 0;
    continue;
  }
  const un = (c) => Math.max(0, Math.min(255, Math.round(255 - (255 - c) / a)));
  data[i] = un(r);
  data[i + 1] = un(g);
  data[i + 2] = un(b);
  data[i + 3] = Math.round(a * 255);
}

const img = sharp(data, { raw: info }).trim();
await img.clone().png().toFile('src/assets/logo.png');

// favicon z hvězdičky v logu
await sharp(data, { raw: info })
  .extract({ left: 790, top: 117, width: 74, height: 74 })
  .resize(64, 64)
  .png()
  .toFile('public/favicon.png');

console.log('logo hotovo');
