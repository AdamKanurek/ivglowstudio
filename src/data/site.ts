export const site = {
  name: 'IV Glow studio',
  title: 'IV Glow studio – kosmetický salon Písek',
  description:
    'Kosmetický salon IV Glow studio v Písku. Profesionální ošetření pleti s kosmetikou Gigi Laboratories – čištění pleti, karboxyterapie, anti-aging a rozjasňující ošetření.',
  owner: 'Ivana Vacíková',
  phone: '770 403 009',
  phoneHref: 'tel:+420770403009',
  // TODO: schránku info@ivglowstudio.cz je potřeba zřídit na hostingu před spuštěním
  email: 'info@ivglowstudio.cz',
  instagram: '@ivglowstudio',
  instagramUrl: 'https://www.instagram.com/ivglowstudio/',
  address: {
    street: 'Zeyerova 2738',
    city: 'Písek',
    zip: '397 01',
    country: 'CZ',
  },
  openingHours: 'Dle objednávek, po domluvě i o víkendu',
  parking:
    'Zaparkovat můžete přímo v ulici, případně v podzemních garážích, kde je vyhrazené parkovací místo pro klientky.',
};

/** Povinné identifikační údaje podnikatele (§ 435 občanského zákoníku) – zobrazují se v patičce */
export const legal = {
  name: 'Ivana Vacíková',
  ico: '29742005',
  seat: 'Zeyerova 2738, 397 01 Písek',
  register: 'fyzická osoba zapsaná v živnostenském rejstříku',
};

/** Odkaz na Mapy.com – oficiální vyhledávací URL, najde adresu a zobrazí ji špendlíkem */
export const mapUrl = `https://mapy.com/fnc/v1/search?query=${encodeURIComponent(
  `${site.address.street}, ${site.address.zip} ${site.address.city}`
)}`;

/**
 * Tlačítko „Objednat se“ – jediné místo, kde se mění cíl objednávky.
 * Klientky se objednávají přes Instagram, telefon nebo e-mail, proto vede na sekci Kontakt.
 * Až bude rezervační systém (Reservio, Bookio…), stačí sem dát jeho URL.
 */
export const booking = {
  label: 'Objednat se',
  href: '#kontakt',
};

export const nav = [
  { label: 'Kosmetika', href: '#kosmetika' },
  { label: 'O mně', href: '#o-mne' },
  { label: 'Ceník služeb', href: '#cenik' },
  { label: 'Fotogalerie', href: '#galerie' },
  { label: 'Kontakt', href: '#kontakt' },
];
