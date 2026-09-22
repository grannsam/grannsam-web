# SEO and site copy

Canonical site: **https://www.grannsam.nu**

Search, social previews, and on-page headings are wired through a few shared files. Prefer those over hardcoding titles, slogans, URLs, or prices in a single page.

## Source of truth

| What | Where |
| --- | --- |
| Domain, brand name, slogan, contact, public paths | `lib/site.ts` |
| Default meta description, `pageMetadata()`, JSON-LD | `lib/seo.ts` |
| Homepage title (the slogan) | `SITE_SLOGAN` in `lib/site.ts` — used by `app/page.tsx`, hero, footer, Open Graph image |
| FAQ questions (page + FAQ schema) | `lib/faq.ts` |
| App feature copy | `lib/appen.ts` |
| Datasäkerhet / cookies copy | `lib/data-security.ts` |
| Crawl files | `app/robots.ts`, `app/sitemap.ts` (sitemap reads `PUBLIC_PATHS`) |
| Host aliases → www | `middleware.ts` |
| Old-path redirects | `next.config.ts` |

The homepage `<title>` is the slogan on purpose. Do not replace it with a product pitch. Inner pages use `title: "…" | Grannsam` via the layout template.

## When you add a page

1. Put the path in `lib/site.ts` and add it to `PUBLIC_PATHS` (that updates the sitemap).
2. Export metadata with `pageMetadata({ title, description, path })`. Keep titles unique and descriptive; skip `| Grannsam` in the string (the template adds it).
3. One `<h1>` that matches the topic of the title.
4. Link it from the footer (and nav if it is a primary page).
5. If it is replacing an old URL, add a **permanent** redirect in `next.config.ts`.
6. After deploy, check the live URL in [Search Console](https://search.google.com/search-console) if the page should rank.

Do not add marketing pages to `/api/`. Robots disallow that prefix.

## When you change copy or price

- **Slogan** — only `SITE_SLOGAN`. Title, H1, footer, and OG image follow.
- **Brand / legal name / email / phone** — `lib/site.ts` (JSON-LD and contact UI use these). Prose in FAQ or datasäkerhet may still mention the company; update those files too if the legal name changes.
- **Price or product claims** — homepage hero/pricing, FAQ, `defaultDescription` in `lib/seo.ts`, and `softwareApplicationJsonLd()` in `lib/seo.ts`. They are not derived from one number yet.
- **FAQ** — edit `lib/faq.ts` only. The FAQPage schema is generated from the same list.

## When you change images

- Use `next/image`. Do not set `unoptimized` on large PNGs.
- Prefer WebP/AVIF for new screenshots. Keep width reasonable (engagement cards are ~1136px).
- Meaningful `alt` for content images; `alt=""` for decorative dividers/backgrounds.
- Open Graph / Twitter images are generated from `app/opengraph-image.tsx` and `app/twitter-image.tsx`. Change slogan/name in `lib/site.ts`; change the extra line of OG copy in the image file.

## Hosts and indexing

- Serve and canonicalize **www.grannsam.nu**. Apex `grannsam.nu` should keep redirecting to www (Vercel domain settings).
- `grannsam.vercel.app` is redirected to www in `middleware.ts`. Other `*.vercel.app` preview URLs send `X-Robots-Tag: noindex`.
- After a new public page or a URL change: deploy, then request indexing / resubmit `https://www.grannsam.nu/sitemap.xml` in Search Console.

## Quick check before merge

- Unique `<title>` and meta description on the changed routes.
- Canonical points at `https://www.grannsam.nu/…` (no query string unless the query is the real page).
- `?intent=demo` on `/kontakt` may have its own title; canonical stays `/kontakt`.
- `lang="sv"` stays on `<html>`.
- No new duplicate host that returns 200 with the same HTML as www.
