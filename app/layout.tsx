import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { AptabaseAnalytics } from "@/components/analytics/AptabaseAnalytics";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  defaultDescription,
  defaultTitle,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { SITE_LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/site";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  applicationName: SITE_NAME,
  keywords: [
    "Grannsam",
    "bostadsrättsförening",
    "BRF-app",
    "ärendehantering",
    "BankID",
    "grannskap",
    "styrelse",
  ],
  authors: [{ name: SITE_LEGAL_NAME, url: SITE_URL }],
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: SITE_NAME,
    title: defaultTitle,
    description: defaultDescription,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <AptabaseAnalytics>{children}</AptabaseAnalytics>
        <Analytics />
      </body>
    </html>
  );
}
