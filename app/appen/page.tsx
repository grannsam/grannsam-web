import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AppenSection } from "@/components/sections/AppenSection";

export const metadata: Metadata = {
  title: "Appen – Grannsam",
  description:
    "Upptäck Grannsam-appen — händelser, ärenden, grannforum, anslagstavla och trygg kommunikation i ert grannskap.",
};

export default function AppenPage() {
  return (
    <>
      <Navbar />
      <main>
        <AppenSection />
      </main>
      <Footer />
    </>
  );
}
