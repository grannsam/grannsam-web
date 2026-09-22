import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AppenSection } from "@/components/sections/AppenSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, softwareApplicationJsonLd } from "@/lib/seo";
import { APPEN_PATH } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Funktioner i Grannsam-appen för styrelse och grannar",
  description:
    "Se hur Grannsam-appen fungerar för bostadsrättsföreningar: anslagstavla, ärenden, händelser, grannforum och dokument — med BankID-verifierade grannar.",
  path: APPEN_PATH,
});

export default function AppenPage() {
  return (
    <>
      <Navbar />
      <main>
        <JsonLd data={softwareApplicationJsonLd()} />
        <AppenSection />
      </main>
      <Footer />
    </>
  );
}
