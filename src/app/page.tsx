import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar, Industries } from "@/components/Stats";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { CaseStudy } from "@/components/CaseStudy";
import { Benefits } from "@/components/Benefits";
import { Incentives } from "@/components/Incentives";
import { Founder } from "@/components/Founder";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { BottomCTA, Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Industries />
        <Problem />
        <Services />
        <HowItWorks />
        <CaseStudy />
        <Benefits />
        <Incentives />
        <Founder />
        <FAQ />
        <Contact />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
