"use client"

import { motion } from "framer-motion"
import { slideUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations"
import { Award, Clock, Users } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export default function AboutPageClient() {
  const { t } = useLanguage()
  const a = t.about

  const milestones = [
    { year: "2010", title: a.m1_title, desc: a.m1_desc, icon: Clock },
    { year: "2014", title: a.m2_title, desc: a.m2_desc, icon: Award },
    { year: "2018", title: a.m3_title, desc: a.m3_desc, icon: Users },
    { year: "2024", title: a.m4_title, desc: a.m4_desc, icon: Award },
  ]

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden mb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000" alt="Restaurant Interior" className="w-full h-full object-cover" />
        </div>
        <motion.div className="relative z-20 text-center px-4" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.p variants={slideUp} className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">{a.heroTag}</motion.p>
          <motion.h1 variants={slideUp} className="text-white font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6">{a.heroTitle}</motion.h1>
          <motion.p variants={slideUp} className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto uppercase tracking-widest">{a.heroSubtitle}</motion.p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div className="w-full md:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideInLeft}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1000" alt="Culinary Preparation" className="rounded-none w-full h-[600px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
          <motion.div className="w-full md:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.p variants={slideUp} className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">{a.beginningTag}</motion.p>
            <motion.h2 variants={slideUp} className="font-heading text-4xl font-bold tracking-tight mb-6">{a.beginningTitle.split("\n").map((line, i) => (<span key={i}>{line}{i === 0 && <br />}</span>))}</motion.h2>
            <motion.div variants={slideUp} className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>{a.p1}</p>
              <p>{a.p2}</p>
            </motion.div>
            <div className="grid grid-cols-3 gap-8 mt-12 border-t border-border pt-8">
              <div className="flex flex-col gap-2"><span className="font-heading text-4xl text-primary">12+</span><span className="text-xs uppercase tracking-widest text-muted-foreground">{a.stat1}</span></div>
              <div className="flex flex-col gap-2"><span className="font-heading text-4xl text-primary">3</span><span className="text-xs uppercase tracking-widest text-muted-foreground">{a.stat2}</span></div>
              <div className="flex flex-col gap-2"><span className="font-heading text-4xl text-primary">40k+</span><span className="text-xs uppercase tracking-widest text-muted-foreground">{a.stat3}</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chef */}
      <section className="bg-secondary/30 py-32 mb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <motion.div className="w-full md:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideInRight}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=1000" alt="Head Chef" className="w-full h-[600px] object-cover" />
            </motion.div>
            <motion.div className="w-full md:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.p variants={slideUp} className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">{a.chefTag}</motion.p>
              <motion.h2 variants={slideUp} className="font-heading text-4xl font-bold tracking-tight mb-6">{a.chefTitle}</motion.h2>
              <motion.div variants={slideUp} className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <p>{a.chef_p1}</p>
                <p>{a.chef_p2}</p>
                <blockquote className="border-l-2 border-primary pl-6 italic text-foreground mt-8 text-lg">{a.chef_quote}</blockquote>
              </motion.div>
              <motion.div variants={slideUp} className="mt-10 opacity-70">
                <h3 className="font-heading text-3xl italic">A. Wright</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{a.chef_role}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-2xl mx-auto mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.p variants={slideUp} className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">{a.milestoneTag}</motion.p>
          <motion.h2 variants={slideUp} className="font-heading text-4xl font-bold tracking-tight">{a.milestoneTitle}</motion.h2>
        </motion.div>
        <div className="max-w-4xl mx-auto relative border-l border-border pl-8 md:pl-0 md:border-none">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          {milestones.map((item, idx) => (
            <motion.div key={item.year} className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <div className="absolute left-[-37px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />
              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pl-16" : "md:pr-16 text-left md:text-right"}`}>
                <div className={`flex items-center gap-4 mb-4 ${idx % 2 !== 0 ? "md:justify-end" : ""}`}>
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="font-heading text-2xl font-bold text-primary">{item.year}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
