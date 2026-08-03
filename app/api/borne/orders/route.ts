import { NextResponse } from "next/server";

// Endpoint qui reçoit les demandes envoyées depuis la borne 32".
// À brancher ensuite sur : Supabase (table `borne_orders`), Resend (email
// caissière), ou webhook du logiciel de gestion (Odoo/Sage/etc.).
//
// TODO intégration réelle :
//   1. Insérer dans Supabase → table `borne_orders`
//   2. Notifier la caisse via WebSocket / SSE
//   3. Envoyer email + WhatsApp à la réception
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

    // Log console (visible dans les logs Vercel).
    // eslint-disable-next-line no-console
    console.log("[BORNE] Nouvelle demande:", JSON.stringify(order, null, 2));

    // Webhook optionnel vers le logiciel de gestion.
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

    return NextResponse.json({ ok: true, order });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Requête invalide" },
      { status: 400 }
    );
  }
}
