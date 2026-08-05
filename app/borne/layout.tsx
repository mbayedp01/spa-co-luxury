import type { Metadata, Viewport } from "next";
import BorneShell from "@/components/BorneShell";

export const metadata: Metadata = {
  title: "Borne — SPA & CO LUXURY",
  description: "Borne interactive du spa.",
  robots: { index: false, follow: false },
};

// Verrouille le zoom tactile (pinch-to-zoom) uniquement sur la borne :
// un écran kiosque ne doit jamais être dézoomable par un client qui
// pince l'écran par erreur. Le reste du site garde le zoom accessible.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

// Layout minimal pour la borne : plein écran, sans navigation, optimisé
// pour un usage 100% tactile (Smart Screen 32" à l'entrée du spa).
export default function BorneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BorneShell>{children}</BorneShell>;
}
