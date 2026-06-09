"use client";

import {
  INQUIRY_TYPES,
  type ContactFormErrors,
  type ContactFormFields,
  type InquiryType,
} from "@/lib/contact";
import { useState } from "react";

const inputClassName =
  "mt-1.5 w-full rounded-xl border border-grannsam-border bg-white px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-grannsam-green focus:ring-2 focus:ring-grannsam-green/20";

const labelClassName = "block text-sm font-medium text-foreground";

type ContactFormProps = {
  initialInquiry?: InquiryType;
};

const emptyFields = (initialInquiry?: InquiryType): ContactFormFields => ({
  name: "",
  email: "",
  phone: "",
  association: "",
  apartmentCount: "",
  inquiry: initialInquiry ?? "general",
  message: "",
  website: "",
});

export function ContactForm({ initialInquiry }: ContactFormProps) {
  const [fields, setFields] = useState<ContactFormFields>(
    emptyFields(initialInquiry),
  );
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
      if (!current[key]) {
        return current;
      }
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
        return;
      }

      setIsSubmitted(true);
      setFields(emptyFields(initialInquiry));
    } catch {
      setFormError("Kunde inte skicka meddelandet. Försök igen senare.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div
        className="rounded-2xl border border-grannsam-green/25 bg-grannsam-green-muted px-6 py-8 sm:px-8"
        role="status"
      >
        <h2 className="text-xl font-bold text-foreground">Tack för ditt meddelande!</h2>
        <p className="mt-3 text-base leading-relaxed text-foreground/85">
          Vi har tagit emot din förfrågan och återkommer så snart vi kan,
          vanligtvis inom 1–2 arbetsdagar.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="absolute -left-[9999px]" aria-hidden>
        <label htmlFor="website">Webbplats</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClassName}>
            Namn <span className="text-grannsam-green">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={fields.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={inputClassName}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-sm text-[#c62828]">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClassName}>
            E-post <span className="text-grannsam-green">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={fields.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={inputClassName}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-sm text-[#c62828]">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClassName}>
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="inquiry" className={labelClassName}>
            Ärende <span className="text-grannsam-green">*</span>
          </label>
          <select
            id="inquiry"
            name="inquiry"
            required
            value={fields.inquiry}
            onChange={(event) => updateField("inquiry", event.target.value)}
            className={inputClassName}
            aria-invalid={Boolean(errors.inquiry)}
            aria-describedby={errors.inquiry ? "inquiry-error" : undefined}
          >
            {INQUIRY_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.inquiry ? (
            <p id="inquiry-error" className="mt-1.5 text-sm text-[#c62828]">
              {errors.inquiry}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="association" className={labelClassName}>
            Förening
          </label>
          <input
            id="association"
            name="association"
            type="text"
            value={fields.association}
            onChange={(event) => updateField("association", event.target.value)}
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="apartmentCount" className={labelClassName}>
            Antal lägenheter
          </label>
          <input
            id="apartmentCount"
            name="apartmentCount"
            type="text"
            inputMode="numeric"
            value={fields.apartmentCount}
            onChange={(event) =>
              updateField("apartmentCount", event.target.value)
            }
            className={inputClassName}
            aria-invalid={Boolean(errors.apartmentCount)}
            aria-describedby={
              errors.apartmentCount ? "apartment-count-error" : undefined
            }
          />
          {errors.apartmentCount ? (
            <p
              id="apartment-count-error"
              className="mt-1.5 text-sm text-[#c62828]"
            >
              {errors.apartmentCount}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClassName}>
          Meddelande <span className="text-grannsam-green">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={fields.message}
          onChange={(event) => updateField("message", event.target.value)}
          className={`${inputClassName} resize-y`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-[#c62828]">
            {errors.message}
          </p>
        ) : null}
      </div>

      <p className="text-sm leading-relaxed text-foreground/70">
        Genom att skicka formuläret godkänner du att vi behandlar dina
        uppgifter för att kunna svara på din förfrågan.
      </p>

      {formError ? (
        <p className="text-sm text-[#c62828]" role="alert">
          {formError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-full bg-grannsam-green px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Skickar..." : "Skicka meddelande"}
      </button>
    </form>
  );
}
