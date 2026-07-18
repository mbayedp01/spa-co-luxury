import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-or text-noir shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-transform hover:scale-110"
    >
      <MessageCircle size={26} />
    </a>
  );
}
