import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navigation from "@/components/navigation"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shelom Graphics - Premium Packaging Solutions | Sticker Printing Services",
  description:
    "Professional packaging and sticker printing services in Chandigarh. Specializing in pharmaceutical packaging, digital printing solutions, custom stickers, and premium printing. Quality guaranteed.",
  keywords:
    "packaging solutions, sticker printing, pharmaceutical packaging, digital printing, custom stickers, printing services, Chandigarh, India",
  generator: "v0.dev",
  icons: {
    icon: "/shelom-graphics-logo.png",
    shortcut: "/shelom-graphics-logo.png",
    apple: "/shelom-graphics-logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
