"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { slideUp, staggerContainer } from "@/lib/animations"
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200", alt: "Restaurant Interior", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800", alt: "Wagyu Dish", span: "md:col-span-1 md:row-span-1" },
  { id: 3, src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800", alt: "Cocktails", span: "md:col-span-1 md:row-span-1" },
  { id: 4, src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800", alt: "Wine Pouring", span: "md:col-span-1 md:row-span-2" },
  { id: 5, src: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800", alt: "Appetizer", span: "md:col-span-1 md:row-span-1" },
  { id: 6, src: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?auto=format&fit=crop&q=80&w=800", alt: "Truffle Pasta", span: "md:col-span-1 md:row-span-1" },
  { id: 7, src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1200", alt: "Kitchen Preparation", span: "md:col-span-2 md:row-span-1" },
  { id: 8, src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800", alt: "Plated Dessert", span: "md:col-span-1 md:row-span-1" },
  { id: 9, src: "https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&q=80&w=800", alt: "Forest Foraging", span: "md:col-span-1 md:row-span-1" },
  { id: 10, src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200", alt: "Fine Wine Selection", span: "md:col-span-2 md:row-span-1" },
]

export default function GalleryPageClient() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const prev = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
  }, [selectedIndex])

  const next = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % images.length)
  }, [selectedIndex])

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background relative">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <motion.div className="text-center max-w-2xl mx-auto mb-16" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.p variants={slideUp} className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">{t.gallery.sectionTag}</motion.p>
          <motion.h1 variants={slideUp} className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-6">{t.gallery.title}</motion.h1>
          <motion.p variants={slideUp} className="text-muted-foreground font-light leading-relaxed">{t.gallery.subtitle}</motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-[repeat(6,200px)] gap-3 auto-rows-[200px]">
          {images.map((image, idx) => (
            <motion.div key={image.id} className={`relative group overflow-hidden cursor-pointer bg-muted ${image.span}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: idx * 0.07 }} onClick={() => openLightbox(idx)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center gap-2">
                <ZoomIn className="w-8 h-8 text-white" />
                <span className="text-white text-xs uppercase tracking-widest font-medium">{image.alt}</span>
              </div>
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-primary/0 group-hover:border-primary/80 transition-all duration-500" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-primary/0 group-hover:border-primary/80 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[100] bg-black/97 backdrop-blur-sm flex items-center justify-center" onClick={closeLightbox}>
            <button className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10 p-2" onClick={(e) => { e.stopPropagation(); closeLightbox() }} aria-label="Close lightbox"><X className="w-7 h-7" /></button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 p-3 hover:bg-white/10 rounded-full" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous image"><ChevronLeft className="w-8 h-8" /></button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 p-3 hover:bg-white/10 rounded-full" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next image"><ChevronRight className="w-8 h-8" /></button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest uppercase z-10">{selectedIndex + 1} / {images.length}</div>
            <AnimatePresence mode="wait">
              <motion.img key={selectedIndex} initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }} transition={{ duration: 0.3 }} src={images[selectedIndex].src} alt={images[selectedIndex].alt} className="max-w-[90vw] max-h-[85vh] object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
            </AnimatePresence>
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 text-white/70 text-sm font-light tracking-widest z-10">{images[selectedIndex].alt}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
