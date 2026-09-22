import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";
import { pageMetadata } from "@/lib/seo";
import { CONTACT_PATH } from "@/lib/site";

type KontaktPageProps = {
  searchParams: Promise<{ intent?: string }>;
};

export async function generateMetadata({
  searchParams,
}: KontaktPageProps): Promise<Metadata> {
  const { intent } = await searchParams;
  const isDemo = intent === "demo";

  return pageMetadata({
    title: isDemo
      ? "Boka en demo av Grannsam"
      : "Boka demo eller kontakta Grannsam",
    description: isDemo
      ? "Boka en kostnadsfri demo av Grannsam. Vi visar hur appen hjälper styrelsen att nå ut, hantera ärenden och stärka grannskapet."
      : "Kontakta Grannsam för demo, frågor eller support. Vi hjälper bostadsrättsföreningar att stärka grannskapet.",
    path: CONTACT_PATH,
  });
}

export default async function KontaktPage({ searchParams }: KontaktPageProps) {
  const { intent } = await searchParams;
  const isDemo = intent === "demo";

  return (
    <>
      <Navbar />
      <main>
        <ContactSection isDemo={isDemo} />
      </main>
      <Footer />
    </>
  );
}
