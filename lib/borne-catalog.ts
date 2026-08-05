// Catalogue COMPLET pour la borne kiosque du spa (Smart Screen 32").
// Source : carte des prestations et tarifs officiels transmise par la
// direction (PRESTATION ET PRIX). Prix exprimés en FCFA.

export type BorneCategory = {
  slug: string;
  name: string;
  icon: string; // emoji d'illustration pour la carte tactile
  image: string;
  description: string;
};

export type BorneService = {
  id: string;
  categorySlug: string;
  name: string;
  description: string;
  duration: string; // ex. "60 min"
  price: number; // en FCFA — pour les tarifs "à partir de", montant plancher
  image: string;
};

export const borneCategories: BorneCategory[] = [
  {
    slug: "massages-modelages",
    name: "Massages & Modelages",
    icon: "💆‍♀️",
    image: "/images/accueil/IMAGEAC12.webp",
    description: "Détente profonde et évasion sensorielle.",
  },
  {
    slug: "soins-visage",
    name: "Soins du Visage",
    icon: "✨",
    image: "/images/accueil/IMAGEAC3.webp",
    description: "Éclat, hydratation et jeunesse retrouvée.",
  },
  {
    slug: "soins-whertimear",
    name: "Soins Wherteimar",
    icon: "🌿",
    image: "/images/accueil/IMAGEAC4.webp",
    description: "Protocoles signature à l'éclat immédiat.",
  },
  {
    slug: "extensions-cils",
    name: "Extensions de Cils",
    icon: "👁️",
    image: "/images/accueil/IMAGEAC10.webp",
    description: "Un regard sublimé, cil à cil.",
  },
  {
    slug: "mains-pieds",
    name: "Mains & Pieds",
    icon: "💅",
    image: "/images/accueil/IMAGEAC7.webp",
    description: "Manucure et pédicure spa.",
  },
  {
    slug: "onglerie",
    name: "Onglerie",
    icon: "💎",
    image: "/images/accueil/IMAGEAC6.webp",
    description: "Nail art & pose gel expertes.",
  },
  {
    slug: "hammam-gommage",
    name: "Hammam & Gommage",
    icon: "🧖",
    image: "/images/accueil/IMAGEAC5.webp",
    description: "Rituel de purification traditionnel.",
  },
  {
    slug: "minceur-enveloppements",
    name: "Minceur & Enveloppement",
    icon: "🔥",
    image: "/images/accueil/IMAGEAC9.webp",
    description: "Silhouette raffermie et remodelée.",
  },
  {
    slug: "offres-simples",
    name: "Offres Simples",
    icon: "🌸",
    image: "/images/accueil/IMAGEAC11.webp",
    description: "Nos forfaits individuels.",
  },
  {
    slug: "offres-couple",
    name: "Offres Couple",
    icon: "❤️",
    image: "/images/accueil/IMAGEAC1.webp",
    description: "Un moment à deux, inoubliable.",
  },
  {
    slug: "soins-evenementiels",
    name: "Soins Événementiels",
    icon: "💐",
    image: "/images/accueil/IMAGEAC4.webp",
    description: "Éclat immédiat pour vos grands jours.",
  },
  {
    slug: "coiffure",
    name: "Coiffure",
    icon: "💇‍♀️",
    image: "/images/accueil/IMAGEAC8.webp",
    description: "Couleur, tissages, extensions.",
  },
  {
    slug: "epilations",
    name: "Épilations",
    icon: "🪒",
    image: "/images/accueil/IMAGEAC7.webp",
    description: "Cire, laser et body sculpting.",
  },
];

const IMG = {
  massage: "/images/accueil/IMAGEAC12.webp",
  massage2: "/images/accueil/IMAGEAC13.webp",
  visage: "/images/accueil/IMAGEAC3.webp",
  wherteimar: "/images/accueil/IMAGEAC4.webp",
  cils: "/images/accueil/IMAGEAC10.webp",
  mainsPieds: "/images/accueil/IMAGEAC7.webp",
  onglerie: "/images/accueil/IMAGEAC6.webp",
  hammam: "/images/accueil/IMAGEAC5.webp",
  minceur: "/images/accueil/IMAGEAC9.webp",
  simples: "/images/accueil/IMAGEAC11.webp",
  couple: "/images/accueil/IMAGEAC1.webp",
  evenement: "/images/accueil/IMAGEAC4.webp",
  coiffure: "/images/accueil/IMAGEAC8.webp",
};

