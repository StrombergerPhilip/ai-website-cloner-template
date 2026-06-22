import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HistorySection } from "@/components/HistorySection";
import { WorldwideSection } from "@/components/WorldwideSection";
import { HelmutSection } from "@/components/HelmutSection";
import { SalesAgentSection } from "@/components/SalesAgentSection";
import { NoNetworkSection } from "@/components/NoNetworkSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { JoinTeamSection } from "@/components/JoinTeamSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/hero";
import { ValuePillars } from "@/components/sections/value-pillars";
import { ClosingCta } from "@/components/sections/closing-cta";
import { TrustStripAndMiniCalc } from "@/components/sections/trust-strip";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <HistorySection />
        <div className="section-divider" />
        <WorldwideSection />
        <div className="section-divider" />
        <HelmutSection />
        <div className="section-divider" />
        <SalesAgentSection />
        <div className="section-divider" />
        <NoNetworkSection />
        <div className="section-divider" />
        <ExperienceSection />
        <div className="section-divider" />
        <JoinTeamSection />
      </main>
      <Footer />
      <Hero />
      <ValuePillars />
      <TrustStripAndMiniCalc />
      <ClosingCta />
    </>
  );
}
