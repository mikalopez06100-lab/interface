import { NextResponse } from "next/server";

type LeadPayload = {
  source: "contact" | "simulateur" | string;
  lead: Record<string, unknown>;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload;
    const webhookUrl = process.env.LEAD_WEBHOOK_URL ?? process.env.NEXT_PUBLIC_LEAD_WEBHOOK;

    if (!payload?.lead || !webhookUrl) {
      return NextResponse.json(
        { ok: false, message: "Webhook manquant ou payload invalide." },
        { status: 400 }
      );
    }

    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { ok: false, message: "Erreur lors de la transmission du lead." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "Requête invalide." }, { status: 400 });
  }
}
