import Image from "next/image";

type EngagementCardProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

function EngagementCard({ src, alt, width, height }: EngagementCardProps) {
  return (
    <div className="overflow-hidden rounded-[3%] shadow-[0_6px_18px_rgba(38,43,46,0.18)]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        sizes="(max-width: 1024px) 100vw, 480px"
        className="block h-auto w-full"
      />
    </div>
  );
}

type FeatureRow = {
  title: string;
  description: string;
  card: EngagementCardProps;
  cardFirst: boolean;
};

const rows: FeatureRow[] = [
  {
    title: "Vi hjälper varandra",
    description:
      "Behöver du låna ett verktyg, få hjälp med ett lyft eller någon som vattnar blommorna? Med Grannsam är hjälpen nära – och det känns naturligt att både fråga och hjälpa.",
    cardFirst: true,
    card: {
      src: "/images/engagement/hjalp-card.png",
      alt: "Carl vill ha hjälp med omplantering av tomater",
      width: 1136,
      height: 896,
    },
  },
  {
    title: "Vi gör saker tillsammans",
    description:
      "Vill du ha sällskap på löpturen, bjuda in till fika eller ordna en gårdsloppis? Skapa en aktivitet och låt grannarna anmäla sig direkt i appen.",
    cardFirst: false,
    card: {
      src: "/images/engagement/aktivitet-card.png",
      alt: "Alex föreslår en aktivitet: 3 km Lötsjörundan och hem",
      width: 1136,
      height: 896,
    },
  },
  {
    title: "Vi tänker på varandra",
    description:
      "Saker som inte längre behövs hos dig kan betyda mycket för någon annan. Dela med dig till kvarteret, minska svinnet och sprid glädje – med ett enkelt klick.",
    cardFirst: true,
    card: {
      src: "/images/engagement/gava-card.png",
      alt: "Lisa vill ge en gåva: äldre kurslitteratur",
      width: 1136,
      height: 896,
    },
  },
];

function FeatureText({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-center px-2 sm:px-4 lg:px-8">
      <h3 className="text-xl font-bold leading-snug text-foreground sm:text-2xl md:text-[1.65rem]">
        {title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export function EngagementSection() {
  return (
    <section
      id="engagemang"
      className="scroll-mt-20 border-b border-grannsam-border/30 bg-white"
      aria-labelledby="engagemang-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="engagemang-heading"
            className="text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl"
          >
            Ökat engagemang i grannskapet
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
            Att ta första steget till en granne kan kännas ovant. I appen kan man
            be om hjälp, skapa aktiviteter och dela med sig i en trygg kontext.
            När initiativet redan är taget blir det enklare att mötas i
            verkligheten.
          </p>
        </header>

        <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20 md:mt-20 md:space-y-24">
          {rows.map((row) => (
            <div
              key={row.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
            >
              {row.cardFirst ? (
                <>
                  <EngagementCard {...row.card} />
                  <FeatureText
                    title={row.title}
                    description={row.description}
                  />
                </>
              ) : (
                <>
                  <FeatureText
                    title={row.title}
                    description={row.description}
                  />
                  <EngagementCard {...row.card} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
