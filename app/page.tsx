"use client"

import { useState } from "react"
import { Bell, Menu } from "lucide-react"
import Sidebar from "@/components/sidebar"
import WelcomeBanner from "@/components/welcome-banner"
import ProgramsSection from "@/components/programs-section"
import GroupCallsSection from "@/components/group-calls-section"
import ApplicationsSection from "@/components/applications-section"
import MentorsSection from "@/components/mentors-section"
import RecentActivitiesSection from "@/components/recent-activities-section"
import UsersSection from "@/components/users-section"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      <div className="flex-1 overflow-auto w-full">
        <header className="flex items-center justify-between gap-4 bg-white p-4 shadow-sm">
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <div className="md:hidden font-semibold text-purple-600">Techrity</div>
          <div className="flex items-center gap-4 ml-auto">
            <Bell className="h-5 w-5 text-gray-500" />
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Techrity Foundation" />
                <AvatarFallback>TF</AvatarFallback>
              </Avatar>
              <div className="text-xs hidden sm:block">
                <div className="font-medium">Techrity Foundation</div>
                <div className="text-gray-500">Member</div>
              </div>
            </div>
            <div className="h-8 w-8 rounded bg-purple-600 flex items-center justify-center text-white text-xs">T</div>
          </div>
        </header>

        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 border-gray-200 hidden md:flex">
              <svg
                width="16"
                height="16"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M2 3.5C2 3.22386 2.22386 3 2.5 3H12.5C12.7761 3 13 3.22386 13 3.5V11.5C13 11.7761 12.7761 12 12.5 12H2.5C2.22386 12 2 11.7761 2 11.5V3.5ZM3 4V11H12V4H3ZM4 5H11V6H4V5ZM4 7H11V8H4V7ZM4 9H8V10H4V9Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              Manage Widgets
            </Button>
          </div>
        </div>

        <main className="p-4">
          <WelcomeBanner />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
            <ProgramsSection />
            <GroupCallsSection />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
            <ApplicationsSection />
            <MentorsSection />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6 mb-4 md:mb-6">
            <UsersSection />
            <RecentActivitiesSection />
          </div>
        </main>
      </div>
    </div>
  )
}
