"use client"

import { motion } from "framer-motion"
import { slideUp, staggerContainer } from "@/lib/animations"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

export function FeaturedMenu() {
  const { t } = useLanguage()

  const featuredItems = [
    {
      category: t.featuredMenu.starters,
      items: [
        { name: t.featuredMenu.item1, price: "$32", description: t.featuredMenu.item1_desc },
        { name: t.featuredMenu.item2, price: "$28", description: t.featuredMenu.item2_desc },
      ],
    },
    {
      category: t.featuredMenu.mains,
      items: [
        { name: t.featuredMenu.item3, price: "$56", description: t.featuredMenu.item3_desc },
        { name: t.featuredMenu.item4, price: "$62", description: t.featuredMenu.item4_desc },
      ],
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <motion.div className="w-full lg:w-1/3" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.p variants={slideUp} className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">{t.featuredMenu.sectionTag}</motion.p>
            <motion.h2 variants={slideUp} className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">{t.featuredMenu.title}</motion.h2>
            <motion.p variants={slideUp} className="text-muted-foreground font-light leading-relaxed mb-8">{t.featuredMenu.subtitle}</motion.p>
            <motion.div variants={slideUp}>
              <Link href="/menu" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors group">
                {t.featuredMenu.viewFull}
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {featuredItems.map((section, idx) => (
              <motion.div key={section.category} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: idx * 0.2 }}>
                <h3 className="font-heading text-2xl font-semibold mb-8 pb-4 border-b border-border/50">{section.category}</h3>
                <div className="space-y-8">
                  {section.items.map((item) => (
                    <div key={item.name} className="group cursor-pointer">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-lg font-medium group-hover:text-primary transition-colors">{item.name}</h4>
                        <div className="flex-1 mx-4 border-b border-dashed border-border/50 group-hover:border-primary/30 transition-colors" />
                        <span className="font-heading text-xl">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground font-light">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
