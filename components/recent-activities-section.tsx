import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RecentActivitiesSection() {
  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <h2 className="font-medium">Recent Activities</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="link" size="sm" className="text-purple-600 h-auto p-0">
            See all
          </Button>
          <MoreVertical className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="p-4">
        <div className="space-y-4">
          <ActivityItem
            title="KYC Verification"
            description="45 new persons just signed up on Mentiy"
            time="25 minutes Ago"
            icon=""
          />

          <ActivityItem
            title="New User Sign Up!"
            description="45 new persons just signed up on Mentiy"
            time="25 minutes Ago"
            icon=""
          />

          <ActivityItem
            title="Withdrawal Request"
            description="Maxwell requested a withdrawal"
            time="25 minutes Ago"
            icon=""
          />
        </div>
      </div>
    </div>
  )
}

function ActivityItem({ title, description, time, icon }) {
  return (
    <div className="flex items-start sm:items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-lg shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-medium text-sm">{title}</div>
        <div className="text-xs text-gray-500">{description}</div>
        <div className="text-xs text-gray-400 mt-1">{time}</div>
      </div>
    </div>
  )
}
