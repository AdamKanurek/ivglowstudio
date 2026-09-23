export interface Review {
  author: string;
  text: string;
  /** volitelně odkud recenze pochází, např. „Google“ */
  source?: string;
}

/**
 * Skutečné recenze klientek (z Google, Instagramu…).
 * Dokud je pole prázdné, sekce s recenzemi se na webu nezobrazí.
 */
export const reviews: Review[] = [];
