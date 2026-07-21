import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { PilatesFlagship } from "@/components/PilatesFlagship";
import { StudioShowcase } from "@/components/StudioShowcase";
import { Philosophy } from "@/components/Philosophy";
import { Therapies } from "@/components/Therapies";
import { Gallery } from "@/components/Gallery";
import { Testimonial } from "@/components/Testimonial";
import { Reserve } from "@/components/Reserve";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 relative">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <PilatesFlagship />
        <StudioShowcase />
        <Philosophy />
        <Therapies />
        <Gallery />
        <Testimonial />
        <Reserve />
      </main>
      <Footer />
    </div>
  );
}
