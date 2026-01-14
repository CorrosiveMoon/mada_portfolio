"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Moon, Sun, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function SidebarNavigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[300px] flex-col z-50" style={{ backgroundColor: '#1e1b0c' }}>
        <div className="flex flex-col h-full p-8">
          {/* Logo */}
          <Link href="/" className="mb-16">
            <div className="relative w-full h-20">
              <Image
                src="/MASS Visuals.png"
                alt="MASS Visuals"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex-1 flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-medium tracking-wide transition-colors relative group ${
                  pathname === item.href
                    ? "text-white"
                    : "text-white hover:text-white/80"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${
                  pathname === item.href ? "w-12" : "w-0 group-hover:w-12"
                }`} />
              </Link>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="mt-auto pt-8 border-t border-white/20">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-white hover:text-white/80 hover:bg-white/10"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-background border-b border-border z-50 flex items-center justify-between px-6">
        <Link href="/" className="relative h-12 w-32">
          <Image
            src="/MASS Visuals.png"
            alt="MASS Visuals"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-sidebar border-sidebar-border">
              <nav className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-lg font-medium tracking-wide transition-colors relative group ${
                      pathname === item.href
                        ? "text-sidebar-accent"
                        : "text-sidebar-foreground hover:text-sidebar-accent"
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-sidebar-accent transition-all duration-300 ${
                      pathname === item.href ? "w-12" : "w-0 group-hover:w-12"
                    }`} />
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  )
}
