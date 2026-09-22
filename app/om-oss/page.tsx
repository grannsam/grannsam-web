import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { pageMetadata } from "@/lib/seo";
import { ABOUT_PATH } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Teamet bakom Grannsam",
  description:
    "Läs om visionen bakom Grannsam och lär känna teamet som bygger appen för bostadsrättsföreningar.",
  path: ABOUT_PATH,
});

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
