// Préfixe les chemins internes avec la « base » du site (nécessaire sur GitHub Pages,
// où le site est servi sous /nom-du-depot/).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = '') {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${base}/${path.replace(/^\//, '')}`;
}

export function euros(n) {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
}
