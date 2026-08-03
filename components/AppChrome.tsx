"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";
import WhatsAppButton from "./WhatsAppButton";

// Wrapper qui cache tout le "chrome" du site sur les routes borne/kiosque
// pour que la borne 32" reste en mode plein écran, sans navigation.
export default function AppChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isBorne = pathname?.startsWith("/borne");

  if (isBorne) {
    return <>{children}</>;
  }

  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
