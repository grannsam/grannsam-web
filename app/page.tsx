import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { LandingSection } from "@/components/sections/LandingSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        <LandingSection
          id="appen"
          sectionNumber={2}
          title="Appen"
          description="Platshållare för sektionen om appen — funktioner, skärmdumpar och nedladdning."
          tone="muted"
        />

        <LandingSection
          id="pris"
          sectionNumber={3}
          title="Pris"
          description="Platshållare för prissektionen — paket, jämförelse och FAQ."
          tone="accent"
        />

        <LandingSection
          id="oss"
          sectionNumber={4}
          title="Oss"
          description="Platshållare för om oss — team, vision och kontakt."
          tone="muted"
        />
      </main>

      <Footer />
    </>
  );
}
