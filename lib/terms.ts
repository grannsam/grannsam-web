// Användarvillkor (/anvandarvillkor). KM-462.
//
// Describes how the app actually behaves (BankID sign-in, board approval, moderation, bans,
// deletion, OTA updates) as verified in the codebase on 2026-09-22. The commercial and liability
// terms are marked [fylls i: …] — those are for counsel, not for a draft.

import { TODO, type LegalDocument } from "@/lib/legal";
import { CONTACT_EMAIL, DELETE_ACCOUNT_PATH, PRIVACY_PATH, SITE_LEGAL_NAME } from "@/lib/site";

export const terms: LegalDocument = {
  title: "Användarvillkor",
  updated: "2026-09-22",
  intro:
    `De här villkoren gäller när du använder appen Grannsam. Genom att skapa ett konto godkänner du dem. Grannsam tillhandahålls av ${SITE_LEGAL_NAME}.`,
  blocks: [
    {
      title: "Vad Grannsam är",
      paragraphs: [
        "Grannsam är en app för boende i en bostadsrättsförening. Där kan ni skriva till varandra, ordna aktiviteter, läsa styrelsens meddelanden och anmäla ärenden.",
        "Varje förening har sitt eget slutna grannskap. Innehållet är inte publikt och delas inte med andra föreningar.",
      ],
    },
    {
      title: "Vem kan använda appen",
      items: [
        "Du bor i, eller hör till, en förening som har avtal med Grannsam.",
        "Du legitimerar dig med BankID när du skapar kontot.",
        "Styrelsen i föreningen godkänner dig innan du släpps in i grannskapet.",
        "Åldersgräns: Grannsam är till för dig som är 13 år eller äldre. Du legitimerar dig med BankID när du skapar kontot, och vi gör ingen separat ålderskontroll utöver det. Får vi veta att någon under 13 år har ett konto kan det komma att raderas.",
      ],
    },
    {
      title: "Ditt konto",
      items: [
        "Kontot är personligt. Låt ingen annan använda det, och låna inte ut din inloggning.",
        "Uppgifterna du lämnar ska vara riktiga — namnet hämtas från BankID och går inte att ändra själv.",
        "Du ansvarar för det som sker i ditt konto.",
        "Misstänker du att någon annan kommit åt kontot, hör av dig till oss direkt.",
      ],
    },
    {
      title: "Så uppträder vi mot varandra",
      paragraphs: [
        "Grannsam är ett grannskap, inte ett socialt medium. Skriv till dina grannar som du skulle tilltala dem i trapphuset.",
      ],
      items: [
        "Inget olagligt, hotfullt, hatiskt eller trakasserande innehåll.",
        "Publicera inte andras personuppgifter, bilder på andra eller uppgifter om någons hem utan att det är okej för dem.",
        "Ingen marknadsföring eller försäljning som inte hör till grannskapet.",
        "Följ de ordningsregler som gäller i din förening.",
      ],
    },
    {
      title: "Innehåll du publicerar",
      paragraphs: [
        "Det du skriver och laddar upp är ditt. Du ger Grannsam rätt att lagra och visa det i appen för din förening, så att tjänsten kan fungera.",
        "Du ansvarar för att du får publicera innehållet — till exempel att personer på en bild är med på det.",
        "Om du raderar ditt konto ligger inlägg, aktiviteter och meddelanden kvar för dina grannar, men visas som ”Borttagen användare”. Det gör att andras svar och samtal inte försvinner.",
      ],
    },
    {
      title: "Moderering, rapportering och avstängning",
      items: [
        "Du kan anmäla innehåll eller en granne som bryter mot villkoren.",
        "Styrelsen i din förening godkänner nya medlemmar och kan stänga av någon från grannskapet.",
        "Vi kan ta bort innehåll som bryter mot villkoren, och stänga av konton vid allvarliga eller upprepade överträdelser.",
        "Blir du avstängd från din förenings grannskap kan du kontakta styrelsen i föreningen och be dem ompröva beslutet. Det är styrelsen som bestämmer vilka boende som får tillgång till grannskapet och som modererar innehållet där.",
        `Beror avstängningen på ett beslut av Grannsam kan du i stället höra av dig till oss på ${CONTACT_EMAIL} och få beslutet prövat.`,
      ],
    },
    {
      title: "Föreningens avtal",
      paragraphs: [
        "Din tillgång till Grannsam bygger på att din förening har ett avtal med oss. Om det avtalet upphör, upphör också tillgången till föreningens grannskap.",
        "Vid skillnad mellan dessa villkor och föreningens avtal gäller föreningens avtal för det som rör föreningen.",
      ],
    },
    {
      title: "Tillgänglighet och ändringar i appen",
      paragraphs: [
        "Vi utvecklar Grannsam löpande och uppdaterar appen automatiskt. Funktioner kan tillkomma, ändras eller tas bort.",
        "Vi strävar efter att tjänsten ska vara tillgänglig dygnet runt, men vi garanterar inte någon viss tillgänglighet eller servicenivå, om vi inte har avtalat något annat skriftligen med din förening.",
        "Tjänsten kan vara helt eller delvis otillgänglig ibland, till exempel vid planerat underhåll, tekniska fel, säkerhetsåtgärder, överbelastning eller driftstörningar hos våra leverantörer. Vi lägger planerat underhåll så att det stör så lite som möjligt när vi kan påverka det.",
        "Tillfälliga driftstörningar innebär i sig inte att vi brutit mot avtalet eller att föreningen har rätt till ersättning, om inte annat följer av tvingande lag eller vi avtalat något annat skriftligen.",
      ],
    },
    {
      title: "Om du vill sluta",
      paragraphs: [
        `Du kan radera ditt konto när som helst i appen. Hur det går till, och vad som raderas, står på sidan Radera konto (${DELETE_ACCOUNT_PATH}).`,
      ],
    },
    {
      title: "Ansvar",
      paragraphs: [
        "Grannsam ansvarar inte för indirekta skador, följdskador eller förluster som uppstår av att tjänsten använts, av tillfälliga driftstörningar eller av att data gått förlorad, i den utsträckning en sådan begränsning är tillåten enligt lag.",
        "Begränsningen inskränker inte dina rättigheter enligt tvingande lag. Är du konsument gäller konsumentlagstiftningens regler framför det som står här. Särskilda ansvars- och beloppsbegränsningar gentemot föreningen regleras i kundavtalet.",
        "Grannsam ansvarar inte för innehåll som boende publicerar, men tar bort sådant som bryter mot villkoren när vi får kännedom om det.",
      ],
    },
    {
      title: "Personuppgifter",
      paragraphs: [
        `Hur vi behandlar dina personuppgifter beskrivs i vår integritetspolicy (${PRIVACY_PATH}).`,
      ],
    },
    {
      title: "Tillämplig lag och tvist",
      paragraphs: [
        "Svensk lag gäller för dessa villkor.",
        "Är du konsument och vi inte kommer överens kan du vända dig till Allmänna reklamationsnämnden (arn.se) eller till EU:s plattform för tvistlösning online. För dig som konsument gäller de tvingande regler om behörig domstol och tvistlösning som följer av lag.",
        "Tvist mellan Grannsam och en förening avgörs av svensk allmän domstol, med Grannsams hemort som första instans, om inte annat följer av tvingande lag.",
      ],
    },
    {
      title: "Ändringar av villkoren",
      paragraphs: [
        `Vi kan ändra villkoren när tjänsten utvecklas. Vid väsentliga ändringar informerar vi dig i appen eller via e-post innan de börjar gälla. Har du frågor, mejla ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};
