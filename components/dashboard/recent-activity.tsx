import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    user: {
      name: "System",
      avatar: "S",
    },
    action: "Updated global freight rates data",
    timestamp: "2 hours ago",
    category: "Data Update",
  },
  {
    id: 2,
    user: {
      name: "System",
      avatar: "S",
    },
    action: "Generated monthly market analysis report",
    timestamp: "Yesterday",
    category: "Report",
  },
  {
    id: 3,
    user: {
      name: "System",
      avatar: "S",
    },
    action: "Updated India port congestion metrics",
    timestamp: "2 days ago",
    category: "Data Update",
  },
  {
    id: 4,
    user: {
      name: "System",
      avatar: "S",
    },
    action: "Generated quarterly cost analysis report",
    timestamp: "1 week ago",
    category: "Report",
  },
]

export function RecentActivity() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest updates and activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={activity.user.name} />
                <AvatarFallback>{activity.user.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium leading-none">{activity.action}</p>
                  <Badge variant="outline">{activity.category}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

