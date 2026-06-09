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
  const initialInquiry = intent === "demo" ? ("demo" as const) : undefined;

  return (
    <>
      <Navbar />
      <main>
        <ContactSection initialInquiry={initialInquiry} />
      </main>
      <Footer />
    </>
  );
}
