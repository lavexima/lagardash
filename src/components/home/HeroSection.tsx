"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div className="absolute inset-0 w-full h-full z-0" style={{ opacity: videoOpacity }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 z-10" />
        <video autoPlay muted loop playsInline
          className="w-full h-full object-cover scale-105"
          poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2000"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-pouring-wine-in-a-glass-at-a-fancy-dinner-40049-large.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute top-28 left-8 w-16 h-16 border-t border-l border-primary/40 z-20 hidden md:block" />
      <div className="absolute top-28 right-8 w-16 h-16 border-t border-r border-primary/40 z-20 hidden md:block" />
      <div className="absolute bottom-20 left-8 w-16 h-16 border-b border-l border-primary/40 z-20 hidden md:block" />
      <div className="absolute bottom-20 right-8 w-16 h-16 border-b border-r border-primary/40 z-20 hidden md:block" />

      <motion.div className="relative z-20 text-center px-4 max-w-5xl mx-auto" style={{ y: textY }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="inline-flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-primary/60" />
          <span className="text-primary font-medium tracking-[0.4em] uppercase text-xs md:text-sm">{t.hero.badge}</span>
          <div className="w-8 h-px bg-primary/60" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-white font-heading text-6xl md:text-8xl lg:text-[7rem] font-light tracking-tight mb-8 leading-none drop-shadow-2xl"
        >
          {t.hero.title1}<br />
          <span className="text-gold-gradient italic font-semibold">{t.hero.title2}</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/75 text-base md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/reservation" className={cn(buttonVariants({ size: "lg" }), "rounded-none px-10 py-7 text-sm uppercase tracking-widest bg-primary text-primary-foreground hover:bg-white hover:text-black transition-all duration-500 min-w-[200px]")}>
            {t.hero.cta_reserve}
          </Link>
          <Link href="/menu" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-none px-10 py-7 text-sm uppercase tracking-widest border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-500 bg-transparent min-w-[200px]")}>
            {t.hero.cta_menu}
          </Link>
        </motion.div>
      </motion.div>

      <motion.button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        aria-label="Scroll down"
      >
        <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase group-hover:text-white/80 transition-colors">{t.hero.scroll}</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <ChevronDown className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  )
}
