"use client"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ServiceCard"
import { Code2, Cpu, Globe, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black/95 text-white overflow-hidden">
      {/* Hero Section */}
      <main className="">
        <motion.div
          className="container relative py-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div className="mx-auto max-w-2xl text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              Transforming Ideas into Digital Reality
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-slate-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              We are a team of passionate developers and designers creating innovative software solutions for businesses
              worldwide.
            </motion.p>
            <motion.div
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-[#00FF94] to-[#00B8FF] hover:opacity-90 transition-opacity group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-900/50">
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>

{/* Mission Section */}
<section className="container mx-auto px-4 py-12 md:pb-16 mt-[-40px] sm:mt-0">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-3xl mx-auto text-center space-y-6"
  >
    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">
      Our Mission
    </h2>
    <motion.p
      className="text-lg text-slate-300 leading-relaxed"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      At Coura, we believe in transforming ideas into digital masterpieces. We infuse every line of code with
      creativity, innovation, and a touch of magic. Our mission is to create software solutions that not only meet
      technical requirements but radiate excellence and inspiration.
    </motion.p>
  </motion.div>
</section>





      {/* Services Section */}
      <section className="container mx-auto px-4 py-24">
        <motion.h2
          className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF] mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          What Sets Us Apart
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            {
              icon: <Code2 className="h-8 w-8 text-[#00FF94]" />,
              title: "Innovative Solutions",
              description: "We craft cutting-edge software solutions that push the boundaries of what's possible."
            },
            {
              icon: <Globe className="h-8 w-8 text-[#00B8FF]" />,
              title: "Global Reach",
              description: "Our solutions transcend borders, serving clients worldwide with universal excellence."
            },
            {
              icon: <Cpu className="h-8 w-8 text-[#00FFD1]" />,
              title: "Technical Excellence",
              description: "We combine technical expertise with creative innovation to deliver outstanding results."
            }
          ].map((service, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <ServiceCard icon={service.icon} title={service.title} description={service.description} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
