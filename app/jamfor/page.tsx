import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CompareSection } from "@/components/sections/CompareSection";
import { pageMetadata } from "@/lib/seo";
import { COMPARE_PATH } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Grannsam jämfört med Facebook, WhatsApp och Grannsamverkan",
  description:
    "Skillnaden mellan Grannsam och Facebook-grupper, WhatsApp och den officiella Grannsamverkan-appen. Byggt för bostadsrättsföreningar, inte för öppna sociala flöden.",
  path: COMPARE_PATH,
});

export default function ComparePage() {
  return (
    <>
      <Navbar />
      <main>
        <CompareSection />
      </main>
      <Footer />
    </>
  );
}
