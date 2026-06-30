"use client";

import {
  type ContactFormErrors,
  type ContactFormFields,
} from "@/lib/contact";
import { useState } from "react";

const inputClassName =
  "mt-1.5 w-full rounded-xl border border-grannsam-border bg-white px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-grannsam-green focus:ring-2 focus:ring-grannsam-green/20";

const labelClassName = "block text-sm font-medium text-foreground";

const emptyFields = (): ContactFormFields => ({
  name: "",
  email: "",
  association: "",
  message: "",
});

export function ContactForm() {
  const [fields, setFields] = useState<ContactFormFields>(emptyFields());
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function updateField<K extends keyof ContactFormFields>(
    key: K,
    value: ContactFormFields[K],
  ) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[key];
      return next;
    });
    setFormError(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError(null);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!response.ok) {
        setFormError("Kunde inte skicka meddelandet. Försök igen senare.");
        return;
      }

      setIsSubmitted(true);
      setFields(emptyFields());
    } catch {
      setFormError("Kunde inte skicka meddelandet. Försök igen senare.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-grannsam-green/25 bg-grannsam-green-muted px-6 py-8 sm:px-8">
        <h2 className="text-xl font-bold text-foreground">Tack för ditt meddelande!</h2>
        <p className="mt-3 text-base leading-relaxed text-foreground/85">
          Vi har tagit emot din förfrågan och återkommer så snart vi kan.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClassName}>Namn *</label>
        <input
          id="name"
          name="name"
          required
          value={fields.name}
          onChange={(e) => updateField("name", e.target.value)}
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClassName}>E-post *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={fields.email}
          onChange={(e) => updateField("email", e.target.value)}
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="association" className={labelClassName}>Förening</label>
        <input
          id="association"
          name="association"
          value={fields.association}
          onChange={(e) => updateField("association", e.target.value)}
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClassName}>Meddelande *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={fields.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={inputClassName}
        />
      </div>

      {formError && <p className="text-sm text-red-600">{formError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-grannsam-green px-8 py-3.5 text-base font-semibold text-white hover:opacity-90 disabled:opacity-60"
      >
        {isSubmitting ? "Skickar..." : "Skicka meddelande"}
      </button>
    </form>
  );
}