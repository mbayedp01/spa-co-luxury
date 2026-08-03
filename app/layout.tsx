import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import AppChrome from "@/components/AppChrome";
import { site } from "@/lib/site";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Spa de luxe à Dakar`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "spa Dakar",
    "massage Dakar",
    "soin visage",
    "hammam",
    "onglerie",
    "coiffure",
    "spa de luxe",
    "SPA & CO LUXURY",
  ],
  openGraph: {
    title: `${site.name} — Spa de luxe à Dakar`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Dakar",
      addressCountry: "SN",
    },
    priceRange: "$$$",
    openingHours: ["Mo-Fr 09:00-21:00", "Sa 10:00-22:00", "Su 11:00-19:00"],
  };

  return (
    <html lang="fr">
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${poppins.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
