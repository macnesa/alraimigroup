import FashionPage from "./FashionPage";

export const metadata = {
  title:
    "Fashion Manufacturing in China | Womenswear, Resortwear & Activewear | Alraimi Group",

  description:
    "End-to-end fashion manufacturing in China for womenswear, resortwear, modest fashion, and activewear. Tech packs, sampling, production, QC (AQL), and worldwide shipping handled by our factory team.",

  keywords: [
    "fashion manufacturing China",
    "clothing manufacturer China",
    "womenswear manufacturer",
    "resortwear manufacturer",
    "modest fashion manufacturer",
    "golf apparel manufacturer",
    "garment factory China",
    "custom clothing manufacturer"
  ],

  alternates: {
    canonical: "https://alraimigroup.com/fashion-manufacturing"
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
      "Fashion Manufacturing in China | Womenswear, Resortwear & Activewear",

    description:
      "From sketch to shipment: tech packs, sampling, production, QC, and worldwide delivery handled by our China factory team.",

    url: "https://alraimigroup.com/fashion-manufacturing",

    siteName: "Alraimi Group",

    images: [
      {
        url: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772602454/ChatGPT_Image_Mar_4_2026_12_33_53_PM_nkppls.png",
        width: 1200,
        height: 630,
        alt: "Fashion manufacturing production in China"
      }
    ],

    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Fashion Manufacturing in China | Womenswear & Activewear Production",

    description:
      "Tech packs, sampling, production, QC, and worldwide shipping handled by our factory team in China.",

    images: [
      "https://res.cloudinary.com/djgu1bhef/image/upload/v1772602454/ChatGPT_Image_Mar_4_2026_12_33_53_PM_nkppls.png"
    ]
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fashion Manufacturing",

  provider: {
    "@type": "Organization",
    name: "Alraimi Group",
    url: "https://alraimigroup.com"
  },

  serviceType: "Garment Manufacturing",

  areaServed: "Worldwide",

  description:
    "End-to-end fashion manufacturing in China including tech packs, sampling, production, quality control (AQL), and global logistics.",

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fashion Manufacturing Categories",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Womenswear Manufacturing"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Resortwear Manufacturing"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Modest Fashion Manufacturing"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Golf Apparel Manufacturing"
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
          "Yes. Your order is produced on our lines in China under our PI, QC, and warranty."
      }
    },
    {
      "@type": "Question",
      name: "What MOQs do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Typical first runs are 150–200 pieces per color per style. Final MOQs are confirmed based on fabrics, trims, and production complexity."
      }
    },
    {
      "@type": "Question",
      name: "How fast are samples and production?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Samples typically take 2–3 weeks after design confirmation. Production usually takes 4–8 weeks depending on styles and materials."
      }
    },
    {
      "@type": "Question",
      name: "Do you help with tech packs and size charts?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We assist with tech packs, prepare size charts, and provide measurement photos and videos during sampling rounds."
      }
    },
    {
      "@type": "Question",
      name: "How do you ensure quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We perform in-line quality control during production and pre-shipment AQL inspection with measurement reports and visual documentation."
      }
    },
    {
      "@type": "Question",
      name: "Can you ship door-to-door?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We offer DDP shipping with customs clearance, or EXW and FOB if you prefer using your own forwarder."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
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

      <FashionPage />
    </>
  );
}