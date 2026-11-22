import { brandedTitle, designResponse, readDesignHtml, withDesignHead } from "@/lib/design-page";
import { DATA_SECURITY_PATH } from "@/lib/site";

export async function GET() {
  const html = await readDesignHtml("datasakerhet.html");
  return designResponse(
    withDesignHead(html, {
      title: brandedTitle("Datasäkerhet och integritet"),
      description:
        "Hur Grannsam arbetar med BankID-verifiering, slutet grannskap, personuppgifter, cookies och dina rättigheter enligt GDPR.",
      path: DATA_SECURITY_PATH,
    }),
  );
}
