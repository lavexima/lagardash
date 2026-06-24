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
            {/* Book Table */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="flex items-center gap-3"
            >
              <span className="bg-background/95 backdrop-blur-md text-foreground text-xs font-medium px-4 py-2 rounded-2xl shadow-lg border border-border/40 whitespace-nowrap">
                {t.floating.bookTable}
              </span>
              <Link
                href="/reservation"
                className="relative flex h-13 w-13 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-700"
                style={{ width: 52, height: 52 }}
                aria-label="Book a table"
                onClick={() => setIsOpen(false)}
              >
                <CalendarDays className="h-5 w-5 relative z-10" />
              </Link>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-3"
            >
              <span className="bg-background/95 backdrop-blur-md text-foreground text-xs font-medium px-4 py-2 rounded-2xl shadow-lg border border-border/40 whitespace-nowrap">
                {t.floating.whatsapp}
              </span>
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/50 overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-700"
                style={{ width: 52, height: 52 }}
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 relative z-10" />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-2xl shadow-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-primary/60 overflow-hidden"
        style={{ width: 56, height: 56 }}
        aria-label="Quick actions"
        whileTap={{ scale: 0.92 }}
      >
        {/* Shimmer */}
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent hover:translate-x-full transition-transform duration-700 pointer-events-none" />
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
          {isOpen ? <X className="h-6 w-6 relative z-10" /> : <MessageCircle className="h-6 w-6 relative z-10" />}
        </motion.div>
        {!isOpen && (
          <span className="absolute inset-0 rounded-2xl animate-ping bg-primary/35 pointer-events-none" />
        )}
      </motion.button>
    </div>
  )
}
