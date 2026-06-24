"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { slideUp, staggerContainer } from "@/lib/animations"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

const dishImages = [
  "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?auto=format&fit=crop&q=80&w=800&h=1000",
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800&h=1000",
  "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800&h=1000",
]

export function SignatureDishes() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const dishes = [
    { name: t.dishes.dish1_name, description: t.dishes.dish1_desc, image: dishImages[0] },
    { name: t.dishes.dish2_name, description: t.dishes.dish2_desc, image: dishImages[1] },
    { name: t.dishes.dish3_name, description: t.dishes.dish3_desc, image: dishImages[2] },
  ]

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-2xl mx-auto mb-20" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.p variants={slideUp} className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">{t.dishes.sectionTag}</motion.p>
          <motion.h2 variants={slideUp} className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">{t.dishes.title}</motion.h2>
          <motion.p variants={slideUp} className="text-muted-foreground font-light leading-relaxed">{t.dishes.subtitle}</motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {dishes.map((dish, index) => (
            <motion.div key={dish.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true, margin: "-50px" }} className="group relative">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={dish.image} alt={dish.name} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{dish.name}</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">{dish.description}</p>
              <div className="w-12 h-px bg-primary/30 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-20 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }}>
          <Link href="/menu" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors group">
            {t.dishes.viewMenu}
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
