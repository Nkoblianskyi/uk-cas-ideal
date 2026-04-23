import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Lato } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
})

export const SITE_URL = "https://bestuklandcasinos.co.uk"
export const SITE_NAME = "Best UK Land Casinos"
const SITE_BRAND = "Best UK Land Casinos"
const SITE_TAGLINE = "Land-based casinos in Great Britain — independent reviews"
const SITE_DESCRIPTION =
  "Best UK Land Casinos — an editorial guide to licensed land-based and venue gambling in Great Britain. We compare atmosphere, games, safer gambling tools and how venues treat customers. Not an online casino site. Updated 2026. 18+ | BeGambleAware.org | GamStop."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_BRAND} - ${SITE_TAGLINE}`,
    template: `%s | ${SITE_BRAND}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "UK land-based casino",
    "British casino venues",
    "UK casino clubs",
    "UK Gambling Commission",
    "casino Great Britain",
    "Grosvenor Casino",
    "Aspers",
    "responsible gambling UK",
    "GamStop",
    "BeGambleAware",
    "GamCare",
    "18+ casino UK",
    "Best UK Land Casinos",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Casino & Gambling",
  classification: "Adult 18+",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_BRAND} - ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/banner-3.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_BRAND} — UK land-based casinos`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: `@${SITE_NAME.replace(/\s+/g, "")}`,
    creator: `@${SITE_NAME.replace(/\s+/g, "")}`,
    title: `${SITE_BRAND} - ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/banner-3.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  other: {
    rating: "adult",
    "age-rating": "18+",
    "content-language": "en-GB",
    "geo.region": "GB",
    "geo.placename": "United Kingdom",
    distribution: "global",
    target: "all",
    "revisit-after": "3 days",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#012169" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light dark",
}

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: SITE_BRAND,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  areaServed: { "@type": "Country", name: "United Kingdom" },
  knowsLanguage: ["en-GB"],
  sameAs: [
    "https://www.gamblingcommission.gov.uk/",
    "https://www.begambleaware.org/",
    "https://www.gamcare.org.uk/",
    "https://www.gamstop.co.uk/",
  ],
}

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: SITE_BRAND,
  url: SITE_URL,
  inLanguage: "en-GB",
  description: SITE_DESCRIPTION,
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" dir="ltr" className={lato.variable}>
      <head>
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={lato.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-black focus:text-white focus:px-3 focus:py-2 focus:rounded-sm"
        >
          Skip to main content
        </a>

        <div
          className="min-h-screen relative"
          style={{
            backgroundImage: "url(/bg.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="relative z-10">
            <Header />
            <main id="main-content" role="main">
              {children}
            </main>
            <Footer />
          </div>
        </div>

        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </body>
    </html>
  )
}
