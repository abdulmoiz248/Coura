"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {  motion} from 'framer-motion'
import { BookCallModal } from "@/components/book-call-modal"
import AboutUs from "@/components/AboutUs"
import  TestimonialsSection  from "@/components/Testimonials"
import Image from "next/image"





const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory.",
    image: "/zero.png",
  },
  {
    title: "BakeBot",
    description: "An Ai chatbot that helps you in cooking",
    image: "/bakebot.jpg",
  },
  {
    title: "FinTech Dashboard",
    description: "Real-time financial data visualization and analytics platform.",
    image: "/placeholder.svg?height=400&width=600",
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
    
       

       

        {/* Projects Section */}
        <section className="container py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">Featured Projects</h2>
            <p className="mt-4 text-muted-foreground">Take a look at some of our recent work.</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <Image
                  src={project.image }
                  alt={project.title}
                  width='400'
                  height='400'
                  className="aspect-video  object-contain transition-transform duration-300 hover:scale-105"
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
      

        {/* CTA Section */}
        <section className="container py-16 ">
          <Card className="bg-primary text-primary-foreground bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">
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

