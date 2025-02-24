import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory management and analytics.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web Development",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    title: "Healthcare App",
    description: "Mobile application for patient management and telemedicine services.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Mobile Development",
    technologies: ["React Native", "Firebase", "WebRTC"],
  },
  {
    title: "FinTech Dashboard",
    description: "Real-time financial data visualization and analytics platform for investment firms.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web Development",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
  },
  {
    title: "Smart Home IoT Platform",
    description: "IoT platform for managing and monitoring smart home devices with real-time updates.",
    image: "/placeholder.svg?height=400&width=600",
    category: "IoT",
    technologies: ["Python", "MQTT", "React", "AWS IoT"],
  },
  {
    title: "AI-Powered CRM",
    description: "Customer relationship management system with AI-driven insights and automation.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Enterprise Software",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
  },
  {
    title: "Supply Chain Management",
    description: "Blockchain-based supply chain management system for tracking goods.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Blockchain",
    technologies: ["Solidity", "React", "Node.js", "Ethereum"],
  },
]

export const metadata = {
  title: "Projects | Coura - Code with Aura",
  description:
    "Explore our portfolio of successful projects across web development, mobile apps, IoT, and enterprise solutions.",
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
     
      <main className="flex-1">
        <section className="container py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">Our Projects</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Take a look at some of our recent work and success stories.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="group overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-primary">{project.category}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="group/btn w-full justify-between">
                    View Case Study
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    
    </div>
  )
}

