"use client"

import Link from "next/link"
import { Camera, Users, Globe, MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/i18n/language-context"

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { label: t.footer.link_home, href: "/" },
    { label: t.footer.link_about, href: "/about" },
    { label: t.footer.link_menu, href: "/menu" },
    { label: t.footer.link_gallery, href: "/gallery" },
    { label: t.footer.link_events, href: "/contact" },
  ]

  return (
    <footer className="bg-background border-t pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-heading text-3xl font-bold tracking-tight text-primary">La Gardash</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{t.footer.tagline}</p>
            <div className="flex items-center gap-4">
              {[
                { href: "https://instagram.com", icon: Camera, label: "Instagram" },
                { href: "https://facebook.com", icon: Users, label: "Facebook" },
                { href: "https://twitter.com", icon: Globe, label: "Twitter" },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                      <ArrowRight className="h-3 w-3 mr-1" />
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">{t.footer.contactTitle}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{t.contact.locationAddr.replace("\\n", "\n")}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+90 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>rezervasyon@luminadining.com</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-border/50">
              <h5 className="font-medium text-sm mb-2">{t.footer.hoursTitle}</h5>
              <p className="text-xs text-muted-foreground flex justify-between mb-1">
                <span>{t.contact.h1}:</span> <span>{t.contact.h1v}</span>
              </p>
              <p className="text-xs text-muted-foreground flex justify-between mb-1">
                <span>{t.contact.h2}:</span> <span>{t.contact.h2v}</span>
              </p>
              <p className="text-xs text-muted-foreground flex justify-between">
                <span>{t.contact.h3}:</span> <span>{t.contact.h3v}</span>
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">{t.footer.newsletter}</h4>
            <p className="text-sm text-muted-foreground mb-4">{t.footer.newsletterDesc}</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder={t.footer.emailPlaceholder} className="bg-transparent border-border focus-visible:ring-primary rounded-none" required />
              <Button type="submit" className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs py-5">
                {t.footer.subscribe}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} La Gardash Dining. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">{t.footer.privacy}</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
