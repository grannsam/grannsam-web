export type ContactFormFields = {
  name: string;
  email: string;
  association: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormFields, string>>;

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateContactForm(
  fields: ContactFormFields,
): ContactFormErrors | null {
  const errors: ContactFormErrors = {};

  if (!fields.name.trim()) {
    errors.name = "Ange ditt namn.";
  }

  if (!fields.email.trim()) {
    errors.email = "Ange din e-postadress.";
  } else if (!isValidEmail(fields.email.trim())) {
    errors.email = "Ange en giltig e-postadress.";
  }

  if (!fields.message.trim()) {
    errors.message = "Skriv ett meddelande.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "Meddelandet måste vara minst 10 tecken.";
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

export function buildContactEmail(fields: ContactFormFields) {
  const text = [
    `Nytt meddelande via grannsam.nu`,
    ``,
    `Namn: ${fields.name.trim()}`,
    `E-post: ${fields.email.trim()}`,
    fields.association.trim() ? `Förening: ${fields.association.trim()}` : `Förening: Ej angiven`,
    ``,
    `Meddelande:`,
    fields.message.trim(),
  ].join("\n");

  const html = `
    <h2>Nytt meddelande via grannsam.nu</h2>
    <p><strong>Namn:</strong> ${escapeHtml(fields.name.trim())}</p>
    <p><strong>E-post:</strong> ${escapeHtml(fields.email.trim())}</p>
    <p><strong>Förening:</strong> ${fields.association.trim() ? escapeHtml(fields.association.trim()) : "Ej angiven"}</p>
    <p><strong>Meddelande:</strong></p>
    <p>${escapeHtml(fields.message.trim()).replace(/\n/g, "<br />")}</p>
  `;

  return {
    subject: `[Grannsam] Kontaktformulär – ${fields.name.trim()}`,
    text,
    html,
    replyTo: fields.email.trim(),
  };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}