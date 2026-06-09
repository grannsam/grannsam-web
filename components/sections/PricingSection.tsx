import Link from "next/link";
import { BOOK_DEMO_PATH } from "@/lib/site";

const features = [
  "Obegränsat antal användare",
  "Fria uppdateringar av appen",
  "Fri kundtjänst",
  "Vi hjälper styrelsen att komma igång med grannsam",
  "Fri intro träff med grannar i er förening",
] as const;

export function PricingSection() {
  return (
    <section
      id="pris"
      className="scroll-mt-20 border-b border-grannsam-border/30 bg-grannsam-green py-16 md:py-24"
      aria-labelledby="pris-heading"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <h2
          id="pris-heading"
          className="text-center text-xl font-medium text-white sm:text-2xl md:text-[1.65rem]"
        >
          Låg avgift för föreningen - fritt för grannarna
        </h2>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-[#f5f1e1] px-8 py-10 shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:mt-12 sm:px-12 sm:py-12">
          <div className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1">
            <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              495 kr / månad
            </p>
            <span className="text-sm text-foreground/80 sm:text-base">
              exkl. moms
            </span>
          </div>

          <ul className="mx-auto mt-8 w-fit max-w-lg space-y-2.5 text-sm text-foreground sm:mt-10 sm:text-base">
            {features.map((feature) => (
              <li key={feature} className="leading-snug">
                - {feature}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center sm:mt-12">
            <Link
              href={BOOK_DEMO_PATH}
              className="inline-flex items-center justify-center rounded-full bg-grannsam-green px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              Boka demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
