import { brandedTitle, designResponse, readDesignHtml, withDesignHead } from "@/lib/design-page";
import { renderAuthCallbackPage } from "@/lib/render-auth-callback";
import { AUTH_CALLBACK_PATH } from "@/lib/site";

export async function GET() {
  const shell = await readDesignHtml("datasakerhet.html");
  return designResponse(
    withDesignHead(renderAuthCallbackPage(shell), {
      title: brandedTitle("E-post bekräftad"),
      description: "Din e-post är bekräftad. Öppna Grannsam-appen för att fortsätta.",
      path: AUTH_CALLBACK_PATH,
      robots: "noindex, nofollow",
    }),
    { "X-Robots-Tag": "noindex, nofollow" },
  );
}
