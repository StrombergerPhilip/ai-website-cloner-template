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
    </>
  );
}
