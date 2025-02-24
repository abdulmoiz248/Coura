import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { BookCallDialog } from "@/components/book-call-dialog";
import { BookCallModal } from "@/components/book-call-modal";
import {
  Code2,
  Smartphone,
  Palette,
  Database,
  Cloud,
  Shield,
  Server,
  Bot,
  LineChart,
  Lock,
  Globe,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: <Code2 className="h-12 w-12" />,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies like React, Next.js, and Node.js. We create scalable, performant, and user-friendly solutions that drive business growth.",
    features: [
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "Content Management Systems",
      "Custom Web Portals",
    ],
  },
  {
    icon: <Smartphone className="h-12 w-12" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences. We use React Native and Flutter to build high-performance apps for iOS and Android.",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Solutions",
      "App Store Optimization",
      "Mobile UI/UX Design",
    ],
  },
  {
    icon: <Palette className="h-12 w-12" />,
    title: "UI/UX Design",
    description: "User-centered design that delivers exceptional experiences. Our design team creates intuitive interfaces that engage users and drive conversions.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Interaction Design",
      "Usability Testing",
    ],
  },
  {
    icon: <Database className="h-12 w-12" />,
    title: "Database Solutions",
    description: "Scalable and secure database architecture designed for performance and reliability. We implement both SQL and NoSQL solutions based on your needs.",
    features: [
      "Database Design",
      "Performance Optimization",
      "Data Migration",
      "Backup & Recovery",
      "Database Security",
    ],
  },
  {
    icon: <Cloud className="h-12 w-12" />,
    title: "Cloud Services",
    description: "Cloud-native solutions for modern businesses. We help you leverage the power of AWS, Azure, and Google Cloud for scalable and reliable infrastructure.",
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "Serverless Architecture",
      "Container Orchestration",
      "Cloud Security",
    ],
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets. We implement industry best practices to ensure your applications are secure.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance Implementation",
      "Security Training",
      "Incident Response",
    ],
  },
  {
    icon: <Server className="h-12 w-12" />,
    title: "DevOps Services",
    description: "Streamline your development and operations with our DevOps expertise. We implement efficient CI/CD pipelines and automation solutions.",
    features: [
      "CI/CD Implementation",
      "Infrastructure Automation",
      "Monitoring & Logging",
      "Performance Optimization",
      "DevOps Training",
    ],
  },
  {
    icon: <Bot className="h-12 w-12" />,
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence for your business. We develop custom AI solutions that drive innovation and efficiency.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "AI Integration",
    ],
  },
  {
    icon: <LineChart className="h-12 w-12" />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights. We build comprehensive analytics solutions that help you make data-driven decisions.",
    features: [
      "Business Intelligence",
      "Data Visualization",
      "Real-time Analytics",
      "Custom Dashboards",
      "Data Integration",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="container mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            We offer a comprehensive range of software development services
            to help your business succeed in the digital world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 text-primary  group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mt-16">
        <Card className="bg-primary text-primary-foreground  bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <BookCallModal>
              <Button size="lg">Book a Live Call</Button>
            </BookCallModal>
          </div>
            {/* <BookCallDialog>
              <Button size="lg" variant="secondary">
                Schedule a Consultation
              </Button>
            </BookCallDialog> */}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}