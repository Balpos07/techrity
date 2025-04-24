"use client"

import { useState } from "react"
import { MoreVertical, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

export default function ProgramsSection() {
  const [activeTab, setActiveTab] = useState("All")

  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <h2 className="font-medium">Programs</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="link" size="sm" className="text-purple-600 h-auto p-0">
            See all
          </Button>
          <MoreVertical className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-500">Filter:</div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-xs h-7">
              Active <ChevronRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <ProgramCard
            title="Fundamentals of User Interface & Experience"
            description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical curriculum..."
            tag="Ongoing"
            tagColor="green"
           image="/images/meetings/four.png"
            mentor="Faith Iheke"
          />

          <ProgramCard
            title="Colour Hack Practical Group Call"
            description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical curriculum..."
            tag="Ongoing"
            tagColor="green"
          image="/images/meetings/one.png"
            mentor="Faith Iheke"
          />

          <ProgramCard
            title="Colour Hack Practical Group Call"
            description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical curriculum..."
            tag="Ongoing"
            tagColor="green"
            image="/images/meetings/one.png"
            mentor="Syd"
          />
        </div>
      </div>
    </div>
  )
}

function ProgramCard({ title, description, tag, tagColor, image, mentor }) {
  return (
    <div className="rounded-md overflow-hidden border border-gray-200">
      <div className="relative h-32">
      <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div
          className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-full ${
            tagColor === "green" ? "bg-green-500 text-white" : "bg-gray-500 text-white"
          }`}
        >
          {tag}
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-medium text-sm">{title}</h3>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{description}</p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-3">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder.svg?height=24&width=24" alt={mentor} />
              <AvatarFallback>{mentor.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-xs">Hosted by: {mentor}</span>
          </div>

          <div className="flex gap-1">
            <Button variant="outline" size="sm" className="h-7 text-xs px-2">
              View Details
            </Button>
            <Button variant="default" size="sm" className="h-7 text-xs px-2 bg-purple-600 hover:bg-purple-700">
              {mentor === "Syd" ? "Assign Mentor" : "Attend"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
