import Link from "next/link";
import { Phone } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import PricingSection from "@/components/PricingSection";
import FeaturedEvents from "@/components/FeaturedEvents";
import MapSection from "@/components/MapSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section con Carousel */}
      <HeroCarousel />

      {/* Sezione In Evidenza (Scorrimento) */}
      <FeaturedEvents />

      {/* Sezione Prezzi */}
      <PricingSection />

      {/* Chi Siamo & Dove Siamo */}
      <MapSection />
    </div>
  );
}
