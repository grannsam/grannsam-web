import { defaultDescription, defaultTitle } from "@/lib/seo";
import {
  designResponse,
  readDesignHtml,
  sharedJsonLd,
  withDesignHead,
} from "@/lib/design-page";

export async function GET() {
  const html = await readDesignHtml("grannsam.html");
  return designResponse(
    withDesignHead(html, {
      title: defaultTitle,
      description: defaultDescription,
      path: "/",
      jsonLd: sharedJsonLd(),
    }),
  );
}
