"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { translations, Locale } from "./translations"

type LanguageContextType = {
  locale: Locale
  t: typeof translations.tr
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "tr",
  t: translations.tr,
  setLocale: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr")

  useEffect(() => {
    const saved = localStorage.getItem("lumina-locale") as Locale | null
    if (saved && (saved === "tr" || saved === "en")) {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("lumina-locale", newLocale)
  }

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
