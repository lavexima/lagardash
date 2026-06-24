"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { MessageCircle, CalendarDays, X } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.8 }} transition={{ duration: 0.2, delay: 0.05 }} className="flex items-center gap-3">
              <span className="bg-background/90 backdrop-blur-md text-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-md border border-border/50 whitespace-nowrap">
                {t.floating.bookTable}
              </span>
              <Link href="/reservation" className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:shadow-xl" aria-label="Book a table" onClick={() => setIsOpen(false)}>
                <CalendarDays className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.8 }} transition={{ duration: 0.2 }} className="flex items-center gap-3">
              <span className="bg-background/90 backdrop-blur-md text-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-md border border-border/50 whitespace-nowrap">
                {t.floating.whatsapp}
              </span>
              <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5" />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.button onClick={() => setIsOpen(!isOpen)} className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-all hover:scale-110 hover:shadow-2xl" aria-label="Quick actions" whileTap={{ scale: 0.95 }}>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }}>
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </motion.div>
        {!isOpen && <span className="absolute inset-0 rounded-full animate-ping bg-primary/40" />}
      </motion.button>
    </div>
  )
}
