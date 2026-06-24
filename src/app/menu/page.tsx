import type { Metadata } from "next"
import MenuPage from "./page-client"

export const metadata: Metadata = {
  title: "Our Menu",
  description:
    "Explore La Gardash's seasonal tasting menu — from Wagyu tartare starters to dark chocolate soufflé desserts. Crafted with the world's finest ingredients.",
  openGraph: {
    title: "Menu | La Gardash Dining",
    description:
      "A celebration of seasonal ingredients, crafted with precision and passion.",
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
    ],
  },
}

export default function MenuPageWrapper() {
  return <MenuPage />
}
