"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="flex items-center space-x-2 md:mr-6">
        <Icons.logo strokeWidth="32" fill="currentColor" className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "hidden transition-colors hover:text-foreground/80 md:block",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/projects")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Projects
        </Link>
        <Link
          href="/resume"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/resume")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Resume
        </Link>
        <Link
          href="/links"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/links")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Links
        </Link>
      </nav>
    </div>
  )
}
