import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LegalDocumentSection } from "@/components/sections/LegalDocumentSection";
import { privacyPolicy } from "@/lib/privacy-policy";
import { pageMetadata } from "@/lib/seo";
import { PRIVACY_PATH } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Integritetspolicy",
  description:
    "Hur Grannsam behandlar personuppgifter: vilka uppgifter vi samlar in, varför, vilka som kan se dem och vilka rättigheter du har.",
  path: PRIVACY_PATH,
});

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalDocumentSection document={privacyPolicy} />
      </main>
      <Footer />
    </>
  );
}
