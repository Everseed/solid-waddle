'use client'

import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { UserButton } from "@clerk/nextjs"
import { MainNav } from "@/components/main-nav"
import { SideNav } from "@/components/side-nav"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { Toaster } from "sonner"

// Configuration de la navigation principale
const mainNavItems = [
  {
    title: "Vue d'ensemble",
    href: "/dashboard",
  },
  {
    title: "Cours",
    href: "/dashboard/courses",
  },
  {
    title: "Sessions",
    href: "/dashboard/sessions",
  }
]

// Configuration de la navigation latérale
const sideNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "Home"
  },
  {
    title: "Mes cours",
    href: "/dashboard/courses",
    icon: "Book"
  },
  {
    title: "Sessions",
    href: "/dashboard/sessions",
    icon: "Calendar"
  },
  {
    title: "Examens",
    href: "/dashboard/exams",
    icon: "FileText"
  },
  {
    title: "Progrès",
    href: "/dashboard/progress",
    icon: "TrendingUp"
  },
  {
    title: "Paramètres",
    href: "/dashboard/settings",
    icon: "Settings"
  }
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isLoaded, isSignedIn } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in')
    }
  }, [isLoaded, isSignedIn, router])

  if (!isLoaded) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (!isSignedIn) {
    return null
  }

  return (
    <div className="flex min-h-screen">
      <SideNav items={sideNavItems} className="hidden w-64 border-r md:block" />
      <div className="flex flex-1 flex-col">
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center px-4">
            <MainNav items={mainNavItems} className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8",
                    userButtonPopoverCard: "w-[240px]"
                  }
                }}
              />
            </div>
          </div>
        </header>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
      <Toaster position="bottom-right" />
    </div>
  )
}