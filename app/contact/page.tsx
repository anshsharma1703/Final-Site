"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PhoneCall, Mail, MapPin, Clock, Instagram, MessageCircle, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send via email only
      const emailSubject = `Quote Request from ${formData.name}`
      const emailBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0A%0AMessage: ${formData.message}`
      window.open(`mailto:ORDERSHELOM@GMAIL.COM?subject=${emailSubject}&body=${emailBody}`, "_blank")

      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const openWhatsApp = () => {
    window.open("https://wa.me/918847050076", "_blank")
  }

  const openInstagram = () => {
    window.open(
      "https://www.instagram.com/shelom_graphics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      "_blank",
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="mb-6 neon-card text-purple-400 border border-purple-400/50 px-6 py-2 font-medium tracking-wide shadow-sm neon-pulse">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight gradient-text neon-text leading-tight fix-descenders">
            Let's Create Something Amazing Together
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Our team of experts is standing by to provide personalized consultation
            and premium packaging solutions tailored to your needs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text neon-text mb-2">300k+</div>
              <p className="text-gray-300 text-lg">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text neon-text mb-2">500+</div>
              <p className="text-gray-300 text-lg">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text neon-text mb-2">99.8%</div>
              <p className="text-gray-300 text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-12 tracking-tight gradient-text leading-tight fix-descenders">
                Connect With Our Experts
              </h2>
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg neon-glow">
                    <PhoneCall className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Direct Line</h3>
                    <p className="text-gray-300 text-lg neon-cyan">+91 88470 50076</p>
                    <p className="text-gray-400 text-sm">Available 24/7 for urgent projects</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg neon-glow">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
                    <p className="text-gray-300 text-lg neon-pink">ORDERSHELOM@GMAIL.COM</p>
                    <p className="text-gray-400 text-sm">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg neon-glow">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Headquarters</h3>
                    <p className="text-gray-300 text-lg neon-yellow">Mohali, India</p>
                    <p className="text-gray-400 text-sm">Delivery in Pan India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg neon-glow">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                    <p className="text-gray-300 text-lg neon-green">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-400 text-sm">
                      Sunday: Closed (even our pixels need their beauty sleep! 💤)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-6 neon-cyan">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button
                    onClick={openWhatsApp}
                    className="neon-button bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 px-6 py-3 font-medium tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 neon-glow"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={openInstagram}
                    className="neon-button bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 px-6 py-3 font-medium tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 neon-glow"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="neon-card p-10 backdrop-blur-sm border border-cyan-400/30 shadow-2xl">
              <h3 className="text-3xl font-bold mb-8 tracking-tight gradient-text">Request a Quote</h3>

              {isSubmitted && (
                <div className="mb-6 p-4 neon-card border border-green-400/50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400 neon-green" />
                    <span className="text-green-400 font-medium">
                      Quote request sent via email! We'll respond within 2 hours.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="neon-input w-full px-6 py-4 rounded-xl transition-all duration-300"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="neon-input w-full px-6 py-4 rounded-xl transition-all duration-300"
                      placeholder="your@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="neon-input w-full px-6 py-4 rounded-xl transition-all duration-300"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Service Required *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="neon-input w-full px-6 py-4 rounded-xl transition-all duration-300"
                    >
                      <option value="">Select a Service</option>
                      <option value="pharmaceutical">Pharmaceutical Packaging</option>
                      <option value="digital">Digital Printing</option>
                      <option value="labels">Custom Labels</option>
                      <option value="large-format">Large Format Printing</option>
                      <option value="specialty">Specialty Printing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="neon-input w-full px-6 py-4 rounded-xl transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements, timeline, quantity, and any specific needs..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="neon-button w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 py-4 text-lg font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 neon-glow disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 mr-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Quote Request...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5 mr-3" />
                      Send Quote Request via Email
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Quick answers to common questions about our services and processes.</p>
          </div>

          <div className="space-y-6">
            <Card className="neon-card p-6 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3 neon-cyan">What is your typical turnaround time?</h3>
              <p className="text-gray-300">
                Our standard turnaround time is 48 hours for most projects. Rush orders can be accommodated with
                additional charges.
              </p>
            </Card>

            <Card className="neon-card p-6 backdrop-blur-sm border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3 neon-pink">
                What are your minimum order quantities?
              </h3>
              <p className="text-gray-300">
                Minimum order quantities vary by product type. For custom labels, we start from 100 pieces. For
                packaging, minimum orders start from 500 units.
              </p>
            </Card>

            <Card className="neon-card p-6 backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3 neon-yellow">
                Do you provide design consultation services?
              </h3>
              <p className="text-gray-300">
                Yes! Our expert design team offers comprehensive consultation services to help you create the perfect
                packaging solution. We work closely with you from concept to final product.
              </p>
            </Card>

            <Card className="neon-card p-6 backdrop-blur-sm border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3 neon-green">Do you ship in whole India?</h3>
              <p className="text-gray-300">
                We ship PAN India through reliable courier partners. Shipping costs vary based on location and order
                size.
              </p>
            </Card>

            <Card className="neon-card p-6 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3 neon-purple">Where is your headquarters located?</h3>
              <p className="text-gray-300">
                Our headquarters is located in Mohali, India. We serve clients across the country from this central
                location.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
