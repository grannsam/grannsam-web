import Image from "next/image";
import {
  MdFavorite,
  MdGroups,
  MdShield,
} from "react-icons/md";
import type { IconType } from "react-icons";

type TeamMember = {
  name: string;
  role: string;
  photo?: string;
};

const team: TeamMember[] = [
  {
    name: "Reibin Amin",
    role: "VD & grundare",
    photo: "/images/team/reibin-amin.png",
  },
  {
    name: "Bernard Liang",
    role: "Teknisk Chef",
    photo: "/images/team/bernard-liang.png",
  },
  { name: "Emil Er", role: "Fullstack utvecklare" },
  {
    name: "Aaron Håkansson",
    role: "Sälj & kundansvarig",
    photo: "/images/team/aaron-hakansson.png",
  },
  { name: "Daniel Mundo", role: "UX" },
];

type ResearchCard = {
  Icon: IconType;
  iconClassName: string;
  name: string;
  affiliation: string;
  headline: string;
  points: string[];
};

const research: ResearchCard[] = [
  {
    Icon: MdFavorite,
    iconClassName: "text-[#e53935]",
    name: "Julianne Holt-Lunstad",
    affiliation: "Brigham Young University",
    headline: "Starkare relationer kan förlänga livet",
    points: [
      "Meta-analys av 148 studier med över 300 000 personer",
      "Starkare sociala relationer ökar sannolikheten att leva längre med cirka 50 %",
      "Social isolering är lika skadligt som rökning, alkohol och fysisk inaktivitet",
    ],
  },
  {
    Icon: MdGroups,
    iconClassName: "text-[#1e88e5]",
    name: "Robert D. Putnam",
    affiliation: "Författare till Bowling Alone",
    headline: "Kända grannar bygger starkare samhällen",
    points: [
      "Högre tillit mellan människor",
      "Mer samarbete i vardagen",
      "Starkare lokalsamhällen och bättre demokratiskt deltagande",
    ],
  },
  {
    Icon: MdShield,
    iconClassName: "text-grannsam-green",
    name: "Robert J. Sampson",
    affiliation: "Harvard University",
    headline: "Grannar som håller koll skapar tryggare områden",
    points: [
      "Områden där grannar känner och pratar med varandra",
      "Lägre brottslighet och tryggare gator",
      "Mer informell social kontroll i kvarteret",
    ],
  },
];

function MemberAvatar({ name, photo }: { name: string; photo?: string }) {
  if (photo) {
    return (
      <div className="relative h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>
    );
  }

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div
      className="flex h-24 w-24 items-center justify-center rounded-full bg-grannsam-green-muted text-xl font-semibold text-grannsam-green sm:h-28 sm:w-28 sm:text-2xl"
      aria-hidden
    >
      {initials}
    </div>
  );
}

function ResearchCard({
  Icon,
  iconClassName,
  name,
  affiliation,
  headline,
  points,
}: ResearchCard) {
  return (
    <article className="relative flex h-full flex-col rounded-2xl bg-white px-6 pb-8 pt-14 shadow-[0_8px_30px_rgba(38,43,46,0.08)] sm:px-7 sm:pb-9 sm:pt-16">
      <div
        className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(38,43,46,0.1)] sm:-top-9 sm:h-[4.5rem] sm:w-[4.5rem]"
        aria-hidden
      >
        <Icon className={`h-10 w-10 sm:h-11 sm:w-11 ${iconClassName}`} />
      </div>

      <h3 className="text-center text-lg font-bold leading-snug text-foreground sm:text-xl">
        {headline}
      </h3>
      <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-foreground/85 sm:text-[0.95rem]">
        {points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-grannsam-green" aria-hidden />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <footer className="mt-6 border-t border-grannsam-border/40 pt-4 text-center text-xs text-grannsam-gray sm:text-sm">
        <p className="font-medium text-foreground/80">{name}</p>
        <p>{affiliation}</p>
      </footer>
    </article>
  );
}

