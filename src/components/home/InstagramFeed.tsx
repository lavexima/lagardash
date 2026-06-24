"use client"

import { motion } from "framer-motion"
import { Camera } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const feedImages = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=400&h=400",
]

export function InstagramFeed() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 text-center mb-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col items-center justify-center gap-4">
          <Camera className="h-8 w-8 text-primary" />
          <h3 className="font-heading text-3xl font-bold tracking-tight">{t.instagram.handle}</h3>
          <p className="text-muted-foreground text-sm font-light uppercase tracking-widest">{t.instagram.subtitle}</p>
        </motion.div>
      </div>
      <div className="flex flex-nowrap overflow-hidden">
        <div className="flex w-full min-w-max animate-marquee gap-1 hover:[animation-play-state:paused]">
          {[...feedImages, ...feedImages].map((img, index) => (
            <a key={index} href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0 group block overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
