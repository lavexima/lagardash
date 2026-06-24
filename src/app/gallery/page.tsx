import type { Metadata } from "next"
import GalleryPage from "./page-client"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual journey through La Gardash — explore our restaurant interior, signature dishes, and the artistry behind every plate.",
  openGraph: {
    title: "Gallery | La Gardash Dining",
    description: "A curated glimpse into the world of La Gardash.",
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200",
    ],
  },
}

export default function GalleryPageWrapper() {
  return <GalleryPage />
}
