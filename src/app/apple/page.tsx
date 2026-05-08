import { EndlessEntertainment } from "@/components/apple/EndlessEntertainment";
import { Footer } from "@/components/apple/Footer";
import { GlobalNav } from "@/components/apple/GlobalNav";
import { LocaleStrip } from "@/components/apple/LocaleStrip";
import { MothersDayBanner } from "@/components/apple/MothersDayBanner";
import { ProductGrid } from "@/components/apple/ProductGrid";

export default function AppleHome() {
  return (
    <>
      <LocaleStrip />
      <GlobalNav />
      <MothersDayBanner />
      <ProductGrid />
      <EndlessEntertainment />
      <Footer />
    </>
  );
}
