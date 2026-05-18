import {
  MdCalendarMonth,
  MdCardGiftcard,
  MdPanTool,
  MdSearch,
} from "react-icons/md";
import type { IconType } from "react-icons";

type PostCardProps = {
  headerBg: string;
  name: string;
  headerLabel: string;
  Icon: IconType;
  imageAlt: string;
  body: string;
  date: string;
};

function PostCard({
  headerBg,
  name,
  headerLabel,
  Icon,
  imageAlt,
  body,
  date,
}: PostCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(38,43,46,0.1)]">
      <header
        className={`flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 ${headerBg}`}
      >
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/80 text-xs font-semibold text-foreground shadow-sm sm:h-10 sm:w-10 sm:text-sm"
          aria-hidden
        >
          {name.charAt(0)}
        </div>
        <p className="min-w-0 flex-1 text-sm font-medium text-foreground sm:text-[0.95rem]">
          <span className="font-semibold">{name}</span> {headerLabel}
        </p>
        <Icon className="h-5 w-5 shrink-0 text-foreground/70" aria-hidden />
      </header>

      <div
        className="relative flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br from-[#e8e4dc] to-[#d4cfc4]"
        role="img"
        aria-label={imageAlt}
      >
        <span className="text-xs font-medium uppercase tracking-wider text-foreground/35 sm:text-sm">
          Illustration
        </span>
      </div>

      <div className="px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-sm leading-snug text-foreground sm:text-base">
          {body}
        </p>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-grannsam-gray sm:text-sm">
          <MdCalendarMonth className="h-4 w-4 shrink-0" aria-hidden />
          {date}
        </p>
      </div>
    </article>
  );
}

type FeatureRow = {
  title: string;
  description: string;
  card: PostCardProps;
  cardFirst: boolean;
};

const rows: FeatureRow[] = [
  {
    title: "Vi hjälper varandra",
    description:
      "Behöver du låna ett verktyg, få hjälp med ett lyft eller någon som vattnar blommorna? Med Grannsam är hjälpen nära – och det känns naturligt att både fråga och hjälpa.",
    cardFirst: true,
    card: {
      headerBg: "bg-[#f2d06b]",
      name: "Karin",
      headerLabel: "vill ha hjälp:",
      Icon: MdPanTool,
      imageAlt: "Grannar som hjälps åt i trädgården",
      body: "Jag behöver 2 gula lökar! 🧅😘",
      date: "Mån 2 Februari, 19.00",
    },
  },
  {
    title: "Vi gör saker tillsammans",
    description:
      "Vill du ha sällskap på löpturen, bjuda in till fika eller ordna en gårdsloppis? Skapa en aktivitet och låt grannarna anmäla sig direkt i appen.",
    cardFirst: false,
    card: {
      headerBg: "bg-[#f9c8c8]",
      name: "Ari",
      headerLabel: "föreslår en aktivitet:",
      Icon: MdSearch,
      imageAlt: "Grannar som joggar tillsammans i parken",
      body: "3 km Lötsjörundan och hem",
      date: "Mån 2 Februari, 19.00",
    },
  },
  {
    title: "Vi tänker på varandra",
    description:
      "Saker som inte längre behövs hos dig kan betyda mycket för någon annan. Dela med dig till kvarteret, minska svinnet och sprid glädje – med ett enkelt klick.",
    cardFirst: true,
    card: {
      headerBg: "bg-[#bce9f5]",
      name: "Carolina",
      headerLabel: "vill ge en gåva:",
      Icon: MdCardGiftcard,
      imageAlt: "Kartong med saker att dela med grannarna",
      body: "Har plockat massa goda äpplen.. 🍎🍏",
      date: "Mån 2 Februari, 19.00",
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
                  <PostCard {...row.card} />
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
                  <PostCard {...row.card} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
