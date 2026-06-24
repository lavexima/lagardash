import { Card, CardContent, CardHeader, CardTitle } from "@/components/admin-ui/card"
import { DollarSign, Users, CalendarCheck, TrendingUp, UtensilsCrossed, Star, Clock } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground mt-2">
          Overview of La Gardash's performance and recent activity.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border-amber-500/20 shadow-sm transition-all hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <div className="p-2 bg-amber-500/20 rounded-full">
              <DollarSign className="h-4 w-4 text-amber-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺128,450</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-emerald-500" />
              <span className="text-emerald-500 font-medium">+20.1%</span>&nbsp;geçen aya göre
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm transition-all hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Reservations</CardTitle>
            <div className="p-2 bg-purple-500/10 rounded-full">
              <CalendarCheck className="h-4 w-4 text-purple-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2,350</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-emerald-500" />
              <span className="text-emerald-500 font-medium">+180</span>&nbsp;from last month
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm transition-all hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Guests</CardTitle>
            <div className="p-2 bg-pink-500/10 rounded-full">
              <Users className="h-4 w-4 text-pink-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+1,234</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-emerald-500" />
              <span className="text-emerald-500 font-medium">+19%</span>&nbsp;from last month
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm transition-all hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Table Turn</CardTitle>
            <div className="p-2 bg-emerald-500/10 rounded-full">
              <Clock className="h-4 w-4 text-emerald-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45m</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center">
              <span className="text-emerald-500 font-medium">-2m</span>&nbsp;from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-sm hover:shadow-md transition-all cursor-pointer group border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-10 gap-3">
            <div className="p-4 bg-amber-500/10 rounded-2xl group-hover:bg-amber-500/20 transition-colors">
              <UtensilsCrossed className="h-8 w-8 text-amber-500" />
            </div>
            <div className="text-center">
              <div className="font-semibold">Manage Menu</div>
              <div className="text-xs text-muted-foreground mt-1">6 active items</div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-all cursor-pointer group border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-10 gap-3">
            <div className="p-4 bg-purple-500/10 rounded-2xl group-hover:bg-purple-500/20 transition-colors">
              <CalendarCheck className="h-8 w-8 text-purple-500" />
            </div>
            <div className="text-center">
              <div className="font-semibold">Reservations</div>
              <div className="text-xs text-muted-foreground mt-1">2 pending approval</div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-all cursor-pointer group border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-10 gap-3">
            <div className="p-4 bg-yellow-500/10 rounded-2xl group-hover:bg-yellow-500/20 transition-colors">
              <Star className="h-8 w-8 text-yellow-500" />
            </div>
            <div className="text-center">
              <div className="font-semibold">Reviews</div>
              <div className="text-xs text-muted-foreground mt-1">4.9 avg rating</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
