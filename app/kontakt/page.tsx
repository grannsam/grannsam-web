import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Kontakt – Grannsam",
  description:
    "Kontakta Grannsam för demo, frågor eller support. Vi hjälper bostadsrättsföreningar att stärka grannskapet.",
};

type KontaktPageProps = {
  searchParams: Promise<{ intent?: string }>;
};

export default async function KontaktPage({ searchParams }: KontaktPageProps) {
  const { intent } = await searchParams;
  
  // Vi kollar om parametern ?intent=demo skickades med i URL:en
  const isDemo = intent === "demo";

  return (
    <>
      <Navbar />
      <main>
        {/* Vi skickar in den nya isDemo-proppen istället för initialInquiry */}
        <ContactSection isDemo={isDemo} />
      </main>
      <Footer />
    </>
  );
}