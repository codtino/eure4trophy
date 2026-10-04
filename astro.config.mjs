// Configuration technique d'Astro. Vous n'avez normalement rien à modifier ici :
// l'adresse du site se règle dans src/site.config.js (rubrique « deploiement »).
import { defineConfig } from 'astro/config';
import site from './src/site.config.js';

export default defineConfig({
  site: site.deploiement.url,
  base: site.deploiement.base || undefined,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
