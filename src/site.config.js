// =============================================================================
//  FICHIER DE CONTENU DU SITE EURE4TROPHY
// =============================================================================
//  Tous les textes, liens, montants et emails du site sont ici.
//  Vous pouvez modifier ce fichier directement sur GitHub (icône crayon) :
//  le site se met à jour tout seul en 1 à 2 minutes.
//
//  Règles à respecter pour ne rien casser :
//   - Gardez les guillemets autour des textes : "mon texte".
//   - Gardez la virgule à la fin de chaque ligne ou bloc.
//   - Si votre texte contient un guillemet ", écrivez \" (ou utilisez « »).
//   - Les lignes qui commencent par // sont des commentaires, ignorés par le site.
//   - Un lien laissé vide ("") affiche un bouton « Bientôt disponible ».
// =============================================================================

export default {
  // ---------------------------------------------------------------------------
  //  INFORMATIONS GÉNÉRALES
  // ---------------------------------------------------------------------------
  nom: "Eure4trophy",
  slogan: "Deux étudiants d'EURECOM, une Renault 4L et 6 000 km jusqu'au désert marocain.",
  description:
    "Eure4trophy, l'équipage d'EURECOM au 4L Trophy 2027 : de Biarritz à Marrakech en Renault 4L pour apporter des fournitures scolaires et sportives aux enfants du Maroc. Soutenez-nous !",
  email: "eure4trophy@gmail.com",
  instagram: {
    pseudo: "eure4trophy",
    lien: "https://www.instagram.com/eure4trophy/",
  },
  association: "Association Eure4trophy — loi 1901 (en cours de création)",
  avertissement:
    "Site d'équipage indépendant, non affilié à l'organisation du 4L Trophy ni à Renault.",

  // ---------------------------------------------------------------------------
  //  MISE EN LIGNE (à remplir une fois le dépôt GitHub créé, voir README)
  // ---------------------------------------------------------------------------
  deploiement: {
    // Adresse GitHub Pages : https://VOTRE-PSEUDO-GITHUB.github.io
    url: "https://codtino.github.io",
    // Nom du dépôt GitHub précédé d'un « / ». Mettez "" si vous utilisez un nom de domaine à vous.
    base: "/eure4trophy",
  },

  // ---------------------------------------------------------------------------
  //  FINANCEMENT — la barre « Où en est-on ? »
  //  Mettez à jour « collecte » à la main (sans espace ni « € ») : 1250, pas "1 250 €".
  // ---------------------------------------------------------------------------
  financement: {
    collecte: 0,
    objectif: 12000,
    miseAJour: "4 octobre 2026",
  },

  // ---------------------------------------------------------------------------
  //  L'ÉQUIPAGE — photos à déposer dans public/assets/photos/
  // ---------------------------------------------------------------------------
  equipage: {
    photo: "assets/photos/equipage.jpg",
    photoAlt: "Léonard et Antoine, côte à côte, en maillots de football du Maroc",
    membres: [
      {
        prenom: "Léonard",
        surnom: "Léo",
        role: "Pilote & copilote",
        photo: "assets/photos/leonard.jpg",
        photoAlt: "Portrait de Léonard, souriant",
        resume: "Originaire de La Rochelle, sportif et toujours partant pour un nouveau défi.",
        bio:
          "Originaire de La Rochelle, j'ai fait deux années intenses de classe préparatoire au lycée Clemenceau de Nantes avant d'intégrer EURECOM. Sportif, sociable et ambitieux, je suis toujours à la recherche d'un nouveau défi. Eure4trophy, c'est exactement ce qu'il me fallait : une aventure mécanique exigeante, un vrai travail d'équipe et un impact humanitaire concret.",
      },
      {
        prenom: "Antoine",
        surnom: "Tino",
        role: "Pilote & copilote",
        photo: "assets/photos/antoine.jpg",
        photoAlt: "Portrait d'Antoine, en chemise bleue",
        resume: "Passé par trois ans de prépa à Paris, passionné de tennis et joueur d'équipe.",
        bio:
          "Après trois années de classe préparatoire à Paris, j'ai rejoint EURECOM avec l'envie de m'investir dans un projet qui a du sens. Passionné de tennis, j'aime le jeu collectif, et on me dit souvent abordable et bienveillant. Pour moi, Eure4trophy est l'occasion parfaite de mettre notre énergie au service des enfants du désert.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  //  PAGE D'ACCUEIL
  // ---------------------------------------------------------------------------
  accueil: {
    surtitre: "4L Trophy 2027 · Biarritz → Marrakech",
    titre: "Cap sur le désert en Renault 4L",
    intro:
      "Nous sommes Léonard et Antoine, étudiants ingénieurs à EURECOM. En février 2027, nous prenons le départ du 4L Trophy, le plus grand raid étudiant d'Europe, avec dans le coffre au moins 50 kg de fournitures scolaires et sportives pour les enfants du Maroc. Pour y arriver, nous avons besoin de vous.",
    chiffres: [
      { valeur: "6 000 km", label: "de route et de pistes" },
      { valeur: "3 pays", label: "France, Espagne, Maroc" },
      { valeur: "50 kg", label: "de fournitures à livrer" },
      { valeur: "0 GPS", label: "carte, boussole et roadbook" },
    ],
    equipageTitre: "L'équipage",
    equipageIntro:
      "Deux étudiants en Data Science à EURECOM (Sophia Antipolis) qui échangent leur clavier contre une clé à molette.",
    heritageTitre: "Une 4L qui ne s'arrête pas après la course",
    heritage:
      "Notre 4L sera transmise chaque année à un nouvel équipage d'EURECOM. En nous soutenant aujourd'hui, vous lancez une tradition étudiante et solidaire qui roulera pendant des années.",
  },

  // ---------------------------------------------------------------------------
  //  PAGE « FAIRE UN DON »
  // ---------------------------------------------------------------------------
  dons: {
    titre: "Faire un don",
    intro:
      "Chaque euro nous rapproche de la ligne de départ. Les dons passent uniquement par des plateformes de cagnotte en ligne sécurisées : ce site ne gère aucun paiement.",
    // Une carte par cagnotte. Laissez lien: "" tant que la cagnotte n'est pas ouverte.
    cagnottes: [
      {
        nom: "HelloAsso",
        description:
          "La plateforme de référence des associations françaises. Paiement sécurisé, et 100 % de votre don nous revient.",
        lien: "",
        bouton: "Donner sur HelloAsso",
      },
      {
        // Remplacez le nom par la plateforme choisie (Leetchi, Lydia, GoFundMe…)
        nom: "Cagnotte en ligne",
        description:
          "Une autre façon simple de participer, en quelques clics depuis votre téléphone.",
        lien: "",
        bouton: "Participer à la cagnotte",
      },
    ],
    // Adresse du widget HelloAsso (fournie par HelloAsso : « Diffuser » → « Widgets »).
    // Elle se termine par /widget. Laissez "" pour ne pas afficher le widget.
    widgetHelloAsso: "",
    utilisationTitre: "À quoi sert votre don ?",
    utilisationIntro: "Notre budget total est estimé à environ 12 000 €. Voici comment il se répartit :",
    // Les montants servent à dessiner les barres. Ajoutez, retirez ou modifiez librement.
    budget: [
      { poste: "Achat et préparation de la 4L", montant: 5000, detail: "Achat du véhicule, mécanique, renforts, pièces de rechange." },
      { poste: "Inscription au 4L Trophy", montant: 3700, detail: "Frais d'inscription officiels au raid." },
      { poste: "Carburant, péages et nourriture", montant: 2000, detail: "Le trajet depuis Sophia Antipolis, puis les 6 000 km du raid." },
      { poste: "Actions solidaires", montant: 1000, detail: "Fournitures scolaires et sportives pour les enfants du Maroc." },
    ],
    natureTitre: "Dons en nature",
    natureIntro:
      "Vous pouvez aussi nous aider sans argent ! Nous recherchons :",
    nature: [
      { titre: "Pièces auto & équipement", texte: "Pièces de Renault 4, pneus, outillage, plaques de désensablage, matériel de camping." },
      { titre: "Fournitures scolaires", texte: "Cahiers, stylos, trousses, cartables, livres en français." },
      { titre: "Matériel sportif", texte: "Ballons, maillots, chaussures de sport en bon état." },
    ],
    natureAppel: "Vous avez quelque chose à nous donner ? Écrivez-nous, on s'organise !",
  },

  // ---------------------------------------------------------------------------
  //  PAGE « DEVENIR SPONSOR »
  // ---------------------------------------------------------------------------
  sponsors: {
    titre: "Devenir sponsor",
    intro:
      "Associez votre entreprise à une aventure humaine, technique et solidaire, suivie de Sophia Antipolis jusqu'aux dunes du Sahara.",
    avantagesTitre: "Ce que vous y gagnez",
    avantages: [
      {
        titre: "Votre logo sur la 4L",
        texte:
          "Votre marque traverse 3 pays, puis reste exposée sur le campus d'EURECOM, au cœur de la technopole de Sophia Antipolis, bien après la course.",
      },
      {
        titre: "De la visibilité sur nos réseaux",
        texte:
          "Publications, stories et vidéos sur Instagram avant, pendant et après le raid, avec des photos et vidéos que vous pouvez réutiliser.",
      },
      {
        titre: "Une image engagée",
        texte:
          "Éducation et solidarité, économie circulaire (une 4L restaurée et transmise) : un projet concret pour votre politique RSE.",
      },
      {
        titre: "Un lien avec de futurs ingénieurs",
        texte:
          "Faites-vous connaître des étudiants en informatique et data science d'EURECOM : vos futurs stagiaires et recrues.",
      },
    ],
    noteFiscale:
      "Le parrainage est une dépense de communication pour votre entreprise : en contrepartie de la visibilité, il est en principe déductible du résultat imposable. Renseignez-vous auprès de votre expert-comptable.",
    formulesTitre: "Nos formules de partenariat",
    formulesIntro:
      "Notre 4L est découpée en zones de visibilité. Choisissez la vôtre !",
    // « id » sert au formulaire : n'utilisez ni espace ni accent.
    formules: [
      {
        id: "coup-de-pouce",
        nom: "Coup de pouce",
        prix: "450 €",
        zone: "Ailes avant ou custodes (vitres arrière)",
        places: "6 places",
        inclus: [
          "Votre logo sur la 4L",
          "Remerciement en story Instagram",
          "Votre logo sur ce site",
        ],
      },
      {
        id: "partenaire",
        nom: "Partenaire",
        prix: "900 €",
        zone: "Coffre, ailes arrière ou bandeau de pare-brise",
        places: "6 places",
        inclus: [
          "Tout le « Coup de pouce »",
          "Un emplacement plus grand, bien visible de loin",
          "Une publication Instagram dédiée",
          "Photos et vidéos HD pour votre communication",
        ],
        miseEnAvant: true,
      },
      {
        id: "partenaire-principal",
        nom: "Partenaire principal",
        prix: "1 500 € et +",
        zone: "Capot ou portières avant",
        places: "4 places",
        inclus: [
          "Tout le « Partenaire »",
          "Les zones les plus photographiées de la 4L",
          "Votre logo en tête sur ce site et nos réseaux",
          "Mention dans nos vidéos et communiqués",
        ],
      },
      {
        id: "sur-mesure",
        nom: "Sur mesure",
        prix: "1 € = 1 cm²",
        zone: "L'emplacement de votre choix",
        places: "Selon disponibilités",
        inclus: [
          "Un budget précis ou une idée originale ?",
          "Nous concevons ensemble un emplacement adapté à votre marque",
        ],
      },
    ],
    formulaireTitre: "Nous contacter",
    formulaireIntro:
      "Remplissez ce formulaire, nous vous répondons sous 48 h. Vous pouvez aussi nous écrire directement :",
    soutiensTitre: "Ils nous soutiennent",
    soutiensVide: "Votre logo ici ?",
    // Ajoutez un sponsor : déposez son logo dans public/assets/sponsors/ puis copiez un bloc :
    // { nom: "Garage Dupont", logo: "assets/sponsors/garage-dupont.png", lien: "https://garage-dupont.fr" },
    liste: [],
  },

  // ---------------------------------------------------------------------------
  //  FORMULAIRE DE CONTACT (Formspree, voir README)
  // ---------------------------------------------------------------------------
  formulaire: {
    // L'identifiant Formspree ressemble à "xyzabcde" (dans https://formspree.io/f/xyzabcde).
    // Tant qu'il est vide, le formulaire est remplacé par un lien vers l'email.
    formspreeId: "",
    messageSucces: "Merci ! Votre message est bien parti. Nous revenons vers vous très vite.",
    messageErreur: "Oups, l'envoi a échoué. Réessayez, ou écrivez-nous directement par email.",
  },

  // ---------------------------------------------------------------------------
  //  PAGE « NOTRE PROJET »
  // ---------------------------------------------------------------------------
  projet: {
    titre: "Notre projet",
    intro:
      "Plus qu'un raid : une aventure étudiante, mécanique et solidaire qui a vocation à durer.",
    trophyTitre: "Le 4L Trophy",
    trophy: [
      "Le 4L Trophy est le plus grand raid étudiant d'Europe. Chaque année, des centaines d'équipages de deux étudiants relient Biarritz à Marrakech en Renault 4L, à travers la France, l'Espagne et le désert marocain.",
      "Ce n'est pas une course de vitesse : la navigation se fait à l'ancienne, avec une carte, une boussole et un roadbook, sans GPS. L'objectif est d'arriver au bout en parcourant le moins de kilomètres possible, grâce à l'entraide et à la débrouillardise mécanique.",
    ],
    equipageTitre: "Notre équipage",
    equipageIntro:
      "Deux étudiants ingénieurs en Data Science à EURECOM, habitués aux algorithmes et aux problèmes complexes, qui ont décidé d'échanger leur clavier contre une clé à molette.",
    motivationTitre: "Notre motivation : une 4L transmise d'année en année",
    motivation: [
      "Eure4trophy n'est pas un projet éphémère. Notre objectif : acheter, restaurer et préparer une Renault 4L qui deviendra un symbole de l'engagement d'EURECOM.",
      "Chaque année, cette même voiture sera confiée à un nouvel équipage d'étudiants de l'école. Un vrai défi technique pour de futurs ingénieurs, qui devront l'entretenir, la réparer et l'améliorer d'une édition à l'autre.",
      "Pour lancer cette histoire, il faut d'abord franchir notre propre ligne de départ : financer l'achat et la préparation de la toute première 4L.",
    ],
    motivationPhoto: "assets/photos/notre-4l.jpg",
    motivationPhotoAlt: "Notre Renault 4L",
    solidaireTitre: "Le volet solidaire",
    solidaire: [
      "Au-delà du défi sportif, le 4L Trophy est une mission humanitaire. Le raid est partenaire de l'association Enfants du Désert, qui améliore l'accès à l'éducation des enfants du sud marocain.",
      "Notre 4L transportera au moins 50 kg de fournitures scolaires, de matériel sportif et médical, remis directement à des écoles et associations locales à l'arrivée.",
    ],
    solidairePhoto: "assets/photos/solidaire.jpg",
    solidairePhotoAlt: "Notre 4L chargée de cartons de fournitures scolaires",
    calendrierTitre: "Notre calendrier",
    calendrier: [
      { mois: "Octobre 2026", etapes: ["Création de l'association Eure4trophy", "Lancement de la campagne de sponsoring"] },
      { mois: "Novembre 2026", etapes: ["Recherche et achat de notre Renault 4L", "Suite de la campagne de sponsoring"] },
      { mois: "Décembre 2026", etapes: ["Signature des partenariats", "Début des réparations moteur et du renfort du châssis"] },
      { mois: "Janvier 2027", etapes: ["Carrosserie, peinture et pose des stickers des sponsors", "La 4L devient la vitrine roulante de nos partenaires"] },
      { mois: "Février 2027", etapes: ["Route vers le village de départ à Biarritz", "Contrôles techniques et administratifs", "Traversée de l'Espagne et départ du raid dans le désert marocain !"] },
    ],
    dossierTitre: "Notre dossier de sponsoring",
    dossierIntro:
      "Tout notre projet en détail : équipage, budget, zones de visibilité sur la 4L et formules de partenariat.",
    dossierFichier: "assets/dossier-sponsoring.pdf",
    dossierInfos: "PDF, en anglais, 1,5 Mo",
  },
};
