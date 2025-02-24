import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Coura - Code with Aura",
  description: "Transform your ideas into digital reality with Coura's expert software development services.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
   
      <body className={inter.className}>
      <SiteHeader/>
      {children}
      <SiteFooter></SiteFooter> 
      </body>

     
    </html>
  )
}

