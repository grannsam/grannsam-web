export type SecuritySection = {
  title: string;
  paragraphs: string[];
};

export const dataSecurityIntro =
  "Grannsam hanterar information om boende och föreningar. Här beskriver vi hur vi tänker kring trygghet, integritet och ansvar. Sidan kompletterar vår app och våra avtal med kunder — vid skillnad gäller alltid det som står i ert avtal.";

export const dataSecuritySections: SecuritySection[] = [
  {
    title: "Verifierade grannar med BankID",
    paragraphs: [
      "Grannsam bygger på att grannar i en förening ska kunna lita på vem de interagerar med. Därför verifieras användare med BankID innan de får tillgång till ert grannskap i appen.",
      "Det minskar risken för fejkprofiler och obehöriga personer jämfört med öppna gruppchattar eller sociala medier.",
    ],
  },
  {
    title: "Ett slutet grannskap",
    paragraphs: [
      "Varje förening har sitt eget avgränsade område i Grannsam. Innehåll och konversationer är lokala för er förening — inte publikt och inte blandat med andra bostadsområden.",
      "Grannsam är inte byggt som ett reklam- eller algoritmdrivet flöde. Syftet är trygg kommunikation mellan verifierade grannar och styrelse.",
    ],
  },
  {
    title: "Personuppgifter i appen",
    paragraphs: [
      "I appen behandlas uppgifter som behövs för att ni ska kunna använda tjänsten — till exempel kontoinformation, innehåll ni skapar och kommunikation inom föreningen.",
      "Styrelsen och boende ser information utifrån sina roller i appen. Exakt omfattning av lagring och behandling regleras i våra kundavtal och tillämplig dataskyddslagstiftning.",
    ],
  },
  {
    title: "Webbplats och kontaktformulär",
    paragraphs: [
      "När du skickar ett meddelande via kontaktformuläret på grannsam.nu behandlar vi de uppgifter du lämnar för att kunna svara på din förfrågan.",
      "Meddelanden skickas via vår e-postleverantör till Grannsam AB. Uppgifter används inte för marknadsföring utanför det som krävs för att hantera din kontakt.",
    ],
  },
  {
    title: "Dina rättigheter",
    paragraphs: [
      "Enligt GDPR har du rätt att begära information om vilka personuppgifter vi behandlar om dig, få felaktiga uppgifter rättade och i vissa fall begära radering eller begränsning av behandling.",
      "För frågor om integritet eller dataskydd, kontakta oss på info@grannsam.nu. Vi hjälper dig vidare utifrån om du är boende, styrelsemedlem eller besökare på webbplatsen.",
    ],
  },
  {
    title: "Uppdateringar",
    paragraphs: [
      "Vi kan uppdatera denna sida när vår tjänst eller våra rutiner förändras. Vid väsentliga ändringar informerar vi kunder och boende på lämpligt sätt utöver att publicera uppdaterad information här.",
    ],
  },
];
