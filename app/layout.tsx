import type { Metadata } from "next";
import {
  defaultDescription,
  defaultTitle,
} from "@/lib/seo";
import { SITE_LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

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
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
