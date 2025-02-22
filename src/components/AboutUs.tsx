"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Cpu, Globe, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Coura
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                {" "}
                Software House
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-light text-slate-300">Code with Aura</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            At Coura, we believe in transforming ideas into digital masterpieces. We infuse every line of code with
            creativity, innovation, and a touch of magic. Our mission is to create software solutions that not only meet
            technical requirements but radiate excellence and inspiration.
          </p>
          <Button variant="outline" className="border-indigo-500/50 hover:border-indigo-400 hover:bg-indigo-950/50">
            Learn More About Our Process
            <Sparkles className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
        <div className="grid md:grid-cols-3 gap-8">
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

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <StatCard number="100+" label="Projects Completed" />
          <StatCard number="50+" label="Happy Clients" />
          <StatCard number="15+" label="Countries Served" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Add Some Aura to Your Code?</h2>
          <p className="text-lg text-slate-300">Let's create something extraordinary together</p>
          <Button className="bg-indigo-600 hover:bg-indigo-700">Get in Touch</Button>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="bg-slate-900/50 border-slate-800">
        <CardContent className="p-6 space-y-4">
          <div className="p-3 bg-slate-800/50 w-fit rounded-lg">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-slate-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center space-y-2"
    >
      <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
        {number}
      </div>
      <div className="text-slate-300">{label}</div>
    </motion.div>
  )
}

