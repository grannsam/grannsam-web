import { CtaLink } from "@/components/analytics/TrackLink";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { faqItems } from "@/lib/faq";
import { BOOK_DEMO_PATH, COMPARE_PATH, CONTACT_PATH } from "@/lib/site";

export function FaqSection() {
  return (
    <>
      <section className="border-b border-grannsam-border/30 bg-[#f5f1e1]">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center md:px-10 md:py-20">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Vanliga frågor om Grannsam för BRF-styrelser
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
            Svar på det styrelser och grannar ofta undrar över innan de tar
            Grannsam i bruk. Om du jämför oss med Facebook-grupper eller
            Grannsamverkan-appen finns en kort översikt under{" "}
            <CtaLink
              href={COMPARE_PATH}
              cta="compare"
              location="faq"
              className="font-medium text-grannsam-green underline-offset-2 hover:underline"
            >
              Jämför
            </CtaLink>
            .
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-14 md:px-10 md:py-20">
          <FaqAccordion items={faqItems} />

          <aside className="mt-12 rounded-2xl border border-grannsam-green/20 bg-grannsam-green-muted px-6 py-6 sm:px-8">
            <h2 className="text-lg font-semibold text-foreground">
              Hittar du inte svaret?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/85">
              Vi hjälper gärna till.{" "}
              <CtaLink
                href={CONTACT_PATH}
                cta="contact"
                location="faq"
                className="font-medium text-grannsam-green underline-offset-2 hover:underline"
              >
                Kontakta oss
              </CtaLink>{" "}
              eller{" "}
              <CtaLink
                href={BOOK_DEMO_PATH}
                cta="book_demo"
                location="faq"
                className="font-medium text-grannsam-green underline-offset-2 hover:underline"
              >
                boka en demo
              </CtaLink>
              .
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
