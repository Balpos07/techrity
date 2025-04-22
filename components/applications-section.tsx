import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ApplicationsSection() {
  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <h2 className="font-medium">Applications</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="link" size="sm" className="text-purple-600 h-auto p-0">
            See all
          </Button>
          <MoreVertical className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="p-4">
        <div className="text-sm text-gray-500 mb-2">Mentors</div>

        <div className="space-y-2">
          <ApplicationRow
            name="Maxwell Smith"
            email="maxwellsmith@gmail.com"
            role="Product Designer"
            skills={["Product Designer", "Design Experience"]}
          />
        </div>

        <div className="text-sm text-gray-500 mt-4 mb-2">Students</div>

        <div className="space-y-2">
          <ApplicationRow name="Adeoti Samuel" email="adeotisamuel@gmail.com" role="Product Designer" />
          <ApplicationRow name="Maxwell Smith" email="maxwellsmith@gmail.com" role="Product Designer" />
          <ApplicationRow name="Adeoti Samuel" email="adeotisamuel@gmail.com" role="Product Designer" />
          <ApplicationRow name="Maxwell Smith" email="maxwellsmith@gmail.com" role="Product Designer" />
        </div>
      </div>
    </div>
  )
}

function ApplicationRow({ name, email, role, skills = [] }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 gap-2">
      <div className="flex items-center gap-3">
        <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
        <img src="/placeholder.svg?height=32&width=32" alt={name} className="h-8 w-8 rounded-full" />
        <div>
          <div className="text-sm font-medium">{name}</div>
          <div className="text-xs text-gray-500">{email}</div>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap my-1 sm:my-0">
        <div className="text-xs bg-gray-100 px-2 py-1 rounded">{role}</div>
        {skills.map((skill, i) => (
          <div key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
            {skill}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 self-end sm:self-auto">
        <Button variant="outline" size="sm" className="h-7 text-xs px-3 border-red-200 text-red-500">
          Reject
        </Button>
        <Button variant="default" size="sm" className="h-7 text-xs px-3 bg-purple-600 hover:bg-purple-700">
          Accept
        </Button>
      </div>
    </div>
  )
}
