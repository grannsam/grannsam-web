import { appenJsonLd, brandedTitle, designResponse, readDesignHtml, withDesignHead } from "@/lib/design-page";
import { APPEN_PATH } from "@/lib/site";

export async function GET() {
  const html = await readDesignHtml("appen.html");
  return designResponse(
    withDesignHead(html, {
      title: brandedTitle("Funktioner i Grannsam-appen för styrelse och grannar"),
      description:
        "Se hur Grannsam-appen fungerar för bostadsrättsföreningar: anslagstavla, ärenden, händelser, grannforum och dokument — med BankID-verifierade grannar.",
      path: APPEN_PATH,
      jsonLd: appenJsonLd(),
    }),
  );
}
