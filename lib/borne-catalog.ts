// Catalogue COMPLET pour la borne kiosque du spa (Smart Screen 32").
// Structuré par catégories affichées dans l'ordre demandé par la direction.

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
  price: number; // en FCFA
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
    name: "Soins Whertimear",
    icon: "👑",
    image: "/images/accueil/IMAGEAC4.webp",
    description: "L'exception à l'or et au caviar.",
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
    icon: "🕌",
    image: "/images/accueil/IMAGEAC5.webp",
    description: "Rituel de purification traditionnel.",
  },
  {
    slug: "minceur-enveloppements",
    name: "Minceur & Enveloppements",
    icon: "🌿",
    image: "/images/accueil/IMAGEAC9.webp",
    description: "Silhouette raffermie et remodelée.",
  },
  {
    slug: "offres-simples",
    name: "Offres Simples",
    icon: "🎁",
    image: "/images/accueil/IMAGEAC11.webp",
    description: "Nos forfaits individuels.",
  },
  {
    slug: "offres-couple",
    name: "Offres Couple",
    icon: "💞",
    image: "/images/accueil/IMAGEAC1.webp",
    description: "Un moment à deux, inoubliable.",
  },
  {
    slug: "soins-evenementiels",
    name: "Soins Événementiels",
    icon: "💍",
    image: "/images/accueil/IMAGEAC8.webp",
    description: "Mariages, cérémonies, événements.",
  },
  {
    slug: "coiffure",
    name: "Coiffure",
    icon: "💇‍♀️",
    image: "/images/accueil/IMAGEAC8.webp",
    description: "Coupe, brushing, coloration.",
  },
  {
    slug: "epilations",
    name: "Épilations",
    icon: "🌸",
    image: "/images/accueil/IMAGEAC7.webp",
    description: "Cire, sucre et laser.",
  },
];

