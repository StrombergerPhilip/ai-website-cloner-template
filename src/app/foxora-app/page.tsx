import { Agent } from "@/components/foxora-app/Agent";
import { Calculator } from "@/components/foxora-app/Calculator";
import { ChatWidget } from "@/components/foxora-app/ChatWidget";
import { CookieBanner } from "@/components/foxora-app/CookieBanner";
import { Faq } from "@/components/foxora-app/Faq";
import { Features } from "@/components/foxora-app/Features";
import { Footer } from "@/components/foxora-app/Footer";
import { Hero } from "@/components/foxora-app/Hero";
import { HowItWorks } from "@/components/foxora-app/HowItWorks";
import { Nav } from "@/components/foxora-app/Nav";
import { Partners } from "@/components/foxora-app/Partners";
import { Plans } from "@/components/foxora-app/Plans";
import { SignupCta } from "@/components/foxora-app/SignupCta";
import { Testimonials } from "@/components/foxora-app/Testimonials";
import { TrustBar } from "@/components/foxora-app/TrustBar";

export default function FoxoraAppPage() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Calculator />
      <Agent />
      <Features />
      <Plans />
      <Partners />
      <Testimonials />
      <Faq />
      <SignupCta />
      <Footer />
      <CookieBanner />
      <ChatWidget />
    </>
  );
}
