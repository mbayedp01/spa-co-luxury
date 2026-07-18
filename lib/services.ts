export type Service = {
  slug: string;
  name: string;
  category: string;
  short: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "massage-relaxant",
    name: "Massage Relaxant",
    category: "Massages",
    short: "Un voyage sensoriel qui libère les tensions du corps et de l'esprit.",
    description:
      "Notre massage relaxant signature associe des mouvements lents et enveloppants à des huiles précieuses chauffées. Une expérience conçue pour dénouer les tensions, apaiser le système nerveux et vous replonger dans un état de sérénité profonde.",
    image: "/images/accueil/IMAGEAC12.webp",
    duration: "60 – 90 min",
    price: "À partir de 35 000 FCFA",
    benefits: [
      "Détente musculaire profonde",
      "Réduction du stress et de l'anxiété",
      "Amélioration de la circulation",
      "Sommeil réparateur",
    ],
  },
  {
    slug: "massage-duo",
    name: "Massage Duo",
    category: "Massages",
    short: "Partagez une parenthèse de bien-être à deux, côte à côte.",
    description:
      "Vivez un moment d'exception à deux dans notre suite couple. Deux thérapeutes vous prodiguent simultanément un massage sur mesure, dans une ambiance tamisée aux senteurs envoûtantes. L'instant idéal pour célébrer ou simplement se retrouver.",
    image: "/images/accueil/IMAGEAC1.webp",
    duration: "75 min",
    price: "À partir de 70 000 FCFA",
    benefits: [
      "Moment de complicité",
      "Deux thérapeutes dédiés",
      "Suite privée",
      "Thé et douceurs offerts",
    ],
  },
  {
    slug: "soins-visage",
    name: "Soins du Visage",
    category: "Soins visage",
    short: "Un teint éclatant grâce à des soins sur mesure et des actifs nobles.",
    description:
      "Nos soins du visage sont personnalisés après un diagnostic de peau. Nettoyage en profondeur, gommage, masque et modelage se succèdent pour révéler l'éclat naturel de votre peau et lui offrir une hydratation intense.",
    image: "/images/accueil/IMAGEAC3.webp",
    duration: "60 min",
    price: "À partir de 30 000 FCFA",
    benefits: [
      "Peau nettoyée et purifiée",
      "Hydratation en profondeur",
      "Teint lumineux et unifié",
      "Effet anti-âge",
    ],
  },
  {
    slug: "wherteimar",
    name: "Rituel Wherteimar",
    category: "Soins visage",
    short: "Le soin d'exception à la caviar et à l'or pour une peau sublimée.",
    description:
      "Le rituel Wherteimar est notre soin le plus luxueux. Formulé à base d'extraits de caviar et de particules d'or, il agit en profondeur pour raffermir, régénérer et illuminer la peau. Un véritable rituel d'exception réservé aux plus exigeantes.",
    image: "/images/accueil/IMAGEAC4.webp",
    duration: "90 min",
    price: "À partir de 55 000 FCFA",
    benefits: [
      "Actifs caviar & or 24 carats",
      "Effet liftant immédiat",
      "Régénération cellulaire",
      "Éclat spectaculaire",
    ],
  },
  {
    slug: "hammam",
    name: "Hammam Traditionnel",
    category: "Hammam",
    short: "Un rituel de purification ancestral au cœur de la vapeur.",
    description:
      "Plongez dans la chaleur enveloppante de notre hammam traditionnel. Gommage au savon noir, gant de kessa et enveloppement au ghassoul purifient la peau en profondeur. Une expérience de purification héritée des traditions orientales.",
    image: "/images/accueil/IMAGEAC5.webp",
    duration: "45 – 75 min",
    price: "À partir de 25 000 FCFA",
    benefits: [
      "Peau douce et purifiée",
      "Élimination des toxines",
      "Détente profonde",
      "Rituel au savon noir & ghassoul",
    ],
  },
  {
    slug: "extensions-de-cils",
    name: "Extensions de Cils",
    category: "Extensions de cils",
    short: "Un regard intense et un volume sur mesure, cil à cil.",
    description:
      "Nos expertes posent vos extensions de cils une à une pour un résultat naturel ou volumineux selon vos envies. Un regard sublimé qui dure plusieurs semaines, sans mascara ni maquillage quotidien.",
    image: "/images/accueil/IMAGEAC10.webp",
    duration: "90 – 120 min",
    price: "À partir de 20 000 FCFA",
    benefits: [
      "Regard intensifié",
      "Résultat longue durée",
      "Volume sur mesure",
      "Pose cil à cil experte",
    ],
  },
  {
    slug: "mains-et-pieds",
    name: "Mains & Pieds",
    category: "Mains & Pieds",
    short: "Manucure et pédicure spa pour des mains et pieds impeccables.",
    description:
      "Offrez à vos mains et à vos pieds un soin complet : bain relaxant, gommage, soin des cuticules, modelage et pose de vernis. Un rituel beauté qui allie esthétique et détente.",
    image: "/images/accueil/IMAGEAC7.webp",
    duration: "60 min",
    price: "À partir de 18 000 FCFA",
    benefits: [
      "Mains et pieds soignés",
      "Peau adoucie",
      "Vernis longue tenue",
      "Détente garantie",
    ],
  },
  {
    slug: "onglerie",
    name: "Onglerie",
    category: "Onglerie",
    short: "Nail art, gel et pose américaine par nos prothésistes ongulaires.",
    description:
      "Notre onglerie propose une gamme complète : pose de gel, capsules, vernis semi-permanent et nail art personnalisé. Des ongles impeccables et durables, façonnés par des prothésistes ongulaires passionnées.",
    image: "/images/accueil/IMAGEAC6.webp",
    duration: "60 – 90 min",
    price: "À partir de 15 000 FCFA",
    benefits: [
      "Pose gel & semi-permanent",
      "Nail art sur mesure",
      "Tenue longue durée",
      "Finitions parfaites",
    ],
  },
  {
    slug: "coiffure",
    name: "Coiffure",
    category: "Coiffure",
    short: "Coupe, brushing, coloration et coiffures d'exception.",
    description:
      "Notre salon de coiffure vous accueille pour une expérience haut de gamme : diagnostic capillaire, coupe, coloration, soins profonds et coiffage. Nos coiffeurs subliment votre chevelure selon les dernières tendances.",
    image: "/images/accueil/IMAGEAC8.webp",
    duration: "45 – 120 min",
    price: "À partir de 15 000 FCFA",
    benefits: [
      "Diagnostic personnalisé",
      "Soins capillaires premium",
      "Coiffage tendance",
      "Coloration experte",
    ],
  },
  {
    slug: "minceur-lpg",
    name: "Minceur & LPG",
    category: "Minceur",
    short: "Remodelage du corps et lutte contre la cellulite.",
    description:
      "Nos protocoles minceur associent enveloppements, palper-rouler mécanique (LPG) et soins ciblés pour affiner la silhouette, réduire la cellulite et raffermir la peau. Une approche progressive et durable du remodelage corporel.",
    image: "/images/accueil/IMAGEAC9.webp",
    duration: "45 – 60 min",
    price: "À partir de 22 000 FCFA",
    benefits: [
      "Réduction de la cellulite",
      "Silhouette affinée",
      "Peau raffermie",
      "Drainage lymphatique",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const categories = Array.from(new Set(services.map((s) => s.category)));
