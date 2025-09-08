"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ]

  const handleContactClick = () => {
    const message = "Hi! I'm interested in your services. Can you help me with more information?"
    window.open(`https://wa.me/918847050076?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 flex-shrink-0 neon-glow group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/shelom-graphics-logo.png"
                alt="Shelom Graphics Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "text-cyan-400 neon-cyan"
                    : "text-gray-300 hover:text-cyan-400 hover:neon-cyan"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 neon-glow" />
                )}
              </Link>
            ))}
          </div>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={handleContactClick}
              className="hidden md:flex neon-button bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white border-0 px-4 py-2 text-sm font-medium tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 neon-glow"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/95 backdrop-blur-md rounded-lg mt-2 border border-gray-700/50">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                    pathname === item.href
                      ? "text-cyan-400 bg-cyan-400/10 neon-cyan"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-700/50">
                <Button
                  onClick={() => {
                    handleContactClick()
                    setIsOpen(false)
                  }}
                  className="w-full neon-button bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white border-0 px-4 py-2 text-sm font-medium tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 neon-glow"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
