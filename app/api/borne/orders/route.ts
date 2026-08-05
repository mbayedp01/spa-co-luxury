import { NextResponse } from "next/server";
import {
  buildWaMeUrl,
  formatBorneOrderMessage,
  sendReceptionWhatsapp,
} from "@/lib/whatsapp";

// Endpoint qui reçoit les demandes envoyées depuis la borne 32".
// Notifie la réception par WhatsApp (au numéro configuré dans lib/site.ts)
// et peut relayer la commande vers un logiciel de gestion via webhook.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customer, items, total } = body ?? {};

    if (!customer?.name || !customer?.phone) {
      return NextResponse.json(
        { ok: false, error: "Nom et téléphone requis" },
        { status: 400 }
      );
    }
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { ok: false, error: "Panier vide" },
        { status: 400 }
      );
    }

    const order = {
      id: `BRN-${Date.now()}`,
      status: "en_attente" as const,
      createdAt: new Date().toISOString(),
      customer,
      items,
      total,
    };

    console.log("[BORNE] Nouvelle demande:", JSON.stringify(order, null, 2));

    // Message + notification WhatsApp à la réception (77 907 46 46).
    const message = formatBorneOrderMessage(order);
    const waResult = await sendReceptionWhatsapp(message);
    const waMeUrl = buildWaMeUrl(message);

    // Webhook optionnel vers le logiciel de gestion (Odoo/Sage/etc.).
    const webhook = process.env.BORNE_WEBHOOK_URL;
    if (webhook) {
      try {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(order),
        });
      } catch (err) {
        console.error("[BORNE] Webhook error:", err);
      }
    }

    return NextResponse.json({
      ok: true,
      order,
      whatsapp: {
        sent: waResult.ok,
        provider: waResult.provider,
        // La borne utilisera cette URL pour ouvrir WhatsApp Web/App si
        // l'envoi automatique n'est pas configuré.
        waMeUrl,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Requête invalide" },
      { status: 400 }
    );
  }
}
