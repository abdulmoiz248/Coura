import { ArrowRight, Code2, Cpu, Globe2, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BookCallModal } from "@/components/book-call-modal"

const metrics = [
  { label: "Clients Served", value: "100+" },
  { label: "Projects Completed", value: "250+" },
  { label: "Years Experience", value: "10+" },
  { label: "Team Members", value: "50+" },
]

const services = [
  {
    title: "Web Development",
    description: "Building modern, responsive websites and web applications.",
    icon: Globe2,
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile application development.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces.",
    icon: Code2,
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps services.",
    icon: Cpu,
  },
]

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Healthcare App",
    description: "Mobile application for patient management and telemedicine.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "FinTech Dashboard",
    description: "Real-time financial data visualization and analytics platform.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const testimonials = [
  {
    quote: "Coura transformed our business with their innovative solutions. Highly recommended!",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "The team's expertise and professionalism exceeded our expectations.",
    author: "Michael Chen",
    role: "CTO, StartupX",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "Outstanding service and exceptional results. A pleasure to work with!",
    author: "Emily Brown",
    role: "Product Manager, InnovateCo",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 -z-10">
            <div className="gradient-bg absolute inset-0" />
          </div>
          <div className="container relative">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Transforming Ideas into Digital Reality</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We are a team of passionate developers and designers creating innovative software solutions for
                businesses worldwide.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <BookCallModal>
                  <Button size="lg">Book a Live Call</Button>
                </BookCallModal>
                <Button variant="ghost" size="lg">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="container py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <Card key={metric.label}>
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">{metric.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="container py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-muted-foreground">
              We offer a comprehensive range of software development services to help your business grow.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="relative overflow-hidden">
                  <CardHeader>
                    <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section className="container py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-muted-foreground">Take a look at some of our recent work.</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="aspect-video w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-muted-foreground">Don&apos;t just take our word for it.</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="size-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-base">{testimonial.author}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">&quot;{testimonial.quote}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="flex flex-col items-center gap-6 p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Start Your Project?</h2>
              <p className="max-w-2xl text-primary-foreground/80">
                Let&apos;s discuss how we can help bring your ideas to life. Schedule a call with our team today.
              </p>
              <BookCallModal>
                <Button size="lg" variant="secondary">
                  Book a Live Call
                </Button>
              </BookCallModal>
            </CardContent>
          </Card>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

