export interface Review {
  text: string;
  /** jméno nebo iniciály – pokud chybí, zobrazí se „spokojená klientka“ */
  author?: string;
}

/**
 * Skutečné zprávy od klientek salonu (z Instagramu / SMS), zveřejněné anonymně.
 * Přepsáno ze screenshotů od klientky, opraveny jen zjevné překlepy (chvěla, si → jsi), emoji vynechány.
 * Dokud je pole prázdné, sekce s recenzemi se na webu nezobrazí.
 */
export const reviews: Review[] = [
  {
    text: 'Ráda bych ti touto cestou poděkovala za další skvělou péči, kdy jsme dělaly čištění pleti, při kterém jsi snad nevynechala ani jeden pupínek. Tvá práce je opravdu precizní a hlavně je vidět ihned po ošetření. Ze salonu odcházím s krásnou, vyživenou pletí bez začervenání a známek po jakémkoliv mačkání, a to nemluvím o péči o rty, kterou na závěr vždy děláme – konečně nemám suché rty, které mě vždy trápily. Děkuji ti nejen já, ale hlavně má pleť. Už se těším na další návštěvu.',
  },
  {
    text: 'Ivanko, chtěla jsem vám poděkovat za další příjemnou návštěvu. Vidím na své pleti opravdu změny díky vaší pravidelné péči, i čištění u vás mi přijde kratší a kratší, což znamená méně a méně pupínků. Moc vám děkuji a doporučuji všem návštěvu vašeho salonu! Zlaté ručičky.',
  },
  {
    text: 'Děkuji za ošetření! Byla jsem opravdu moc spokojená, všechno bylo příjemné a cítila jsem se skvěle. Je vidět, že tomu opravdu rozumíš. Můžu jen doporučit!',
  },
  {
    text: 'Dnes jsem navštívila Ivanky kosmetické studio. Odcházela jsem naprosto spokojená – šikovné ruce, příjemné prostředí, skvělý relax. Cítila jsem lehkost na pleti, vyhlazenou a hebkou pleť. Určitě všem doporučuji navštívit.',
  },
];

/** Informace o původu recenzí (zákon o ochraně spotřebitele vyžaduje uvést, jak je zajištěna pravost) */
export const reviewsNote =
  'Recenze jsou skutečné zprávy, které salonu poslaly klientky. Zveřejňujeme je anonymně.';
