"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface NavItem {
  title: string
  href: string
  icon?: keyof typeof Icons
  disabled?: boolean
  external?: boolean
}

interface MainNavProps {
  items?: NavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const pathname = usePathname()

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">PrepAI</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map((item, index) => {
            const Icon = item.icon && Icons[item.icon]
            return item.href && !item.disabled ? (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-medium text-muted-foreground",
                  item.href === pathname && "text-foreground",
                  "hover:text-foreground transition-colors"
                )}
                {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {Icon && <Icon className="mr-2 h-4 w-4" />}
                {item.title}
              </Link>
            ) : (
              <span
                key={index}
                className="flex items-center text-sm font-medium text-muted-foreground/60 cursor-not-allowed"
              >
                {Icon && <Icon className="mr-2 h-4 w-4" />}
                {item.title}
              </span>
            )
          })}
        </nav>
      ) : null}
      {children}
    </div>
  )
}