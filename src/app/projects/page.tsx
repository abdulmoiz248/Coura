import { ArrowRight } from "lucide-react" 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"


const projects = [
  {
    title: "Zero Limit Apparel",
    description: "An e-commerce platform for streetwear apparel with real-time inventory and analytics.",
    image: "/zero.png",
    category: "Web Development",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://zero-limit.vercel.app/",
  },
  {
    "title": "BakeBot",
    "description": "An AI-powered baking assistant that provides real-time recipe suggestions, ingredient tracking, and step-by-step baking guidance across web and mobile platforms.",
    "image": "/bakebot.jpg",
    "category": "AI & Full-Stack Development",
    "technologies": ["Express.js", "React", "Python",  "OpenAI API"],
    link:"https://www.linkedin.com/posts/abdul-moiz-170222246_ai-react-expressjs-activity-7291871042807951360-3Y0B?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzmqGQBzRcgJ9xzhcimEb71Ou7AeDJKJxw"
}
,
  {
    title: "Finance Admin Dashboard",
    description: "A finance-focused Next.js app for e-commerce admin, including order management, analytics, and invoice generation.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web Development",
    technologies: ["Next.js", "MongoDB", "Redux", "Tailwind CSS"],
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
  {
    title: "AI Chat Assistant",
    description: "Discord-based AI assistant for reminders, financial reports, and real-time notifications.",
    image: "/assistant.png",
    category: "AI & Automation",
    technologies: ["TypeScript", "Nest", "MongoDB", "OpenAI API"],
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
  <Image
    src={project.image}
    alt={project.title}
    width={600}
    height={400}
    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
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
                 {project.link &&
                  <Link  href={project.link} className="group/btn w-full justify-between flex">
                    View Project
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    
    </div>
  )
}

