import type { Metadata } from "next"

const defaultMetadata: Metadata = {
  metadataBase: new URL("https://coura.dev"),
  title: {
    default: "Coura - Code with Aura",
    template: "%s | Coura - Code with Aura",
  },
  description: "Transform your ideas into digital reality with Coura's expert software development services.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "UI/UX design",
    "cloud solutions",
    "digital transformation",
  ],
  authors: [{ name: "Coura" }],
  creator: "Coura",
  publisher: "Coura",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Coura - Code with Aura",
    title: "Coura - Code with Aura",
    description: "Transform your ideas into digital reality with Coura's expert software development services.",
    url: "https://coura.dev",
    images: [
      {
        url: "https://coura.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coura - Code with Aura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coura - Code with Aura",
    description: "Transform your ideas into digital reality with Coura's expert software development services.",
    creator: "@couradev",
    images: ["https://coura.dev/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default defaultMetadata

