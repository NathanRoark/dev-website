import "@/styles/globals.css"
import { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/react"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

const defaultViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export { defaultViewport }

export const metadata: Metadata = {
  metadataBase: new URL("https://nathanroark.dev"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Telperion",
    "Web Development",
    "Software Development",
    "Software Engineering",
    "Engineering",
    "Contractor",
    "Consultant",
  ],
  authors: [
    {
      name: "Nathan Roark",
      url: "https://nathanroark.dev",
    },
  ],
  creator: "Nathan Roark",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@nathanroark",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body
        className={cn(
          "no-scrollbar overscroll-y-auto bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div>{children}</div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  )
}
