import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Vanliga frågor – Grannsam",
  description:
    "Svar på vanliga frågor om Grannsam för styrelser och grannar i bostadsrättsföreningar — pris, BankID, kom igång och mer.",
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main>
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
