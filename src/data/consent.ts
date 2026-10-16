/**
 * Lišta se souhlasem s cookies.
 *
 * Web zatím žádné nepovinné cookies nepoužívá, proto je lišta VYPNUTÁ (enabled: false).
 * Zapnout ji až ve chvíli, kdy na web přibude služba, která cookies ukládá
 * (např. Google Analytics, vložená mapa Google, Instagram feed). Postup je v README.md.
 *
 * Skripty takových služeb se vkládají jako:
 *   <script type="text/plain" data-consent="analytics" data-src="https://…"></script>
 * a lišta je spustí až po udělení souhlasu s danou kategorií.
 */

export interface ConsentCategory {
  id: 'analytics' | 'marketing';
  label: string;
  description: string;
}

export const consentConfig = {
  /** zapnout, až web začne používat nepovinné cookies */
  enabled: false,
  /** zvýšit při změně používaných služeb – návštěvníků se lišta zeptá znovu */
  version: 1,
  /** jak dlouho platí uložená volba (ve dnech); poté se lišta zobrazí znovu */
  maxAgeDays: 180,
  categories: [
    {
      id: 'analytics',
      label: 'Analytické',
      description:
        'Pomáhají zjistit, kolik lidí web navštěvuje a které stránky je zajímají. Údaje jsou souhrnné a slouží ke zlepšování webu.',
    },
    {
      id: 'marketing',
      label: 'Marketingové',
      description:
        'Umožňují zobrazovat obsah ze sociálních sítí a měřit úspěšnost reklamy. Mohou je ukládat i třetí strany, např. Meta.',
    },
  ] satisfies ConsentCategory[],
};
