import {
  buildContactEmail,
  validateContactForm,
  type ContactFormFields,
} from "@/lib/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const contactCorsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function contactJson(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: contactCorsHeaders });
}

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: contactCorsHeaders });
}

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

function getResendErrorMessage(error: { message?: string }): string {
  const message = error.message ?? "";

  if (message.includes("only send testing emails")) {
    return "E-post är felkonfigurerad: i testläge kan Resend bara skicka till e-postadressen på ditt Resend-konto.";
  }

  if (message.includes("not verified") || message.includes("domain")) {
    return "E-post är felkonfigurerad: avsändardomänen i CONTACT_FROM_EMAIL är inte verifierad i Resend.";
  }

  if (message.includes("Invalid `from` field")) {
    return "E-post är felkonfigurerad: CONTACT_FROM_EMAIL har ogiltigt format eller ogiltig adress.";
  }

  return "Kunde inte skicka meddelandet. Försök igen senare.";
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();

  if (!apiKey) {
    return contactJson(
      { error: "E-post är inte konfigurerad (RESEND_API_KEY saknas)." },
      503,
    );
  }

  if (!from || !to) {
    return contactJson(
      {
        error:
          "E-post är inte konfigurerad (CONTACT_FROM_EMAIL eller CONTACT_TO_EMAIL saknas).",
      },
      503,
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return contactJson({ error: "Ogiltig förfrågan." }, 400);
  }

  const fields = parseContactBody(body);
  if (!fields) {
    return contactJson({ error: "Ogiltig förfrågan." }, 400);
  }

  const errors = validateContactForm(fields);
  if (errors) {
    return contactJson({ error: "Validering misslyckades.", errors }, 400);
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
    console.error("Resend contact form error:", error);
    return contactJson({ error: getResendErrorMessage(error) }, 502);
  }

  return contactJson({ success: true });
}
