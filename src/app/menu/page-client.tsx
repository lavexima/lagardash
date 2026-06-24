"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { slideUp, staggerContainer } from "@/lib/animations"
import { Input } from "@/components/ui/input"
import { Search, QrCode, X } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import QRCode from "react-qr-code"

type MenuItem = { id: string; name: string; description: string; price: string; category: string; dietary?: string[]; featured?: boolean; image?: string }

export default function MenuPage() {
  const { t } = useLanguage()
  const m = t.menu
  const [isQrModalOpen, setIsQrModalOpen] = useState(false)

  const menuItems: MenuItem[] = [
    { id: "s1", name: "Wagyu Dana Tartarı / Wagyu Beef Tartare", description: "Bıldırcın yumurtası, siyah sarımsak, mayalı ekmek cipsi, trüf emülsiyon.", price: "₺1.200", category: m.starters, dietary: ["GF Option"], featured: true, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" },
    { id: "s2", name: "Tarak Carpaccio / Scallop Carpaccio", description: "Parmak misket limonu, yuzu ponzu, micro shiso, tütsülenmiş zeytinyağı.", price: "₺980", category: m.starters, dietary: ["GF", "DF"], image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800" },
    { id: "s3", name: "Foie Gras Torchon", description: "İncir kompostosu, kızartılmış brioche, olgunlaştırılmış balsamik.", price: "₺1.350", category: m.starters, image: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?auto=format&fit=crop&q=80&w=800" },
    { id: "s4", name: "Kızarmış Miras Pancar / Heritage Beets", description: "Çırpılmış keçi peyniri, şekerli ceviz, narenciye vinaigrette.", price: "₺780", category: m.starters, dietary: ["V", "GF"], image: "https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&q=80&w=800" },
    { id: "m1", name: "Kuru Olgunlaştırılmış Ördek Göğsü / Dry-Aged Duck", description: "Hindiba, baharatlı erik, ördek sosu, kereviz püresi.", price: "₺1.850", category: m.mains, dietary: ["GF"], featured: true, image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=800" },
    { id: "m2", name: "Şili Levreği / Chilean Sea Bass", description: "Miso sırçası, bebek çin lahanası, dashi suyu, şitake.", price: "₺2.100", category: m.mains, dietary: ["DF"], image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&q=80&w=800" },
    { id: "m3", name: "Wagyu A5 Dana Biftek / Wagyu A5 Striploin", description: "Kömür ızgara Japon Wagyu, siyah sarımsak püresi, yabani mantarlar.", price: "₺4.200", category: m.mains, dietary: ["GF"], image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" },
    { id: "m4", name: "Yabani Mantar Risotto / Wild Mushroom Risotto", description: "Acquerello pirinci, 24 aylık Parmigiano Reggiano, dilimlenmiş trüf.", price: "₺1.480", category: m.mains, dietary: ["V", "GF"], image: "https://images.unsplash.com/photo-1626200419188-348e3532cba9?auto=format&fit=crop&q=80&w=800" },
    { id: "m5", name: "Istakoz Thermidor / Lobster Thermidor", description: "Maine ıstakozu, konyak bisküvi, tarhun kreması, gruyère.", price: "₺3.500", category: m.mains, image: "https://images.unsplash.com/photo-1553659971-f01207815844?auto=format&fit=crop&q=80&w=800" },
    { id: "d1", name: "Bitter Çikolata Sufle / Chocolate Soufflé", description: "Madagaskar vanilyalı dondurma, altın yaprak.", price: "₺680", category: m.desserts, dietary: ["V"], image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800" },
    { id: "d2", name: "Limon Fesleğen Tart / Lemon Basil Tart", description: "Yüzey ateşlenmiş beze, fesleğen yağı, şekerlenmiş çam fıstığı.", price: "₺580", category: m.desserts, dietary: ["V"], image: "https://images.unsplash.com/photo-1519915028121-7d3463d20a1b?auto=format&fit=crop&q=80&w=800" },
    { id: "d3", name: "Matcha Mille-Feuille", description: "Puf böreği, beyaz çikolata ganaj, ahududu sosu.", price: "₺620", category: m.desserts, dietary: ["V"], image: "https://images.unsplash.com/photo-1626105828812-7db552a41d01?auto=format&fit=crop&q=80&w=800" },
    { id: "dr1", name: "Tütsülenmiş Old Fashioned / Smoked Old Fashioned", description: "Bourbon, kayın odunu dumanı, Angostura, portakal kabuğu.", price: "₺480", category: m.drinks, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" },
    { id: "dr2", name: "Mürver Çiçeği Spritz / Elderflower Spritz", description: "Prosecco, mürver çiçeği likörü, soda, nane.", price: "₺380", category: m.drinks, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800" },
    { id: "dr3", name: "Şampanya / Champagne", description: "Laurent-Perrier La Cuvée Brut, Champagne, Fransa.", price: "₺850", category: m.drinks, image: "https://images.unsplash.com/photo-1599939571322-792a326cb689?auto=format&fit=crop&q=80&w=800" },
  ]

  const categories = [m.all, m.starters, m.mains, m.desserts, m.drinks]
  const [activeCategory, setActiveCategory] = useState(m.all)
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = menuItems.filter(item => {
    const matchesCat = activeCategory === m.all || item.category === activeCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background relative">
      <div className="absolute top-0 left-0 w-1/3 h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <motion.div className="text-center max-w-2xl mx-auto mb-12" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.p variants={slideUp} className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">{m.sectionTag}</motion.p>
          <motion.h1 variants={slideUp} className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-6">{m.title}</motion.h1>
          <motion.p variants={slideUp} className="text-muted-foreground font-light leading-relaxed mb-8">{m.subtitle}</motion.p>
          
          <motion.div variants={slideUp} className="flex justify-center mb-10">
            <button 
              onClick={() => setIsQrModalOpen(true)}
              className="flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-6 py-3 rounded-full hover:bg-primary/20 transition-all duration-300"
            >
              <QrCode className="w-5 h-5" />
              <span className="font-medium tracking-wide">Dijital Menü / Digital Menu</span>
            </button>
          </motion.div>

          <motion.div variants={slideUp} className="relative max-w-md mx-auto mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="text" placeholder={m.searchPlaceholder} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-12 bg-secondary/50 border-border/50 focus-visible:ring-primary h-12 rounded-full" />
          </motion.div>
          <motion.div variants={slideUp} className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat as any)} className={`px-6 py-2.5 text-sm font-medium transition-all duration-300 tracking-wider uppercase ${activeCategory === cat ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border/50"}`}>
                {cat}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 text-xs text-muted-foreground">
          {[["V", m.veg], ["GF", m.gf], ["DF", m.df], ["GF Option", m.gfOption]].map(([key, label]) => (
            <div key={key} className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 border border-border/50 rounded uppercase tracking-wider">{key}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <motion.div layout className="max-w-6xl mx-auto min-h-[500px]">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-20 text-muted-foreground">
                <p className="font-light text-lg">{m.noResults}</p>
                <button onClick={() => { setSearchQuery(""); setActiveCategory(m.all) }} className="mt-4 text-primary text-sm hover:underline">{m.clearFilters}</button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((item) => (
                  <motion.div layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} key={item.id} className="group flex flex-col bg-secondary/10 border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      {item.featured && (
                        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 text-[10px] uppercase tracking-widest font-medium shadow-md">
                          {m.chefsPick}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-3 gap-4">
                        <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors duration-300 leading-tight">
                          {item.name}
                        </h3>
                        <span className="font-heading text-xl text-primary font-light whitespace-nowrap">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground font-light text-sm leading-relaxed mb-4 flex-1">{item.description}</p>
                      {item.dietary && (
                        <div className="flex gap-2 flex-wrap mt-auto">
                          {item.dietary.map(d => <span key={d} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-border/50 text-muted-foreground">{d}</span>)}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-xs text-muted-foreground/60 mt-16 max-w-xl mx-auto font-light">{m.allergenNote}</motion.p>
      </section>

      {/* QR Code Modal */}
      <AnimatePresence>
        {isQrModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsQrModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background border border-border/50 p-8 md:p-12 max-w-sm w-full relative shadow-2xl flex flex-col items-center text-center"
            >
              <button 
                onClick={() => setIsQrModalOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="font-heading text-2xl font-bold mb-2">La Gardash</h3>
              <p className="text-muted-foreground text-sm font-light mb-8 uppercase tracking-widest">Dijital Menü / Digital Menu</p>
              
              <div className="bg-white p-4 rounded-xl shadow-inner mb-8">
                <QRCode value="https://luminadining.com/menu" size={200} />
              </div>
              
              <p className="text-sm font-light text-muted-foreground">
                Menüyü cihazınızda görüntülemek için kameranızla QR kodu okutun.
                <br /><br />
                Scan the QR code with your camera to view the menu on your device.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
