export interface Service {
  name: string;
  price: number;
  /** cena „od“ */
  from?: boolean;
  /** příplatek k ošetření („+ 300,-“) */
  addon?: boolean;
  description?: string;
  /** zvýhodněný balíček více ošetření */
  package?: { label: string; price: number };
}

/** Hlavní ošetření pleti */
export const treatments: Service[] = [
  {
    name: 'Čištění pleti metodou 10v1',
    price: 1700,
    from: true,
    description:
      'Autorizovaná metoda profesionálního hloubkového čištění pleti, která kombinuje 10 navazujících kroků péče pro důkladné vyčištění, osvěžení a revitalizaci pleti. Vhodné pro problematickou a aknózní pleť a pro pleť s černými tečkami a komedony.',
  },
  {
    name: 'Rozjasňující ošetření s vitamínem C',
    price: 1300,
    description:
      'Antioxidační ošetření, sjednocení tónu pleti, glow efekt, vhodné na pigmentaci, unavenou pleť.',
  },
  {
    name: 'Ošetření New Age G4',
    price: 1500,
    description:
      'Stimulace a regenerace pokožky, zlepšení textury pleti, posílení a obnovení epidermální bariéry, okamžitý lifting.',
  },
  {
    name: 'Ošetření Nutri Peptide',
    price: 1500,
    description:
      'Hloubková hydratace, anti-aging ošetření, redukce vrásek, rozjasnění pleti. Možnost přístrojového zapracování speciálních boosterů dle typu a stavu pleti.',
  },
  {
    name: 'Karboxyterapie',
    price: 1700,
    description:
      'Neinvazivní okysličení pleti, vyhlazení vrásek, silná hydratace, zlepšení struktury a kvality pleti, stažení pórů, obnova imunity pokožky, redukce jizev po akné.',
  },
  {
    name: 'Chemický peeling pHformula',
    price: 1800,
    package: { label: 'Zvýhodněný balíček 3× chemický peeling', price: 4800 },
    description:
      'Řízené resurfacingové ošetření, jehož cílem je řízená obnova pleti. Na rozdíl od tradičních chemických peelingů, které se zaměřují především na exfoliaci vnější vrstvy pokožky, metoda pHformula aktivně podporuje zrychlenou obnovu buněk v epidermis i dermis (hlubších vrstvách pokožky).',
  },
  {
    name: 'Hloubková obnova pleti pomocí spikulí',
    price: 2000,
    package: { label: 'Zvýhodněný balíček 3× ošetření', price: 5300 },
    description:
      'Specializované ošetření zaměřené na obnovu a zlepšení vzhledu pleti. Spikule zvyšují propustnost pokožky a vytvářejí dočasné mikrokanálky. Tento mechanický podnět vyvolává exfoliaci a buněčnou obnovu – napodobuje mikrojehličkování, ale bez invazivních nástrojů.',
  },
  {
    name: 'Přístrojové ošetření',
    price: 300,
    addon: true,
    description: 'Sonoforéza, radiofrekvence, chladící hlavice, kyslíkový sprej.',
  },
];

/** Doplňkové služby */
export const extras: Service[] = [
  { name: 'Barvení obočí', price: 150 },
  { name: 'Barvení řas', price: 150 },
  { name: 'Lash lifting', price: 950 },
  { name: 'Depilace horního rtu', price: 100 },
  { name: 'Alginátová maska', price: 250 },
  { name: 'Kosmetická masáž obličeje, krku a dekoltu', price: 500 },
];

const czk = (n: number) => `${n.toLocaleString('cs-CZ')} Kč`;

export const formatPrice = (s: Service) => `${s.addon ? '+ ' : s.from ? 'od ' : ''}${czk(s.price)}`;

export const formatPackage = (s: Service) => (s.package ? czk(s.package.price) : '');

/** rozpětí cen jednotlivých služeb (bez příplatků a balíčků) – pro strukturovaná data */
export const priceRange = (() => {
  const prices = [...treatments, ...extras].filter((s) => !s.addon).map((s) => s.price);
  return `${Math.min(...prices)} – ${Math.max(...prices)} Kč`;
})();
