// Google Play links here (Data safety → Account deletion), so this must match what the app does.
// It describes the flow shipped in grannsam-app KM-461: "Radera konto" deletes immediately, and the
// profile is anonymised to "Borttagen användare" so neighbours keep their conversations.
// Update this file whenever that flow changes.

export type DeleteAccountSection = {
  title: string;
  paragraphs: string[];
  /** Numbered: things done in order. */
  steps?: string[];
  /** Bulleted: things that aren't a sequence. */
  items?: string[];
};

export const deleteAccountIntro =
  "Här beskriver vi hur du raderar ditt Grannsam-konto och vad som händer med dina personuppgifter. Sidan kompletterar vår information om datasäkerhet — vid skillnad mot ert kundavtal gäller alltid det som står i avtalet.";

export const deleteAccountSections: DeleteAccountSection[] = [
  {
    title: "Så raderar du ditt konto i appen",
    paragraphs: [
      "Kontot raderas direkt när du bekräftar, och du loggas ut.",
    ],
    steps: [
      "Öppna Grannsam och tryck på din profilbild uppe till höger.",
      "Välj Kontoinställningar.",
      "Under Radera konto, bocka i att du förstår att kontot raderas permanent och att du förlorar åtkomsten till ditt grannskap.",
      "Tryck på Radera konto och bekräfta.",
    ],
  },
  {
    title: "Om du är admin i föreningen",
    paragraphs: [
      "Är du föreningens enda admin behöver du först göra en annan medlem till admin. Annars finns det ingen som kan släppa in nya grannar, och appen ber dig lämna över innan kontot kan raderas.",
    ],
  },
  {
    title: "Om du inte kommer åt appen",
    paragraphs: [
      "Skicka ett mejl till info@grannsam.nu från den e-postadress som är kopplad till kontot, med ämnet \"Radera mitt konto\". Ange ditt namn och vilken förening du tillhör. Vi återkommer för att bekräfta din identitet innan radering genomförs.",
      "Vi raderar kontot inom 30 dagar och bekräftar via e-post när det är gjort. Raderingen blir densamma som i appen.",
    ],
  },
  {
    title: "Vad som raderas",
    paragraphs: [],
    items: [
      "Ditt namn, din e-postadress och din adress",
      "Ditt personnummer (vi sparar det aldrig i klartext)",
      "Din profilbild och din profiltext",
      "Din inloggning, så att kontot inte längre går att använda",
      "Dina anmälningar till aktiviteter, dina gillningar och dina notiser",
    ],
  },
  {
    title: "Vad som finns kvar",
    paragraphs: [
      "Inlägg, aktiviteter, kommentarer och meddelanden du har skrivit ligger kvar för dina grannar, så att deras svar och samtal inte försvinner. De visas som skrivna av \"Borttagen användare\" och går inte att koppla till dig.",
      "Radering av ditt konto påverkar inte automatiskt föreningens licens eller andra medlemmars konton.",
    ],
  },
  {
    title: "Går det att ångra?",
    paragraphs: [
      "Nej, raderingen går inte att ångra. Du kan däremot när som helst skapa ett nytt konto med samma e-postadress och BankID.",
    ],
  },
  {
    title: "Uppdateringar",
    paragraphs: [
      "Vi kan uppdatera denna sida när vår tjänst eller våra rutiner förändras. Vid väsentliga ändringar informerar vi kunder och boende på lämpligt sätt utöver att publicera uppdaterad information här.",
    ],
  },
];
