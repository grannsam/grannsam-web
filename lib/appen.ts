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
    "En genomgång av funktionerna i Grannsam — vad grannar och styrelse kan göra i appen.",
};

export type AppFeature = {
  id: string;
  title: string;
  description: string;
  bullets?: string[];
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
        title: "Ett trivsamt grannskap",
        graphic: "community",
        description:
          "Inga privata meddelanden — kommunikation sker öppet via aktivitetschattar eller grannforumet, med fokus på verkliga möten.",
        callout:
          "Be om hjälp max en gång i veckan. Ett foruminlägg per månad.",
      },
      {
        id: "events",
        title: "Skapa en händelse",
        graphic: "events",
        description:
          "Publicera på hemskärmen, låt grannar delta och chatta i ett temporärt rum under aktiviteten.",
        bullets: ["Aktivitet", "Be om hjälp", "Ge bort en gåva"],
      },
      {
        id: "profile",
        title: "Profil & Kudos",
        graphic: "profile",
        description:
          "Öppen profil med bild, intressen och aktivitet — se vilka grannar som bidrar.",
      },
      {
        id: "forum",
        title: "Grannforum",
        graphic: "forum",
        description:
          "Dela det som är viktigt för grannskapet. Ett inlägg per månad bygger ett arkiv utan brus.",
      },
    ],
  },
  {
    id: "styrelse",
    title: "För styrelsen",
    description: "Hantera ärenden, information och dokument för hela föreningen.",
    features: [
      {
        id: "ticket",
        title: "Rapportera ett ärende",
        graphic: "ticket",
        description:
          "Boende rapporterar med bild och text. Styrelsen får en ticket, tilldelar ansvar och löser ärendet i ett chattrum.",
      },
      {
        id: "documents",
        title: "Dokument",
        graphic: "documents",
        description:
          "Ladda upp PDF- eller bildfiler med tillhörande information för grannskapet.",
      },
      {
        id: "board",
        title: "Anslagstavla",
        graphic: "board",
        description:
          "Fäst viktiga meddelanden på hemskärmen och skicka pushnotiser till medlemmar.",
      },
    ],
  },
];