export const borneServices: BorneService[] = [
  // Massages & Modelages
  { id: "m-1", categorySlug: "massages-modelages", name: "Massage Relaxant 60 min", description: "Modelage doux aux huiles chaudes pour libérer les tensions.", duration: "60 min", price: 35000, image: "/images/accueil/IMAGEAC12.webp" },
  { id: "m-2", categorySlug: "massages-modelages", name: "Massage Relaxant 90 min", description: "Version prolongée pour une détente absolue.", duration: "90 min", price: 50000, image: "/images/accueil/IMAGEAC12.webp" },
  { id: "m-3", categorySlug: "massages-modelages", name: "Massage Suédois", description: "Massage tonique qui dénoue les tensions musculaires profondes.", duration: "60 min", price: 40000, image: "/images/accueil/IMAGEAC12.webp" },
  { id: "m-4", categorySlug: "massages-modelages", name: "Massage aux Pierres Chaudes", description: "Chaleur enveloppante des pierres volcaniques pour un lâcher-prise total.", duration: "75 min", price: 55000, image: "/images/accueil/IMAGEAC13.webp" },
  { id: "m-5", categorySlug: "massages-modelages", name: "Massage Ayurvédique", description: "Rituel indien millénaire à l'huile de sésame chaude.", duration: "75 min", price: 50000, image: "/images/accueil/IMAGEAC12.webp" },
  { id: "m-6", categorySlug: "massages-modelages", name: "Réflexologie Plantaire", description: "Stimulation des zones réflexes du pied pour rééquilibrer le corps.", duration: "45 min", price: 25000, image: "/images/accueil/IMAGEAC7.webp" },

  // Soins du Visage
  { id: "v-1", categorySlug: "soins-visage", name: "Soin Éclat Express", description: "Nettoyage, gommage, masque hydratant.", duration: "45 min", price: 25000, image: "/images/accueil/IMAGEAC3.webp" },
  { id: "v-2", categorySlug: "soins-visage", name: "Soin Hydratant Profond", description: "Diagnostic personnalisé + soin sur mesure.", duration: "60 min", price: 30000, image: "/images/accueil/IMAGEAC3.webp" },
  { id: "v-3", categorySlug: "soins-visage", name: "Soin Anti-Âge", description: "Actifs raffermissants et modelage liftant.", duration: "75 min", price: 45000, image: "/images/accueil/IMAGEAC4.webp" },
  { id: "v-4", categorySlug: "soins-visage", name: "Soin Purifiant Peaux Grasses", description: "Nettoyage profond et extraction douce.", duration: "60 min", price: 30000, image: "/images/accueil/IMAGEAC3.webp" },

  // Soins Whertimear
  { id: "w-1", categorySlug: "soins-whertimear", name: "Rituel Whertimear Or 24k", description: "Soin d'exception aux particules d'or pour un éclat spectaculaire.", duration: "90 min", price: 65000, image: "/images/accueil/IMAGEAC4.webp" },
  { id: "w-2", categorySlug: "soins-whertimear", name: "Rituel Whertimear Caviar", description: "Extraits de caviar régénérants pour une peau sublimée.", duration: "90 min", price: 60000, image: "/images/accueil/IMAGEAC4.webp" },
  { id: "w-3", categorySlug: "soins-whertimear", name: "Rituel Whertimear Prestige", description: "Or + caviar + diamant : le sommet de nos protocoles.", duration: "120 min", price: 95000, image: "/images/accueil/IMAGEAC4.webp" },

  // Extensions de Cils
  { id: "c-1", categorySlug: "extensions-cils", name: "Pose Cil à Cil Naturelle", description: "Un cil d'extension par cil naturel, effet mascara.", duration: "90 min", price: 20000, image: "/images/accueil/IMAGEAC10.webp" },
  { id: "c-2", categorySlug: "extensions-cils", name: "Volume Russe", description: "Bouquets de 3 à 5 cils pour un regard dense.", duration: "120 min", price: 30000, image: "/images/accueil/IMAGEAC10.webp" },
  { id: "c-3", categorySlug: "extensions-cils", name: "Rehaussement de Cils", description: "Courbe et longueur naturelles rehaussées.", duration: "60 min", price: 18000, image: "/images/accueil/IMAGEAC10.webp" },
  { id: "c-4", categorySlug: "extensions-cils", name: "Remplissage Cils", description: "Entretien de la pose existante.", duration: "60 min", price: 15000, image: "/images/accueil/IMAGEAC10.webp" },

  // Mains & Pieds
  { id: "mp-1", categorySlug: "mains-pieds", name: "Manucure Express", description: "Limage, cuticules, vernis classique.", duration: "30 min", price: 8000, image: "/images/accueil/IMAGEAC7.webp" },
  { id: "mp-2", categorySlug: "mains-pieds", name: "Manucure Spa", description: "Bain, gommage, massage, vernis.", duration: "60 min", price: 15000, image: "/images/accueil/IMAGEAC7.webp" },
  { id: "mp-3", categorySlug: "mains-pieds", name: "Pédicure Spa", description: "Bain, gommage, soin des pieds, vernis.", duration: "60 min", price: 18000, image: "/images/accueil/IMAGEAC7.webp" },
  { id: "mp-4", categorySlug: "mains-pieds", name: "Duo Mains + Pieds", description: "Manucure et pédicure spa complètes.", duration: "90 min", price: 30000, image: "/images/accueil/IMAGEAC7.webp" },

  // Onglerie
  { id: "o-1", categorySlug: "onglerie", name: "Pose Vernis Semi-Permanent", description: "Tenue jusqu'à 3 semaines.", duration: "45 min", price: 12000, image: "/images/accueil/IMAGEAC6.webp" },
  { id: "o-2", categorySlug: "onglerie", name: "Pose Capsules Gel", description: "Extensions et forme au choix.", duration: "90 min", price: 25000, image: "/images/accueil/IMAGEAC6.webp" },
  { id: "o-3", categorySlug: "onglerie", name: "Nail Art Personnalisé", description: "Motifs, strass et créations sur mesure.", duration: "60 min", price: 20000, image: "/images/accueil/IMAGEAC6.webp" },
  { id: "o-4", categorySlug: "onglerie", name: "Dépose Complète", description: "Retrait en douceur et soin des ongles.", duration: "30 min", price: 7000, image: "/images/accueil/IMAGEAC6.webp" },

  // Hammam & Gommage
  { id: "h-1", categorySlug: "hammam-gommage", name: "Accès Hammam", description: "Séance libre dans notre hammam traditionnel.", duration: "45 min", price: 10000, image: "/images/accueil/IMAGEAC5.webp" },
  { id: "h-2", categorySlug: "hammam-gommage", name: "Gommage Savon Noir", description: "Rituel oriental purifiant au gant de kessa.", duration: "45 min", price: 18000, image: "/images/accueil/IMAGEAC5.webp" },
  { id: "h-3", categorySlug: "hammam-gommage", name: "Hammam + Gommage + Ghassoul", description: "Rituel complet de purification.", duration: "75 min", price: 30000, image: "/images/accueil/IMAGEAC5.webp" },

  // Minceur & Enveloppements
  { id: "mn-1", categorySlug: "minceur-enveloppements", name: "Enveloppement Minceur", description: "Argile, algues et actifs drainants.", duration: "45 min", price: 22000, image: "/images/accueil/IMAGEAC9.webp" },
  { id: "mn-2", categorySlug: "minceur-enveloppements", name: "Palper-Rouler LPG", description: "Séance de remodelage mécanique.", duration: "45 min", price: 25000, image: "/images/accueil/IMAGEAC9.webp" },
  { id: "mn-3", categorySlug: "minceur-enveloppements", name: "Cure Silhouette (3 séances)", description: "Programme intensif de remodelage.", duration: "3 x 45 min", price: 65000, image: "/images/accueil/IMAGEAC9.webp" },

  // Offres Simples
  { id: "os-1", categorySlug: "offres-simples", name: "Forfait Évasion", description: "Hammam + gommage + massage 30 min.", duration: "1h30", price: 45000, image: "/images/accueil/IMAGEAC11.webp" },
  { id: "os-2", categorySlug: "offres-simples", name: "Forfait Sérénité", description: "Hammam + massage 60 min + soin visage éclat.", duration: "2h30", price: 85000, image: "/images/accueil/IMAGEAC11.webp" },
  { id: "os-3", categorySlug: "offres-simples", name: "Forfait Beauté Express", description: "Manucure + brushing + soin visage express.", duration: "2h", price: 45000, image: "/images/accueil/IMAGEAC11.webp" },

  // Offres Couple
  { id: "oc-1", categorySlug: "offres-couple", name: "Rituel Duo Romantique", description: "Suite privée, massage duo, thé et douceurs.", duration: "1h30", price: 90000, image: "/images/accueil/IMAGEAC1.webp" },
  { id: "oc-2", categorySlug: "offres-couple", name: "Forfait Prestige Duo", description: "Hammam + massage duo + soin visage + champagne.", duration: "3h", price: 150000, image: "/images/accueil/IMAGEAC1.webp" },

  // Soins Événementiels
  { id: "ev-1", categorySlug: "soins-evenementiels", name: "Forfait Mariée", description: "Essai + jour J : coiffure, maquillage, manucure.", duration: "Sur mesure", price: 120000, image: "/images/accueil/IMAGEAC8.webp" },
  { id: "ev-2", categorySlug: "soins-evenementiels", name: "Maquillage Cérémonie", description: "Maquillage professionnel longue tenue.", duration: "60 min", price: 25000, image: "/images/accueil/IMAGEAC8.webp" },
  { id: "ev-3", categorySlug: "soins-evenementiels", name: "Coiffure Cérémonie", description: "Chignon ou coiffure sur mesure.", duration: "90 min", price: 30000, image: "/images/accueil/IMAGEAC8.webp" },

  // Coiffure
  { id: "co-1", categorySlug: "coiffure", name: "Brushing", description: "Séchage et mise en forme.", duration: "45 min", price: 15000, image: "/images/accueil/IMAGEAC8.webp" },
  { id: "co-2", categorySlug: "coiffure", name: "Coupe & Brushing", description: "Coupe personnalisée et brushing.", duration: "60 min", price: 20000, image: "/images/accueil/IMAGEAC8.webp" },
  { id: "co-3", categorySlug: "coiffure", name: "Coloration", description: "Coloration professionnelle sur mesure.", duration: "120 min", price: 40000, image: "/images/accueil/IMAGEAC8.webp" },
  { id: "co-4", categorySlug: "coiffure", name: "Soin Capillaire Profond", description: "Masque et rituel réparateur.", duration: "45 min", price: 18000, image: "/images/accueil/IMAGEAC8.webp" },

  // Épilations
  { id: "e-1", categorySlug: "epilations", name: "Épilation Sourcils", description: "Restructuration et finition.", duration: "20 min", price: 5000, image: "/images/accueil/IMAGEAC7.webp" },
  { id: "e-2", categorySlug: "epilations", name: "Épilation Jambes Complètes", description: "À la cire tiède ou orientale.", duration: "45 min", price: 15000, image: "/images/accueil/IMAGEAC7.webp" },
  { id: "e-3", categorySlug: "epilations", name: "Épilation Maillot Intégral", description: "Cire orientale ou tiède.", duration: "30 min", price: 12000, image: "/images/accueil/IMAGEAC7.webp" },
  { id: "e-4", categorySlug: "epilations", name: "Épilation Aisselles", description: "Cire orientale ou tiède.", duration: "15 min", price: 5000, image: "/images/accueil/IMAGEAC7.webp" },
  { id: "e-5", categorySlug: "epilations", name: "Forfait Épilation Complète", description: "Jambes + maillot + aisselles.", duration: "75 min", price: 28000, image: "/images/accueil/IMAGEAC7.webp" },
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
