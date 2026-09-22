import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { DeleteAccountSection } from "@/components/sections/DeleteAccountSection";
import { pageMetadata } from "@/lib/seo";
import { DELETE_ACCOUNT_PATH } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Radera ditt Grannsam-konto",
  description:
    "Så raderar du ditt Grannsam-konto i appen eller via e-post, vad som raderas och vad som finns kvar.",
  path: DELETE_ACCOUNT_PATH,
});

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
