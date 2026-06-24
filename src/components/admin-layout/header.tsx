"use client"

import { useTheme } from "next-themes"
import { Bell, Search, Sun, Moon, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AdminHeader() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b bg-background/60 backdrop-blur-xl px-4 sm:gap-x-6 sm:px-6 lg:px-8">
      {/* Mobile: Logo */}
      <Link href="/admin" className="md:hidden font-bold text-lg bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
        La Gardash Admin
      </Link>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-end">
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <Button variant="ghost" size="icon" className="relative group">
            <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <Bell className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="sr-only">View notifications</span>
          </Button>

          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-border" aria-hidden="true" />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-white text-xs font-bold ring-2 ring-amber-500/30">
              AD
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="text-sm font-medium">Admin User</span>
              <span className="text-xs text-muted-foreground">admin@lagardash.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
