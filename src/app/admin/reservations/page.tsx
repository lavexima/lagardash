"use client"

import { useState } from "react"
import { Calendar as CalendarIcon, Search, MoreHorizontal, Check, X, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/admin-ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/admin-ui/table"
import { Badge } from "@/components/admin-ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/admin-ui/tabs"

const mockData = [
  { id: "1", name: "Alice Smith", date: "2026-06-25", time: "19:30", guests: 2, status: "Confirmed", phone: "+90 555 123 4567" },
  { id: "2", name: "Bob Jones", date: "2026-06-25", time: "20:00", guests: 4, status: "Pending", phone: "+90 555 234 5678" },
  { id: "3", name: "Charlie Brown", date: "2026-06-26", time: "18:00", guests: 2, status: "Cancelled", phone: "+90 555 345 6789" },
  { id: "4", name: "Diana Prince", date: "2026-06-26", time: "21:00", guests: 6, status: "Confirmed", phone: "+90 555 456 7890" },
  { id: "5", name: "Ethan Hunt", date: "2026-06-27", time: "19:00", guests: 2, status: "Pending", phone: "+90 555 567 8901" },
]

export default function AdminReservationsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filtered = mockData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm)
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Confirmed": return <Badge className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20">{status}</Badge>
      case "Pending": return <Badge className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">{status}</Badge>
      case "Cancelled": return <Badge className="bg-destructive/10 text-destructive hover:bg-destructive/20">{status}</Badge>
      default: return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Reservations</h2>
          <p className="text-muted-foreground mt-2">Manage your restaurant bookings and table assignments.</p>
        </div>
        <Button className="gap-2">
          <CalendarIcon className="h-4 w-4" />
          Add Manual Booking
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        <div className="flex items-center space-x-2 bg-background/60 backdrop-blur-md p-4 rounded-xl border shadow-sm mt-6 mb-4">
          <Search className="w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search by name or phone..."
            className="border-0 focus-visible:ring-0 bg-transparent shadow-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <TabsContent value="all" className="m-0">
          <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Guests</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((item) => (
                  <TableRow key={item.id} className="group hover:bg-muted/50 transition-colors">
                    <TableCell>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.phone}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                        <Clock className="h-3 w-3" />
                        <span>{item.time}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/50 font-medium">
                        {item.guests}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(item.status)}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-muted transition-colors">
                          <MoreHorizontal className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          {item.status === "Pending" && (
                            <DropdownMenuItem className="text-emerald-500">
                              <Check className="mr-2 h-4 w-4" />Approve
                            </DropdownMenuItem>
                          )}
                          {item.status !== "Cancelled" && (
                            <DropdownMenuItem className="text-destructive">
                              <X className="mr-2 h-4 w-4" />Cancel Booking
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem>View details</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
