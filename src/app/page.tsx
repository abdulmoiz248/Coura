"use client"

import { ArrowRight, Code2, Cpu, Globe2, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {  motion} from 'framer-motion'
import { BookCallModal } from "@/components/book-call-modal"
import AboutUs from "@/components/AboutUs"
import  TestimonialsSection  from "@/components/Testimonials"



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
    <div className="flex min-h-screen bg-black flex-col">
     
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 -z-10">
            <div className="gradient-bg absolute inset-0" />
          </div>
          <section className="relative overflow-hidden">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black-500/20 via-transparent to-transparent" />
                 <div className="container mx-auto px-4 py-24 relative">
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8 }}
                     className="text-center space-y-6"
                   >
                     <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF] ">
                       Coura
                       
                     </h1>
                     <p className="text-2xl md:text-3xl font-light text-slate-300">Code with Aura</p>
                   </motion.div>
                 </div>
               </section>
        </section>
 <AboutUs/>
    
       

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
        <TestimonialsSection/>
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
    </div>
  )
}

