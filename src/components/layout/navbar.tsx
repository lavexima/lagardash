"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, Globe, Moon, Sun } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/i18n/language-context"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()
  const { t, locale, setLocale } = useLanguage()

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.menu, href: "/menu" },
    { name: t.nav.gallery, href: "/gallery" },
    { name: t.nav.blog, href: "/blog" },
    { name: t.nav.contact, href: "/contact" },
  ]

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-colors duration-500 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 shadow-sm"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <span className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-primary transition-transform duration-300 group-hover:scale-105">
              La Gardash
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:text-primary relative group",
                    isActive ? "text-primary" : isScrolled ? "text-foreground/80" : "text-white/90"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full",
                    isActive && "w-full"
                  )} />
                </Link>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("rounded-full gap-1", !isScrolled && "text-white hover:text-primary hover:bg-white/10")}
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-[10px] uppercase font-bold">{locale}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[160px]">
                <DropdownMenuItem
                  onClick={() => setLocale("tr")}
                  className={cn("cursor-pointer", locale === "tr" && "text-primary font-semibold")}
                >
                  🇹🇷 {t.nav.lang_tr}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLocale("en")}
                  className={cn("cursor-pointer", locale === "en" && "text-primary font-semibold")}
                >
                  🇬🇧 {t.nav.lang_en}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={cn("rounded-full", !isScrolled && "text-white hover:text-primary hover:bg-white/10")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Link
              href="/reservation"
              className={cn(
                buttonVariants(),
                "rounded-none px-8 py-6 text-sm uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              )}
            >
              {t.nav.bookTable}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={cn("rounded-full", !isScrolled && !mobileMenuOpen && "text-white")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <button
              type="button"
              className={cn("p-2", !isScrolled && !mobileMenuOpen && "text-white")}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-background border-b shadow-lg"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-3 py-4 text-base uppercase tracking-widest font-medium border-b border-border/50",
                  pathname === link.href ? "text-primary" : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            {/* Mobile language toggle */}
            <div className="flex gap-3 px-3 pt-4">
              <button
                onClick={() => setLocale("tr")}
                className={cn("text-sm uppercase tracking-widest px-3 py-1.5 border transition-colors", locale === "tr" ? "border-primary text-primary" : "border-border text-muted-foreground")}
              >
                🇹🇷 TR
              </button>
              <button
                onClick={() => setLocale("en")}
                className={cn("text-sm uppercase tracking-widest px-3 py-1.5 border transition-colors", locale === "en" ? "border-primary text-primary" : "border-border text-muted-foreground")}
              >
                🇬🇧 EN
              </button>
            </div>
            <div className="pt-4 pb-2">
              <Link
                href="/reservation"
                className={cn(buttonVariants(), "w-full rounded-none py-6 text-sm uppercase tracking-widest bg-primary text-primary-foreground")}
              >
                {t.nav.bookTable}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
