import {
  buildContactEmail,
  isInquiryType,
  validateContactForm,
  type ContactFormFields,
  type InquiryType,
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
    phone: typeof data.phone === "string" ? data.phone : "",
    association: typeof data.association === "string" ? data.association : "",
    apartmentCount:
      typeof data.apartmentCount === "string" ? data.apartmentCount : "",
    inquiry: typeof data.inquiry === "string" ? data.inquiry : "",
    message: typeof data.message === "string" ? data.message : "",
    website: typeof data.website === "string" ? data.website : "",
  };
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey) {
    return NextResponse.json(
      { error: "E-post är inte konfigurerad (RESEND_API_KEY saknas)." },
      { status: 503 },
    );
  }

  if (!from || !to) {
    return NextResponse.json(
      {
        error:
          "E-post är inte konfigurerad (CONTACT_FROM_EMAIL eller CONTACT_TO_EMAIL saknas).",
      },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Ogiltig förfrågan." },
      { status: 400 },
    );
  }

  const fields = parseContactBody(body);
  if (!fields) {
    return NextResponse.json(
      { error: "Ogiltig förfrågan." },
      { status: 400 },
    );
  }

  if (fields.website.trim()) {
    return NextResponse.json({ success: true });
  }

  const errors = validateContactForm(fields);
  if (errors) {
    return NextResponse.json({ error: "Validering misslyckades.", errors }, { status: 400 });
  }

  if (!isInquiryType(fields.inquiry)) {
    return NextResponse.json(
      { error: "Validering misslyckades.", errors: { inquiry: "Välj ett ärende." } },
      { status: 400 },
    );
  }

  const email = buildContactEmail({
    ...fields,
    inquiry: fields.inquiry as InquiryType,
  });
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
      { error: "Kunde inte skicka meddelandet. Försök igen senare." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
