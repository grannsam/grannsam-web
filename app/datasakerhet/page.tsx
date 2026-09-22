import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { DataSecuritySection } from "@/components/sections/DataSecuritySection";
import { pageMetadata } from "@/lib/seo";
import { DATA_SECURITY_PATH } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Datasäkerhet och integritet",
  description:
    "Hur Grannsam arbetar med BankID-verifiering, slutet grannskap, personuppgifter, cookies och dina rättigheter enligt GDPR.",
  path: DATA_SECURITY_PATH,
});

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
