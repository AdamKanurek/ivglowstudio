export const site = {
  name: 'IV Glow studio',
  title: 'IV Glow studio – kosmetický salon Písek',
  description:
    'Kosmetický salon IV Glow studio v Písku. Profesionální ošetření pleti s kosmetikou Gigi Laboratories – čištění pleti, karboxyterapie, anti-aging a rozjasňující ošetření.',
  phone: '770 403 009',
  phoneHref: 'tel:+420770403009',
  instagram: '@ivglowstudio',
  instagramUrl: 'https://www.instagram.com/ivglowstudio/',
  address: {
    street: 'Zeyerova 2738',
    city: 'Písek',
    zip: '397 01',
    country: 'CZ',
  },
  mapUrl: 'https://mapy.com/s/?q=Zeyerova%202738%2C%20P%C3%ADsek',
};

/**
 * Tlačítko „Objednat se“ – jediné místo, kde se mění cíl objednávky.
 * Až bude rezervační systém (Reservio, Bookio…), stačí sem dát jeho URL.
 */
export const booking = {
  label: 'Objednat se',
  href: site.phoneHref,
};

export const nav = [
  { label: 'Kosmetika', href: '#kosmetika' },
  { label: 'O mně', href: '#o-mne' },
  { label: 'Ceník služeb', href: '#cenik' },
  { label: 'Fotogalerie', href: '#galerie' },
  { label: 'Kontakt', href: '#kontakt' },
];
