"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { slideUp, staggerContainer } from "@/lib/animations"
import { ArrowRight, Clock, Tag } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const blogPosts = [
  { id: 1, title: "The Art of Foraging: A Chef's Journey", excerpt: "Join Chef Alexander as he explores the hidden culinary treasures of the surrounding forests, bringing wild flavors directly to your plate.", category: "Food Stories", date: "October 12, 2024", readTime: "5 min read", image: "https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&q=80&w=1200", featured: true },
  { id: 2, title: "Pairing Wine with Seasonal Truffles", excerpt: "Our Head Sommelier shares secrets on selecting the perfect vintage to complement the earthy notes of Alba white truffles.", category: "Wine & Spirits", date: "November 05, 2024", readTime: "4 min read", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800", featured: false },
  { id: 3, title: "Sustainability in Fine Dining", excerpt: "How La Gardash is redefining luxury dining through zero-waste initiatives and hyper-local sourcing from farms within 50 miles.", category: "Behind the Scenes", date: "December 01, 2024", readTime: "6 min read", image: "https://images.unsplash.com/photo-1592686092735-a6e300bd1b85?auto=format&fit=crop&q=80&w=800", featured: false },
  { id: 4, title: "The Japanese Wagyu Experience", excerpt: "Understanding the grading, sourcing, and precise preparation techniques behind our signature A5 Striploin.", category: "Ingredients", date: "January 15, 2025", readTime: "7 min read", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800", featured: false },
  { id: 5, title: "The Anatomy of a Perfect Soufflé", excerpt: "Our pastry chef reveals the science and artistry behind La Gardash's legendary dark chocolate soufflé — timing is everything.", category: "Technique", date: "February 20, 2025", readTime: "5 min read", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800", featured: false },
  { id: 6, title: "Salt, Time & Patience: Dry-Aging in-House", excerpt: "A behind-the-scenes look at our dry-aging room and the patience it takes to achieve perfect flavour development.", category: "Behind the Scenes", date: "March 10, 2025", readTime: "6 min read", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800", featured: false },
]

export default function BlogPageClient() {
  const { t } = useLanguage()
  const b = t.blog
  const allCategories = [b.all, ...Array.from(new Set(blogPosts.map(p => p.category)))]
  const [activeCategory, setActiveCategory] = useState(b.all)

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured && (activeCategory === b.all || post.category === activeCategory))

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background relative">
      <div className="absolute top-0 right-0 w-1/3 h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <motion.div className="text-center max-w-2xl mx-auto mb-16" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.p variants={slideUp} className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">{b.sectionTag}</motion.p>
          <motion.h1 variants={slideUp} className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-6">{b.title}</motion.h1>
          <motion.p variants={slideUp} className="text-muted-foreground font-light leading-relaxed">{b.subtitle}</motion.p>
        </motion.div>

        {featuredPost && activeCategory === b.all && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-16">
            <div className="flex flex-col lg:flex-row gap-0 bg-secondary/10 border border-border/50 group overflow-hidden cursor-pointer hover:border-primary/50 transition-colors duration-500">
              <div className="w-full lg:w-3/5 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-[350px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs uppercase tracking-widest font-medium">{b.featured}</div>
              </div>
              <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center relative">
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/30 group-hover:border-primary/80 transition-colors duration-500" />
                <div className="flex items-center gap-3 mb-5 text-xs text-muted-foreground uppercase tracking-widest">
                  <Tag className="w-3 h-3 text-primary" />
                  <span className="text-primary font-medium">{featuredPost.category}</span>
                  <span className="text-border">·</span>
                  <span>{featuredPost.date}</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">{featuredPost.title}</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-8">{featuredPost.excerpt}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs text-muted-foreground"><Clock className="w-4 h-4" />{featuredPost.readTime}</span>
                  <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-primary group-hover:gap-3 transition-all duration-300">{b.readStory} <ArrowRight className="h-4 w-4" /></span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="flex flex-wrap gap-2 mb-10">
          {allCategories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat as any)} className={`px-5 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-300 border ${activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post, idx) => (
            <motion.article key={post.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-secondary/10 border border-border/50 group overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-500 flex flex-col hover:shadow-lg hover:shadow-primary/5">
              <div className="overflow-hidden aspect-[4/3] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-md px-2 py-1 text-[10px] uppercase tracking-widest font-medium text-primary">{post.category}</div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs text-muted-foreground mb-3 tracking-wider">{post.date}</span>
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">{post.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between border-t border-border/30 pt-4">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="w-3 h-3" />{post.readTime}</span>
                  <span className="text-primary group-hover:translate-x-1 transition-transform duration-300"><ArrowRight className="h-4 w-4" /></span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {regularPosts.length === 0 && (
          <div className="text-center py-20 text-muted-foreground"><p>{b.noPosts}</p></div>
        )}
      </section>
    </div>
  )
}
