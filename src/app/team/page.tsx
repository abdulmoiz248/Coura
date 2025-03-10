import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"


const team = [
  {
    name: "Zain ul Abideen",
    role: "AI/ML Engineer",
    bio: "Passionate about AI-driven solutions, with expertise in building scalable machine learning systems.",
    image: "/zain.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/zain-ul-abideen-275535325/",
      github: "https://github.com/codewithzainkhan"
    },
    skills: ["Machine Learning", "Deep Learning", "Software Architecture", "AI Strategy"]
},
{
  name: "Abdul Moiz",
  role: "Full-Stack Developer | AI Enthusiast",
  bio: "Building scalable web apps  and diving into AI & machine learning.",
  image: "/moiz.jpg",
  social: {
   
    linkedin: "https://www.linkedin.com/in/abdul-moiz-170222246/",
    github: "https://github.com/abdulmoiz248"
  },
  skills: ["Full-Stack Development", "Machine Learning", "Software Architecture", "NestJS", "Next.js", "Redux"]
}
,
  {
    name: "Haris Imran",
    role: "React Native Developer",
    bio: "Building cross-platform mobile apps with a focus on performance and user experience.",
 
    image: "/haris.jpg",
    social: {
      linkedin: "/",
      github: "https://github.com/ch-harisimran",
    },
    skills: ["React", "React Native", "TypeScript"],
  },
  {
    name: "Sikander Mukhtar",
    role: "Full Stack Developer",
    bio: "Proficient in bridging the gap between front-end interactions and back-end logic, ensuring high performance, security, and usability.",
    image: "/sikander.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/sikander-mukhtar-1b82bb292/",
      github: "https://github.com/sikandermukhtar"
    },
    skills: ["React JS", "Django", "React Native"]
},
{
  name: "Ahmad Aslam",
  role: "Front End Developer",
  bio: "Passionate about AI-driven solutions, with expertise in building scalable machine learning systems.",
  image: "/aslam.jpeg",
  social: {
    linkedin: "https://www.linkedin.com/in/muhammad-ahmad-aslam-84635b266/",
    github: "https://github.com/AhmadAslam69"
  },
  skills: ["C++", "HTML, CSS, JS", "React", "MySql", "Digital Marketing" ]
},{
  "name": "Abdul Muqeet",
  "role": "Client Relations & Talent Acquisition Specialist",
  "bio": "Skilled in client communication, talent acquisition, and product scouting.",
  "image": "/king.jpeg",
  "social": {
    "linkedin": "https://www.linkedin.com/in/abdul-muqeet-naeem-744211292",
    "github": "/"
  },
  "skills": [
    "Client Communication",
    "Talent Acquisition",
    "Product Hunting",
    "Negotiation & Sales",
  ],
  
},
{
  "name": "MUHAMMAD WAHB USMAN",
  "role": "Mobile App Developer",
  "bio": "Experienced Mobile App Developer with expertise in creating seamless applications. Skilled in TikTok marketing, Shopify website design, and eBay product hunting. Confident speaker with a passion for innovation and business growth.",
  "image": "/wahb.jpeg",
  "social": {
    "linkedin": "https://pk.linkedin.com/in/muhammad-wahb-usman-b89a25355",
    "github": "https://github.com/wahb11"
  },
  "skills": [
    "Mobile App Development",
    "UI/UX Design",
    "React Native",
    "TikTok Marketing",
    "Shopify Website Designing",
    "Product Hunting on eBay",
    "Public Speaking",
    "E-Commerce Strategies"
  ]
}

  
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
                  <Image  src={member.image} alt={member.name} className="w-full object-cover" />
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

