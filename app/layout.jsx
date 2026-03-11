import "./globals.css";
import Providers from "./providers";

export const metadata = {
  metadataBase: new URL("https://alraimigroup.com"),

  title: {
    default:
      "Alraimi Group — Fashion Manufacturing & Luxury Packaging in China",
    template: "%s | Alraimi Group"
  },

  description:
    "End-to-end fashion manufacturing and luxury packaging production in China. Sampling, production, quality control, and global shipping for international brands.",

  keywords: [
    "fashion manufacturer China",
    "luxury packaging manufacturer",
    "private label clothing manufacturer",
    "custom packaging China",
    "OEM fashion production"
  ],

  alternates: {
    canonical: "/"
  },

  openGraph: {
    title: "Alraimi Group",
    description:
      "Manufacturing partner in China for fashion and luxury packaging brands.",
    url: "https://alraimigroup.com",
    siteName: "Alraimi Group",
    images: [
      {
        url: "/og-image.jpg",
     
        width: 1200,
        height: 630,
        alt: "Fashion manufacturing production"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Alraimi Group",
    description:
      "Manufacturing partner in China for fashion and luxury packaging brands.",
    images: ["https://res.cloudinary.com/djgu1bhef/image/upload/v1772602454/ChatGPT_Image_Mar_4_2026_12_33_53_PM_nkppls.png"]
  },

  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    "@id": "https://alraimigroup.com/#organization",

    name: "Alraimi Group",

    url: "https://alraimigroup.com",

    logo: "https://alraimigroup.com/images/alraimi-logo-black-1.png",

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+8619924111300",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["English"]
    },

    sameAs: ["https://www.instagram.com/alraimigroup"]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    "@id": "https://alraimigroup.com/#website",

    url: "https://alraimigroup.com",

    name: "Alraimi Group",

    publisher: {
      "@id": "https://alraimigroup.com/#organization"
    }
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
      </body>
    </html>
  );
}