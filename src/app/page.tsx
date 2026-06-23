import { Hero } from "@/components/sections/hero";
import { ValuePillars } from "@/components/sections/value-pillars";
import { ClosingCta } from "@/components/sections/closing-cta";
import { TrustStripAndMiniCalc } from "@/components/sections/trust-strip";
import { HeroSection } from "@/components/hero-section";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <Hero />
      <ValuePillars />
      <TrustStripAndMiniCalc />
      <ClosingCta />
    </>
  );
}
