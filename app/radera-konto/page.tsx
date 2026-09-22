import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { DeleteAccountSection } from "@/components/sections/DeleteAccountSection";

export const metadata: Metadata = {
  title: "Radera konto – Grannsam",
  description:
    "Så begär du radering av ditt Grannsam-konto i appen eller via e-post.",
};

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar />
      <main>
        <DeleteAccountSection />
      </main>
      <Footer />
    </>
  );
}
