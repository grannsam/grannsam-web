import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "Om oss – Grannsam",
  description:
    "Läs grundarens berättelse, vår vision om levande grannskap och lär känna teamet bakom Grannsam.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
