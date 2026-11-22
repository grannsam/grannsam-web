import { brandedTitle, designResponse, readDesignHtml, withDesignHead } from "@/lib/design-page";
import { ABOUT_PATH } from "@/lib/site";

export async function GET() {
  const html = await readDesignHtml("om-oss.html");
  return designResponse(
    withDesignHead(html, {
      title: brandedTitle("Teamet bakom Grannsam"),
      description:
        "Läs om visionen bakom Grannsam och lär känna teamet som bygger appen för bostadsrättsföreningar.",
      path: ABOUT_PATH,
    }),
  );
}
