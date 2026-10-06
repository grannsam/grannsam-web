import { brandedTitle, designResponse, readDesignHtml, withDesignHead } from "@/lib/design-page";
import { privacyPolicy } from "@/lib/privacy-policy";
import { renderLegalPage } from "@/lib/render-legal";
import { PRIVACY_PATH } from "@/lib/site";

export async function GET() {
  const shell = await readDesignHtml("datasakerhet.html");
  return designResponse(
    withDesignHead(renderLegalPage(shell, privacyPolicy, "Integritet"), {
      title: brandedTitle("Integritetspolicy"),
      description:
        "Hur Grannsam behandlar personuppgifter: vilka uppgifter vi samlar in, varför, vilka som kan se dem och vilka rättigheter du har.",
      path: PRIVACY_PATH,
    }),
  );
}
