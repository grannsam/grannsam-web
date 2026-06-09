import { ContactForm } from "@/components/contact/ContactForm";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from "@/lib/site";
import type { InquiryType } from "@/lib/contact";

type ContactSectionProps = {
  initialInquiry?: InquiryType;
};

export function ContactSection({ initialInquiry }: ContactSectionProps) {
  const isDemo = initialInquiry === "demo";

  return (
    <>
      <section className="border-b border-grannsam-border/30 bg-[#f5f1e1]">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center md:px-10 md:py-20">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            {isDemo ? "Boka demo" : "Kontakt"}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
            {isDemo
              ? "Berätta kort om er förening så bokar vi en demo av Grannsam och visar hur appen kan stärka grannskapet hos er."
              : "Har du frågor om Grannsam, vill boka en demo eller behöver support? Fyll i formuläret så återkommer vi."}
          </p>
          <p className="mt-3 text-sm text-foreground/70 sm:text-base">
            Vi återkommer vanligtvis inom 1–2 arbetsdagar.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16">
          <div className="rounded-2xl bg-[#f5f1e1] px-6 py-8 shadow-[0_8px_30px_rgba(38,43,46,0.06)] sm:px-8 sm:py-10">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              Skicka ett meddelande
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/85">
              Fält markerade med * är obligatoriska.
            </p>
            <div className="mt-8">
              <ContactForm initialInquiry={initialInquiry} />
            </div>
          </div>

          <aside className="lg:pt-2">
            <h2 className="text-lg font-semibold text-foreground">
              Kontaktuppgifter
            </h2>
            <div className="mt-5 space-y-4 text-base text-foreground/85">
              <div>
                <p className="font-medium text-foreground">E-post</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-1 block text-grannsam-green transition-opacity hover:opacity-75"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <p className="font-medium text-foreground">Telefon</p>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="mt-1 block text-grannsam-green transition-opacity hover:opacity-75"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
