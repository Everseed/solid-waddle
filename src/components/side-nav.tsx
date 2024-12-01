"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Home,
  Users,
  FileText,
  BarChart,
  Settings,
  Calendar,
  CheckSquare,
  Book,
  TrendingUp,
  type LucideIcon
} from "lucide-react"

interface SideNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    title: string
    href: string
    icon: string
  }[]
}

const iconMap: Record<string, LucideIcon> = {
  Home,
  Users,
  FileText,
  BarChart,
  Settings,
  Calendar,
  CheckSquare,
  Book,
  TrendingUp
}

export function SideNav({ className, items, ...props }: SideNavProps) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => {
        const Icon = iconMap[item.icon] as LucideIcon
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === item.href
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline",
              "justify-start"
            )}
          >
            {Icon && <Icon className="mr-2 h-4 w-4" />}
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}
