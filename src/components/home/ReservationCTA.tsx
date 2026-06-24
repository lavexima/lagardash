"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { CalendarDays, Phone } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function ReservationCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.0])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6])

  return (
    <section ref={ref} className="relative py-40 overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ scale, opacity }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2000" alt="La Gardash restaurant" className="w-full h-full object-cover" />
      </motion.div>

      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-primary/60 z-20" />
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent to-primary/60 z-20" />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-primary/60" />
            <span className="text-primary font-medium tracking-[0.4em] uppercase text-xs">{t.reservationCTA.tag}</span>
            <div className="w-12 h-px bg-primary/60" />
          </div>

          <h2 className="text-white font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            {t.reservationCTA.title1}{" "}
            <span className="text-gold-gradient italic font-light">{t.reservationCTA.title2}</span>
          </h2>

          <p className="text-white/70 font-light leading-relaxed text-lg mb-12 max-w-xl mx-auto">{t.reservationCTA.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/reservation" className={cn(buttonVariants({ size: "lg" }), "rounded-none px-10 py-7 text-sm uppercase tracking-widest bg-primary text-primary-foreground hover:bg-white hover:text-black transition-all duration-500 gap-2")}>
              <CalendarDays className="h-4 w-4" />
              {t.reservationCTA.cta_book}
            </Link>
            <a href="tel:+905551234567" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-none px-10 py-7 text-sm uppercase tracking-widest border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-500 bg-transparent gap-2")}>
              <Phone className="h-4 w-4" />
              {t.reservationCTA.cta_phone}
            </a>
          </div>

          <p className="text-white/40 text-xs mt-8 tracking-widest uppercase">{t.reservationCTA.note}</p>
        </motion.div>
      </div>
    </section>
  )
}
