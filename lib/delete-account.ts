export type DeleteAccountSection = {
  title: string;
  paragraphs: string[];
  steps?: string[];
};

export const deleteAccountIntro =
  "Här beskriver vi hur du begär radering av ditt Grannsam-konto. Begäran skickas till Grannsam, som hanterar raderingen. Sidan kompletterar vår information om datasäkerhet — vid skillnad mot ert kundavtal gäller alltid det som står i avtalet.";

export const deleteAccountSections: DeleteAccountSection[] = [
  {
    title: "Så begär du radering i appen",
    paragraphs: [
      "I Grannsam-appen skickar du en begäran om att kontot ska raderas. Själva raderingen genomförs av Grannsam efter att begäran tagits emot.",
    ],
    steps: [
      "Öppna Grannsam och gå till ditt konto via profilbilden.",
      "Välj Kontoinställningar.",
      "Under Radera Konto, bekräfta att du förstår att data och åtkomst till grannskapet raderas.",
      "Tryck på Radera Konto. En begäran skickas till Grannsam.",
    ],
  },
  {
    title: "Om du inte kommer åt appen",
    paragraphs: [
      "Skicka en begäran till info@grannsam.nu från den e-postadress som är kopplad till kontot. Ange ditt namn, förening och att du vill radera ditt Grannsam-konto. Vi återkommer för att bekräfta din identitet innan radering genomförs.",
    ],
  },
  {
    title: "Vad som händer efter begäran",
    paragraphs: [
      "När du skickar begäran i appen får du en bekräftelse att den har skickats. Kontot raderas inte direkt i det ögonblicket.",
      "Grannsam hanterar begäran och raderar kontot samt tillhörande personuppgifter. Efter radering kan du inte längre logga in med det kontot, och åtkomsten till ditt grannskap tas bort.",
    ],
  },
  {
    title: "Vad som raderas",
    paragraphs: [
      "När raderingen är genomförd tas personuppgifter som är knutna till ditt konto bort, till exempel konto- och profiluppgifter samt inloggningskopplingar till kontot.",
      "Radering av ditt konto påverkar inte automatiskt föreningens licens eller andra medlemmars konton.",
    ],
  },
  {
    title: "Uppdateringar",
    paragraphs: [
      "Vi kan uppdatera denna sida när vår tjänst eller våra rutiner förändras. Vid väsentliga ändringar informerar vi kunder och boende på lämpligt sätt utöver att publicera uppdaterad information här.",
    ],
  },
];
