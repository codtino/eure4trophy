# Site Eure4trophy — 4L Trophy 2027

Site vitrine de l'équipage **Eure4trophy** (Léonard & Antoine, EURECOM) : dons, sponsoring et présentation du projet.

- **Technologie** : [Astro](https://astro.build), qui génère un site 100 % statique (du HTML pur, très rapide).
- **Hébergement** : GitHub Pages, gratuit, avec publication automatique à chaque modification.
- **Formulaire** : [Formspree](https://formspree.io), gratuit.
- **Aucun paiement** n'est géré par le site : les dons passent par HelloAsso ou une autre cagnotte.

---

## Sommaire

1. [Organisation des fichiers](#1-organisation-des-fichiers)
2. [Modifier les textes](#2-modifier-les-textes)
3. [Mettre à jour le montant collecté](#3-mettre-à-jour-le-montant-collecté)
4. [Ajouter les liens des cagnottes](#4-ajouter-les-liens-des-cagnottes-et-le-widget-helloasso)
5. [Ajouter vos photos](#5-ajouter-vos-photos)
6. [Ajouter un sponsor](#6-ajouter-un-sponsor)
7. [Configurer le formulaire de contact](#7-configurer-le-formulaire-de-contact-formspree)
8. [Mettre le site en ligne](#8-mettre-le-site-en-ligne-gratuitement-github-pages)
9. [Tester le site sur votre ordinateur](#9-optionnel--tester-le-site-sur-votre-ordinateur)
10. [Check-list avant de partager le lien](#10-check-list-avant-de-partager-le-lien)

---

## 1. Organisation des fichiers

```
├── src/
│   ├── site.config.js        ← ⭐ LE fichier à modifier : textes, liens, montants, sponsors
│   ├── pages/                ← les 4 pages (accueil, don, sponsor, projet) + page 404
│   ├── components/           ← en-tête, pied de page, barre de progression, formulaire…
│   ├── layouts/Base.astro    ← structure commune (SEO, aperçus réseaux sociaux)
│   └── styles/global.css     ← couleurs et polices
├── public/
│   ├── assets/
│   │   ├── photos/           ← ⭐ vos photos
│   │   ├── sponsors/         ← ⭐ logos des sponsors
│   │   ├── dossier-sponsoring.pdf
│   │   └── logo.png          ← votre badge rond
│   ├── og-image.jpg          ← image d'aperçu sur Instagram, WhatsApp, LinkedIn…
│   └── favicon.svg / favicon.png / apple-touch-icon.png
└── .github/workflows/deploy.yml   ← publication automatique (ne pas toucher)
```

**Au quotidien, vous ne modifiez que `src/site.config.js` et les dossiers `public/assets/…`.**

---

## 2. Modifier les textes

Tous les textes sont dans **`src/site.config.js`**, rangés par page : `accueil`, `dons`, `sponsors`, `projet`.

### Depuis GitHub (le plus simple, rien à installer)

1. Sur la page de votre dépôt GitHub, ouvrez `src` puis `site.config.js`.
2. Cliquez sur l'icône **crayon** ✏️ (« Edit this file »).
3. Faites vos modifications.
4. Cliquez sur **Commit changes…**, puis encore sur **Commit changes**.
5. Le site se met à jour tout seul en 1 à 2 minutes. Vous suivez l'avancement dans l'onglet **Actions**.

### Règles pour ne rien casser

- Gardez les **guillemets** autour des textes : `titre: "Mon titre",`
- Gardez la **virgule** à la fin de chaque ligne.
- Pour un guillemet dans un texte, utilisez les guillemets français « » ou écrivez `\"`.
- Si la publication échoue (croix rouge ❌ dans l'onglet **Actions**), c'est presque toujours un guillemet ou une virgule oublié. Revenez à la version précédente via l'historique du fichier (bouton **History**).

---

## 3. Mettre à jour le montant collecté

Dans `src/site.config.js`, rubrique `financement` :

```js
financement: {
  collecte: 1250,              // ← montant collecté, sans espace ni « € »
  objectif: 12000,             // ← objectif total
  miseAJour: "15 novembre 2026", // ← date affichée sous la barre
},
```

La barre de progression (accueil et page « Faire un don ») et le pourcentage se recalculent tout seuls.

---

## 4. Ajouter les liens des cagnottes (et le widget HelloAsso)

Rubrique `dons.cagnottes` : chaque bloc correspond à une carte. Collez le lien entre les guillemets :

```js
{
  nom: "HelloAsso",
  description: "…",
  lien: "https://www.helloasso.com/associations/eure4trophy/collectes/4l-trophy-2027",
  bouton: "Donner sur HelloAsso",
},
```

- Tant que `lien` est vide (`""`), un bouton grisé **« Bientôt disponible »** s'affiche.
- Pour renommer la seconde cagnotte (Leetchi, Lydia, GoFundMe…), modifiez `nom`.
- Pour ajouter une 3ᵉ cagnotte, copiez-collez un bloc `{ … },`.

**Widget HelloAsso** (formulaire de don intégré directement dans la page) :

1. Sur HelloAsso, ouvrez votre collecte, puis **Diffusion** → **Widgets** (ou « Intégrer à mon site »).
2. Copiez l'**adresse** (`src="…"`) du code iframe proposé. Elle se termine par `/widget`.
3. Collez-la dans `dons.widgetHelloAsso: "https://www.helloasso.com/…/widget"`.

> ⚠️ HelloAsso n'accepte que des **associations déclarées** (il vous faudra le numéro RNA). Créez donc d'abord l'association en préfecture (démarche en ligne sur service-public.fr), puis mettez à jour la mention `association` dans la config.

---

## 5. Ajouter vos photos

Déposez vos photos dans **`public/assets/photos/`** avec **exactement** ces noms :

| Fichier | Où il apparaît | Format conseillé |
|---|---|---|
| `equipage.jpg` | Grande photo de l'accueil | Portrait (4:5), ex. 1200 × 1500 px |
| `leonard.jpg` | Portrait rond de Léonard | Carré, 600 × 600 px |
| `antoine.jpg` | Portrait rond d'Antoine | Carré, 600 × 600 px |
| `notre-4l.jpg` | Page « Notre projet », section motivation | Paysage (4:3), 1200 × 900 px |
| `solidaire.jpg` | Page « Notre projet », volet solidaire | Paysage (4:3), 1200 × 900 px |

- Tant qu'une photo manque, un emplacement « Photo à venir » s'affiche à sa place.
- **Allégez vos photos** avant de les déposer (visez moins de 300 Ko chacune) avec [squoosh.app](https://squoosh.app), gratuit, dans le navigateur. C'est essentiel pour la vitesse sur mobile.
- Pour changer un nom de fichier ou la **description de la photo** (texte alternatif, lu par les lecteurs d'écran), modifiez `photo` et `photoAlt` dans la config.

Sur GitHub, pour déposer une photo : ouvrez le dossier `public/assets/photos`, puis **Add file** → **Upload files**.

---

## 6. Ajouter un sponsor

1. Déposez son logo dans **`public/assets/sponsors/`**, par exemple `garage-dupont.png`. Choisissez de préférence un PNG à fond transparent ou un SVG.
2. Dans `src/site.config.js`, rubrique `sponsors.liste`, ajoutez une ligne :

```js
liste: [
  { nom: "Garage Dupont", logo: "assets/sponsors/garage-dupont.png", lien: "https://garage-dupont.fr" },
  { nom: "Boulangerie Martin", logo: "assets/sponsors/boulangerie-martin.png", lien: "" },
],
```

- `nom` sert de texte alternatif au logo.
- `lien` est facultatif : laissez `""` si le sponsor n'a pas de site.
- Tant qu'il y a moins de 3 sponsors, des cases « Votre logo ici ? » complètent la grille.

**Modifier les formules** (prix, zones, contenu) : rubrique `sponsors.formules`. Le champ `id` sert au formulaire : sans espace ni accent.

---

## 7. Configurer le formulaire de contact (Formspree)

Comme le site est statique (sans serveur), les messages du formulaire passent par **Formspree**, qui vous les transfère par email.

1. Créez un compte gratuit sur [formspree.io](https://formspree.io) avec **eure4trophy@gmail.com**.
2. Cliquez sur **+ New Form**, nommez-le « Contact sponsors », et choisissez eure4trophy@gmail.com comme destinataire.
3. Formspree affiche une adresse du type `https://formspree.io/f/xyzabcde`. Copiez **la fin** : `xyzabcde`.
4. Collez-la dans `src/site.config.js` :
   ```js
   formulaire: {
     formspreeId: "xyzabcde",
   ```
5. Une fois le site en ligne, envoyez-vous un message de test. Formspree vous demande de **confirmer votre email** au premier envoi.
6. *(Recommandé)* Dans les réglages du formulaire sur Formspree, onglet **Settings** :
   - restreignez l'envoi au domaine de votre site (`VOTRE-PSEUDO.github.io`) ;
   - laissez la protection anti-spam activée.

À savoir :

- **Anti-spam** : le formulaire contient déjà un champ piège invisible (« honeypot », nommé `_gotcha`). Les robots le remplissent et Formspree ignore alors leur message.
- **Offre gratuite** : environ 50 messages par mois, largement suffisant. Vérifiez les conditions à jour sur leur site.
- **Tant que `formspreeId` est vide**, le bouton « Envoyer » ouvre la messagerie du visiteur avec un email pré-rempli à votre adresse. Le formulaire est donc utilisable dès le premier jour.

---

## 8. Mettre le site en ligne gratuitement (GitHub Pages)

### Première mise en ligne (environ 15 minutes)

1. **Créez un compte** sur [github.com](https://github.com), si ce n'est pas déjà fait.
2. **Créez un dépôt** : bouton **+** → **New repository**.
   - Nom : `eure4trophy`
   - Visibilité : **Public** (obligatoire pour GitHub Pages gratuit)
   - Ne cochez rien d'autre, puis **Create repository**.
3. **Envoyez les fichiers** : sur la page du dépôt vide, cliquez sur **uploading an existing file**. Glissez-déposez **tout le contenu** du dossier du site, **y compris le dossier `.github`**, sauf `node_modules` et `dist` s'ils existent. Puis **Commit changes**.
   > Plus confortable sur la durée : [GitHub Desktop](https://desktop.github.com), qui synchronise le dossier en un clic.
4. **Activez GitHub Pages** : onglet **Settings** → **Pages** → section *Build and deployment* → **Source : GitHub Actions**.
5. **Indiquez l'adresse du site** dans `src/site.config.js` (rubrique `deploiement`) :
   ```js
   deploiement: {
     url: "https://VOTRE-PSEUDO-GITHUB.github.io",  // ← votre pseudo GitHub
     base: "/eure4trophy",                          // ← le nom du dépôt
   },
   ```
   Cette étape est indispensable pour que les liens et les aperçus Instagram/WhatsApp fonctionnent.
6. Attendez 1 à 2 minutes (onglet **Actions** : coche verte ✅).
7. Votre site est en ligne sur **https://VOTRE-PSEUDO-GITHUB.github.io/eure4trophy/**. Mettez ce lien dans la bio Instagram !

### Ensuite

Chaque modification enregistrée sur GitHub republie le site automatiquement.

### Nom de domaine personnalisé (plus tard, facultatif)

Si vous achetez un domaine comme `eure4trophy.fr` (environ 10 €/an) :

1. Dans **Settings** → **Pages** → **Custom domain**, indiquez le domaine et suivez les instructions DNS de GitHub.
2. Dans la config, mettez `url: "https://eure4trophy.fr"` et `base: ""`.

---

## 9. (Optionnel) Tester le site sur votre ordinateur

Seulement si vous voulez voir vos modifications avant de les publier :

1. Installez [Node.js](https://nodejs.org), version 22 ou plus récente (version « LTS »).
2. Dans un terminal ouvert dans le dossier du site :
   ```bash
   npm install
   npm run dev
   ```
3. Ouvrez l'adresse affichée, par exemple `http://localhost:4321/eure4trophy/`. Le site se recharge à chaque modification.

`npm run build` génère la version finale dans `dist/`, ce que GitHub fait automatiquement.

---

## Autres modifications courantes

- **Remplacer le dossier PDF** : remplacez `public/assets/dossier-sponsoring.pdf` en gardant le même nom. Si la taille ou la langue change, mettez aussi à jour `projet.dossierInfos`.
- **Image d'aperçu réseaux sociaux** : remplacez `public/og-image.jpg` par une image de **1200 × 630 px**, par exemple une belle photo de la 4L avec votre logo.
- **Logo** : `public/assets/logo.png` (512 × 512 px) et `logo-160.png` (160 × 160 px).
- **Couleurs** : en haut de `src/styles/global.css`.
- **Email, Instagram, mention de l'association** : en haut de `src/site.config.js`.

---

## 10. Check-list avant de partager le lien

- [ ] `deploiement.url` contient votre vrai pseudo GitHub
- [ ] Les photos sont déposées et allégées
- [ ] Le lien HelloAsso est renseigné (après création de l'association)
- [ ] `formspreeId` est renseigné et un message de test est bien arrivé
- [ ] L'adresse eure4trophy@gmail.com existe
- [ ] La mention « Association … — loi 1901 » est à jour
- [ ] Vous avez testé le lien dans une story Instagram (aperçu, mobile)
