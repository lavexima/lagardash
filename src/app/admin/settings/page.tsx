import { Card, CardContent, CardHeader, CardTitle } from "@/components/admin-ui/card"
import { Input } from "@/components/admin-ui/input"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground mt-2">Manage your restaurant information and preferences.</p>
      </div>

      <div className="grid gap-6 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Restaurant Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Restaurant Name</label>
              <Input defaultValue="La Gardash" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <Input defaultValue="+90 (555) 123-4567" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <Input defaultValue="info@lagardash.com" type="email" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Address</label>
              <Input defaultValue="123 Culinary Avenue, Food District, İstanbul 34000" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Working Hours</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { day: "Mon - Thu", hours: "17:00 - 23:00" },
              { day: "Fri - Sat", hours: "17:00 - 00:00" },
              { day: "Sunday", hours: "16:00 - 22:00" },
            ].map((item) => (
              <div key={item.day} className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium w-24">{item.day}</span>
                <Input defaultValue={item.hours} className="flex-1" />
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-xl px-6 py-2.5 text-sm font-medium hover:brightness-110 transition-all shadow-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
