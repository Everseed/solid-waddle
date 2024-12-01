'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/nextjs"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/nav-menu"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from 'react'

const experts = [
  {
    title: "Technologies & Développement",
    href: "/experts/tech",
    description: "Experts en développement web, mobile, cloud et DevOps",
    experts: ["React", "Node.js", "Python", "Cloud", "DevOps", "Mobile"]
  },
  {
    title: "Management & Leadership",
    href: "/experts/management",
    description: "Experts en gestion d'équipe et leadership",
    experts: ["Gestion de projet", "Agilité", "Leadership", "Communication"]
  },
  {
    title: "Data Science & IA",
    href: "/experts/data",
    description: "Experts en analyse de données et intelligence artificielle",
    experts: ["Machine Learning", "Deep Learning", "Data Analysis", "Big Data"]
  },
  {
    title: "Business & Finance",
    href: "/experts/business",
    description: "Experts en stratégie d'entreprise et finance",
    experts: ["Stratégie", "Finance", "Marketing", "Entrepreneuriat"]
  }
]

const certifications = [
  {
    title: "Certifications Cloud",
    href: "/certifications/cloud",
    items: ["AWS", "Azure", "GCP", "Cloud Security"]
  },
  {
    title: "Certifications Management",
    href: "/certifications/management",
    items: ["PMP", "PRINCE2", "ITIL", "Scrum"]
  },
  {
    title: "Certifications Tech",
    href: "/certifications/tech",
    items: ["CISSP", "CCNA", "CompTIA", "Oracle"]
  }
]

const trainings = [
  {
    title: "Développement Personnel",
    href: "/trainings/personal",
    description: "Communication, leadership et soft skills"
  },
  {
    title: "Compétences Techniques",
    href: "/trainings/technical",
    description: "Programmation, architecture et DevOps"
  },
  {
    title: "Gestion & Management",
    href: "/trainings/management",
    description: "Gestion de projet et d'équipe"
  }
]

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Experts</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
              {experts.map((expert) => (
                <ListItem
                  key={expert.title}
                  title={expert.title}
                  href={expert.href}
                >
                  {expert.description}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {expert.experts.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Certifications</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px]">
              {certifications.map((cert) => (
                <ListItem
                  key={cert.title}
                  title={cert.title}
                  href={cert.href}
                >
                  <div className="flex flex-wrap gap-1">
                    {cert.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-700 bg-green-50 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Formations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px]">
              {trainings.map((training) => (
                <ListItem
                  key={training.title}
                  title={training.title}
                  href={training.href}
                >
                  {training.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              À propos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"