import type { Metadata } from "next"
import BlogPage from "./page-client"

export const metadata: Metadata = {
  title: "Culinary Journal",
  description:
    "Explore stories, techniques, and inspiration from the La Gardash kitchen — from foraging expeditions to the art of the perfect soufflé.",
  openGraph: {
    title: "Blog | La Gardash Dining",
    description:
      "Discover the inspiration, techniques, and people behind the La Gardash experience.",
    images: [
      "https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&q=80&w=1200",
    ],
  },
}

export default function BlogPageWrapper() {
  return <BlogPage />
}
