import { ExclusiveKit } from "@/components/parivie/ExclusiveKit";
import { Footer } from "@/components/parivie/Footer";
import { Header } from "@/components/parivie/Header";
import { HotList } from "@/components/parivie/HotList";
import { InPHinite } from "@/components/parivie/InPHinite";
import { ProvenResults } from "@/components/parivie/ProvenResults";
import { Testimonial } from "@/components/parivie/Testimonial";
import { VipBanner } from "@/components/parivie/VipBanner";

export default function ParivieHome() {
  return (
    <>
      <VipBanner />
      <Header />
      <HotList />
      <InPHinite />
      <ProvenResults />
      <Testimonial />
      <ExclusiveKit />
      <Footer />
    </>
  );
}
