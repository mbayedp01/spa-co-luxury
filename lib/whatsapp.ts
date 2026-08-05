import { site } from "./site";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("fr-FR", { timeZone: "Africa/Dakar" });
}
function fcfa(n: number) {
  return new Intl.NumberFormat("fr-FR").format(n) + " FCFA";
}

// Message pour une commande passée depuis la BORNE 32" installée à
// l'entrée du spa. Le client est physiquement sur place : la réception
// doit l'accueillir directement, pas le rappeler.
export function formatBorneOrderMessage(order: {
  id: string;
  customer: { name: string; phone: string };
  items: { name: string; qty: number; price: number }[];
  total: number;
  createdAt: string;
}) {
  const lines = [
    `📍 *CLIENT SUR PLACE — Borne accueil*`,
    `🌿 SPA & CO LUXURY`,
    ``,
    `👤 *Client :* ${order.customer.name}`,
    `📞 *Téléphone :* ${order.customer.phone}`,
    ``,
    `🧾 *Prestations sélectionnées :*`,
    ...order.items.map((i) => `• ${i.qty}× ${i.name} — ${fcfa(i.price * i.qty)}`),
    ``,
    `💰 *TOTAL : ${fcfa(order.total)}*`,
    ``,
    `📌 Réf : ${order.id}`,
    `🕐 ${formatDate(order.createdAt)}`,
    `Statut : ⏳ En attente`,
    ``,
    `⚡ *Le client est actuellement à l'accueil — merci de l'accueillir directement.*`,
  ];
  return lines.join("\n");
}

// Message pour une demande de réservation faite à DISTANCE depuis le site
// web (n'importe où). Le client n'est pas sur place : la réception doit le
// rappeler pour confirmer le créneau.
export function formatOnlineReservationMessage(reservation: {
  id: string;
  customer: { name: string; phone: string; email?: string };
  service: string;
  price?: number;
  duration?: string;
  date: string;
  time: string;
  employee?: string;
  notes?: string;
  createdAt: string;
}) {
  const lines = [
    `💻 *RÉSERVATION EN LIGNE — Site web*`,
    `🌿 SPA & CO LUXURY`,
    ``,
    `👤 *Client :* ${reservation.customer.name}`,
    `📞 *Téléphone :* ${reservation.customer.phone}`,
    ...(reservation.customer.email
      ? [`✉️ *Email :* ${reservation.customer.email}`]
      : []),
    ``,
    `🧾 *Prestation :* ${reservation.service}`,
    ...(reservation.price ? [`💰 *Tarif :* ${fcfa(reservation.price)}`] : []),
    ...(reservation.duration ? [`⏱️ *Durée :* ${reservation.duration}`] : []),
    `📅 *Date souhaitée :* ${reservation.date}`,
    `🕐 *Heure souhaitée :* ${reservation.time}`,
    ...(reservation.employee
      ? [`💆 *Thérapeute :* ${reservation.employee}`]
      : []),
    ...(reservation.notes ? [`📝 *Notes :* ${reservation.notes}`] : []),
    ``,
    `📌 Réf : ${reservation.id}`,
    `🕐 Reçu le ${formatDate(reservation.createdAt)}`,
    `Statut : ⏳ À confirmer`,
    ``,
    `☎️ *Le client n'est PAS sur place — merci de le rappeler pour confirmer ce créneau.*`,
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
