"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Packages from "@/components/Packages";
import Footer from "@/components/Footer";

// Dynamically import CursorParticles to avoid SSR issues with canvas
const CursorParticles = dynamic(
  () => import("@/components/CursorParticles"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative">
      <CursorParticles />
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Packages />
      <Footer />
    </main>
  );
}
