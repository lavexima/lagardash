"use client"

import { useState } from "react"
import { Plus, Search, MoreHorizontal, Edit, Trash2, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/admin-ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/admin-ui/table"
import { Badge } from "@/components/admin-ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/admin-ui/tabs"

const mockData = [
  { id: "1", title: "New Summer Menu 2026", category: "News", date: "Jun 20, 2026", author: "Admin", status: "Published" },
  { id: "2", title: "Behind the Scenes: Our Kitchen", category: "Behind the Scenes", date: "Jun 15, 2026", author: "Chef Mario", status: "Published" },
  { id: "3", title: "Wine Tasting Event Next Week", category: "Events", date: "Jun 10, 2026", author: "Admin", status: "Draft" },
  { id: "4", title: "Top 5 Pairings for Truffle Risotto", category: "Food Guides", date: "Jun 01, 2026", author: "Chef Mario", status: "Published" },
]

export default function AdminBlogPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filtered = mockData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Blog & News</h2>
          <p className="text-muted-foreground mt-2">Create articles, updates, and events to share with your customers.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Write New Post
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-[300px]">
          <TabsTrigger value="all">All Posts</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
        </TabsList>

        <div className="flex items-center space-x-2 bg-background/60 backdrop-blur-md p-4 rounded-xl border shadow-sm mt-6 mb-4">
          <Search className="w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search posts..."
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
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((item) => (
                  <TableRow key={item.id} className="group hover:bg-muted/50 transition-colors">
                    <TableCell>
                      <div className="font-medium text-base">{item.title}</div>
                      <div className="text-xs text-muted-foreground">By {item.author}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-background">{item.category}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{item.date}</TableCell>
                    <TableCell>
                      {item.status === "Published" ? (
                        <div className="flex items-center text-emerald-500 text-sm font-medium">
                          <CheckCircle className="mr-1.5 h-4 w-4" />Published
                        </div>
                      ) : (
                        <div className="flex items-center text-amber-500 text-sm font-medium">
                          <Clock className="mr-1.5 h-4 w-4" />Draft
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-muted transition-colors opacity-0 group-hover:opacity-100">
                          <MoreHorizontal className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem><Edit className="mr-2 h-4 w-4 text-blue-500" />Edit Post</DropdownMenuItem>
                          {item.status === "Draft" && (
                            <DropdownMenuItem><CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />Publish</DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 h-4 w-4" />Delete</DropdownMenuItem>
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
