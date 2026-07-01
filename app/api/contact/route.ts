import {
  buildContactEmail,
  validateContactForm,
  type ContactFormFields,
} from "@/lib/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

function parseContactBody(body: unknown): ContactFormFields | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const data = body as Record<string, unknown>;

  return {
    name: typeof data.name === "string" ? data.name : "",
    email: typeof data.email === "string" ? data.email : "",
    association: typeof data.association === "string" ? data.association : "",
    message: typeof data.message === "string" ? data.message : "",
  };
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { error: "Konfigurationsfel på servern." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ogiltig förfrågan." }, { status: 400 });
  }

  const fields = parseContactBody(body);
  if (!fields) {
    return NextResponse.json({ error: "Ogiltig förfrågan." }, { status: 400 });
  }

  const errors = validateContactForm(fields);
  if (errors) {
    return NextResponse.json(
      { error: "Validering misslyckades.", errors },
      { status: 400 }
    );
  }

  const email = buildContactEmail(fields);
  const resend = new Resend(apiKey);
  
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email.replyTo,
    subject: email.subject,
    text: email.text,
    html: email.html,
  });

  if (error) {
    return NextResponse.json(
      { error: "Kunde inte skicka meddelandet." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}