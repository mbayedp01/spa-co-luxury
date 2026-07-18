# SPA & CO LUXURY

Site web premium pour **SPA & CO LUXURY** — spa de luxe à Dakar.
Présentation des prestations, réservation en ligne, blog SEO, galerie et architecture prête pour Supabase & paiements.

Construit avec **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **TailwindCSS**, **Framer Motion** et **Lenis**.

---

## 🎨 Identité

| Élément | Valeur |
|---|---|
| Noir | `#0B0B0B` |
| Or | `#D4AF37` |
| Blanc cassé | `#F7F4EE` |
| Gris | `#8D8D8D` |
| Titres | Cinzel |
| Sous-titres | Cormorant Garamond |
| Texte | Poppins |

---

## 🚀 Démarrer en local

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de production
npm start       # servir le build
```

---

## 📄 Pages

- `/` — Accueil (hero, présentation, prestations, forfaits, avis, carte cadeau, newsletter)
- `/a-propos` — Notre histoire, valeurs, galerie du spa
- `/prestations` — Carte des prestations
- `/prestations/[slug]` — Une page par prestation (10 prestations)
- `/galerie` — Galerie masonry filtrable + lightbox
- `/forfaits` — Forfaits & cartes cadeaux
- `/reservation` — Réservation multi-étapes (prestation → date/heure → coordonnées → confirmation)
- `/contact` — Formulaire, WhatsApp, horaires, Google Maps
- `/blog` et `/blog/[slug]` — Blog SEO

SEO inclus : metadata dynamique, Open Graph, Twitter Card, `robots.txt`, `sitemap.xml`, Schema.org (DaySpa).

---

## ☁️ Déploiement sur Vercel

1. Poussez ce dossier `spa-luxury/` sur un dépôt GitHub.
2. Sur [vercel.com](https://vercel.com) → **Add New Project** → importez le dépôt.
3. Vercel détecte Next.js automatiquement. **Root Directory** = `spa-luxury` (si le dépôt contient d'autres dossiers).
4. (Optionnel) Ajoutez les variables d'environnement (voir `.env.example`).
5. **Deploy**. C'est en ligne. 🎉

### Alternative : déploiement en une commande

```bash
npm i -g vercel
cd spa-luxury
vercel        # préproduction
vercel --prod # production
```

---

## 🗄️ Backend (à brancher — architecture prête)

- **Supabase** : exécutez `supabase/schema.sql` dans le SQL Editor pour créer les tables
  (profiles, services, reservations, gallery, blog, reviews, gift_cards, loyalty_points,
  newsletter, promotions, payments, settings…).
- **Emails** : Resend (formulaires de contact, confirmations de réservation).
- **Paiement** : Stripe, Wave, Orange Money, MTN, Moov — champs prêts dans la table `payments`.

Les formulaires (réservation, contact, newsletter) contiennent des `// TODO` aux points de branchement.

---

## 📁 Structure

```
app/            Pages (App Router) + sitemap/robots
components/     Navbar, Hero, ServiceCard, BookingForm, GalleryGrid, Footer…
lib/            Données (services, forfaits, blog, config du site)
public/images/  Visuels du spa
supabase/       Schéma SQL
```

---

© SPA & CO LUXURY
