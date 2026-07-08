export type AppGraphicVariant =
  | "hero-phone"
  | "community"
  | "ticket"
  | "events"
  | "profile"
  | "forum"
  | "documents"
  | "board";

export const appenIntro = {
  eyebrow: "Produkt",
  lead:
    "En genomgång av funktionerna i Grannsam – vad grannar och styrelsen kan göra i appen.",
};

// Ny hjälptyp för att hantera punktlistor med både rubrik/box och beskrivning
export type FeatureBullet = {
  title: string;
  description: string;
};

export type AppFeature = {
  id: string;
  title: string;
  description: string;
  bullets?: FeatureBullet[]; // Uppdaterad från string[] till FeatureBullet[]
  callout?: string;
  graphic: AppGraphicVariant;
};

export type AppFeatureGroup = {
  id: string;
  title: string;
  description: string;
  features: AppFeature[];
};

export const appFeatureGroups: AppFeatureGroup[] = [
  {
    id: "grannar",
    title: "För grannar",
    description: "Verktyg för att hjälpas åt, mötas och hålla kontakten i grannskapet.",
    features: [
      {
        id: "community",
        title: "Ett grannskap som respekterar integritet",
        graphic: "community",
        description:
          "Kommunikation mellan grannarna sker via skapade händelser eller i grannforumet, inte via privata meddelanden.",
      },
      {
        id: "events",
        title: "Skapa en händelse",
        graphic: "events",
        description:
          "Publicera en händelse på hemskärmen så att grannar kan upptäcka den, delta eller svara. Välj vilken typ av händelse du vill skapa.",
        bullets: [
          {
            title: "🏃 Aktivitet",
            description: "Ta en promenad, spela pingis eller grilla tillsammans.",
          },
          {
            title: "🙋 Be om hjälp",
            description: "Låna ett verktyg, få hjälp att bära något eller passa ett husdjur.",
          },
          {
            title: "🎁 Ge bort en gåva",
            description: "Skänk kläder, möbler eller porslin du inte behöver.",
          },
        ],
      },
      {
        id: "profile",
        title: "Personlig profil",
        graphic: "profile",
        description:
          "Öppen profil med bild, intressen och ditt engagemang i grannskapet.",
      },
      {
        id: "forum",
        title: "Grannforum",
        graphic: "forum",
        description:
          "Dela nyheter, tips, idéer och annat som kan vara värdefullt för grannskapet. För att ge alla utrymme kan varje granne skapa upp till två inlägg per månad.",
      },
    ],
  },
  {
    id: "styrelse",
    title: "För styrelsen",
    description: "Samla föreningens ärenden, informationsutskick och dokument på ett och samma ställe.",
    features: [
      {
        id: "board",
        title: "Anslagstavla",
        graphic: "board",
        description:
          "Nå ut till alla medlemmar direkt i mobilen. Publicera viktiga meddelanden på hemskärmen och skicka pushnotiser så att information om exempelvis garagestädning, servicearbeten och andra händelser inte glöms bort.",
      },
      {
        id: "ticket",
        title: "Rapportera ett ärende",
        graphic: "ticket",
        description:
          "Boende kan rapportera problem eller ställa en fråga med bild och text. Styrelsen får in ärendet, tilldelar ansvar och följer upp lösningen i ett chattrum. ",
      },
      {
        id: "documents",
        title: "Dokument",
        graphic: "documents",
        description:
          "Ladda upp PDF- eller bildfiler med tillhörande information för grannskapet.",
      },
    ],
  },
];