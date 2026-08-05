import { NextResponse } from "next/server";
import {
  buildWaMeUrl,
  formatOnlineReservationMessage,
  sendReceptionWhatsapp,
} from "@/lib/whatsapp";

// Endpoint pour les réservations faites À DISTANCE depuis le site web
// (n'importe où, pas forcément dans les locaux du spa). Contrairement à
// la borne, le client n'est pas sur place : la réception doit le rappeler
// pour confirmer le créneau — d'où un message WhatsApp différent.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customer, service, price, duration, date, time, employee, notes } =
      body ?? {};

    if (!customer?.name || !customer?.phone) {
      return NextResponse.json(
        { ok: false, error: "Nom et téléphone requis" },
        { status: 400 }
      );
    }
    if (!service || !date || !time) {
      return NextResponse.json(
        { ok: false, error: "Prestation, date et heure requises" },
        { status: 400 }
      );
    }

    const reservation = {
      id: `RES-${Date.now()}`,
      status: "a_confirmer" as const,
      createdAt: new Date().toISOString(),
      customer,
      service,
      price,
      duration,
      date,
      time,
      employee,
      notes,
    };

    console.log(
      "[RESERVATION] Nouvelle demande en ligne:",
      JSON.stringify(reservation, null, 2)
    );

    const message = formatOnlineReservationMessage(reservation);
    const waResult = await sendReceptionWhatsapp(message);
    const waMeUrl = buildWaMeUrl(message);

    const webhook = process.env.RESERVATION_WEBHOOK_URL;
    if (webhook) {
      try {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reservation),
        });
      } catch (err) {
        console.error("[RESERVATION] Webhook error:", err);
      }
    }

    return NextResponse.json({
      ok: true,
      reservation,
      whatsapp: { sent: waResult.ok, provider: waResult.provider, waMeUrl },
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Requête invalide" },
      { status: 400 }
    );
  }
}
