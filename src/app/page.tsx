import { About } from "@/components/About";
import { Audience } from "@/components/Audience";
import { BrandMarquee } from "@/components/BrandMarquee";
import { Differential } from "@/components/Differential";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Method } from "@/components/Method";
import { MotionProvider } from "@/components/MotionProvider";
import { Pilates } from "@/components/Pilates";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <MotionProvider />
      <Header />
      <main>
        <Hero />
        <BrandMarquee />
        <About />
        <Audience />
        <Services />
        <Pilates />
        <Differential />
        <Method />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
