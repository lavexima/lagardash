"use client"

import { useState } from "react"
import { Plus, Search, MoreHorizontal, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/admin-ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/admin-ui/table"
import { Badge } from "@/components/admin-ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const mockData = [
  { id: "1", name: "Truffle Risotto", category: "Mains", price: "₺480", status: "Active" },
  { id: "2", name: "Wagyu A5 Striploin", category: "Mains", price: "₺950", status: "Active" },
  { id: "3", name: "Caesar Salad", category: "Starters", price: "₺220", status: "Active" },
  { id: "4", name: "Burrata", category: "Starters", price: "₺310", status: "Inactive" },
  { id: "5", name: "Tiramisu", category: "Desserts", price: "₺185", status: "Active" },
  { id: "6", name: "Espresso Martini", category: "Beverages", price: "₺260", status: "Active" },
]

export default function AdminMenuPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filtered = mockData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Menu Management</h2>
          <p className="text-muted-foreground mt-2">Add, edit, and organize your restaurant's menu items.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add New Item
        </Button>
      </div>

      <div className="flex items-center space-x-2 bg-background/60 backdrop-blur-md p-4 rounded-xl border shadow-sm">
        <Search className="w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search menu items..."
          className="border-0 focus-visible:ring-0 bg-transparent shadow-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead>Item Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((item) => (
              <TableRow key={item.id} className="group hover:bg-muted/50 transition-colors">
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <Badge
                    variant={item.status === "Active" ? "default" : "secondary"}
                    className={item.status === "Active" ? "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20" : ""}
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-muted transition-colors opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem><Edit className="mr-2 h-4 w-4 text-blue-500" />Edit item</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 h-4 w-4" />Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
