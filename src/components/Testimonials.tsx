
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Terminal } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "M Ahmad",
      role: "CEO",
     
      quote:
        "Coura built Zero Limit Apparel with precision and style. The design, performance, and overall execution were top-tier — exceeded expectations in every way.",
      company: "Zero Limit Apparel",
      gradientClass: "from-[#00FF94] to-[#00B8FF]",
      projectType: "E-Commerce Platform",
    },
    {
      name: "Rana M. Ajmal",
      role: "Instructor",
 
      quote:"Coura delivered a sleek, user-friendly food app with flawless functionality. From UI to performance, everything was built with care and expertise.",
      company: "Food App",
      gradientClass: "from-[#FF3366] to-[#CB00FF]",
      projectType: "Food Delievery  Platform",
    },
    {
      name: "Muhammad Faisal ",
      role: "Govt Officer",
 
      quote:"Coura delivered NexaLink with exceptional quality and reliability. The platform was built with performance, scalability, and user experience at its core.",
      company: "Messaging Module",
      gradientClass: "from-[#FF3366] to-[#CB00FF]",
      projectType: "Chatting Module",
    },
  
  ]

  return (
    <div className="w-full bg-black text-white">
      <section className="w-full py-16 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Glow effects */}
        <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-[0.15]">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-[#00FF94] to-[#00B8FF]" />
          <div className="blur-[106px] h-32 bg-gradient-to-r from-[#FF3366] to-[#CB00FF]" />
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-[#00FF94]" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">
                Client Success Stories
              </h2>
            </div>
            <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
              Delivering exceptional software solutions that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,255,148,0.1)]"
              >
                <CardContent className="p-6">
                  {/* Decorative terminal header */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-black/40 flex items-center px-3 space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/70" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                    <div className="w-2 h-2 rounded-full bg-green-500/70" />
                  </div>

                  <div className="mt-4">
                    

                    <div className="mt-6 space-y-4">
                      <Terminal className="h-5 w-5 text-zinc-600" />
                      <p className="text-base text-zinc-300">{testimonial.quote}</p>
                    </div>

                    <div className="mt-6 flex items-center">
                      <span
                        className={`text-xs font-mono px-2 py-1 rounded-md bg-white opacity-50 text-black`}
                      >
                        {testimonial.projectType}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Delivered", value: "50+" },
              { label: "Client Satisfaction", value: "99%" },
              { label: "Team Members", value: "10+" },
              { label: "Years Experience", value: "3+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <p className="max-w-[600px] text-center text-zinc-400">
              Join the growing list of companies that trust Coura for their software development needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

