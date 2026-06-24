import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FloatingActions } from "@/components/floating-actions"
import { LanguageProvider } from "@/lib/i18n/language-context"

export const metadata: Metadata = {
  title: {
    default: "La Gardash | Lüks Yemek Deneyimi",
    template: "%s | La Gardash",
  },
  description:
    "Michelin yıldızı ilhamlı yemek deneyimimizle eşsiz mevsimlik menülerimizi ve dünya standartlarında hizmetimizi keşfedin. La Gardash'da masanızı bugün ayırtın.",
  keywords: ["lüks restoran", "fine dining", "michelin yıldızı", "tadım menüsü", "İstanbul restoran", "luxury restaurant"],
  authors: [{ name: "La Gardash Dining" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    url: "https://luminadining.com",
    siteName: "La Gardash Dining",
    title: "La Gardash | Lüks Yemek Deneyimi",
    description: "Michelin yıldızı ilhamlı yemek deneyimi — mevsimlik menüler ve dünya standartlarında servis.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "La Gardash Restaurant",
      },
    ],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0F0F14" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingActions />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
