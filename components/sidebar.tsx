"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  BarChart,
  Home,
  LogOut,
  MessageSquare,
  Settings,
  Users,
  Calendar,
  Activity,
  DollarSign,
  Gift,
  X,
} from "lucide-react"

export default function Sidebar({ isMobileOpen, setIsMobileOpen }) {
  const [activeItem, setActiveItem] = useState("Dashboard")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const menuItems = [
    { name: "Dashboard", icon: Home },
    { name: "Programs", icon: Calendar },
    { name: "Activities", icon: Activity },
    { name: "Users", icon: Users },
    { name: "Forums", icon: MessageSquare },
    { name: "Finances", icon: DollarSign },
    { name: "Rewards", icon: Gift },
    { name: "Analytics", icon: BarChart },
    { name: "Settings", icon: Settings },
    { name: "Log Out", icon: LogOut },
  ]

  if (isMobile) {
    return (
      <>
        {isMobileOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileOpen(false)} />
        )}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-purple-900 text-white z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="p-4 flex items-center justify-between border-b border-purple-800">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#6D28D9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M16 8L8 16" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8H16V12" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 16H12V12" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-semibold">techrity</span>
            </div>
            <button onClick={() => setIsMobileOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 py-4">
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.name}>
                    <Link
                      href="#"
                      className={`flex items-center gap-3 px-4 py-3 text-sm ${
                        activeItem === item.name ? "bg-purple-800 border-l-4 border-white" : "hover:bg-purple-800"
                      }`}
                      onClick={() => {
                        setActiveItem(item.name)
                        setIsMobileOpen(false)
                      }}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="p-4 mt-auto">
            <div className="text-xs">
              <p>Got some questions, enquiries or need help?</p>
              <Link href="#" className="text-purple-300 underline text-xs mt-1 block">
                Visit Mentiy Help Desk here
              </Link>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-xs">Switch to Classic Mode</span>
              <div className="w-10 h-5 bg-purple-700 rounded-full p-1 flex items-center">
                <div className="w-3 h-3 bg-white rounded-full ml-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="hidden md:flex w-[166px] bg-purple-900 text-white flex-col h-full">
      <div className="p-4 flex items-center gap-2 border-b border-purple-800">
        <div className="bg-white rounded-full p-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#6D28D9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M16 8L8 16" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8H16V12" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 16H12V12" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="font-semibold">techrity</span>
        <div className="ml-auto">
          <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z"
              fill="white"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>

      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.name}>
                <Link
                  href="#"
                  className={`flex items-center gap-3 px-4 py-3 text-sm ${
                    activeItem === item.name ? "bg-purple-800 border-l-4 border-white" : "hover:bg-purple-800"
                  }`}
                  onClick={() => setActiveItem(item.name)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-4 mt-auto">
        <div className="text-xs">
          <p>Got some questions, enquiries or need help?</p>
          <Link href="#" className="text-purple-300 underline text-xs mt-1 block">
            Visit Mentiy Help Desk here
          </Link>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xs">Switch to Classic Mode</span>
          <div className="w-10 h-5 bg-purple-700 rounded-full p-1 flex items-center">
            <div className="w-3 h-3 bg-white rounded-full ml-auto"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
