"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  UtensilsCrossed,
  CalendarDays,
  Image as ImageIcon,
  FileText,
  MessageSquare,
  Settings,
} from "lucide-react"

const sidebarItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Menu", href: "/admin/menu", icon: UtensilsCrossed },
  { name: "Reservations", href: "/admin/reservations", icon: CalendarDays },
  { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
  { name: "Blog", href: "/admin/blog", icon: FileText },
  { name: "Reviews", href: "/admin/reviews", icon: MessageSquare },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 hidden flex-col border-r bg-background/60 backdrop-blur-xl md:flex shadow-[4px_0_24px_rgba(0,0,0,0.02)] dark:shadow-[4px_0_24px_rgba(0,0,0,0.2)]">
      <div className="flex h-16 items-center px-6 py-4 border-b">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
          <UtensilsCrossed className="w-6 h-6 text-amber-500" />
          <span>La Gardash</span>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {sidebarItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href))

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 relative overflow-hidden",
                isActive
                  ? "text-primary bg-primary/10 shadow-sm"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              {isActive && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-md" />
              )}
              <item.icon className={cn("h-5 w-5 transition-transform duration-200", isActive ? "scale-110" : "group-hover:scale-110")} />
              {item.name}
            </Link>
          )
        })}
      </div>
      <div className="p-4 border-t mt-auto">
        <Link
          href="/"
          className="flex items-center justify-center w-full text-xs font-medium bg-muted text-muted-foreground py-2 rounded-lg transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          ← Back to Website
        </Link>
      </div>
    </aside>
  )
}
