import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function MentorsSection() {
  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <h2 className="font-medium">Mentors</h2>
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
          <MentorCard name="Maxwell Smith" role="Product Designer" />

          <MentorCard name="Adeoti Samuel" role="Product Designer" />
        </div>

        <Button variant="outline" size="sm" className="w-full mt-4 text-purple-600 border-purple-200">
          See all
        </Button>
      </div>
    </div>
  )
}

function MentorCard({ name, role }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </div>

      <Button
        variant="default"
        size="sm"
        className="h-7 text-xs px-3 bg-purple-600 hover:bg-purple-700 self-end sm:self-auto mt-2 sm:mt-0"
      >
        Message
      </Button>
    </div>
  )
}
