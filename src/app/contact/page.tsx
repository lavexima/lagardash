import type { Metadata } from "next"
import ContactPage from "./page-client"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with La Gardash for reservations, private events, or general inquiries. We are located at 123 Culinary Avenue, NY.",
  openGraph: {
    title: "Contact | La Gardash Dining",
    description:
      "Reach out to our team for reservations, private events, and general inquiries.",
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200",
    ],
  },
}

export default function ContactPageWrapper() {
  return <ContactPage />
}
