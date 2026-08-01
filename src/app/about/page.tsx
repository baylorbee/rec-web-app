import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Founder } from "@/components/Founder";
import { Team } from "@/components/Team";
import { BottomCTA, Footer } from "@/components/Footer";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `About | ${site.name}`,
  description:
    "Meet Matthew Reed, E.I.T., founder and mechanical engineer at Refine Energy Consulting — HVAC controls for Sacramento small commercial buildings.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Founder asPage />
        <Team />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
