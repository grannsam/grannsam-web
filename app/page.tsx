import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { EngagementSection } from "@/components/sections/EngagementSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { defaultDescription, defaultTitle, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: defaultTitle,
    description: defaultDescription,
    path: "/",
  }),
  title: { absolute: defaultTitle },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        <WhyChooseSection />

        <EngagementSection />

        <PricingSection />
      </main>

      <Footer />
    </>
  );
}
