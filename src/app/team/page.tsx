import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    bio: "15+ years of experience in software development and team leadership.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    skills: ["Leadership", "Strategy", "Software Architecture"],
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Expert in cloud architecture and distributed systems.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    skills: ["Cloud Computing", "System Design", "Team Management"],
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    bio: "Full-stack developer with a passion for clean code and best practices.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    skills: ["React", "Node.js", "TypeScript"],
  },
  {
    name: "Emily Brown",
    role: "UI/UX Designer",
    bio: "Creating beautiful and intuitive user experiences.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    skills: ["UI Design", "UX Research", "Prototyping"],
  },
  {
    name: "David Wilson",
    role: "DevOps Engineer",
    bio: "Automation expert with a focus on CI/CD and cloud infrastructure.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    skills: ["AWS", "Docker", "Kubernetes"],
  },
  {
    name: "Lisa Anderson",
    role: "Project Manager",
    bio: "Certified PMP with experience in agile methodologies.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    skills: ["Agile", "Scrum", "Risk Management"],
  },
]

export const metadata = {
  title: "Team | Coura - Code with Aura",
  description:
    "Meet our talented team of developers, designers, and technology experts who make digital innovation possible.",
}

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
     
      <main className="flex-1">
        <section className="container py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Team</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Meet the talented individuals who make digital innovation possible.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{member.bio}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="size-4" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="size-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                        <Github className="size-4" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    
    </div>
  )
}

