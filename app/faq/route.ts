import { brandedTitle, designResponse, readDesignHtml, sharedJsonLd, withDesignHead } from "@/lib/design-page";
import { faqJsonLd } from "@/lib/seo";
import { FAQ_PATH } from "@/lib/site";

export async function GET() {
  const html = await readDesignHtml("faq.html");
  return designResponse(
    withDesignHead(html, {
      title: brandedTitle("Vanliga frågor"),
      description:
        "Svar på vanliga frågor om Grannsam, pris, BankID och hur appen skiljer sig från öppna chattgrupper.",
      path: FAQ_PATH,
      jsonLd: [...sharedJsonLd(), faqJsonLd()],
    }),
  );
}
