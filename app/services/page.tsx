"use client"
import { CheckCircle, Layers, Printer, Zap, Package, ShieldCheck } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const handleGetQuote = () => {
    const message = "Hi! I'm interested in getting a quote for your services. Can you help me with pricing and details?"
    window.open(`https://wa.me/918847050076?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="mb-6 neon-card text-cyan-400 border border-cyan-400/50 px-6 py-2 font-medium tracking-wide shadow-sm neon-pulse">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight gradient-text neon-text leading-tight fix-descenders">
            Premium Packaging & Printing Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From pharmaceutical packaging to custom stickers, we deliver enterprise-grade solutions that meet the
            highest industry standards.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text leading-tight fix-descenders">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional printing and packaging services tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pharmaceutical Packaging */}
            <Card className="neon-card group p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700/50 shadow-lg bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800 hover:border-cyan-700/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg neon-glow">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight gradient-text">
                Pharmaceutical Packaging
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Specialized packaging solutions for pharmaceutical products, ensuring safety, compliance, and brand
                integrity.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-4 flex-shrink-0 neon-cyan" />
                  Tamper-evident packaging
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-4 flex-shrink-0 neon-cyan" />
                  Child-resistant closures
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-4 flex-shrink-0 neon-cyan" />
                  Serialization and track & trace
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-4 flex-shrink-0 neon-cyan" />
                  Regulatory compliance
                </li>
              </ul>
            </Card>

            {/* Digital Printing */}
            <Card className="neon-card group p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700/50 shadow-lg bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800 hover:border-green-700/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg neon-glow">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight gradient-text">Digital Printing</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                High-resolution digital printing services for marketing materials, banners, and promotional items.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-4 flex-shrink-0 neon-green" />
                  High-resolution output
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-4 flex-shrink-0 neon-green" />
                  Fast turnaround
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-4 flex-shrink-0 neon-green" />
                  Various substrates
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-4 flex-shrink-0 neon-green" />
                  Color accuracy
                </li>
              </ul>
            </Card>

            {/* Custom Labels */}
            <Card className="neon-card group p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700/50 shadow-lg bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800 hover:border-yellow-700/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg neon-glow">
                <Printer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight gradient-text">Custom Labels</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                High-quality custom labels for branding, decoration, and promotional purposes with vibrant colors.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-4 flex-shrink-0 neon-yellow" />
                  Cartoon & themed designs
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-4 flex-shrink-0 neon-yellow" />
                  Waterproof materials
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-4 flex-shrink-0 neon-yellow" />
                  Custom shapes & sizes
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-4 flex-shrink-0 neon-yellow" />
                  Bulk ordering available
                </li>
              </ul>
            </Card>

            {/* Cosmetic Packaging */}
            <Card className="neon-card group p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700/50 shadow-lg bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800 hover:border-pink-700/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg neon-glow">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight gradient-text">Cosmetic Packaging</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Premium packaging solutions for beauty and cosmetic products with elegant designs and luxury finishes.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400 mr-4 flex-shrink-0 neon-pink" />
                  Luxury box designs
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400 mr-4 flex-shrink-0 neon-pink" />
                  Premium materials
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400 mr-4 flex-shrink-0 neon-pink" />
                  Custom branding
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400 mr-4 flex-shrink-0 neon-pink" />
                  Sustainable options
                </li>
              </ul>
            </Card>

            {/* Large Format Printing */}
            <Card className="neon-card group p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700/50 shadow-lg bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800 hover:border-purple-700/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg neon-glow">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight gradient-text">Large Format Printing</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Professional large format printing for banners, posters, signage, and exhibition displays.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-4 flex-shrink-0 neon-purple" />
                  Up to 5m width
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-4 flex-shrink-0 neon-purple" />
                  Indoor & outdoor materials
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-4 flex-shrink-0 neon-purple" />
                  UV-resistant inks
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-4 flex-shrink-0 neon-purple" />
                  Professional finishing
                </li>
              </ul>
            </Card>

            {/* Specialty Printing */}
            <Card className="neon-card group p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700/50 shadow-lg bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800 hover:border-red-700/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg neon-glow">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight gradient-text">Specialty Printing</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Unique printing solutions including embossing, foil stamping, and special effects for premium products.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-4 flex-shrink-0 neon-orange" />
                  Foil stamping
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-4 flex-shrink-0 neon-orange" />
                  Embossing & debossing
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-4 flex-shrink-0 neon-orange" />
                  Spot UV coating
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-4 flex-shrink-0 neon-orange" />
                  Die-cutting
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">Business Hours</h2>
          <div className="neon-card p-8">
            <p className="text-xl neon-cyan mb-4">Monday - Saturday: 9:00 AM - 8:00 PM</p>
            <p className="text-lg text-gray-300 mb-2">Sunday: Closed</p>
            <p className="text-sm text-gray-400 italic">Because even graphics need their beauty sleep! 😴</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Get a custom quote for your packaging and printing needs. Our experts are ready to help bring your vision to
            life.
          </p>
          <Button
            onClick={handleGetQuote}
            className="neon-button bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white border-0 px-8 py-3 text-lg font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 neon-glow"
          >
            Get Free Quote
          </Button>
        </div>
      </section>
    </div>
  )
}
