import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FaqSection } from "@/components/sections/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { FAQ_PATH } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Vanliga frågor om Grannsam för BRF-styrelser",
  description:
    "Svar på vanliga frågor om Grannsam för styrelser och grannar i bostadsrättsföreningar — pris, BankID, Grannsamverkan och hur ni kommer igång.",
  path: FAQ_PATH,
});

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main>
        <JsonLd data={faqJsonLd()} />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
