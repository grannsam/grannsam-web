import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "Om oss – Grannsam",
  description:
    "Lär känna teamet bakom Grannsam — vi bygger verktyg för starkare grannskap i bostadsrättsföreningar.",
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
