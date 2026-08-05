import { site } from "./site";

// Formate un récap de commande pour WhatsApp (lisible dans l'app native).
export function formatBorneOrderMessage(order: {
  id: string;
  customer: { name: string; phone: string };
  items: { name: string; qty: number; price: number }[];
  total: number;
  createdAt: string;
}) {
  const lines = [
    `🌿 *SPA & CO LUXURY — Nouvelle demande borne*`,
    ``,
    `👤 *Client :* ${order.customer.name}`,
    `📞 *Téléphone :* ${order.customer.phone}`,
    ``,
    `🧾 *Prestations :*`,
    ...order.items.map(
      (i) =>
        `• ${i.qty}× ${i.name} — ${new Intl.NumberFormat("fr-FR").format(
          i.price * i.qty
        )} FCFA`
    ),
    ``,
    `💰 *TOTAL : ${new Intl.NumberFormat("fr-FR").format(order.total)} FCFA*`,
    ``,
    `📌 Réf : ${order.id}`,
    `🕐 ${new Date(order.createdAt).toLocaleString("fr-FR", {
      timeZone: "Africa/Dakar",
    })}`,
    `Statut : ⏳ En attente`,
  ];
  return lines.join("\n");
}

// Envoie un message WhatsApp au numéro de la réception depuis le serveur.
//
// Mécanismes supportés (dans l'ordre) :
//   1. CallMeBot (gratuit, activation unique — le plus simple)
//      Env: CALLMEBOT_APIKEY  (obtenu en envoyant "I allow callmebot to send
//      me messages" au +34 644 66 32 89 depuis le numéro qui recevra)
//   2. Ultramsg / Wassenger / gateway custom
//      Env: WHATSAPP_GATEWAY_URL  (POST { to, message })
//   3. Sinon → juste un log serveur (fallback : la borne ouvre wa.me)
export async function sendReceptionWhatsapp(message: string) {
  const to = site.borneReceptionWhatsapp;

  // 1) CallMeBot (gratuit)
  const cmbKey = process.env.CALLMEBOT_APIKEY;
  if (cmbKey) {
    try {
      const url = new URL("https://api.callmebot.com/whatsapp.php");
      url.searchParams.set("phone", to);
      url.searchParams.set("text", message);
      url.searchParams.set("apikey", cmbKey);
      const res = await fetch(url.toString(), { method: "GET" });
      if (res.ok) return { ok: true, provider: "callmebot" as const };
      console.warn("[WHATSAPP] CallMeBot status:", res.status);
    } catch (e) {
      console.error("[WHATSAPP] CallMeBot error:", e);
    }
  }

  // 2) Gateway générique
  const gateway = process.env.WHATSAPP_GATEWAY_URL;
  if (gateway) {
    try {
      const res = await fetch(gateway, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.WHATSAPP_GATEWAY_TOKEN
            ? { Authorization: `Bearer ${process.env.WHATSAPP_GATEWAY_TOKEN}` }
            : {}),
        },
        body: JSON.stringify({ to, message }),
      });
      if (res.ok) return { ok: true, provider: "gateway" as const };
      console.warn("[WHATSAPP] Gateway status:", res.status);
    } catch (e) {
      console.error("[WHATSAPP] Gateway error:", e);
    }
  }

  // 3) Fallback : log
  console.log(
    "[WHATSAPP] Aucun provider configuré. Message qui aurait été envoyé à",
    `+${to}:\n${message}`
  );
  return { ok: false, provider: "none" as const };
}

// Génère un lien wa.me qui ouvre WhatsApp avec le numéro + message pré-rempli.
// Utilisé côté client comme fallback : la borne peut ouvrir ce lien pour
// confirmer manuellement si l'envoi automatique n'est pas configuré.
export function buildWaMeUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.borneReceptionWhatsapp}?text=${encoded}`;
}
