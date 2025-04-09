"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {  motion} from 'framer-motion'
import { BookCallModal } from "@/components/book-call-modal"
import AboutUs from "@/components/AboutUs"
import  TestimonialsSection  from "@/components/Testimonials"
import Image from "next/image"
import CouraHero from "@/components/Hero"
import Link from "next/link"





const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory.",
    image: "/dark.jpeg",
     link:'https://zero-limit.vercel.app/'
  },
  {
    title: "BakeBot",
    description: "An Ai chatbot that helps you in cooking",
    image: "/bakebot.jpg",
    link:''
  },
 
]



export default function Home() {
  return (
    <div className="flex min-h-screen bg-black flex-col">
     
      <main className="flex-1">
        {/* Hero Section */}
      <CouraHero/>
 <AboutUs/>
    
       

       

        {/* Projects Section */}
        <section className="container py-16 flex flex-col items-center">
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">
      Featured Projects
    </h2>
    <p className="mt-4 text-muted-foreground">Take a look at some of our recent work.</p>
  </div>
  
  <div className={`mt-16 grid gap-8 ${projects.length === 2 ? "grid-cols-1 sm:grid-cols-2 justify-center" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
    {projects.map((project) => (
        <Link href={project.link}  className="flex flex-col items-center">
      <Card key={project.title} className="overflow-hidden mx-auto w-full max-w-[400px]">
        <Image
          src={project.image}
          alt={project.title}
          width="400"
          height="400"
          className="aspect-video object-contain transition-transform duration-300 hover:scale-105"
        />
        <CardHeader>
        
          <CardTitle className="text-center">{project.title}</CardTitle>
         
          <CardDescription className="text-center">{project.description}</CardDescription>
        </CardHeader>
      </Card>
       </Link> 
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

