'use client'

import { useUser } from "@clerk/nextjs"
import { useRole } from "@/hooks/use-roles"
import { SidebarNav } from "@/components/sidebar-nav"
import { DashboardHeader } from "@/components/dashboard/header"
import { redirect } from "next/navigation"
import {
  Home,
  Users,
  FileText,
  BarChart,
  Settings,
  Calendar,
  CheckSquare,
  Book,
  TrendingUp
} from "lucide-react"

// Configuration des menus selon les rôles
const roleBasedNavItems = {
  ADMIN: [
    { title: "Vue d'ensemble", href: "/dashboard", icon: Home },
    { title: "Utilisateurs", href: "/dashboard/users", icon: Users },
    { title: "Contenu", href: "/dashboard/content", icon: FileText },
    { title: "Rapports", href: "/dashboard/reports", icon: BarChart },
    { title: "Paramètres", href: "/dashboard/settings", icon: Settings },
  ],
  MENTOR: [
    { title: "Vue d'ensemble", href: "/dashboard", icon: Home },
    { title: "Mes étudiants", href: "/dashboard/students", icon: Users },
    { title: "Sessions", href: "/dashboard/sessions", icon: Calendar },
    { title: "Évaluations", href: "/dashboard/evaluations", icon: CheckSquare },
  ],
  CREATOR: [
    { title: "Vue d'ensemble", href: "/dashboard", icon: Home },
    { title: "Contenu", href: "/dashboard/content", icon: FileText },
    { title: "Statistiques", href: "/dashboard/stats", icon: BarChart },
  ],
  STUDENT: [
    { title: "Vue d'ensemble", href: "/dashboard", icon: Home },
    { title: "Mes cours", href: "/dashboard/courses", icon: Book },
    { title: "Examens", href: "/dashboard/exams", icon: FileText },
    { title: "Sessions", href: "/dashboard/sessions", icon: Calendar },
    { title: "Progrès", href: "/dashboard/progress", icon: TrendingUp },
  ],
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isLoaded, isSignedIn, user } = useUser()
  const { role } = useRole()

  if (!isLoaded) {
    return null
  }

  if (!isSignedIn) {
    redirect('/sign-in')
  }

  const navItems = roleBasedNavItems[role] || roleBasedNavItems.STUDENT

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader items={navItems} />
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr]">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <SidebarNav items={navItems} />
        </aside>
        <main className="flex w-full flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}