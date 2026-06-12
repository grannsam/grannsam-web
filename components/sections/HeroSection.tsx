import Image from "next/image";
import Link from "next/link";
import { BOOK_DEMO_PATH } from "@/lib/site";

const features = [
  "Ett levande grannskap där grannar lär känna varandra.",
  "Mindre administration — mer tid till det som betyder något.",
  "Trygg kommunikation utan annonser och algoritmer.",
] as const;

function CheckIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden
      className="mt-0.5 shrink-0"
    >
      <path
        d="M11 1.5C5.977 1.5 1.875 5.602 1.875 10.625S5.977 19.75 11 19.75 20.125 15.648 20.125 10.625 16.023 1.5 11 1.5Z"
        fill="#2C8526"
      />
      <path
        d="m6.5 10.625 2.75 2.75 6.25-6.25"
        stroke="#fff"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="border-b border-grannsam-border/30 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-[1fr_minmax(280px,420px)] lg:gap-16 lg:py-24">
        <div className="max-w-xl lg:max-w-none">
          <h1 className="text-[2rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            För ett starkare grannskap.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-foreground/90 sm:text-xl sm:leading-8">
            Grannsam förenklar styrelsens uppgifter och ökar grannarnas
            engagemang i er förening.
          </p>

          <ul className="mt-8 space-y-4 sm:mt-10">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3 text-base sm:text-lg">
                <CheckIcon />
                <span className="leading-snug text-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href={BOOK_DEMO_PATH}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-grannsam-green px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 sm:mt-12"
          >
            Boka demo
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-[360px] justify-self-center lg:max-w-[400px] lg:justify-self-end">
          <div className="relative aspect-[924/1128] w-full">
            <Image
              src="/images/hero-phone-mockup.png"
              alt="Grannsam-appen visar en styrelseavisering och pågående grannhjälp"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 400px"
              className="object-cover object-top"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
