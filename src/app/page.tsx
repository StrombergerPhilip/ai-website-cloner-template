import { HeroSection } from "@/components/hero-section";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <HeroSection />
      </main>
    </>
  );
}
