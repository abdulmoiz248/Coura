import Link from "next/link"
import {  Instagram, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
    // { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    // { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
    // { name: "Twitter", href: "#", icon: Twitter },
    // { name: "GitHub", href: "#", icon: Github },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">About Coura</h3>
            <p className="text-sm text-muted-foreground">
              Transform your ideas into digital reality with our expert software development services.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navigation.main.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: coura.tech</p>
              <p>Phone: +92 321 4281575 </p>
              <p>Address: Lahore,Pakistan</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">Newsletter</h3>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for updates and insights.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">© 2024 Coura. All rights reserved.</p>
          <div className="flex space-x-6">
            {navigation.social.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary"
                  aria-label={item.name}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

