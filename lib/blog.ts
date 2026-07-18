export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  image: string;
  date: string;
};

export const posts: Post[] = [
  {
    slug: "bienfaits-massage-relaxant",
    title: "Les bienfaits insoupçonnés du massage relaxant",
    category: "Massage",
    excerpt:
      "Bien plus qu'un moment de détente, le massage relaxant agit en profondeur sur le corps et l'esprit. Découvrez pourquoi.",
    image: "/images/accueil/IMAGEAC12.webp",
    date: "2026-06-12",
    content: [
      "Le massage relaxant est souvent perçu comme un simple plaisir. Pourtant, ses effets vont bien au-delà de la détente immédiate. En stimulant la circulation sanguine et lymphatique, il favorise l'élimination des toxines et l'oxygénation des tissus.",
      "Sur le plan nerveux, il réduit la production de cortisol — l'hormone du stress — tout en stimulant la sécrétion d'endorphines. Résultat : un apaisement durable, un meilleur sommeil et une sensation de légèreté.",
      "Pour en tirer tous les bénéfices, nous recommandons une séance mensuelle, idéalement associée à un rituel hammam pour préparer le corps.",
    ],
  },
  {
    slug: "routine-soin-visage",
    title: "Construire une routine de soin du visage éclatante",
    category: "Visage",
    excerpt:
      "Nettoyage, hydratation, protection : les gestes essentiels pour une peau lumineuse toute l'année.",
    image: "/images/accueil/IMAGEAC3.webp",
    date: "2026-05-28",
    content: [
      "Une belle peau est le fruit d'une routine régulière et adaptée. Tout commence par un nettoyage doux matin et soir, pour débarrasser la peau des impuretés sans l'agresser.",
      "L'hydratation est la clé : même les peaux grasses en ont besoin. Complétez avec un soin professionnel mensuel pour un nettoyage en profondeur et une exfoliation maîtrisée.",
      "Enfin, n'oubliez jamais la protection solaire, premier rempart contre le vieillissement cutané.",
    ],
  },
  {
    slug: "hammam-rituel-purification",
    title: "Le hammam, un rituel de purification millénaire",
    category: "Hammam",
    excerpt:
      "Du savon noir au gant de kessa, plongez dans les secrets d'un rituel ancestral toujours d'actualité.",
    image: "/images/accueil/IMAGEAC5.webp",
    date: "2026-05-10",
    content: [
      "Le hammam est bien plus qu'un bain de vapeur : c'est un véritable rituel de purification, transmis de génération en génération dans tout le monde oriental.",
      "La chaleur humide ouvre les pores et prépare la peau au gommage au savon noir, suivi du gant de kessa qui élimine les cellules mortes. La peau ressort douce, lisse et régénérée.",
      "Au-delà du corps, le hammam est un moment de partage et de reconnexion à soi. Un rendez-vous à s'offrir sans modération.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
