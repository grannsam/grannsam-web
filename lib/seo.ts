import type { Metadata } from "next";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_LEGAL_NAME,
  SITE_NAME,
  SITE_SLOGAN,
  SITE_URL,
} from "@/lib/site";
import { faqItems } from "@/lib/faq";

export const defaultDescription =
  "Grannsam är appen för bostadsrättsföreningar: information som når fram, ärendehantering för styrelsen och ett tryggt grannskap med BankID. 495 kr/mån för föreningen — fritt för grannarna.";

export const defaultTitle = SITE_SLOGAN;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_LEGAL_NAME,
    legalName: SITE_LEGAL_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    description: defaultDescription,
    address: {
      "@type": "PostalAddress",
      addressCountry: "SE",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "sv-SE",
    publisher: {
      "@type": "Organization",
      name: SITE_LEGAL_NAME,
      url: SITE_URL,
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android",
    url: absoluteUrl("/appen"),
    description: defaultDescription,
    offers: {
      "@type": "Offer",
      price: "495",
      priceCurrency: "SEK",
      description: "Månadsavgift för föreningen, exklusive moms. Fritt för boende.",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_LEGAL_NAME,
      url: SITE_URL,
    },
  };
}
