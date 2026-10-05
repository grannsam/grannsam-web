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
        `${SITE_LEGAL_NAME}, organisationsnummer 559160-2585, Ursviks Allé 47, ${TODO("postnummer och ort")}, är personuppgiftsansvarig för behandlingen som beskrivs här. Du når oss på ${CONTACT_EMAIL}.`,
        "Din bostadsrättsförening bestämmer vilka som släpps in i grannskapet och modererar innehållet där. Grannsam och föreningen ansvarar för olika saker. Grannsam är personuppgiftsansvarig för behandlingen i plattformen, alltså den vi själva bestämmer ändamål och medel för. Föreningen är personuppgiftsansvarig för det föreningen bestämmer över, till exempel medlemskapet och vilka boende som släpps in i föreningens grannskap. Vi är alltså inte gemensamt ansvariga för allt som sker i tjänsten.",
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
        "Användningsstatistik — men bara om du har sagt ja till det. Se nedan.",
      ],
      paragraphs: [
        "Vi samlar inte in din position, och vi säljer aldrig personuppgifter vidare.",
        "En kraschrapport innehåller teknisk information om vad som gick fel: vilken version av appen du har, vilken sorts enhet det är och var i koden felet uppstod. Den innehåller inte din IP-adress, och text som kan följa med i ett felmeddelande rensas från e-postadresser och inloggningsuppgifter redan i appen, innan rapporten skickas.",
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
          ["Förstå hur appen används, för att göra den bättre", "användningsstatistik kopplad till ditt konto", "Ditt samtycke (art. 6.1 a) — frivilligt, och du kan ta tillbaka det när som helst"],
          ["Svara på support- och GDPR-förfrågningar", "e-post och det du skriver till oss", "Fullgöra avtalet och rättslig förpliktelse (art. 6.1 b och c)"],
        ],
      },
      paragraphs: [
        TODO("juridisk bedömning: tabellens struktur är bekräftad, men två saker saknas. (1) En dokumenterad intresseavvägning för de två ändamål som vilar på art. 6.1 f — trygghet och moderering, samt kraschrapporter. (2) Notiser står här under avtalet (art. 6.1 b); bekräfta att det gäller alla notiser, eller dela upp dem i nödvändiga och frivilliga och ange samtycke för de frivilliga"),
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
          ["Resend", "utgående e-post", "EU/EES"],
          ["Expo (EAS)", "leverans av pushnotiser och appuppdateringar", "USA"],
          ["Sentry", "kraschrapporter", "EU (Tyskland)"],
          ["Aptabase", "användningsstatistik (om du samtyckt)", "EU"],
          ["Vercel", "drift av grannsam.nu", "EU"],
          ["Apple och Google", "distribution av appen och transport av pushnotiser", "USA"],
        ],
      },
    },
    {
      title: "Överföring utanför EU och EES",
      paragraphs: [
        "Merparten av uppgifterna stannar inom EU. Pushnotiser och appuppdateringar går via Expo, och appen distribueras av Apple och Google, vilket innebär överföring till USA.",
        TODO("juridisk bedömning: överföringsgrund för Expo (pushnotiser och appuppdateringar) samt Apple och Google (distribution och transport av notiser) — adekvat skyddsnivå enligt EU–US Data Privacy Framework eller standardavtalsklausuler, och var kopior kan begäras. Obs: det tidigare svaret att inga uppgifter lämnar EU/EES stämmer inte för dessa tre. Vercel är numera inom EU och är inte längre en överföring"),
      ],
    },
    {
      title: "Hur länge vi sparar uppgifterna",
      items: [
        "Kontouppgifter sparas så länge du har ett konto.",
        "När du raderar kontot tas dina personuppgifter bort direkt: namn, e-post, adress, personnummerhash, profilbild och inloggning. Inlägg, aktiviteter och meddelanden du skrivit ligger kvar för dina grannar men visas som ”Borttagen användare” och går inte att koppla till dig.",
        "Säkerhetskopior: databasen kopieras dagligen och kopiorna sparas i sju dagar. Det betyder att uppgifter du raderat kan finnas kvar i en säkerhetskopia i upp till en vecka innan den skrivs över. Kopiorna används bara för att återställa tjänsten efter ett driftfel, aldrig för att läsa upp enskilda uppgifter.",
        "E-post till supporten: sparas så länge ärendet behöver hanteras och följas upp. När ärendet är avslutat sparas mejlen i högst två år, därefter raderas eller anonymiseras de. Det gäller även frågor om dataskydd. Underlag vi behöver för att kunna visa att vi följt lagen kan sparas längre, men bara så länge det behövs.",
        // 30 days is the retention of Sentry's free Developer plan. It is a property of the
        // plan, not a setting, so upgrading to Team or Business silently changes it to 90 and
        // makes this line wrong. Whoever changes the Sentry plan updates this sentence.
        "Kraschrapporter: sparas i 30 dagar hos Sentry och raderas därefter automatiskt.",
        `Användningsstatistik: ${TODO("lagringstid hos Aptabase, och om de kan radera statistik för ett enskilt konto")}`,
      ],
    },
    {
      title: "Dina rättigheter",
      paragraphs: [
        "Du har rätt att begära ett utdrag över de personuppgifter vi behandlar om dig, att få felaktiga uppgifter rättade, att få uppgifter raderade, att invända mot eller begära begränsning av viss behandling, och att få ut uppgifter du lämnat i ett maskinläsbart format (dataportabilitet).",
        `Du begär utdrag direkt i appen under Kontoinställningar, eller genom att mejla ${CONTACT_EMAIL}. Vi svarar inom en månad.`,
        "Har du sagt ja till användningsstatistik kan du ta tillbaka det när som helst under Kontoinställningar i appen, utan att ange något skäl och utan att något annat förändras. Vi slutar då mäta. Det vi redan har samlat in blir inte olagligt av att du ändrar dig, men vi fortsätter inte.",
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
        "Det vi mäter på webbplatsen är vilka sidor som besöks och vilka knappar som används, till exempel att någon öppnade en fråga i FAQ:n eller skickade kontaktformuläret. De mätningarna innehåller inget om vem du är — du är inte inloggad här.",
        "I appen är det annorlunda, och där frågar vi först. Statistiken i appen är kopplad till ditt konto, så den samlas bara in om du har sagt ja. Du väljer när du registrerar dig, och du kan ändra dig när som helst under Kontoinställningar — säger du nej, eller tar tillbaka ditt ja, slutar vi mäta. Det påverkar inget annat i appen.",
        "Själva mätverktyget lagrar ingenting på din telefon: varje mätning märks med ett tillfälligt sessionsnummer som skapas i appens minne och försvinner när appen stängs eller efter en timmes inaktivitet, och inga kakor skickas med. Det är ditt konto som avgör om vi mäter, inte något som ligger kvar på enheten.",
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
