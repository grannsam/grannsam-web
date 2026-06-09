export const INQUIRY_TYPES = [
  { value: "demo", label: "Boka demo" },
  { value: "general", label: "Allmän fråga" },
  { value: "support", label: "Support" },
  { value: "other", label: "Annat" },
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number]["value"];

export type ContactFormFields = {
  name: string;
  email: string;
  phone: string;
  association: string;
  apartmentCount: string;
  inquiry: string;
  message: string;
  website: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormFields, string>>;

const inquiryValues = new Set<string>(INQUIRY_TYPES.map((type) => type.value));

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function getInquiryLabel(inquiry: InquiryType): string {
  const match = INQUIRY_TYPES.find((type) => type.value === inquiry);
  if (!match) {
    throw new Error(`Unknown inquiry type: ${inquiry}`);
  }
  return match.label;
}

export function isInquiryType(value: string): value is InquiryType {
  return inquiryValues.has(value);
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

  if (!isInquiryType(fields.inquiry)) {
    errors.inquiry = "Välj ett ärende.";
  }

  if (!fields.message.trim()) {
    errors.message = "Skriv ett meddelande.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "Meddelandet måste vara minst 10 tecken.";
  }

  if (
    fields.apartmentCount.trim() &&
    !/^\d+$/.test(fields.apartmentCount.trim())
  ) {
    errors.apartmentCount = "Ange antal lägenheter som ett heltal.";
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

export function buildContactEmail(fields: ContactFormFields & { inquiry: InquiryType }) {
  const inquiryLabel = getInquiryLabel(fields.inquiry);
  const optionalLines = [
    fields.phone.trim() ? `Telefon: ${fields.phone.trim()}` : null,
    fields.association.trim()
      ? `Förening: ${fields.association.trim()}`
      : null,
    fields.apartmentCount.trim()
      ? `Antal lägenheter: ${fields.apartmentCount.trim()}`
      : null,
  ].filter((line): line is string => line !== null);

  const text = [
    `Nytt meddelande via grannsam.nu`,
    ``,
    `Ärende: ${inquiryLabel}`,
    `Namn: ${fields.name.trim()}`,
    `E-post: ${fields.email.trim()}`,
    ...optionalLines,
    ``,
    `Meddelande:`,
    fields.message.trim(),
  ].join("\n");

  const html = `
    <h2>Nytt meddelande via grannsam.nu</h2>
    <p><strong>Ärende:</strong> ${escapeHtml(inquiryLabel)}</p>
    <p><strong>Namn:</strong> ${escapeHtml(fields.name.trim())}</p>
    <p><strong>E-post:</strong> ${escapeHtml(fields.email.trim())}</p>
    ${optionalLines
      .map((line) => {
        const [label, value] = line.split(": ");
        return `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`;
      })
      .join("")}
    <p><strong>Meddelande:</strong></p>
    <p>${escapeHtml(fields.message.trim()).replace(/\n/g, "<br />")}</p>
  `;

  return {
    subject: `[Grannsam] ${inquiryLabel} – ${fields.name.trim()}`,
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
