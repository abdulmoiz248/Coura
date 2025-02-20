import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const jobs = [
  {
    title: "Senior Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    description:
      "We're looking for an experienced Full Stack Developer to join our team and help build innovative web applications.",
    requirements: [
      "5+ years of experience with React and Node.js",
      "Strong understanding of TypeScript",
      "Experience with cloud platforms (AWS/GCP)",
      "Excellent problem-solving skills",
    ],
  },
  {
    title: "UI/UX Designer",
    location: "Hybrid",
    type: "Full-time",
    description: "Join our design team to create beautiful and intuitive user interfaces for our clients' projects.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma and design tools",
      "Strong portfolio of web and mobile designs",
      "Experience with design systems",
    ],
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    description: "Help us build and maintain robust cloud infrastructure and deployment pipelines.",
    requirements: [
      "Experience with AWS/GCP cloud platforms",
      "Knowledge of Docker and Kubernetes",
      "CI/CD pipeline implementation",
      "Infrastructure as Code experience",
    ],
  },
]

const benefits = [
  {
    title: "Flexible Work",
    description: "Work remotely or from our modern office spaces.",
  },
  {
    title: "Health Insurance",
    description: "Comprehensive health, dental, and vision coverage.",
  },
  {
    title: "Learning Budget",
    description: "Annual budget for courses and conferences.",
  },
  {
    title: "Team Events",
    description: "Regular team building and social events.",
  },
  {
    title: "Modern Equipment",
    description: "Latest hardware and software for your work.",
  },
  {
    title: "Career Growth",
    description: "Clear career progression and mentorship.",
  },
]

export const metadata = {
  title: "Careers | Coura - Code with Aura",
  description:
    "Join our team of passionate developers, designers, and technology experts. Explore current job openings and benefits at Coura.",
}

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Join Our Team</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We're always looking for talented individuals to join our growing team.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight">Open Positions</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <Card key={job.title}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{job.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {job.location} · {job.type}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{job.description}</p>
                    <div className="mb-4 space-y-2">
                      {job.requirements.map((req) => (
                        <div key={req} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-1 size-4 text-primary" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full justify-between">
                      Apply Now
                      <ArrowRight className="size-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-bold tracking-tight">Why Work at Coura?</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <Card key={benefit.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

