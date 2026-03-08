import PackagingPage from "./PackagingPage";

export const metadata = {
  title:
    "Luxury Packaging Manufacturer in China | Rigid Boxes, Paper Bags & Perfume Packaging | Alraimi Group",

  description:
    "Luxury paper packaging manufacturer in China for perfume, cosmetics, and fashion brands. Rigid boxes, folding cartons, paper bags, inserts, and premium finishes with QC and worldwide shipping.",

  keywords: [
    "luxury packaging manufacturer",
    "rigid box manufacturer China",
    "perfume packaging manufacturer",
    "cosmetic packaging manufacturer",
    "custom rigid boxes China",
    "magnetic box manufacturer",
    "paper packaging manufacturer",
    "luxury paper packaging China"
  ],

  alternates: {
    canonical: "https://alraimigroup.com/luxury-packaging"
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  openGraph: {
    title:
      "Luxury Packaging Manufacturer | Rigid Boxes, Perfume & Fashion Packaging",

    description:
      "Premium rigid boxes, folding cartons, paper bags, and branded packaging produced in China with precision finishing and QC.",

    url: "https://alraimigroup.com/luxury-packaging",

    siteName: "Alraimi Group",

    images: [
      {
        url: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772376971/image_2026-02-27_13-50-18_kzqkhy.png",
        width: 1200,
        height: 630,
        alt: "Luxury rigid box packaging production"
      }
    ],

    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Luxury Packaging Manufacturer | Rigid Boxes & Perfume Packaging",

    description:
      "Rigid boxes, folding cartons, paper bags, and premium finishes produced by our China factory with global shipping.",

    images: [
      "https://res.cloudinary.com/djgu1bhef/image/upload/v1772376971/image_2026-02-27_13-50-18_kzqkhy.png"
    ]
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  name: "Luxury Packaging Manufacturing",

  provider: {
    "@type": "Organization",
    name: "Alraimi Group",
    url: "https://alraimigroup.com"
  },

  serviceType: "Luxury Paper Packaging Manufacturing",

  areaServed: "Worldwide",

  description:
    "Manufacturing of luxury rigid boxes, folding cartons, paper bags, and branded packaging for perfume, cosmetics, and fashion brands.",

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Luxury Packaging Types",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rigid Box Manufacturing"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Folding Carton Manufacturing"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury Paper Bag Manufacturing"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Perfume Packaging Manufacturing"
        }
      }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "Are you the manufacturer?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Your order is produced on our manufacturing lines in China under our PI, quality control process, and production warranty."
      }
    },
    {
      "@type": "Question",
      name: "What MOQs do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Standard production runs start from 5,000 units. Some projects may begin from 1,000 units depending on box size, materials, and finishing complexity."
      }
    },
    {
      "@type": "Question",
      name: "How fast are samples and production?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Samples typically take 1–3 weeks after dieline and specification approval. Production usually takes 3–6 weeks depending on finishes and complexity."
      }
    },
    {
      "@type": "Question",
      name: "Can you match brand colors?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We match colors using Pantone references, client physical swatches, or approved master samples to ensure consistency across reorders."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer sustainable packaging options?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We offer FSC-certified papers, recycled materials, soy-based inks, and plastic-free insert solutions for brands seeking sustainable packaging."
      }
    },
    {
      "@type": "Question",
      name: "Can you ship door-to-door?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We offer DDP shipping with customs clearance, as well as EXW and FOB options depending on your logistics preference."
      }
    }
  ]
};

export default function Page() {
  return <>
   <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
       <PackagingPage />
  </>;
}
