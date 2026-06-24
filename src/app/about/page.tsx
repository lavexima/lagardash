import type { Metadata } from "next"
import AboutPageClient from "./page-client"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story of La Gardash — founded in 2010, guided by Chef Alexander Wright, and driven by a passion for culinary perfection.",
  openGraph: {
    title: "About | La Gardash Dining",
    description:
      "The story behind our three Michelin star-inspired dining experience.",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    ],
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
