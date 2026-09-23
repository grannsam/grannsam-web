import { brandedTitle, designResponse, readDesignHtml, withDesignHead } from "@/lib/design-page";
import { renderDeleteAccountPage } from "@/lib/render-delete-account";
import { DELETE_ACCOUNT_PATH } from "@/lib/site";

export async function GET() {
  const shell = await readDesignHtml("datasakerhet.html");
  return designResponse(
    withDesignHead(renderDeleteAccountPage(shell), {
      title: brandedTitle("Radera ditt Grannsam-konto"),
      description:
        "Så raderar du ditt Grannsam-konto i appen eller via e-post, vad som raderas och vad som finns kvar.",
      path: DELETE_ACCOUNT_PATH,
    }),
  );
}
