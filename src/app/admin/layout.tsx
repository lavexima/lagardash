import { AdminHeader } from "@/components/admin-layout/header"
import { AdminSidebar } from "@/components/admin-layout/sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-background/95">
      <AdminSidebar />
      <div className="flex flex-1 flex-col md:pl-64 transition-all duration-300">
        <AdminHeader />
        <main className="flex-1 p-6 sm:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
