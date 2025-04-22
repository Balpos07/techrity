"use client"
import { MoreVertical, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function GroupCallsSection() {
  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <h2 className="font-medium">Group Calls</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="link" size="sm" className="text-purple-600 h-auto p-0">
            See all
          </Button>
          <MoreVertical className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-4">
          <CallCard
            title="Weekly Meeting - Product Demo Review with Testers"
            date="Mon, Jul 29, 2024"
            time="11:00 AM"
            status="Ongoing"
            statusColor="green"
            attendees={3}
            group="UI/UX/Prod. Study group"
          />

          <CallCard
            title="Weekly Meeting - Product Demo Review with Testers"
            date="Mon, Jul 29, 2024"
            time="11:00 AM"
            status="Incoming"
            statusColor="blue"
            attendees={3}
            group="UI/UX/Prod. Study group"
          />

          <CallCard
            title="Weekly Meeting - Product Demo Review with Testers"
            date="Mon, Jul 29, 2024"
            time="11:00 AM"
            status="Ongoing"
            statusColor="green"
            attendees={3}
            group="UI/UX/Prod. Study group"
          />
        </div>
      </div>
    </div>
  )
}

function CallCard({ title, date, time, status, statusColor, attendees, group }) {
  return (
    <div className="rounded-md border border-gray-200 overflow-hidden">
      <div className="relative">
        <img src="/placeholder.svg?height=80&width=200" alt={title} className="w-full h-20 object-cover" />
        <div
          className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-full flex items-center gap-1 ${
            statusColor === "green" ? "bg-green-500 text-white" : "bg-blue-500 text-white"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-white"></span>
          {status}
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-medium text-xs">{title}</h3>

        <div className="flex flex-wrap items-center gap-2 mt-2">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 2V5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2V5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 9.09H20.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {date}
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {time}
          </div>
        </div>

        <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.97 14.44C18.34 14.67 19.85 14.43 20.91 13.72C22.32 12.78 22.32 11.24 20.91 10.3C19.84 9.59 18.31 9.35 16.94 9.59"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.97 7.16C6.03 7.15 6.1 7.15 6.16 7.16C7.54 7.11 8.64 5.98 8.64 4.58C8.64 3.15 7.49 2 6.06 2C4.63 2 3.48 3.16 3.48 4.58C3.49 5.98 4.59 7.11 5.97 7.16Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 14.44C5.63 14.67 4.12 14.43 3.06 13.72C1.65 12.78 1.65 11.24 3.06 10.3C4.13 9.59 5.66 9.35 7.03 9.59"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.33 13.45 9.33 12.05C9.33 10.62 10.48 9.47 11.91 9.47C13.34 9.47 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.09 17.78C7.68 18.72 7.68 20.26 9.09 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.09 17.78Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {group}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-3">
          <div className="flex -space-x-2">
            {Array(attendees)
              .fill(0)
              .map((_, i) => (
                <Avatar key={i} className="h-6 w-6 border-2 border-white">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Attendee" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
              ))}
          </div>

          <div className="flex gap-1 flex-wrap sm:flex-nowrap">
            <Button variant="outline" size="sm" className="h-7 text-xs px-2">
              View Participants
            </Button>
            <Button variant="default" size="sm" className="h-7 text-xs px-2 bg-purple-600 hover:bg-purple-700">
              Join Now <ChevronRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
