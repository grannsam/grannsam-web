import Link from "next/link";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { faqItems } from "@/lib/faq";
import { BOOK_DEMO_PATH, CONTACT_PATH } from "@/lib/site";

export function FaqSection() {
  return (
    <>
      <section className="border-b border-grannsam-border/30 bg-[#f5f1e1]">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center md:px-10 md:py-20">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Vanliga frågor
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
            Svar på det styrelser och grannar ofta undrar över innan de tar
            Grannsam i bruk.
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
              <Link
                href={CONTACT_PATH}
                className="font-medium text-grannsam-green underline-offset-2 hover:underline"
              >
                Kontakta oss
              </Link>{" "}
              eller{" "}
              <Link
                href={BOOK_DEMO_PATH}
                className="font-medium text-grannsam-green underline-offset-2 hover:underline"
              >
                boka en demo
              </Link>
              .
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
