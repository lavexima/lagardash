"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { slideUp, staggerContainer } from "@/lib/animations"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { t } = useLanguage()

  const testimonials = [
    { quote: t.testimonials.q1, author: t.testimonials.q1_author, role: t.testimonials.q1_role, rating: 5 },
    { quote: t.testimonials.q2, author: t.testimonials.q2_author, role: t.testimonials.q2_role, rating: 5 },
    { quote: t.testimonials.q3, author: t.testimonials.q3_author, role: t.testimonials.q3_role, rating: 5 },
  ]

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((current + 1) % testimonials.length)

  return (
    <section className="py-24 md:py-36 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center max-w-2xl mx-auto mb-16" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.p variants={slideUp} className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">{t.testimonials.sectionTag}</motion.p>
          <motion.h2 variants={slideUp} className="font-heading text-4xl md:text-5xl font-bold tracking-tight">{t.testimonials.title}</motion.h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.15 }} viewport={{ once: true }}
              className="bg-secondary/20 border border-border/50 p-8 relative group hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary/40 group-hover:border-primary/80 transition-colors duration-500" />
              <Quote className="w-8 h-8 text-primary/30 mb-5" />
              <div className="flex gap-1 mb-5 text-primary">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary" />)}
              </div>
              <p className="text-foreground/75 font-light leading-relaxed mb-8 text-sm italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="border-t border-border/30 pt-5">
                <h4 className="font-semibold text-sm tracking-wide mb-0.5">{testimonial.author}</h4>
                <p className="text-muted-foreground text-xs font-light">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={`${current}-${t.testimonials.sectionTag}`} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.4 }}
                className="bg-secondary/20 border border-border/50 p-8 relative mx-auto max-w-md"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-5" />
                <div className="flex gap-1 mb-5 text-primary">
                  {[...Array(testimonials[current].rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary" />)}
                </div>
                <p className="text-foreground/75 font-light leading-relaxed mb-8 italic">&ldquo;{testimonials[current].quote}&rdquo;</p>
                <div className="border-t border-border/30 pt-5">
                  <h4 className="font-semibold text-sm tracking-wide mb-0.5">{testimonials[current].author}</h4>
                  <p className="text-muted-foreground text-xs font-light">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 border border-border/50 hover:border-primary/50 hover:text-primary transition-colors rounded-full"><ChevronLeft className="w-4 h-4" /></button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-4" : "bg-border"}`} />
              ))}
            </div>
            <button onClick={next} className="p-2 border border-border/50 hover:border-primary/50 hover:text-primary transition-colors rounded-full"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
