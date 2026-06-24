import { Star } from "lucide-react"
import { Badge } from "@/components/admin-ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/admin-ui/table"

const reviews = [
  { id: "1", author: "Jonathan Gold", rating: 5, comment: "An extraordinary culinary journey. Every course was a masterpiece.", date: "Jun 20, 2026", status: "Published" },
  { id: "2", author: "Eleanor Vance", rating: 5, comment: "The tasting menu paired with their exclusive wine selection made for an unforgettable anniversary.", date: "Jun 15, 2026", status: "Published" },
  { id: "3", author: "Marcus Chen", rating: 4, comment: "La Gardash redefines modern dining. Incredibly innovative.", date: "Jun 10, 2026", status: "Pending" },
  { id: "4", author: "Anonymous", rating: 3, comment: "Good food but service was a bit slow during peak hours.", date: "Jun 05, 2026", status: "Pending" },
]

export default function AdminReviewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Reviews</h2>
        <p className="text-muted-foreground mt-2">Manage customer reviews and testimonials.</p>
      </div>

      <div className="flex gap-4">
        {[{ label: "Avg Rating", value: "4.9", color: "text-amber-500" }, { label: "Total Reviews", value: "124" }, { label: "Pending", value: "2", color: "text-amber-500" }].map((stat) => (
          <div key={stat.label} className="flex-1 rounded-xl border bg-card p-4 shadow-sm text-center">
            <div className={`text-2xl font-bold ${stat.color ?? ""}`}>{stat.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Comment</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviews.map((review) => (
              <TableRow key={review.id} className="hover:bg-muted/50 transition-colors">
                <TableCell className="font-medium">{review.author}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </TableCell>
                <TableCell className="max-w-xs">
                  <p className="text-sm text-muted-foreground truncate">{review.comment}</p>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{review.date}</TableCell>
                <TableCell>
                  <Badge className={review.status === "Published" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"}>
                    {review.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    {review.status === "Pending" && (
                      <button className="text-xs text-emerald-500 hover:text-emerald-600 font-medium">Approve</button>
                    )}
                    <button className="text-xs text-destructive hover:text-destructive/80 font-medium">Delete</button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
