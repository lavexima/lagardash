import { HeroSection } from "@/components/home/HeroSection"
import { SignatureDishes } from "@/components/home/SignatureDishes"
import { FeaturedMenu } from "@/components/home/FeaturedMenu"
import { ReservationCTA } from "@/components/home/ReservationCTA"
import { Testimonials } from "@/components/home/Testimonials"
import { InstagramFeed } from "@/components/home/InstagramFeed"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "La Gardash | Luxury Dining Experience",
  },
  description:
    "Experience Michelin-star inspired dining with our exquisite seasonal menus and world-class service. Reserve your table today.",
  alternates: {
    canonical: "https://luminadining.com",
  },
  openGraph: {
    title: "La Gardash | Luxury Dining Experience",
    description:
      "Experience Michelin-star inspired dining with our exquisite seasonal menus and world-class service.",
    url: "https://luminadining.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "La Gardash Restaurant — Luxury Dining Experience",
      },
    ],
  },
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <SignatureDishes />
      <FeaturedMenu />
      <ReservationCTA />
      <Testimonials />
      <InstagramFeed />
    </main>
  )
}
