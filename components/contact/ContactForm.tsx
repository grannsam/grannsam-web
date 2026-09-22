"use client";

import {
  type ContactFormErrors,
  type ContactFormFields,
} from "@/lib/contact";
import { formEvents, type ContactIntent } from "@/lib/analytics";
import { useAptabase } from "@aptabase/react";
import { useState } from "react";
import Link from "next/link";

const inputClassName =
  "mt-1.5 w-full rounded-xl border border-grannsam-border bg-white px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-grannsam-green focus:ring-2 focus:ring-grannsam-green/20";

const labelClassName = "block text-sm font-medium text-foreground";

const emptyFields = (): ContactFormFields => ({
  name: "",
  email: "",
  association: "",
  message: "",
});

export function ContactForm({
  intent = "contact",
}: {
  intent?: ContactIntent;
}) {
  const { trackEvent } = useAptabase();
  const events = formEvents(intent);
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
    void trackEvent(events.submit, { intent });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      const data: {
        success?: boolean;
        error?: string;
        errors?: ContactFormErrors;
      } = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setFormError(
          data.error ?? "Kunde inte skicka meddelandet. Försök igen senare.",
        );
        void trackEvent(events.error, {
          intent,
          reason: data.errors || response.status === 400 ? "validation" : "server",
        });
        return;
      }

      setIsSubmitted(true);
      setFields(emptyFields());
      void trackEvent(events.success, { intent });
    } catch {
      setFormError("Kunde inte skicka meddelandet. Försök igen senare.");
      void trackEvent(events.error, {
        intent,
        reason: "network",
      });
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
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? (
          <p className="mt-1.5 text-sm text-[#c62828]">{errors.name}</p>
        ) : null}
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
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? (
          <p className="mt-1.5 text-sm text-[#c62828]">{errors.email}</p>
        ) : null}
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
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <p className="mt-1.5 text-sm text-[#c62828]">{errors.message}</p>
        ) : null}
      </div>

      {formError && <p className="text-sm text-red-600">{formError}</p>}

      {/* ÄNDRING: "hanteras" har blivit "behandlas" för bättre flyt */}
      <p className="text-xs text-foreground/60 leading-relaxed">
        Genom att skicka meddelandet godkänner du att dina uppgifter behandlas i enlighet med vår{" "}
        <Link href="/datasakerhet" className="text-grannsam-green underline hover:opacity-80 transition-opacity">
          hantering av personuppgifter
        </Link>
        .
      </p>

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