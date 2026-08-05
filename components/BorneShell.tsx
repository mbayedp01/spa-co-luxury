"use client";

// Coquille tactile de la borne : bloque le menu contextuel (clic droit /
// appui long) et tente de passer en plein écran dès la première
// interaction, comme attendu pour un kiosque.
export default function BorneShell({
  children,
}: {
  children: React.ReactNode;
}) {
  function requestKioskFullscreen() {
    const el = document.documentElement;
    if (!document.fullscreenElement && el.requestFullscreen) {
      el.requestFullscreen().catch(() => {
        // Ignoré : certains navigateurs/OS refusent le plein écran
        // programmatique (ex. iPad). Le mode kiosque du navigateur
        // (Chrome --kiosk) reste la solution recommandée en prod.
      });
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden overscroll-none bg-noir text-creme select-none touch-manipulation [-webkit-touch-callout:none]"
      onContextMenu={(e) => e.preventDefault()}
      onPointerDown={requestKioskFullscreen}
    >
      {children}
    </div>
  );
}
