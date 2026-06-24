"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { slideUp, staggerContainer } from "@/lib/animations"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays, Clock, Users, CheckCircle2 } from "lucide-react"
import { format } from "date-fns"
import { tr, enUS } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/language-context"

export default function ReservationPageClient() {
  const [date, setDate] = useState<Date>()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t, locale } = useLanguage()
  const r = t.reservation

  const dateLocale = locale === "tr" ? tr : enUS

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const timeSlots = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"]

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background relative">
      <div className="absolute top-0 left-0 w-1/3 h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <motion.div className="text-center max-w-2xl mx-auto mb-16" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.p variants={slideUp} className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">{r.sectionTag}</motion.p>
          <motion.h1 variants={slideUp} className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-6">{r.title}</motion.h1>
          <motion.p variants={slideUp} className="text-muted-foreground font-light leading-relaxed mb-4">{r.p1}</motion.p>
          <motion.p variants={slideUp} className="text-xs text-muted-foreground/80 uppercase tracking-widest">{r.p2_prefix} <a href="tel:+905551234567" className="text-primary hover:underline">+90 (555) 123-4567</a>{r.p2_suffix}</motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="bg-secondary/20 border border-border/50 p-6 md:p-10 relative">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40" />
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <label className="text-sm uppercase tracking-widest text-muted-foreground">{r.dateLabel}</label>
                      <Popover>
                        <PopoverTrigger render={
                          <Button variant="outline" className={cn("w-full justify-start text-left font-normal bg-background/50 border-border/50 h-12 rounded-none", !date && "text-muted-foreground")}>
                            <CalendarDays className="mr-2 h-4 w-4 text-primary" />
                            {date ? format(date, "PPP", { locale: dateLocale }) : <span>{r.datePlaceholder}</span>}
                          </Button>
                        } />
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar mode="single" selected={date} onSelect={setDate} disabled={(date) => date < new Date() || date < new Date("1900-01-01")} />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm uppercase tracking-widest text-muted-foreground">{r.timeLabel}</label>
                      <Select required>
                        <SelectTrigger className="w-full bg-background/50 border-border/50 h-12 rounded-none">
                          <Clock className="mr-2 h-4 w-4 text-primary" />
                          <SelectValue placeholder={r.timePlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map(time => <SelectItem key={time} value={time}>{time}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm uppercase tracking-widest text-muted-foreground">{r.guestsLabel}</label>
                      <Select required>
                        <SelectTrigger className="w-full bg-background/50 border-border/50 h-12 rounded-none">
                          <Users className="mr-2 h-4 w-4 text-primary" />
                          <SelectValue placeholder={r.guestsPlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map(num => <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? r.guest : r.guests}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border/30">
                    <div className="space-y-3">
                      <label className="text-sm uppercase tracking-widest text-muted-foreground">{r.nameLabel}</label>
                      <Input required placeholder="John Doe" className="bg-background/50 border-border/50 h-12 rounded-none focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm uppercase tracking-widest text-muted-foreground">{r.phoneLabel}</label>
                      <Input required type="tel" placeholder="+1 (555) 000-0000" className="bg-background/50 border-border/50 h-12 rounded-none focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-3 md:col-span-2">
                      <label className="text-sm uppercase tracking-widest text-muted-foreground">{r.emailLabel}</label>
                      <Input required type="email" placeholder="john@example.com" className="bg-background/50 border-border/50 h-12 rounded-none focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-3 md:col-span-2">
                      <label className="text-sm uppercase tracking-widest text-muted-foreground">{r.requestsLabel}</label>
                      <Textarea placeholder={r.requestsPlaceholder} className="bg-background/50 border-border/50 min-h-[120px] rounded-none focus-visible:ring-primary resize-none" />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" disabled={isSubmitting} className="w-full h-14 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-sm uppercase tracking-widest transition-all duration-300">
                      {isSubmitting ? "..." : r.confirmBtn}
                    </Button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-secondary/20 border border-border/50 p-12 text-center relative flex flex-col items-center justify-center min-h-[400px]">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40" />
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }} className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="font-heading text-3xl font-bold mb-4">{r.successTitle}</h3>
                <p className="text-muted-foreground font-light leading-relaxed max-w-md mx-auto mb-8">{r.successMsg}</p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)} className="rounded-none px-8 py-6 text-xs uppercase tracking-widest border-border hover:border-primary hover:text-primary transition-colors">
                  {r.anotherBooking}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
