"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Printer, Layers, Zap, ArrowRight, Star, Users, Award, Handshake, Shield } from "lucide-react"

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [videoOpacity, setVideoOpacity] = useState(0.15)

  function useAnimatedCounter(end: number, duration = 2000) {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        },
        { threshold: 0.1 },
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => observer.disconnect()
    }, [isVisible])

    useEffect(() => {
      if (!isVisible) return

      let startTime: number
      let animationId: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)

        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        setCount(Math.floor(easeOutExpo * end))

        if (progress < 1) {
          animationId = requestAnimationFrame(animate)
        }
      }

      animationId = requestAnimationFrame(animate)

      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId)
        }
      }
    }, [isVisible, end, duration])

    return { count, ref }
  }

  const projectsCounter = useAnimatedCounter(300, 3000)
  const clientsCounter = useAnimatedCounter(500, 2500)
  const yearsCounter = useAnimatedCounter(5, 2000)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = totalScroll / windowHeight
      setScrollProgress(scroll)

      const aboutUsSection = document.querySelector('[data-section="about-us"]')
      if (aboutUsSection) {
        const aboutUsTop = aboutUsSection.offsetTop
        const currentScroll = window.scrollY

        if (currentScroll < aboutUsTop - 200) {
          // Before About Us - low opacity for more visible video
          setVideoOpacity(0.15)
        } else {
          // At or after About Us - high opacity
          setVideoOpacity(0.7)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800/50 z-50">
        <div
          className="neon-progress h-full transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="fixed inset-0 w-full h-full z-0">
        <video autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover">
          <source src="/shelom.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black transition-opacity duration-500"
          style={{ opacity: videoOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
      </div>

      <section className="relative min-h-screen flex items-center justify-center py-20 pt-32 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="mb-12">
            <h1 className="neon-text text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              <span className="gradient-text neon-flicker">Shelom Graphics</span>
            </h1>

            <p className="neon-cyan text-2xl md:text-3xl lg:text-4xl mb-8 font-light tracking-wide neon-pulse">
              Premium Packaging & Custom Labels
            </p>

            <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              From pharmaceutical packaging to vibrant custom labels, we bring creativity and precision to every
              project. Trusted by businesses worldwide for exceptional quality and innovative design solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="neon-card p-6 text-center" ref={projectsCounter.ref}>
              <div className="neon-cyan text-3xl font-bold mb-2">{projectsCounter.count}k+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="neon-card p-6 text-center" ref={clientsCounter.ref}>
              <div className="neon-pink text-3xl font-bold mb-2">{clientsCounter.count}+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="neon-card p-6 text-center" ref={yearsCounter.ref}>
              <div className="neon-yellow text-3xl font-bold mb-2">{yearsCounter.count}+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs text-gray-500 italic">
              *Footage shown is AI generated of a typical manufacturing environment and does not depict our specific
              enterprise
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10 bg-gray-800/60 neon-border-top" data-section="about-us">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="neon-text text-4xl md:text-5xl font-bold mb-8">About Us</h2>
            <div className="neon-line mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="neon-card p-8 mb-8 bg-gray-900/80">
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                At Shelom Graphics, we believe packaging is more than a box — it's the first impression your brand
                makes. Since 2020, we've been passionate about combining creativity, precision, and industry know-how to
                bring unique packaging ideas to life.
              </p>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Rooted in experience with pharmaceutical and digital printing, our team works with care and attention to
                detail to produce visually striking and practically sound packaging solutions. From healthcare products
                that require clear communication to bold, eye-catching designs for fast-moving consumer goods — we aim
                to support your brand's visibility and presence.
              </p>
              <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
                Our approach is shaped by curiosity, innovation, and a commitment to long-term collaboration. At Shelom
                Graphics, we're here to help elevate how your brand is presented — thoughtfully, reliably, and with a
                lasting impression.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              <div className="neon-card group p-6 hover:neon-glow transition-all duration-500 hover:-translate-y-2 bg-gray-900/80">
                <div className="neon-cyan mb-4">
                  <Users className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4 neon-cyan">Collaborative Approach</h3>
                <p className="text-gray-300">
                  We work closely with you to understand your vision and bring it to life with precision and creativity.
                </p>
              </div>
              <div className="neon-card group p-6 hover:neon-glow transition-all duration-500 hover:-translate-y-2 bg-gray-900/80">
                <div className="neon-pink mb-4">
                  <Award className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4 neon-pink">Quality Assured</h3>
                <p className="text-gray-300">
                  Every project meets the highest standards of quality and attention to detail.
                </p>
              </div>
              <div className="neon-card group p-6 hover:neon-glow transition-all duration-500 hover:-translate-y-2 bg-gray-900/80">
                <div className="neon-yellow mb-4">
                  <Handshake className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4 neon-yellow">Trusted Partnership</h3>
                <p className="text-gray-300">
                  Building long-term relationships based on trust, reliability, and consistent excellence.
                </p>
              </div>
              <div className="neon-card group p-6 hover:neon-glow transition-all duration-500 hover:-translate-y-2 bg-gray-900/80">
                <div className="neon-green mb-4">
                  <Shield className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4 neon-green">Innovation Focus</h3>
                <p className="text-gray-300">
                  Constantly evolving our techniques and technologies to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10 bg-gray-900/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="neon-text text-4xl md:text-5xl font-bold mb-8">Our Services</h2>
            <div className="neon-line mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="neon-card group p-8 hover:neon-glow transition-all duration-500 hover:-translate-y-2 bg-gray-900/80">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 neon-glow">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold neon-cyan mb-4">Pharmaceutical Packaging</h3>
              <p className="text-gray-300 mb-6">
                Specialized packaging solutions ensuring safety, compliance, and brand integrity for healthcare
                products.
              </p>
              <Link href="/services" className="neon-link">
                Learn More <ArrowRight className="inline w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="neon-card group p-8 hover:neon-glow transition-all duration-500 hover:-translate-y-2 bg-gray-900/80">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 neon-glow">
                <Printer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold neon-pink mb-4">Custom Labels</h3>
              <p className="text-gray-300 mb-6">
                Vibrant custom labels featuring cartoon characters, themes, and creative designs for any purpose.
              </p>
              <Link href="/gallery" className="neon-link">
                View Gallery <ArrowRight className="inline w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="neon-card group p-8 hover:neon-glow transition-all duration-500 hover:-translate-y-2 bg-gray-900/80">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 neon-glow">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold neon-yellow mb-4">Digital Printing</h3>
              <p className="text-gray-300 mb-6">
                High-resolution digital printing services for marketing materials, banners, and promotional items.
              </p>
              <Link href="/portfolio" className="neon-link">
                See Portfolio <ArrowRight className="inline w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900/80 neon-border-top py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative w-32 h-32 flex-shrink-0 neon-glow">
                  <Image
                    src="/shelom-graphics-logo.png"
                    alt="Shelom Graphics Logo"
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tight">
                    <span className="neon-cyan">Shelom</span> <span className="neon-pink">Graphics</span>
                  </span>
                  <span className="text-xs text-gray-400 mt-1 tracking-wider uppercase">Quality Assured</span>
                </div>
              </div>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
                Your trusted partner for premium packaging solutions and custom labels. We create visual experiences
                that elevate brands and bring creative ideas to life.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-8 neon-cyan">Services</h4>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <Link href="/services" className="neon-link">
                    Pharmaceutical Packaging
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="neon-link">
                    Digital Printing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="neon-link">
                    Custom Labels
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="neon-link">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-8 neon-pink">Company</h4>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <Link href="/" className="neon-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="neon-link">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="neon-link">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="neon-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="neon-border-top mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Shelom Graphics. All rights reserved. | Quality Assured
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Star className="w-4 h-4 neon-yellow" />
              <span className="text-sm neon-yellow">Premium Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
