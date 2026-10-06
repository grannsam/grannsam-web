import { brandedTitle, designResponse, readDesignHtml, withDesignHead } from "@/lib/design-page";
import { renderLegalPage } from "@/lib/render-legal";
import { TERMS_PATH } from "@/lib/site";
import { terms } from "@/lib/terms";

export async function GET() {
  const shell = await readDesignHtml("datasakerhet.html");
  return designResponse(
    withDesignHead(renderLegalPage(shell, terms, "Villkor"), {
      title: brandedTitle("Användarvillkor"),
      description:
        "Villkoren för att använda appen Grannsam: vem som kan använda den, hur vi uppträder mot varandra, innehåll, moderering och uppsägning.",
      path: TERMS_PATH,
    }),
  );
}
