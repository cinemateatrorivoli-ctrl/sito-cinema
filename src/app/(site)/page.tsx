import Link from "next/link";
import { Phone } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import PricingSection from "@/components/PricingSection";
import FeaturedEvents from "@/components/FeaturedEvents";
import MapSection from "@/components/MapSection";
import { client } from "@/sanity/lib/client";
import { getAllEventsQuery } from "@/sanity/lib/queries";

// Disabilitiamo la cache in dev, o usiamo revalidate in prod
export const revalidate = 60; // Revalidate ogni 60 secondi

export default async function Home() {
  const events = await client.fetch(getAllEventsQuery);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section con Carousel */}
      <HeroCarousel />

      {/* Sezione In Evidenza (Scorrimento) */}
      <FeaturedEvents events={events} />

      {/* Sezione Prezzi */}
      <PricingSection />

      {/* Chi Siamo & Dove Siamo */}
      <MapSection />
    </div>
  );
}
