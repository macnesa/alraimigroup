import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
 
export const metadata = {
  title: "Alraimi Group — Fashion Manufacturing & Luxury Packaging in China",

  description:
    "End-to-end fashion manufacturing and luxury packaging production in China. Sampling, production, quality control, and global shipping for international brands.",

  keywords: [
    "fashion manufacturer China",
    "luxury packaging manufacturer",
    "private label clothing manufacturer",
    "custom packaging China",
    "OEM fashion production"
  ],

  openGraph: {
    title: "Alraimi Group",
    description:
      "Manufacturing partner in China for fashion and luxury packaging brands.",
    url: "https://alraimigroup.com",
    siteName: "Alraimi Group",
    type: "website"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
