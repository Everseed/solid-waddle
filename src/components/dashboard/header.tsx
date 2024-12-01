'use client'

import { UserButton, useUser } from "@clerk/nextjs"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Button } from "@/components/ui/button"
import { 
  Bell, 
  Search,
  Menu,
  MessageSquare,
  Calendar 
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SidebarNav } from "../sidebar-nav"
import { useRole } from "@/hooks/use-roles"
import Link from "next/link"

interface DashboardHeaderProps {
  items?: any[]
}

export function DashboardHeader({ items }: DashboardHeaderProps) {
  const { role } = useRole()
  const { isSignedIn, user } = useUser()

  if (!isSignedIn || !user) return null

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] p-0">
            <SidebarNav items={items} />
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-2">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img 
              src="/logo.svg" 
              alt="PrepAI Logo" 
              className="h-8 w-8 dark:hidden"
            />
            <img 
              src="/logo-dark.svg" 
              alt="PrepAI Logo" 
              className="hidden h-8 w-8 dark:block"
            />
            <span className="hidden font-bold sm:inline-block">
              PrepAI
            </span>
          </Link>

          {role && (
            <span className="flex h-6 items-center rounded-lg bg-muted px-3 text-xs font-medium">
              {role?.toLowerCase()}
            </span>
          )}
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden w-full flex-1 md:block">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Rechercher..."
                className="w-full h-10 rounded-md border border-input bg-background pl-9 pr-4 text-sm"
              />
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Calendar className="h-5 w-5" />
              <span className="sr-only">Calendrier</span>
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">Messages</span>
              {user.unreadMessages > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                  {user.unreadMessages}
                </span>
              )}
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
              {user.unreadNotifications > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground flex items-center justify-center">
                  {user.unreadNotifications}
                </span>
              )}
            </Button>

            <ModeToggle />

            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8",
                  userButtonPopoverCard: "w-[240px]"
                }
              }}
              userProfileMode="modal"
              userProfileUrl={undefined}
            />
          </nav>
        </div>
      </div>
    </header>
  )
}