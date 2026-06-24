import type { Metadata } from "next"
import ReservationPage from "./page-client"

export const metadata: Metadata = {
  title: "Reserve a Table",
  description:
    "Book your dining experience at La Gardash. Reserve a table online — select your date, time, and party size for an unforgettable evening.",
  openGraph: {
    title: "Reservation | La Gardash Dining",
    description:
      "Reserve your table at La Gardash for an unforgettable fine dining experience.",
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200",
    ],
  },
}

export default function ReservationPageWrapper() {
  return <ReservationPage />
}
