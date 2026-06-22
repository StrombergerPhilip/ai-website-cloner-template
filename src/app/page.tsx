import { Hero } from "@/components/sections/hero";
import { ValuePillars } from "@/components/sections/value-pillars";
import { ClosingCta } from "@/components/sections/closing-cta";
import { TrustStripAndMiniCalc } from "@/components/sections/trust-strip";

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