export function AboutSection() {
  return (
    <>
      <section className="border-b border-grannsam-border/30 bg-[#f5f1e1]">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center md:px-10 md:py-20">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Om oss
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
            Bakom Grannsam finns ett team som är dedikerat till att bygga en app
            som moderniserar och effektiviserar grannskapet. Vår vision är ett
            levande grannskap där människor känner till sina grannar och har en
            trygg kanal till kommunikation och interaktion.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
            I ett grannskap där man kan be om hjälp, ställa upp för andra och
            hitta på aktiviteter tillsammans finns möjligheten att skapa
            relationer som kanske varar en hel livstid.
          </p>
        </div>
      </section>

      <section
        className="border-b border-grannsam-border/30 bg-white"
        aria-labelledby="founder-heading"
      >
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
          <header className="mx-auto max-w-3xl text-center">
            <h2
              id="founder-heading"
              className="text-2xl font-semibold text-foreground sm:text-3xl"
            >
              Ord från VD
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
              Idén bakom Grannsam kommer från en verklig händelse i Stockholm
              2015.
            </p>
          </header>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-14">
            <div className="mx-auto flex flex-col items-center text-center lg:sticky lg:top-28 lg:mx-0">
              <div className="relative h-40 w-40 overflow-hidden rounded-full sm:h-48 sm:w-48">
                <Image
                  src="/images/team/reibin-amin.png"
                  alt="Reibin Amin, VD och grundare av Grannsam"
                  fill
                  sizes="(max-width: 1024px) 160px, 192px"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-5 text-lg font-bold text-foreground">
                Reibin Amin
              </p>
              <p className="text-base text-grannsam-green">VD & grundare</p>
            </div>

            <div className="space-y-8 text-base leading-relaxed text-foreground/85 sm:text-lg">
              <div>
                <h3 className="text-lg font-bold text-foreground sm:text-xl">
                  Ny i grannskapet
                </h3>
                <p className="mt-3">
                  I början av året flyttade jag in i en nybyggd Brf. Eftersom
                  grannskapet var nytt bestämde jag mig för att hälsa på och
                  introducera mig för grannar jag stötte på i vardagen.
                </p>
                <p className="mt-3">
                  Under några veckor testade jag detta trevliga, men också något
                  obekväma, koncept. Efter en väldigt kort stund hade jag
                  plötsligt blivit &ldquo;tjenis&rdquo; med många personer i
                  grannskapet. Man visste vad varandra hette, var man bodde och
                  vad man sysslade med. Det gav mig en känsla av trygghet i min
                  närhet och en värme gentemot mina grannar.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground sm:text-xl">
                  Skruvmejseln
                </h3>
                <p className="mt-3">
                  När jag en onsdag behövde en skruvmejsel för att skruva upp
                  mitt matbord plingade jag på hos Karin. Hon lånade mig
                  mejseln och jag var räddad. På lördagen skulle jag
                  återlämna den. Jag gick över gården, in i trapphuset och
                  plingade på hos Karin. Jag fick inget svar och bestämde mig
                  för att gå hem — men så fort jag tog ett steg hörde jag ett
                  rop på hjälp inifrån lägenheten.
                </p>
                <p className="mt-3">
                  Samtidigt sprang fotbollspappan Peter ner för trappen. Jag
                  stoppade honom och berättade vad jag visste: att Karin tog
                  hand om sin äldre man som satt i rullstol, och att jag nyss
                  hört ett rop på hjälp inifrån lägenheten.
                </p>
              </div>

              <aside className="rounded-2xl border border-grannsam-green/20 bg-grannsam-green-muted px-5 py-5 sm:px-6 sm:py-6">
                <p>
                  Peter och jag sprang ut på gården och tittade in i fönstret.
                  Där låg Karins man på golvet och hade en hjärtattack. Peter
                  ringde omedelbart 112. Jag testade att öppna ytterdörren — som
                  av ett mirakel var den öppen. Vi sprang in, tog hand om den
                  äldre mannen och inom kort kom ambulanspersonalen och förde
                  honom till sjukhus.
                </p>
                <p className="mt-3 font-medium text-foreground">
                  Han klarade sig.
                </p>
              </aside>

              <div>
                <h3 className="text-lg font-bold text-foreground sm:text-xl">
                  Idén som blev Grannsam
                </h3>
                <p className="mt-3">
                  Karin kom förbi med blommor veckan därpå och var otroligt
                  tacksam. Men jag var också tacksam för att jag av en slump
                  kunde finnas där för en granne i en stund av nöd.
                </p>
                <blockquote className="mt-6 border-l-4 border-grannsam-green pl-5 text-lg font-medium italic leading-relaxed text-foreground sm:text-xl">
                  Det slog mig verkligen hur mycket det kan betyda att känna en
                  granne.
                </blockquote>
                <p className="mt-6">
                  Denna upplevelse gav mig en idé som, efter mycket eftertanke
                  och arbete, har landat i appen Grannsam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-grannsam-border/30 bg-[#f5f1e1]"
        aria-labelledby="why-neighbors-heading"
      >
        <div className="mx-auto max-w-3xl px-6 py-14 text-center md:px-10 md:py-20">
          <h2
            id="why-neighbors-heading"
            className="text-2xl font-semibold text-foreground sm:text-3xl"
          >
            Varför grannskap betyder något
          </h2>

          <figure className="mt-10">
            <blockquote className="text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
              &ldquo;Relationer och kontakt är en grundläggande del av att vara
              en människa. Det är till och med mer grundläggande än mat och
              skydd, och är den primära motivationen bakom ens
              beteenden.&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-sm text-grannsam-gray sm:text-base">
              Dr Matthew Lieberman, UCLA Cognitive Neuroscience Lab
            </figcaption>
          </figure>

          <p className="mt-10 text-left text-base leading-relaxed text-foreground/85 sm:text-lg">
            Ditt grannskap är ett kollektiv av människor som bor nära
            varandra. Forskning visar att starka sociala relationer är en av de
            viktigaste faktorerna för människors välmående — människor med
            starka sociala nätverk lever längre, känner större trygghet och
            upplever högre livskvalitet.
          </p>
          <p className="mt-4 text-left text-base leading-relaxed text-foreground/85 sm:text-lg">
            I grannskap där människor känner varandra ökar tilliten,
            brottsligheten minskar och fler hjälper varandra i vardagen.
            Grannsam vill göra det enklare att bygga just den typen av lokala
            relationer.
          </p>
        </div>
      </section>

      <section
        className="border-b border-grannsam-border/30 bg-white"
        aria-labelledby="research-heading"
      >
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
          <header className="mx-auto max-w-3xl text-center">
            <h2
              id="research-heading"
              className="text-2xl font-semibold text-foreground sm:text-3xl"
            >
              Forskning som stödjer det
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
              Starka lokala relationer är inte bara trevliga — de har mätbart
              betydelse för hälsa, trygghet och samhälle.
            </p>
          </header>

          <div className="mt-12 grid auto-rows-fr gap-16 sm:mt-14 md:grid-cols-3 md:gap-6 lg:gap-8">
            {research.map((item) => (
              <ResearchCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f1e1]" aria-labelledby="team-heading">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
          <h2
            id="team-heading"
            className="text-center text-2xl font-semibold text-foreground sm:text-3xl"
          >
            Vårt team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-foreground/85">
            Ett litet team med stor passion för grannskap, teknik och
            bostadsrättsföreningar.
          </p>

          <ul className="mt-12 grid gap-14 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
            {team.map((member) => (
              <li
                key={member.name}
                className="flex flex-col items-center text-center"
              >
                <MemberAvatar name={member.name} photo={member.photo} />
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-base text-grannsam-green">
                  {member.role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
