import { Code2, Cpu, Database, Globe2, Layout, Smartphone } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const services = [
  {
    title: "Web Development",
    description: "Building modern, responsive websites and web applications using cutting-edge technologies.",
    icon: Globe2,
    features: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps", "API Development"],
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile application development for iOS and Android.",
    icon: Smartphone,
    features: ["iOS Development", "Android Development", "Cross-platform Solutions", "App Store Optimization"],
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that deliver exceptional user experiences.",
    icon: Layout,
    features: ["User Interface Design", "User Experience Design", "Prototyping", "Design Systems"],
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps services for modern applications.",
    icon: Cpu,
    features: ["Cloud Architecture", "DevOps Services", "Server Management", "Performance Optimization"],
  },
  {
    title: "Backend Development",
    description: "Robust and scalable backend solutions to power your applications.",
    icon: Database,
    features: ["API Development", "Database Design", "Microservices", "System Integration"],
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions designed to meet your specific business needs.",
    icon: Code2,
    features: ["Enterprise Software", "CRM Systems", "Workflow Automation", "Legacy System Migration"],
  },
]

export const metadata = {
  title: "Services | Coura - Code with Aura",
  description:
    "Explore our comprehensive range of software development services including web development, mobile apps, UI/UX design, and cloud solutions.",
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer a comprehensive range of software development services to help your business thrive in the
              digital age.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="relative overflow-hidden">
                  <CardHeader>
                    <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="mr-2 size-1 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

