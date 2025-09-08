"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Package, Printer, Layers } from "lucide-react"
import Image from "next/image"

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "Pharmaceutical Packaging Solutions",
      category: "Healthcare",
      description:
        "Complete packaging solutions for pharmaceutical companies including tamper-evident designs and regulatory compliance.",
      image: "/services/pharmaceutical-packaging.png",
      icon: <Layers className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Digital Printing Solutions",
      category: "Digital Services",
      description:
        "High-quality digital printing services for marketing materials, banners, and promotional items with fast turnaround times.",
      image: "/portfolio/digital-printing.png",
      icon: <Package className="w-6 h-6" />,
      color: "from-pink-500 to-purple-600",
    },
    {
      title: "Custom Label Collections",
      category: "Labels",
      description: "Vibrant custom label designs featuring popular characters, themes, and branding elements.",
      image: "/services/colorful-custom-stickers.png",
      icon: <Printer className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Premium Brand Packaging",
      category: "Luxury",
      description: "High-end packaging solutions with special finishes, embossing, and premium materials.",
      image: "/services/luxury-premium-packaging.png",
      icon: <Package className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Corporate Branding Materials",
      category: "Corporate",
      description:
        "Complete corporate identity and branding material sets including business cards, letterheads, and promotional items.",
      image: "/services/corporate-branding-materials.png",
      icon: <Printer className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Bakery Packaging",
      category: "Food & Beverage",
      description:
        "Custom boxes, bags, sleeves, and labels for breads, cookies, pastries, and confectionery—food-safe stocks with premium finishes.",
      image: "/portfolio/bakery-packaging.png",
      icon: <Package className="w-6 h-6" />,
      color: "from-amber-500 to-rose-600",
    },
  ]

  const handleStartProject = () => {
    const message = "Hi! I'm interested in starting a new project with Shelom Graphics. Can you help me get started?"
    window.open(`https://wa.me/918847050076?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleViewDetails = (title: string) => {
    const message = `Hi! I'm interested in learning more about your ${title}. Can you provide more details?`
    window.open(`https://wa.me/918847050076?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="mb-6 neon-card text-pink-400 border border-pink-400/50 px-6 py-2 font-medium tracking-wide shadow-sm neon-pulse">
            Our Portfolio
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight gradient-text neon-text leading-tight fix-descenders">
            Showcasing Our Best Work
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our diverse portfolio of packaging solutions, custom stickers, and printing projects that have
            helped brands stand out and succeed.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="neon-card group overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-700/50 shadow-lg bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg neon-glow`}
                  >
                    {item.icon}
                  </div>
                  <Badge className="absolute top-4 right-4 neon-card text-white border border-cyan-400/30">
                    {item.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight gradient-text">{item.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
                  <Button
                    variant="ghost"
                    onClick={() => handleViewDetails(item.title)}
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 p-0 neon-cyan transition-all duration-300"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300 neon-cyan neon-flicker">
                300K+
              </div>
              <div className="text-gray-400 text-sm md:text-base font-medium tracking-wide">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300 neon-pink neon-flicker">
                500+
              </div>
              <div className="text-gray-400 text-sm md:text-base font-medium tracking-wide">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300 neon-yellow neon-flicker">
                30K+
              </div>
              <div className="text-gray-400 text-sm md:text-base font-medium tracking-wide">
                Cartains Manufactured Everyday
              </div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300 neon-purple neon-flicker">
                99.8%
              </div>
              <div className="text-gray-400 text-sm md:text-base font-medium tracking-wide">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text leading-tight">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's work together to bring your vision to life with our premium packaging and printing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleStartProject}
              className="neon-button bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white border-0 px-8 py-3 text-lg font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 neon-glow"
            >
              Start Your Project
            </Button>
            <Link href="/gallery">
              <Button
                variant="outline"
                className="neon-border border-2 text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400 px-8 py-3 text-lg font-medium bg-transparent backdrop-blur-sm"
              >
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
