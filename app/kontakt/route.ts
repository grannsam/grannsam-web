import { brandedTitle, designResponse, readDesignHtml, withDesignHead } from "@/lib/design-page";
import { CONTACT_PATH } from "@/lib/site";

export async function GET(request: Request) {
  const isDemo = new URL(request.url).searchParams.get("intent") === "demo";
  const html = await readDesignHtml("kontakt.html");
  return designResponse(
    withDesignHead(html, {
      title: brandedTitle(
        isDemo ? "Boka en demo av Grannsam" : "Boka demo eller kontakta Grannsam",
      ),
      description: isDemo
        ? "Boka en kostnadsfri demo av Grannsam. Vi visar hur appen hjälper styrelsen att nå ut, hantera ärenden och stärka grannskapet."
        : "Kontakta Grannsam för demo, frågor eller support. Vi hjälper bostadsrättsföreningar att stärka grannskapet.",
      path: CONTACT_PATH,
    }),
  );
}
