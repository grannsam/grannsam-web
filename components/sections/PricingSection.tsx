import Image from "next/image";
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
      className="relative scroll-mt-20 border-b border-grannsam-border/30 bg-[#4c8c4a] py-16 md:py-24 overflow-hidden"
      aria-labelledby="pris-heading"
    >
      {/* Bakgrundspaket med 'isolate' så att mix-blend inte påverkar text/rutor ovanför */}
      <div className="absolute inset-0 z-0 isolate">
        <Image
          src="/images/Bild2.jpg"
          alt="Bakgrund"
          layout="fill"
          objectFit="cover"
          className="opacity-35"
          priority
        />
        {/* En ljus, mjukt grön-tonad vit overlay */}
        <div className="absolute inset-0 bg-[#e3ecd5]/45 mix-blend-screen" />
        {/* Ett extra lager som mjukar upp kontrasten */}
        <div className="absolute inset-0 bg-white/05" />
      </div>

      {/* Innehåll (relative z-10 lyfter upp det rent grafiskt ovanpå bakgrunden) */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8">
        <h2
          id="pris-heading"
          className="text-center text-2xl font-semibold text-white sm:text-3xl md:text-4xl drop-shadow-sm"
        >
          Låg avgift för föreningen - fritt för grannarna
        </h2>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-[#f5f1e1] px-8 py-10 shadow-[0_12px_40px_rgba(38,43,46,0.06)] sm:mt-12 sm:px-12 sm:py-12">
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
              className="inline-flex items-center justify-center rounded-full bg-[#4c8c4a] hover:bg-[#3d703b] px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 shadow-sm"
            >
              Boka demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}