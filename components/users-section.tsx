"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UsersSection() {
  const [activeTab, setActiveTab] = useState("All")

  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <h2 className="font-medium">Users</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-7 text-xs">
            All <ChevronDown className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-center">
          <div className="relative w-36 h-36 sm:w-48 sm:h-48">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="15" />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#4f46e5"
                strokeWidth="15"
                strokeDasharray="251.2"
                strokeDashoffset="50"
                transform="rotate(-90 50 50)"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#10b981"
                strokeWidth="15"
                strokeDasharray="251.2"
                strokeDashoffset="200"
                transform="rotate(-90 50 50)"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="15"
                strokeDasharray="251.2"
                strokeDashoffset="230"
                transform="rotate(-90 50 50)"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#ef4444"
                strokeWidth="15"
                strokeDasharray="251.2"
                strokeDashoffset="245"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <div className="text-2xl sm:text-3xl font-bold">240</div>
              <div className="text-xs sm:text-sm text-gray-500">Users</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
            <div className="text-sm">Students</div>
            <div className="ml-auto font-medium">200</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <div className="text-sm">Mentors</div>
            <div className="ml-auto font-medium">8</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-purple-500"></div>
            <div className="text-sm">Programs</div>
            <div className="ml-auto font-medium">22</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="text-sm">Others</div>
            <div className="ml-auto font-medium">10</div>
          </div>
        </div>
      </div>
    </div>
  )
}
