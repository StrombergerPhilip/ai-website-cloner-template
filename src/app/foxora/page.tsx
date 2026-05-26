import { AppMock } from "@/components/foxora/AppMock";
import { Fixes } from "@/components/foxora/Fixes";
import { Footer } from "@/components/foxora/Footer";
import { Hero } from "@/components/foxora/Hero";
import { Journey } from "@/components/foxora/Journey";
import { Language } from "@/components/foxora/Language";
import { PitchBox } from "@/components/foxora/PitchBox";
import { Readiness } from "@/components/foxora/Readiness";
import { Revenue } from "@/components/foxora/Revenue";
import { Roadmap } from "@/components/foxora/Roadmap";
import { Tiers } from "@/components/foxora/Tiers";
import { TopBar } from "@/components/foxora/TopBar";
import { Trajectory } from "@/components/foxora/Trajectory";
import { Rule } from "@/components/foxora/shared";

export default function FoxoraPage() {
  return (
    <div
      className="foxora-page relative z-[1] mx-auto max-w-[1180px] px-5 py-14 sm:px-12 lg:px-[72px]"
    >
      <TopBar />
      <Hero />
      <PitchBox />
      <Journey />
      <Rule />
      <Tiers />
      <Rule />
      <Revenue />
      <Rule />
      <AppMock />
      <Rule />
      <Language />
      <Rule />
      <Readiness />
      <Rule />
      <Fixes />
      <Rule />
      <Roadmap />
      <Rule />
      <Trajectory />
      <Footer />
    </div>
  );
}
