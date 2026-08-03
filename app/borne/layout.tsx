import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Borne — SPA & CO LUXURY",
  description: "Borne interactive du spa.",
  robots: { index: false, follow: false },
};

// Layout minimal pour la borne : plein écran, sans navigation.
export default function BorneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[100] overflow-hidden bg-noir text-creme select-none touch-manipulation">
      {children}
    </div>
  );
}
