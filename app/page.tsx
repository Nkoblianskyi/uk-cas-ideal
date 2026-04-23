import type { Metadata } from "next"
import Script from "next/script"
import UkLandCasinoPage from "../components/uk-land-casino-page"
import { bettingSites } from "../data/mock-data"
import { SITE_URL, SITE_NAME } from "./layout"

export const metadata: Metadata = {
  title: "Best UK land-based casinos 2026 — top venues in Great Britain",
  description:
    "Top UK land-based casinos in 2026 — independent reviews comparing atmosphere, table games, slots floors, safer gambling support and service. We focus on physical venues licensed under the Gambling Act; this is not an online casino. 18+.",
  alternates: { canonical: "/" },
  openGraph: {
    url: SITE_URL,
    title: "Best UK land-based casinos 2026 — top venues in Great Britain",
    description:
      "Independent reviews of licensed UK casino venues. Physical premises only — not online play. 18+.",
    images: [{ url: "/banner-3.jpg", width: 1200, height: 630, alt: "Best UK land-based casinos 2026" }],
  },
  twitter: {
    title: "Best UK land-based casinos 2026 — top venues in Great Britain",
    description: "Licensed UK venues, editorial rankings — not an online casino. 18+.",
  },
}

export default function Page() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best UK land-based casinos 2026",
    description: "Editorial ranking of licensed land-based casino groups and venues in Great Britain",
    numberOfItems: bettingSites.length,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: bettingSites.map((site, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Organization",
        name: site.name,
        url: `${SITE_URL}/go/${site.slug}`,
        image: `${SITE_URL}${site.logo}`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.rating,
          bestRating: 10,
          worstRating: 1,
          ratingCount: site.votes,
        },
      },
    })),
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  }

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who can legally play in a UK casino?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "In Great Britain you must be 18 or over to enter licensed casino premises and to gamble. Operators must verify age and identity in line with UK Gambling Commission rules.",
        },
      },
      {
        "@type": "Question",
        name: "Is this website about online casinos?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. Best UK Land Casinos focuses on land-based venues — physical casinos and licensed betting premises — not remote or online casino products.",
        },
      },
      {
        "@type": "Question",
        name: "What is GamStop?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "GamStop is the free national self-exclusion scheme for online gambling with UK-licensed operators. Land-based venues also offer their own exclusion and safer gambling tools; ask staff or check the operator’s safer gambling pages.",
        },
      },
      {
        "@type": "Question",
        name: "Who regulates casinos in Great Britain?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The Gambling Commission regulates commercial gambling in Great Britain, including casino operating licences, licence conditions, and rules to protect players.",
        },
      },
    ],
  }

  return (
    <>
      <UkLandCasinoPage />
      <Script
        id="ld-itemlist"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <Script
        id="ld-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  )
}
