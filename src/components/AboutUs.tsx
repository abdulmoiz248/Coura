"use client"

import type React from "react"

import { BookCallModal } from "@/components/book-call-modal"
import { Button } from "@/components/ui/button"
import {ServiceCard} from '@/components/ServiceCard'
import { Code2, Cpu, Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black-900 text-white">
      {/* Hero Section */}
      <div className="container relative py-24">
        <div className="mx-auto max-w-2xl text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Transforming Ideas into Digital Reality</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We are a team of passionate developers and designers creating innovative software solutions for
            businesses worldwide.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <BookCallModal>
              <Button size="lg">Book a Live Call</Button>
            </BookCallModal>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">Our Mission</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            At Coura, we believe in transforming ideas into digital masterpieces. We infuse every line of code with
            creativity, innovation, and a touch of magic. Our mission is to create software solutions that not only meet
            technical requirements but radiate excellence and inspiration.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF] mb-12">What Sets Us Apart</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <ServiceCard
            icon={<Code2 className="h-8 w-8 text-indigo-400" />}
            title="Innovative Solutions"
            description="We craft cutting-edge software solutions that push the boundaries of what's possible."
          />
          <ServiceCard
            icon={<Globe className="h-8 w-8 text-purple-400" />}
            title="Global Reach"
            description="Our solutions transcend borders, serving clients worldwide with universal excellence."
          />
          <ServiceCard
            icon={<Cpu className="h-8 w-8 text-pink-400" />}
            title="Technical Excellence"
            description="We combine technical expertise with creative innovation to deliver outstanding results."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">Ready to Add Some Aura to Your Code?</h2>
          <p className="text-lg text-slate-300">Let's create something extraordinary together</p>
       
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <BookCallModal>
              <Button size="lg">Book a Live Call</Button>
            </BookCallModal>
          </div>
           </div>
      </section>
    </div>
  )
}
