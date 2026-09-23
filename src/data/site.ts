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
};

/** Odkaz na Mapy.com – oficiální vyhledávací URL, najde adresu a zobrazí ji špendlíkem */
export const mapUrl = `https://mapy.com/fnc/v1/search?query=${encodeURIComponent(
  `${site.address.street}, ${site.address.zip} ${site.address.city}`
)}`;

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
