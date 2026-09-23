import { readFile } from "node:fs/promises";
import path from "node:path";
import {
  absoluteUrl,
  faqJsonLd,
  organizationJsonLd,
  softwareApplicationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export type DesignMeta = {
  title: string;
  description: string;
  path: string;
  jsonLd?: unknown[];
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function brandedTitle(title: string) {
  return `${title} | ${SITE_NAME}`;
}

export function sharedJsonLd() {
  return [organizationJsonLd(), websiteJsonLd()];
}

export function homeJsonLd() {
  return [...sharedJsonLd(), faqJsonLd()];
}

export function appenJsonLd() {
  return [...sharedJsonLd(), softwareApplicationJsonLd()];
}

export async function readDesignHtml(file: string) {
  return readFile(path.join(process.cwd(), "site", file), "utf8");
}

export function withDesignHead(html: string, meta: DesignMeta) {
  const canonical = absoluteUrl(meta.path);
  const image = absoluteUrl("/opengraph-image");
  const twitterImage = absoluteUrl("/twitter-image");
  const jsonLd = (meta.jsonLd ?? sharedJsonLd())
    .map(
      (data) =>
        `<script type="application/ld+json">${JSON.stringify(data).replaceAll("<", "\\u003c")}</script>`,
    )
    .join("\n");

  const head = `
    <title>${escapeHtml(meta.title)}</title>
    <meta name="description" content="${escapeHtml(meta.description)}">
    <link rel="canonical" href="${canonical}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="sv_SE">
    <meta property="og:site_name" content="${SITE_NAME}">
    <meta property="og:title" content="${escapeHtml(meta.title)}">
    <meta property="og:description" content="${escapeHtml(meta.description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${image}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(meta.title)}">
    <meta name="twitter:description" content="${escapeHtml(meta.description)}">
    <meta name="twitter:image" content="${twitterImage}">
    ${jsonLd}
    <script defer src="/_vercel/insights/script.js"></script>`;

  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/, "")
    .replace("</head>", `${head}\n</head>`);
}

export function designResponse(html: string) {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
