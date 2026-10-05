// Integritetspolicy (/integritet). KM-462.
//
// Every factual claim here was checked against the codebase and the production database on
// 2026-09-22 — what is collected, where it is stored, who can see it, and which providers are
// involved. Keep it that way: if a data flow changes, change this page in the same PR.
//
// [fylls i: …] marks a decision for a human (company details, retention, legal assessments).
// The text still needs review by counsel before publishing.

import { TODO, type LegalDocument } from "@/lib/legal";
import { CONTACT_EMAIL, DELETE_ACCOUNT_PATH, SITE_LEGAL_NAME } from "@/lib/site";

export const privacyPolicy: LegalDocument = {
  title: "Integritetspolicy",
  updated: "2026-09-22",
  intro:
    `Den här policyn beskriver hur ${SITE_LEGAL_NAME} behandlar personuppgifter i appen Grannsam och på grannsam.nu: vilka uppgifter vi samlar in, varför, vilka som kan se dem och vilka rättigheter du har.`,
  blocks: [
    {
      title: "Vem ansvarar för dina personuppgifter",
      paragraphs: [
        `${SITE_LEGAL_NAME}, organisationsnummer ${TODO("organisationsnummer")}, ${TODO("postadress")}, är personuppgiftsansvarig för behandlingen som beskrivs här. Du når oss på ${CONTACT_EMAIL}.`,
        `Din bostadsrättsförening bestämmer vilka som släpps in i grannskapet och modererar innehållet där. ${TODO("juridisk bedömning: om föreningen är gemensamt personuppgiftsansvarig för innehållet i sitt grannskap, eller om Grannsam är personuppgiftsbiträde åt föreningen — och hur ansvaret fördelas i kundavtalet")}`,
      ],
    },
    {
      title: "Uppgifter vi behandlar",
      items: [
        "Namn — hämtas från BankID när du skapar kontot.",
        "Personnummer — används för att bekräfta din identitet och för att se att du inte redan har ett konto. Vi sparar det aldrig i klartext, utan bara som en nyckelskyddad kryptografisk hash som inte går att räkna tillbaka till ett personnummer.",
        "E-postadress — för inloggning, aviseringar och kontakt.",
        "Adress — om du anger den, så att styrelsen kan se att du bor i föreningen.",
        "Profilbild och profiltext — om du lägger upp dem.",
        "Innehåll du skapar — inlägg, kommentarer, aktiviteter, meddelanden, ärenden och dokument, inklusive bilder.",
        "Medlemskapsuppgifter — vilken förening du tillhör, om styrelsen godkänt dig och om du stängts av.",
        "Teknisk information — en pushtoken för att kunna skicka notiser till din enhet, och kraschrapporter när något går fel.",
      ],
      paragraphs: [
        "Vi samlar inte in din position, och vi säljer aldrig personuppgifter vidare.",
        "Vi mäter också hur appen används — vilka skärmar som öppnas och hur ofta funktioner används — men utan att koppla det till dig. Statistiken innehåller inget konto-id, ingen e-postadress, ingen uppgift om vilken förening du tillhör och inga id:n för det du skapat eller öppnat. Vi ser alltså att en funktion användes, inte vem som använde den, och vi kan inte i efterhand bygga en lista över vad du har gjort i appen.",
      ],
    },
    {
      title: "Varför vi behandlar uppgifterna",
      table: {
        headers: ["Ändamål", "Uppgifter", "Rättslig grund"],
        rows: [
          ["Skapa och driva ditt konto", "namn, e-post, personnummerhash, förening", "Fullgöra avtalet med dig (art. 6.1 b)"],
          ["Bekräfta din identitet med BankID", "namn, personnummerhash", "Fullgöra avtalet (art. 6.1 b)"],
          ["Visa ditt innehåll för dina grannar", "profil och innehåll du skapar", "Fullgöra avtalet (art. 6.1 b)"],
          ["Skicka notiser om det som händer i grannskapet", "pushtoken, notisinställningar", "Fullgöra avtalet (art. 6.1 b)"],
          ["Trygghet, moderering och hantering av ärenden", "innehåll, ärenden, avstängningar", "Berättigat intresse (art. 6.1 f) — att grannskapet är tryggt"],
          ["Felsöka appen när något går fel", "kraschrapporter", "Berättigat intresse (art. 6.1 f) — att appen fungerar"],
          ["Svara på support- och GDPR-förfrågningar", "e-post och det du skriver till oss", "Fullgöra avtalet och rättslig förpliktelse (art. 6.1 b och c)"],
        ],
      },
      paragraphs: [
        "Användningsstatistiken finns inte med i tabellen. Den innehåller inga uppgifter som kan knytas till dig, varken direkt eller indirekt, och är därför inte en behandling av personuppgifter.",
        TODO("juridisk bedömning: gör en intresseavvägning för de två ändamål som vilar på art. 6.1 f (trygghet och moderering, samt kraschrapporter) och bekräfta att notiser ryms i avtalet enligt art. 6.1 b"),
      ],
    },
    {
      title: "BankID och ditt personnummer",
      paragraphs: [
        "Grannsam bygger på att du vet vem dina grannar är. Därför verifieras du med BankID innan du får tillgång till föreningens grannskap.",
        "Själva BankID-inloggningen sker hos vår leverantör Criipto (Idura), som förmedlar svaret från BankID till oss. Vi tar emot ditt namn och ditt personnummer.",
        "Personnumret omvandlas direkt till en kryptografisk hash med en hemlig nyckel som bara finns på vår server. Det är hashen vi sparar — aldrig personnumret. Den används enbart för att se om du redan har ett konto, så att samma person inte kan registrera sig två gånger.",
        "Svensk rätt tillåter behandling av personnummer när det är klart motiverat med hänsyn till ändamålet. Vår bedömning är att säker identifiering av grannar i ett slutet bostadsområde uppfyller det kravet.",
      ],
    },
    {
      title: "Vem kan se dina uppgifter",
      items: [
        "Grannar i din förening ser ditt namn, din profilbild, din profiltext och det innehåll du publicerar i grannskapet.",
        "Styrelsen (administratörer i din förening) ser dessutom din e-postadress och adress, för att kunna godkänna dig som medlem, samt ärenden du anmäler.",
        "Grannsams personal har teknisk åtkomst för drift och support, och använder den bara när det behövs.",
        "Ingenting i appen är publikt. Varje förening är ett eget slutet område, och bilder och dokument ligger i privat lagring som bara nås via tillfälliga, tidsbegränsade länkar.",
      ],
    },
    {
      title: "Leverantörer vi anlitar",
      paragraphs: [
        "För att kunna driva tjänsten anlitar vi ett antal leverantörer som behandlar personuppgifter för vår räkning:",
      ],
      table: {
        headers: ["Leverantör", "Vad de gör", "Var uppgifterna behandlas"],
        rows: [
          ["Supabase (drift på AWS)", "databas, filer och inloggning", "EU (Irland)"],
          ["Criipto / Idura", "BankID-verifiering", "EU"],
          ["Resend", "utgående e-post", TODO("region — bekräfta med Resend")],
          ["Expo (EAS)", "leverans av pushnotiser och appuppdateringar", "USA"],
          ["Sentry", "kraschrapporter", "EU (Tyskland)"],
          ["Aptabase", "anonym användningsstatistik", "EU"],
          ["Vercel", "drift av grannsam.nu", TODO("region — bekräfta i Vercel-projektet")],
          ["Apple och Google", "distribution av appen och transport av pushnotiser", "USA"],
        ],
      },
    },
    {
      title: "Överföring utanför EU och EES",
      paragraphs: [
        "Merparten av uppgifterna stannar inom EU. Pushnotiser och appuppdateringar går via Expo, och appen distribueras av Apple och Google, vilket innebär överföring till USA.",
        TODO("juridisk bedömning: ange överföringsgrund per leverantör utanför EU/EES — adekvat skyddsnivå (EU–US Data Privacy Framework) eller standardavtalsklausuler, och hänvisa till var kopior kan begäras"),
      ],
    },
    {
      title: "Hur länge vi sparar uppgifterna",
      items: [
        "Kontouppgifter sparas så länge du har ett konto.",
        "När du raderar kontot tas dina personuppgifter bort direkt: namn, e-post, adress, personnummerhash, profilbild och inloggning. Inlägg, aktiviteter och meddelanden du skrivit ligger kvar för dina grannar men visas som ”Borttagen användare” och går inte att koppla till dig.",
        "Säkerhetskopior: databasen kopieras dagligen och kopiorna sparas i sju dagar. Det betyder att uppgifter du raderat kan finnas kvar i en säkerhetskopia i upp till en vecka innan den skrivs över. Kopiorna används bara för att återställa tjänsten efter ett driftfel, aldrig för att läsa upp enskilda uppgifter.",
        `E-post till supporten: ${TODO("hur länge supportmejl sparas i info@-brevlådan")}`,
        `Kraschrapporter: ${TODO("lagringstid hos Sentry — står i projektets inställningar")}`,
        "Användningsstatistik: sparas hos Aptabase utan koppling till dig, och kan därför inte raderas per person — det finns inget att söka på.",
      ],
    },
    {
      title: "Dina rättigheter",
      paragraphs: [
        "Du har rätt att begära ett utdrag över de personuppgifter vi behandlar om dig, att få felaktiga uppgifter rättade, att få uppgifter raderade, att invända mot eller begära begränsning av viss behandling, och att få ut uppgifter du lämnat i ett maskinläsbart format (dataportabilitet).",
        `Du begär utdrag direkt i appen under Kontoinställningar, eller genom att mejla ${CONTACT_EMAIL}. Vi svarar inom en månad.`,
        "Om du tycker att vi behandlar dina personuppgifter felaktigt har du rätt att klaga till Integritetsskyddsmyndigheten (IMY), imy.se.",
      ],
    },
    {
      title: "Radera ditt konto",
      paragraphs: [
        `Du kan radera ditt konto direkt i appen, eller be oss göra det. Hur det går till, och exakt vad som raderas, står på sidan Radera konto (${DELETE_ACCOUNT_PATH}).`,
      ],
    },
    {
      title: "Kakor och statistik på grannsam.nu",
      paragraphs: [
        "Vi använder inga kakor på grannsam.nu — varken för marknadsföring eller för statistik. Besök mäts med Vercel Analytics och Aptabase, och ingen av dem sätter kakor eller sparar något i din webbläsare. Därför finns här ingen ruta om kakor att klicka bort.",
        "Det vi mäter är vilka sidor som besöks och vilka knappar som används, till exempel att någon öppnade en fråga i FAQ:n eller skickade kontaktformuläret. Mätningarna innehåller inget om vem du är.",
        "I appen lagrar statistikverktyget ingenting på din telefon. Varje mätning märks med ett tillfälligt sessionsnummer som skapas i appens minne och försvinner när appen stängs eller efter en timmes inaktivitet, och inga kakor skickas med. Därför behöver vi inte ditt samtycke för att mäta, och det finns inget att stänga av som skulle följa med till nästa gång du öppnar appen.",
      ],
    },
    {
      title: "Ändringar i policyn",
      paragraphs: [
        "Vi kan uppdatera den här policyn när tjänsten eller våra rutiner förändras. Vid väsentliga ändringar informerar vi boende och kunder på lämpligt sätt, utöver att publicera den uppdaterade texten här.",
      ],
    },
  ],
};