export const borneServices: BorneService[] = [
  // ===== MASSAGES & MODELAGES =====
  // Modelage 1h
  { id: "m-relax-1h", categorySlug: "massages-modelages", name: "Massage relaxant", description: "Modelage doux aux huiles chaudes pour libérer les tensions.", duration: "1h", price: 35000, image: IMG.massage },
  { id: "m-tonique-1h", categorySlug: "massages-modelages", name: "Massage tonique", description: "Manœuvres fermes et énergiques pour dénouer les tensions profondes.", duration: "1h", price: 45000, image: IMG.massage },
  { id: "m-mixte-1h", categorySlug: "massages-modelages", name: "Massage entre tonique et relaxant", description: "L'équilibre parfait entre fermeté et douceur.", duration: "1h", price: 35000, image: IMG.massage },
  { id: "m-ayurveda", categorySlug: "massages-modelages", name: "Massage Ayurveda", description: "Rituel indien millénaire à l'huile chaude.", duration: "1h", price: 45000, image: IMG.massage },
  { id: "m-pierres", categorySlug: "massages-modelages", name: "Massage aux pierres chaudes", description: "Chaleur enveloppante des pierres volcaniques.", duration: "1h", price: 45000, image: IMG.massage2 },
  { id: "m-serviettes", categorySlug: "massages-modelages", name: "Massage aux serviettes chaudes", description: "Détente profonde à la chaleur des serviettes vapeur.", duration: "1h", price: 40000, image: IMG.massage },
  { id: "m-enceinte", categorySlug: "massages-modelages", name: "Massage femme enceinte", description: "Modelage doux et sécurisé, adapté à la grossesse.", duration: "1h", price: 35000, image: IMG.massage },
  { id: "m-post-accouchement", categorySlug: "massages-modelages", name: "Massage post-accouchement", description: "Accompagnement du corps après la naissance.", duration: "1h", price: 35000, image: IMG.massage },
  { id: "m-dampe", categorySlug: "massages-modelages", name: "Massage Dampé (traditionnel)", description: "Massage traditionnel signature de la maison.", duration: "1h", price: 35000, image: IMG.massage },
  { id: "m-huiles", categorySlug: "massages-modelages", name: "Massage aux huiles essentielles", description: "Modelage aromatique aux huiles essentielles pures.", duration: "1h", price: 40000, image: IMG.massage },
  { id: "m-visage-tete", categorySlug: "massages-modelages", name: "Modelage visage et tête", description: "Relâchement des tensions du visage, du crâne et de la nuque.", duration: "1h", price: 25000, image: IMG.visage },
  // Modelage 30 min
  { id: "m-relax-30", categorySlug: "massages-modelages", name: "Massage relaxant express", description: "Version courte du massage relaxant signature.", duration: "30 min", price: 20000, image: IMG.massage },
  { id: "m-tonique-30", categorySlug: "massages-modelages", name: "Massage tonique express", description: "Version courte et ciblée du massage tonique.", duration: "30 min", price: 25000, image: IMG.massage },
  { id: "m-mixte-30", categorySlug: "massages-modelages", name: "Massage tonique & relaxant express", description: "L'équilibre tonique/relaxant en format court.", duration: "30 min", price: 28000, image: IMG.massage },
  // Abonnements
  { id: "m-dampe-5", categorySlug: "massages-modelages", name: "Abonnement Massage Dampé (5 séances)", description: "5 séances de massage Dampé traditionnel.", duration: "5 x 1h", price: 165000, image: IMG.massage },
  { id: "m-tonique-5", categorySlug: "massages-modelages", name: "Abonnement Massage tonique (5 séances)", description: "5 séances de massage tonique.", duration: "5 x 1h", price: 165000, image: IMG.massage },
  { id: "m-enceinte-5", categorySlug: "massages-modelages", name: "Abonnement Massage femme enceinte (5 séances)", description: "5 séances de massage grossesse.", duration: "5 x 1h", price: 165000, image: IMG.massage },

  // ===== SOINS DU VISAGE =====
  { id: "v-microneedling-acne", categorySlug: "soins-visage", name: "Microneedling traitement acné", description: "Protocole ciblé pour peaux acnéiques et cicatrices.", duration: "60 min", price: 65000, image: IMG.visage },
  { id: "v-microneedling", categorySlug: "soins-visage", name: "Microneedling", description: "Stimulation du renouvellement cellulaire par micro-perforation.", duration: "60 min", price: 70000, image: IMG.visage },
  { id: "v-basique", categorySlug: "soins-visage", name: "Soin basique (Express)", description: "Nettoyage, gommage, masque hydratant.", duration: "30 min", price: 40000, image: IMG.visage },
  { id: "v-enfant", categorySlug: "soins-visage", name: "Soin enfant", description: "Soin doux adapté aux peaux d'enfants.", duration: "30 min", price: 35000, image: IMG.visage },
  { id: "v-regard", categorySlug: "soins-visage", name: "Soin regard", description: "Soin ciblé contour des yeux, effet reposé.", duration: "20 min", price: 30000, image: IMG.visage },
  { id: "v-peau-grasse", categorySlug: "soins-visage", name: "Soin peau grasse", description: "Purification et régulation du sébum.", duration: "60 min", price: 55000, image: IMG.visage },
  { id: "v-remodelage", categorySlug: "soins-visage", name: "Remodelage visage", description: "Modelage liftant pour redessiner les traits.", duration: "45 min", price: 30000, image: IMG.visage },
  { id: "v-hydrofacial", categorySlug: "soins-visage", name: "Soin Hydrofacial", description: "Nettoyage en profondeur, hydradermabrasion et sérums actifs.", duration: "60 min", price: 68000, image: IMG.visage },
  { id: "v-dermoplaning", categorySlug: "soins-visage", name: "Soin Dermoplaning", description: "Exfoliation douce pour une peau lisse et lumineuse.", duration: "45 min", price: 55000, image: IMG.visage },

  // ===== SOINS WHERTEIMAR =====
  { id: "w-eclat", categorySlug: "soins-whertimear", name: "Soin Éclat", description: "Protocole signature pour un teint lumineux immédiat.", duration: "60 min", price: 65000, image: IMG.wherteimar },
  { id: "w-vitamine-c", categorySlug: "soins-whertimear", name: "Soin Vitamine C", description: "Boost d'éclat et d'antioxydants pour la peau.", duration: "60 min", price: 75000, image: IMG.wherteimar },
  { id: "w-eclaircissant", categorySlug: "soins-whertimear", name: "Soin Éclaircissant", description: "Unification et éclaircissement du teint.", duration: "60 min", price: 75000, image: IMG.wherteimar },
  { id: "w-indispensable", categorySlug: "soins-whertimear", name: "Soin Indispensable", description: "Le protocole complet incontournable.", duration: "60 min", price: 68000, image: IMG.wherteimar },
  { id: "w-indispensable-hydratant", categorySlug: "soins-whertimear", name: "Soin Indispensable Hydratant", description: "Version hydratation intense du soin Indispensable.", duration: "60 min", price: 68000, image: IMG.wherteimar },
  { id: "w-diagnostic", categorySlug: "soins-whertimear", name: "Diagnostic de la peau", description: "Analyse complète pour orienter votre protocole idéal.", duration: "20 min", price: 20000, image: IMG.wherteimar },

  // ===== EXTENSIONS DE CILS =====
  { id: "c-classic", categorySlug: "extensions-cils", name: "Cil à cil Classic", description: "Un cil d'extension par cil naturel, effet mascara.", duration: "90 min", price: 50000, image: IMG.cils },
  { id: "c-bouquet", categorySlug: "extensions-cils", name: "Cil à cil Bouquet", description: "Bouquets légers pour un effet volumisé naturel.", duration: "90 min", price: 40000, image: IMG.cils },
  { id: "c-volume-russe", categorySlug: "extensions-cils", name: "Cil à cil Volume Russe", description: "Volume russe dense pour un regard intense.", duration: "120 min", price: 65000, image: IMG.cils },
  { id: "c-volume-russe-mixte", categorySlug: "extensions-cils", name: "Cil à cil Volume Russe Mixte", description: "Mix Classic/Volume Russe pour un rendu sur mesure.", duration: "120 min", price: 50000, image: IMG.cils },
  { id: "c-remplissage", categorySlug: "extensions-cils", name: "Remplissage", description: "Entretien de la pose existante.", duration: "60 min", price: 20000, image: IMG.cils },
  { id: "c-depose", categorySlug: "extensions-cils", name: "Dépose", description: "Retrait en douceur des extensions.", duration: "30 min", price: 10000, image: IMG.cils },

  // ===== MAINS & PIEDS =====
  { id: "mp-manucure-simple", categorySlug: "mains-pieds", name: "Manucure simple", description: "Limage, cuticules, vernis classique.", duration: "30 min", price: 10000, image: IMG.mainsPieds },
  { id: "mp-manucure-luxe", categorySlug: "mains-pieds", name: "Manucure Luxe", description: "Bain, gommage, massage, vernis premium.", duration: "60 min", price: 25000, image: IMG.mainsPieds },
  { id: "mp-pedicure-classique", categorySlug: "mains-pieds", name: "Pédicure classique", description: "Soin complet des pieds et vernis.", duration: "45 min", price: 18000, image: IMG.mainsPieds },
  { id: "mp-pedicure-luxe", categorySlug: "mains-pieds", name: "Pédicure Luxe", description: "Bain, gommage, massage, vernis premium.", duration: "60 min", price: 28000, image: IMG.mainsPieds },
  { id: "mp-semi-mains", categorySlug: "mains-pieds", name: "Pose semi-permanent mains", description: "Vernis semi-permanent longue tenue.", duration: "45 min", price: 10000, image: IMG.mainsPieds },
  { id: "mp-semi-pieds", categorySlug: "mains-pieds", name: "Pose semi-permanent pieds", description: "Vernis semi-permanent longue tenue.", duration: "45 min", price: 10000, image: IMG.mainsPieds },
  { id: "mp-rituel", categorySlug: "mains-pieds", name: "Rituel mains & pieds", description: "Manucure et pédicure Luxe réunies.", duration: "90 min", price: 45000, image: IMG.mainsPieds },

  // ===== ONGLERIE =====
  { id: "o-capsule-simple", categorySlug: "onglerie", name: "Pose capsule simple", description: "Extensions capsules, forme au choix.", duration: "60 min", price: 20000, image: IMG.onglerie },
  { id: "o-vernis-classique", categorySlug: "onglerie", name: "Pose vernis classique", description: "Pose de vernis traditionnel.", duration: "20 min", price: 5000, image: IMG.onglerie },
  { id: "o-vernis-semi", categorySlug: "onglerie", name: "Pose vernis semi-permanent", description: "Tenue jusqu'à 3 semaines.", duration: "45 min", price: 10000, image: IMG.onglerie },
  { id: "o-gainage", categorySlug: "onglerie", name: "Gainage", description: "Renforcement de l'ongle naturel.", duration: "45 min", price: 27000, image: IMG.onglerie },
  { id: "o-gel-acrylique", categorySlug: "onglerie", name: "Pose d'ongles Gel/Acrylique", description: "Extensions gel ou acrylique sur mesure.", duration: "90 min", price: 27000, image: IMG.onglerie },
  { id: "o-nail-art", categorySlug: "onglerie", name: "Nail Art (à partir de)", description: "Motifs, strass et créations personnalisées — prix selon complexité.", duration: "20 – 60 min", price: 2000, image: IMG.onglerie },
  { id: "o-capsule-americaine", categorySlug: "onglerie", name: "Pose capsule style américaine", description: "French classique ou revisitée.", duration: "60 min", price: 20000, image: IMG.onglerie },

  // ===== HAMMAM & GOMMAGE =====
  { id: "h-detente", categorySlug: "hammam-gommage", name: "Hammam détente", description: "Séance de hammam traditionnel.", duration: "30 min", price: 25000, image: IMG.hammam },
  { id: "h-rituel", categorySlug: "hammam-gommage", name: "Rituel Hammam", description: "Hammam et soin associé.", duration: "45 min", price: 40000, image: IMG.hammam },
  { id: "h-gommage", categorySlug: "hammam-gommage", name: "Gommage du corps", description: "Exfoliation complète, peau douce et nette.", duration: "30 min", price: 30000, image: IMG.hammam },
  { id: "h-rituel-complet", categorySlug: "hammam-gommage", name: "Rituel complet", description: "Hammam, gommage et enveloppement réunis.", duration: "75 min", price: 60000, image: IMG.hammam },
  { id: "h-enveloppement", categorySlug: "hammam-gommage", name: "Enveloppement", description: "Enveloppement hydratant ou purifiant au choix.", duration: "30 min", price: 20000, image: IMG.hammam },

  // ===== MINCEUR & ENVELOPPEMENT =====
  { id: "mn-detox", categorySlug: "minceur-enveloppements", name: "Enveloppement Détox", description: "Élimination des toxines, effet drainant.", duration: "45 min", price: 40000, image: IMG.minceur },
  { id: "mn-minceur", categorySlug: "minceur-enveloppements", name: "Enveloppement Minceur", description: "Actifs raffermissants et amincissants.", duration: "45 min", price: 40000, image: IMG.minceur },
  { id: "mn-drainage", categorySlug: "minceur-enveloppements", name: "Drainage lymphatique", description: "Stimulation du système lymphatique, effet anti-rétention.", duration: "45 min", price: 40000, image: IMG.minceur },
  { id: "mn-massage", categorySlug: "minceur-enveloppements", name: "Massage minceur", description: "Modelage ciblé remodelant.", duration: "45 min", price: 40000, image: IMG.minceur },
  { id: "mn-forfait", categorySlug: "minceur-enveloppements", name: "Forfait minceur", description: "Programme combiné pour une silhouette affinée.", duration: "60 min", price: 65000, image: IMG.minceur },

  // ===== OFFRES SIMPLES =====
  { id: "os-evasion", categorySlug: "offres-simples", name: "Évasion Détente", description: "Une parenthèse bien-être complète, en solo.", duration: "90 min", price: 75000, image: IMG.simples },
  { id: "os-douceur", categorySlug: "offres-simples", name: "Douceur & Relaxation", description: "Forfait combiné massage et soin visage.", duration: "2h", price: 115000, image: IMG.simples },
  { id: "os-silhouette", categorySlug: "offres-simples", name: "Silhouette & Bien-être", description: "Forfait minceur et détente réunis.", duration: "2h30", price: 145000, image: IMG.simples },
  { id: "os-beaute", categorySlug: "offres-simples", name: "Beauté & Harmonie", description: "Rituel beauté complet visage et corps.", duration: "2h", price: 100000, image: IMG.simples },
  { id: "os-imperial", categorySlug: "offres-simples", name: "Rituel Impérial", description: "Notre forfait solo le plus complet et le plus luxueux.", duration: "3h", price: 165000, image: IMG.simples },

  // ===== OFFRES COUPLE =====
  { id: "oc-bulle", categorySlug: "offres-couple", name: "Bulle de détente", description: "Un moment de détente partagé à deux.", duration: "90 min", price: 150000, image: IMG.couple },
  { id: "oc-parenthese", categorySlug: "offres-couple", name: "Parenthèse romantique", description: "Massage et soin en duo dans une suite privée.", duration: "2h", price: 230000, image: IMG.couple },
  { id: "oc-evasion-deux", categorySlug: "offres-couple", name: "Évasion à deux", description: "Notre forfait couple le plus complet.", duration: "2h30", price: 250000, image: IMG.couple },
  { id: "oc-harmonie", categorySlug: "offres-couple", name: "Harmonie & Bien-être", description: "Rituel équilibré massage et soin visage à deux.", duration: "2h", price: 190000, image: IMG.couple },

  // ===== SOINS ÉVÉNEMENTIELS =====
  { id: "ev-flash", categorySlug: "soins-evenementiels", name: "Soin Éclat Flash", description: "Effet bonne mine immédiat avant un événement.", duration: "30 min", price: 48000, image: IMG.evenement },
  { id: "ev-radiance", categorySlug: "soins-evenementiels", name: "Soin Radiance Prestige", description: "Protocole lumière pour un teint parfait.", duration: "60 min", price: 69500, image: IMG.evenement },
  { id: "ev-beaute-intense", categorySlug: "soins-evenementiels", name: "Soin Beauté Intense", description: "Soin complet visage avant un grand jour.", duration: "60 min", price: 70000, image: IMG.evenement },
  { id: "ev-lift-glow", categorySlug: "soins-evenementiels", name: "Soin Lift & Glow", description: "Effet liftant et éclat combinés.", duration: "75 min", price: 85000, image: IMG.evenement },
  { id: "ev-mariee", categorySlug: "soins-evenementiels", name: "Rituel Mariée d'Exception", description: "Protocole sur-mesure pour le jour J.", duration: "90 min", price: 65000, image: IMG.evenement },

  // ===== COIFFURE =====
  { id: "co-diacolor", categorySlug: "coiffure", name: "Diacolor (couleur)", description: "Coloration Diacolor professionnelle.", duration: "90 min", price: 18500, image: IMG.coiffure },
  { id: "co-majirel", categorySlug: "coiffure", name: "Majirel (couleur)", description: "Coloration Majirel professionnelle.", duration: "90 min", price: 18500, image: IMG.coiffure },
  { id: "co-inoa", categorySlug: "coiffure", name: "Inoa (couleur)", description: "Coloration sans ammoniaque Inoa.", duration: "90 min", price: 20500, image: IMG.coiffure },
  { id: "co-tissage-rajout", categorySlug: "coiffure", name: "Tissage rajout", description: "Pose de tissage avec rajout.", duration: "120 min", price: 33000, image: IMG.coiffure },
  { id: "co-defrisage", categorySlug: "coiffure", name: "Défrisage cheveux (à partir de)", description: "Défrisage professionnel — tarif selon longueur (15 000 F à 25 000 F).", duration: "60 – 90 min", price: 15000, image: IMG.coiffure },
  { id: "co-costobrom", categorySlug: "coiffure", name: "Extensions (Costobrom)", description: "Pose d'extensions technique Costobrom.", duration: "3h", price: 98000, image: IMG.coiffure },
  { id: "co-extension-tape", categorySlug: "coiffure", name: "Extension Tape", description: "Bandes adhésives, pose partielle.", duration: "2h", price: 275000, image: IMG.coiffure },
  { id: "co-extension-tape-complete", categorySlug: "coiffure", name: "Pose complète extensions Tape", description: "Pose intégrale d'extensions Tape.", duration: "3h", price: 375000, image: IMG.coiffure },
  { id: "co-extension-anneaux", categorySlug: "coiffure", name: "Extension anneaux", description: "Pose d'extensions à anneaux.", duration: "2h", price: 50000, image: IMG.coiffure },
  { id: "co-depose-anneaux", categorySlug: "coiffure", name: "Dépose anneaux", description: "Retrait des extensions à anneaux.", duration: "90 min", price: 45000, image: IMG.coiffure },
  { id: "co-tissage-ouvert", categorySlug: "coiffure", name: "Tissage ouvert", description: "Technique de tissage à cheveux libres.", duration: "2h", price: 40000, image: IMG.coiffure },
  { id: "co-tissage-versatile", categorySlug: "coiffure", name: "Tissage versatile", description: "Tissage modulable, plusieurs styles possibles.", duration: "2h", price: 50000, image: IMG.coiffure },
  { id: "co-flip-over", categorySlug: "coiffure", name: "Flip Over Sew In", description: "Technique de tissage Flip Over.", duration: "2h", price: 55000, image: IMG.coiffure },
  { id: "co-shampooing-simple", categorySlug: "coiffure", name: "Shampooing simple", description: "Shampooing et brushing léger.", duration: "20 min", price: 10000, image: IMG.coiffure },
  { id: "co-shampooing-soin", categorySlug: "coiffure", name: "Shampooing soin (à partir de)", description: "Shampooing avec soin profond — tarif selon longueur (15 000 F à 20 000 F).", duration: "30 min", price: 15000, image: IMG.coiffure },
  { id: "co-lissage-bresilien", categorySlug: "coiffure", name: "Lissage Brésilien (à partir de)", description: "Lissage professionnel — tarif selon longueur (150 000 F à 250 000 F).", duration: "2h30", price: 150000, image: IMG.coiffure },
  { id: "co-texturized", categorySlug: "coiffure", name: "Texturized Hair", description: "Texturisation professionnelle des cheveux naturels.", duration: "90 min", price: 55000, image: IMG.coiffure },
  { id: "co-simple", categorySlug: "coiffure", name: "Coiffure très simple", description: "Brushing ou coiffage rapide.", duration: "20 min", price: 10000, image: IMG.coiffure },
  { id: "co-meches", categorySlug: "coiffure", name: "Coiffure avec mèches (à partir de)", description: "Coiffage avec mèches — tarif selon quantité (15 000 F à 30 000 F).", duration: "45 min", price: 15000, image: IMG.coiffure },
  { id: "co-des-meches", categorySlug: "coiffure", name: "Des mèches (à partir de)", description: "Pose de mèches — tarif selon quantité (20 000 F à 45 000 F).", duration: "60 min", price: 20000, image: IMG.coiffure },
  { id: "co-kinky-twist", categorySlug: "coiffure", name: "Kinky Twist (à partir de)", description: "Tresses Kinky Twist — tarif selon longueur (20 000 F à 25 000 F).", duration: "2h", price: 20000, image: IMG.coiffure },
  { id: "co-kinky-naturel", categorySlug: "coiffure", name: "Kinky cheveux naturels, sans mèche (à partir de)", description: "Kinky Twist sur cheveux naturels — tarif selon longueur (40 000 F à 70 000 F).", duration: "2h30", price: 40000, image: IMG.coiffure },

  // ===== ÉPILATIONS — à la cire =====
  { id: "ep-sourcils", categorySlug: "epilations", name: "Sourcils (cire)", description: "Restructuration et finition.", duration: "15 min", price: 5000, image: IMG.mainsPieds },
  { id: "ep-menton", categorySlug: "epilations", name: "Menton (cire)", description: "Épilation ciblée du menton.", duration: "10 min", price: 5000, image: IMG.mainsPieds },
  { id: "ep-menton-complet", categorySlug: "epilations", name: "Menton complet (cire)", description: "Épilation complète de la zone du menton.", duration: "15 min", price: 10000, image: IMG.mainsPieds },
  { id: "ep-visage", categorySlug: "epilations", name: "Visage (cire)", description: "Épilation du visage.", duration: "20 min", price: 15000, image: IMG.mainsPieds },
  { id: "ep-visage-complet", categorySlug: "epilations", name: "Visage complet (cire)", description: "Épilation intégrale du visage.", duration: "30 min", price: 20000, image: IMG.mainsPieds },
  { id: "ep-nez", categorySlug: "epilations", name: "Nez (cire)", description: "Épilation des narines.", duration: "10 min", price: 10000, image: IMG.mainsPieds },
  { id: "ep-levres", categorySlug: "epilations", name: "Lèvres (cire)", description: "Épilation de la lèvre supérieure.", duration: "10 min", price: 5000, image: IMG.mainsPieds },
  { id: "ep-aisselles-cire", categorySlug: "epilations", name: "Aisselles (cire)", description: "Épilation des aisselles à la cire.", duration: "15 min", price: 5000, image: IMG.mainsPieds },
  { id: "ep-bras-cire", categorySlug: "epilations", name: "Bras (cire)", description: "Épilation complète des bras.", duration: "30 min", price: 15000, image: IMG.mainsPieds },
  { id: "ep-torse-cire", categorySlug: "epilations", name: "Torse homme (cire)", description: "Épilation du torse pour homme.", duration: "30 min", price: 15000, image: IMG.mainsPieds },
  { id: "ep-dos-cire", categorySlug: "epilations", name: "Dos homme (cire)", description: "Épilation du dos pour homme.", duration: "30 min", price: 15000, image: IMG.mainsPieds },
  { id: "ep-maillot-classique", categorySlug: "epilations", name: "Maillot classique (cire)", description: "Épilation maillot classique.", duration: "20 min", price: 20000, image: IMG.mainsPieds },
  { id: "ep-maillot-echancre", categorySlug: "epilations", name: "Maillot échancré (cire)", description: "Épilation maillot échancré.", duration: "20 min", price: 12000, image: IMG.mainsPieds },
  { id: "ep-demi-jambes-cire", categorySlug: "epilations", name: "Demi-jambes (cire)", description: "Épilation demi-jambes à la cire.", duration: "20 min", price: 12000, image: IMG.mainsPieds },
  { id: "ep-jambes-completes-cire", categorySlug: "epilations", name: "Jambes complètes (cire)", description: "Épilation jambes complètes à la cire.", duration: "40 min", price: 20000, image: IMG.mainsPieds },

  // ===== ÉPILATIONS — laser =====
  { id: "ep-aisselles-laser", categorySlug: "epilations", name: "Aisselles (laser)", description: "Épilation laser des aisselles.", duration: "15 min", price: 25000, image: IMG.mainsPieds },
  { id: "ep-maillot-laser", categorySlug: "epilations", name: "Maillot (laser)", description: "Épilation laser maillot classique.", duration: "20 min", price: 20000, image: IMG.mainsPieds },
  { id: "ep-maillot-integral-laser", categorySlug: "epilations", name: "Maillot intégral (laser)", description: "Épilation laser maillot intégral.", duration: "30 min", price: 35000, image: IMG.mainsPieds },
  { id: "ep-demi-jambes-laser", categorySlug: "epilations", name: "Demi-jambes (laser)", description: "Épilation laser demi-jambes.", duration: "30 min", price: 25000, image: IMG.mainsPieds },
  { id: "ep-jambes-completes-laser", categorySlug: "epilations", name: "Jambes complètes (laser)", description: "Épilation laser jambes complètes.", duration: "45 min", price: 40000, image: IMG.mainsPieds },
  { id: "ep-dos-laser", categorySlug: "epilations", name: "Dos (laser)", description: "Épilation laser du dos.", duration: "45 min", price: 40000, image: IMG.mainsPieds },
  { id: "ep-torse-laser", categorySlug: "epilations", name: "Torse homme (laser)", description: "Épilation laser du torse pour homme.", duration: "45 min", price: 40000, image: IMG.mainsPieds },

  // ===== ÉPILATIONS — Body Sculpting =====
  { id: "bs-ventre", categorySlug: "epilations", name: "Body Sculpting Ventre", description: "Remodelage ciblé du ventre.", duration: "45 min", price: 35000, image: IMG.minceur },
  { id: "bs-bras", categorySlug: "epilations", name: "Body Sculpting Bras", description: "Remodelage ciblé des bras.", duration: "30 min", price: 25000, image: IMG.minceur },
  { id: "bs-jambes", categorySlug: "epilations", name: "Body Sculpting Jambes", description: "Remodelage ciblé des jambes.", duration: "45 min", price: 35000, image: IMG.minceur },

  // ===== ÉPILATIONS — Forfaits =====
  { id: "fe-1", categorySlug: "epilations", name: "Forfait Sourcils + Jambes + Maillot", description: "Le trio épilation le plus demandé.", duration: "60 min", price: 38000, image: IMG.mainsPieds },
  { id: "fe-2", categorySlug: "epilations", name: "Forfait Visage + Maillot + Aisselles", description: "Épilation complète du haut du corps.", duration: "45 min", price: 33000, image: IMG.mainsPieds },
  { id: "fe-3", categorySlug: "epilations", name: "Forfait Intégral (Visage, Aisselles, Maillot, Jambes, Bras, Dos, Torse)", description: "L'épilation corps complet, la plus avantageuse.", duration: "2h", price: 80000, image: IMG.mainsPieds },
];

export function servicesByCategory(slug: string) {
  return borneServices.filter((s) => s.categorySlug === slug);
}

export function findService(id: string) {
  return borneServices.find((s) => s.id === id);
}

export function formatFCFA(n: number) {
  return new Intl.NumberFormat("fr-FR").format(n) + " FCFA";
}
