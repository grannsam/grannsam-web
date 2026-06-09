import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { DataSecuritySection } from "@/components/sections/DataSecuritySection";

export const metadata: Metadata = {
  title: "Datasäkerhet – Grannsam",
  description:
    "Läs om hur Grannsam arbetar med trygghet, BankID-verifiering, integritet och hantering av personuppgifter.",
};

export default function DataSecurityPage() {
  return (
    <>
      <Navbar />
      <main>
        <DataSecuritySection />
      </main>
      <Footer />
    </>
  );
}
