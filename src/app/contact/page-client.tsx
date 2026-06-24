"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { slideUp, staggerContainer } from "@/lib/animations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export default function ContactPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t } = useLanguage()
  const c = t.contact

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true) }, 1500)
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background relative">
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <motion.div className="text-center max-w-2xl mx-auto mb-16" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.p variants={slideUp} className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">{c.sectionTag}</motion.p>
          <motion.h1 variants={slideUp} className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-6">{c.title}</motion.h1>
          <motion.p variants={slideUp} className="text-muted-foreground font-light leading-relaxed mb-4">{c.subtitle}</motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto mb-24">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-12">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3"><MapPin className="text-primary" /> {c.locationTitle}</h3>
              <p className="text-muted-foreground font-light leading-relaxed whitespace-pre-line ml-9">{c.locationAddr}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-9">
              <div>
                <h4 className="font-medium mb-3 uppercase tracking-widest text-sm">{c.reservationsTitle}</h4>
                <p className="text-muted-foreground font-light mb-1">+90 (555) 123-4567</p>
                <p className="text-muted-foreground font-light">rezervasyon@luminadining.com</p>
              </div>
              <div>
                <h4 className="font-medium mb-3 uppercase tracking-widest text-sm">{c.eventsTitle}</h4>
                <p className="text-muted-foreground font-light mb-1">+90 (555) 123-4568</p>
                <p className="text-muted-foreground font-light">etkinlik@luminadining.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3"><Clock className="text-primary" /> {c.hoursTitle}</h3>
              <div className="space-y-3 ml-9 max-w-xs border-l-2 border-primary/30 pl-6">
                <div className="flex justify-between items-center"><span className="text-muted-foreground font-light">{c.h1}</span><span className="font-medium">{c.h1v}</span></div>
                <div className="flex justify-between items-center"><span className="text-muted-foreground font-light">{c.h2}</span><span className="font-medium">{c.h2v}</span></div>
                <div className="flex justify-between items-center"><span className="text-muted-foreground font-light">{c.h3}</span><span className="font-medium">{c.h3v}</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-secondary/20 border border-border/50 p-8 md:p-10 relative">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40" />
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                  <h3 className="font-heading text-2xl font-bold mb-8">{c.formTitle}</h3>
                  <div className="space-y-2"><label className="text-xs uppercase tracking-widest text-muted-foreground">{c.nameLabel}</label><Input required className="bg-background/50 border-border/50 rounded-none h-12 focus-visible:ring-primary" /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2"><label className="text-xs uppercase tracking-widest text-muted-foreground">{c.emailLabel}</label><Input required type="email" className="bg-background/50 border-border/50 rounded-none h-12 focus-visible:ring-primary" /></div>
                    <div className="space-y-2"><label className="text-xs uppercase tracking-widest text-muted-foreground">{c.phoneLabel}</label><Input type="tel" className="bg-background/50 border-border/50 rounded-none h-12 focus-visible:ring-primary" /></div>
                  </div>
                  <div className="space-y-2"><label className="text-xs uppercase tracking-widest text-muted-foreground">{c.subjectLabel}</label><Input required className="bg-background/50 border-border/50 rounded-none h-12 focus-visible:ring-primary" /></div>
                  <div className="space-y-2"><label className="text-xs uppercase tracking-widest text-muted-foreground">{c.messageLabel}</label><Textarea required className="bg-background/50 border-border/50 rounded-none min-h-[150px] resize-none focus-visible:ring-primary" /></div>
                  <Button type="submit" disabled={isSubmitting} className="w-full h-14 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-sm uppercase tracking-widest transition-all gap-2">
                    {isSubmitting ? "..." : <><Send className="w-4 h-4" /> {c.sendBtn}</>}
                  </Button>
                </motion.form>
              ) : (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center flex flex-col items-center justify-center min-h-[500px]">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6"><CheckCircle2 className="w-8 h-8 text-primary" /></div>
                  <h3 className="font-heading text-2xl font-bold mb-4">{c.successTitle}</h3>
                  <p className="text-muted-foreground font-light mb-8 max-w-[250px] mx-auto">{c.successMsg}</p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)} className="rounded-none px-8 py-6 text-xs uppercase tracking-widest border-border hover:border-primary hover:text-primary transition-colors">{c.sendAnother}</Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full h-[500px] border border-border/50 relative overflow-hidden bg-muted group">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528000654!2d-74.14448744410118!3d40.69763123330689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2str!4v1714488390750!5m2!1sen!2str" width="100%" height="100%" style={{ border: 0, filter: "grayscale(100%) opacity(0.8) contrast(1.2)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="transition-all duration-700 group-hover:filter-none" />
          <div className="absolute inset-0 pointer-events-none border-[12px] border-background/50 z-10" />
        </motion.div>
      </section>
    </div>
  )
}
