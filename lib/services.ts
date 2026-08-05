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

// Sélection de prestations phares (une par grande famille) utilisée pour
// les pages marketing détaillées (/prestations/[slug]), l'accueil et le
// footer. La carte complète et tous les tarifs officiels sont dans
// lib/borne-catalog.ts (utilisée par la borne tactile).
export const services: Service[] = [
  {
    slug: "massage-relaxant",
    name: "Massage Relaxant",
    category: "Massages & Modelages",
    short: "Un voyage sensoriel qui libère les tensions du corps et de l'esprit.",
    description:
      "Notre massage relaxant signature associe des mouvements lents et enveloppants à des huiles précieuses chauffées. Une expérience conçue pour dénouer les tensions, apaiser le système nerveux et vous replonger dans un état de sérénité profonde.",
    image: "/images/accueil/IMAGEAC12.webp",
    duration: "30 ou 60 min",
    price: "À partir de 20 000 FCFA",
    benefits: [
      "Détente musculaire profonde",
      "Réduction du stress et de l'anxiété",
      "Amélioration de la circulation",
      "Sommeil réparateur",
    ],
  },
  {
    slug: "massage-tonique",
    name: "Massage Tonique",
    category: "Massages & Modelages",
    short: "Un massage dynamique qui dénoue les tensions musculaires profondes.",
    description:
      "Le massage tonique cible les zones de tension avec des pressions plus fermes et des manœuvres énergiques. Idéal après un effort physique ou pour relâcher les tensions accumulées dans le dos, les épaules et la nuque.",
    image: "/images/accueil/IMAGEAC13.webp",
    duration: "30 ou 60 min",
    price: "À partir de 25 000 FCFA",
    benefits: [
      "Relâchement musculaire en profondeur",
      "Stimulation de la circulation sanguine",
      "Récupération après l'effort",
      "Sensation de légèreté immédiate",
    ],
  },
  {
    slug: "soins-visage",
    name: "Soins du Visage",
    category: "Soins du Visage",
    short: "Un teint éclatant grâce à des soins sur mesure et des actifs nobles.",
    description:
      "Nos soins du visage sont personnalisés après un diagnostic de peau. Nettoyage en profondeur, gommage, masque et modelage se succèdent pour révéler l'éclat naturel de votre peau et lui offrir une hydratation intense. Du soin basique express au protocole Hydrofacial, une réponse pour chaque type de peau.",
    image: "/images/accueil/IMAGEAC3.webp",
    duration: "45 – 60 min",
    price: "À partir de 40 000 FCFA",
    benefits: [
      "Peau nettoyée et purifiée",
      "Hydratation en profondeur",
      "Teint lumineux et unifié",
      "Effet anti-âge",
    ],
  },
  {
    slug: "wherteimar",
    name: "Soin Wherteimar Éclat",
    category: "Soins Wherteimar",
    short: "Le protocole signature pour une peau sublimée et un éclat immédiat.",
    description:
      "Le Soin Éclat Wherteimar est notre rituel visage le plus recherché. Formulé avec des actifs concentrés (vitamine C, agents éclaircissants), il agit en profondeur pour raffermir, régénérer et illuminer la peau. Un véritable rituel d'exception réservé aux plus exigeantes.",
    image: "/images/accueil/IMAGEAC4.webp",
    duration: "60 – 75 min",
    price: "À partir de 65 000 FCFA",
    benefits: [
      "Diagnostic de peau personnalisé",
      "Effet liftant immédiat",
      "Régénération cellulaire",
      "Éclat spectaculaire",
    ],
  },
  {
    slug: "hammam",
    name: "Hammam & Gommage",
    category: "Hammam & Gommage",
    short: "Un rituel de purification ancestral au cœur de la vapeur.",
    description:
      "Plongez dans la chaleur enveloppante de notre hammam traditionnel. Gommage du corps, enveloppement et rituel complet purifient la peau en profondeur. Une expérience de purification héritée des traditions orientales.",
    image: "/images/accueil/IMAGEAC5.webp",
    duration: "30 – 60 min",
    price: "À partir de 20 000 FCFA",
    benefits: [
      "Peau douce et purifiée",
      "Élimination des toxines",
      "Détente profonde",
      "Rituel complet disponible",
    ],
  },
  {
    slug: "extensions-de-cils",
    name: "Extensions de Cils",
    category: "Extensions de Cils",
    short: "Un regard intense et un volume sur mesure, cil à cil.",
    description:
      "Nos expertes posent vos extensions de cils une à une pour un résultat naturel (Classic), en bouquets ou en Volume Russe selon l'intensité désirée. Un regard sublimé qui dure plusieurs semaines, sans mascara ni maquillage quotidien.",
    image: "/images/accueil/IMAGEAC10.webp",
    duration: "60 – 120 min",
    price: "À partir de 40 000 FCFA",
    benefits: [
      "Regard intensifié",
      "Résultat longue durée",
      "Classic, Bouquet ou Volume Russe",
      "Pose cil à cil experte",
    ],
  },
  {
    slug: "mains-et-pieds",
    name: "Mains & Pieds",
    category: "Mains & Pieds",
    short: "Manucure et pédicure spa pour des mains et pieds impeccables.",
    description:
      "Offrez à vos mains et à vos pieds un soin complet : bain relaxant, gommage, soin des cuticules, modelage et pose de vernis. Le Rituel Mains & Pieds réunit manucure et pédicure Luxe pour une détente et un résultat impeccable.",
    image: "/images/accueil/IMAGEAC7.webp",
    duration: "45 – 90 min",
    price: "À partir de 10 000 FCFA",
    benefits: [
      "Mains et pieds soignés",
      "Peau adoucie",
      "Semi-permanent longue tenue",
      "Rituel complet disponible",
    ],
  },
  {
    slug: "onglerie",
    name: "Onglerie",
    category: "Onglerie",
    short: "Nail art, gel et capsules par nos prothésistes ongulaires.",
    description:
      "Notre onglerie propose une gamme complète : pose de capsules, gel/acrylique, vernis semi-permanent et nail art personnalisé. Des ongles impeccables et durables, façonnés par des prothésistes ongulaires passionnées.",
    image: "/images/accueil/IMAGEAC6.webp",
    duration: "30 – 90 min",
    price: "À partir de 5 000 FCFA",
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
    short: "Coupe, couleur, tissages et extensions d'exception.",
    description:
      "Notre salon de coiffure vous accueille pour une expérience haut de gamme : coloration (Diacolor, Majirel, Inoa), tissages, extensions (Costobrom, Tape), défrisage et lissage brésilien. Nos coiffeurs subliment votre chevelure selon vos envies.",
    image: "/images/accueil/IMAGEAC8.webp",
    duration: "45 – 180 min",
    price: "À partir de 10 000 FCFA",
    benefits: [
      "Coloration professionnelle",
      "Tissages & extensions",
      "Défrisage et lissage brésilien",
      "Coiffage sur mesure",
    ],
  },
  {
    slug: "minceur-enveloppement",
    name: "Minceur & Enveloppement",
    category: "Minceur & Enveloppement",
    short: "Remodelage du corps, drainage et enveloppements ciblés.",
    description:
      "Nos protocoles minceur associent enveloppements détox, drainage lymphatique et massages ciblés pour affiner la silhouette et raffermir la peau. Le Forfait Minceur combine plusieurs soins pour une approche complète et progressive.",
    image: "/images/accueil/IMAGEAC9.webp",
    duration: "45 – 60 min",
    price: "À partir de 40 000 FCFA",
    benefits: [
      "Silhouette affinée",
      "Drainage lymphatique",
      "Peau raffermie",
      "Forfait minceur disponible",
    ],
  },
  {
    slug: "offres-couple",
    name: "Bulle de Détente Duo",
    category: "Offres Couple",
    short: "Partagez une parenthèse de bien-être à deux, côte à côte.",
    description:
      "Vivez un moment d'exception à deux dans notre suite couple. Nos offres couple associent massages, soins et rituels pour une expérience partagée, de la Bulle de Détente à l'Évasion à Deux, notre forfait le plus complet.",
    image: "/images/accueil/IMAGEAC1.webp",
    duration: "90 – 150 min",
    price: "À partir de 150 000 FCFA",
    benefits: [
      "Moment de complicité",
      "Suite privée",
      "Plusieurs formules disponibles",
      "Rituels personnalisables",
    ],
  },
  {
    slug: "soins-evenementiels",
    name: "Rituel Mariée d'Exception",
    category: "Soins Événementiels",
    short: "Éclat immédiat et beauté intense pour vos grands jours.",
    description:
      "Du Soin Éclat Flash au Rituel Mariée d'Exception, nos soins événementiels préparent votre peau pour les grandes occasions. Un résultat immédiat, une peau lumineuse et un teint parfait pour photos et célébrations.",
    image: "/images/accueil/IMAGEAC4.webp",
    duration: "45 – 75 min",
    price: "À partir de 48 000 FCFA",
    benefits: [
      "Éclat immédiat",
      "Teint unifié pour vos photos",
      "Protocole anti-fatigue",
      "Idéal avant un événement",
    ],
  },
  {
    slug: "epilations",
    name: "Épilations",
    category: "Épilations",
    short: "Cire, laser et body sculpting pour une peau lisse et nette.",
    description:
      "Sourcils, jambes, maillot, visage : nos épilations à la cire et au laser s'adaptent à tous les besoins, avec des forfaits combinés avantageux. Le Body Sculpting complète nos protocoles pour une silhouette redessinée.",
    image: "/images/accueil/IMAGEAC7.webp",
    duration: "15 – 60 min",
    price: "À partir de 5 000 FCFA",
    benefits: [
      "Cire ou laser au choix",
      "Forfaits combinés avantageux",
      "Peau douce durablement",
      "Body Sculpting disponible",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const categories = Array.from(new Set(services.map((s) => s.category)));
