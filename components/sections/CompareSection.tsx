import { CtaLink } from "@/components/analytics/TrackLink";
import { BOOK_DEMO_PATH, FAQ_PATH } from "@/lib/site";

const rows = [
  {
    topic: "Vem det är till för",
    grannsam: "Bostadsrättsföreningar: styrelse och boende i samma förening.",
    facebook: "Vem som helst med ett Facebook-konto. Grupper blir ofta öppna eller svåra att hålla rena.",
    grannsamverkan:
      "Brottsförebyggande grannsamverkan via Samverkan mot brott, med koppling till Polisen.",
  },
  {
    topic: "Verifiering",
    grannsam: "BankID. Ni vet att det är verkliga boende i er förening.",
    facebook: "Inga krav på att personen bor i huset.",
    grannsamverkan: "BankID i Grannsamverkan-appen, men syftet är trygghet mot brott — inte BRF-drift.",
  },
  {
    topic: "Styrelsens arbete",
    grannsam: "Anslagstavla, pushnotiser, ärenden med ansvar och uppföljning, dokument.",
    facebook: "Inlägg i ett flöde som algoritmen kan gömma. Ingen ärendehantering.",
    grannsamverkan: "Chatt och information från Polisen. Inte ärenden, hyresinformation eller föreningsdokument.",
  },
  {
    topic: "Annonser och flöde",
    grannsam: "Inga annonser. Inget algoritmflöde. Lokalt och slutet.",
    facebook: "Annonser och algoritmer styr vad som syns.",
    grannsamverkan: "Ingen reklam, men inte byggt som föreningens arbetsyta.",
  },
  {
    topic: "Pris",
    grannsam: "495 kr/mån för hela föreningen, exklusive moms. Fritt för grannarna.",
    facebook: "Gratis, betalas med data och reklam.",
    grannsamverkan: "Kostnadsfri app från Samverkan mot brott.",
  },
] as const;

export function CompareSection() {
  return (
    <>
      <section className="border-b border-grannsam-border/30 bg-[#f5f1e1]">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center md:px-10 md:py-20">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Grannsam jämfört med Facebook, WhatsApp och Grannsamverkan
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
            Grannsam är en app för bostadsrättsföreningar, utvecklad av Grannsam
            AB. Den ersätter inte Polisens Grannsamverkan-app och är inte en
            Facebook-grupp med extra steg — den är byggd för styrelsens
            information, ärenden och ett slutet grannskap.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-20">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">
                Jämförelse mellan Grannsam, Facebook-grupper och Grannsamverkan
              </caption>
              <thead>
                <tr className="border-b border-grannsam-border/60">
                  <th className="py-3 pr-4 font-semibold text-foreground">Område</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Grannsam</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">
                    Facebook / WhatsApp
                  </th>
                  <th className="py-3 font-semibold text-foreground">Grannsamverkan</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.topic} className="border-b border-grannsam-border/40 align-top">
                    <th className="py-4 pr-4 font-semibold text-foreground">{row.topic}</th>
                    <td className="py-4 pr-4 text-foreground/85">{row.grannsam}</td>
                    <td className="py-4 pr-4 text-foreground/85">{row.facebook}</td>
                    <td className="py-4 text-foreground/85">{row.grannsamverkan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 space-y-6 text-base leading-relaxed text-foreground/85">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              När ska ni använda vad?
            </h2>
            <p>
              Använd Grannsam när styrelsen behöver nå alla i föreningen, ta emot
              ärenden och ge grannar en trygg plats att hjälpas åt. Behåll
              Grannsamverkan-appen om ni redan har ett brottsförebyggande
              samarbete med Polisen. Facebook och WhatsApp fungerar som
              tillfälliga chattar, men de är svåra att styra, verifiera och
              arkivera som föreningsverktyg.
            </p>
          </div>

          <aside className="mt-12 rounded-2xl border border-grannsam-green/20 bg-grannsam-green-muted px-6 py-8 text-center sm:px-8">
            <h2 className="text-lg font-semibold text-foreground sm:text-xl">
              Se Grannsam i er förening
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85 sm:text-base">
              Boka en demo eller läs vanliga frågor.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <CtaLink
                href={BOOK_DEMO_PATH}
                cta="book_demo"
                location="compare"
                className="inline-flex items-center justify-center rounded-full bg-grannsam-green px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-8 sm:text-base"
              >
                Boka demo
              </CtaLink>
              <CtaLink
                href={FAQ_PATH}
                cta="faq"
                location="compare"
                className="inline-flex items-center justify-center rounded-full border border-grannsam-green px-6 py-3 text-sm font-semibold text-grannsam-green transition-opacity hover:opacity-90 sm:px-8 sm:text-base"
              >
                Vanliga frågor
              </CtaLink>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
