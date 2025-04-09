"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function CouraHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-12 sm:py-20">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/30 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center space-y-8 text-center"
        >
          {/* Logo with animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
              duration: 0.8,
            }}
            className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mb-4"
          >
            <Image
              src="/logo.jpeg"
              alt="Coura Tech Logo"
              fill
              priority
              className="object-contain drop-shadow-[0_0_30px_rgba(0,255,148,0.3)]"
              sizes="(max-width: 640px) 12rem, (max-width: 768px) 14rem, (max-width: 1024px) 20rem, 24rem"
            />
          </motion.div>

          {/* Text with animations */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF] drop-shadow-[0_0_10px_rgba(0,184,255,0.3)]"
          >
            Coura
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-300 max-w-2xl"
          >
            <span className="bg-gradient-to-r from-slate-200 to-slate-100 bg-clip-text text-transparent">
              Code with Aura
            </span>
          </motion.p>

          {/* Optional CTA button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8"
          >
          
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-[#00FF94]/10 rounded-full blur-3xl" />
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-[#00B8FF]/10 rounded-full blur-3xl" />
    </section>
  )
}
