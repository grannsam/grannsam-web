import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LegalDocumentSection } from "@/components/sections/LegalDocumentSection";
import { pageMetadata } from "@/lib/seo";
import { terms } from "@/lib/terms";
import { TERMS_PATH } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Användarvillkor",
  description:
    "Villkoren för att använda appen Grannsam: vem som kan använda den, hur vi uppträder mot varandra, innehåll, moderering och uppsägning.",
  path: TERMS_PATH,
});

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalDocumentSection document={terms} />
      </main>
      <Footer />
    </>
  );
}
