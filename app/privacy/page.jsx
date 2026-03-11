"use client"

import Image from "next/image"
import Link from "next/link"
import Footer from "../../components/organisms/Footer"

export default function PrivacyPage() {

  return (
    <main className="bg-[#F3F2EF] text-neutral-900">

      <Header />

      <Hero />

      <Content />

      <Footer />

    </main>
  )

}


/* =========================
   HEADER
========================= */

function Header() {

  return (

    <header className="bg-[#F3F2EF] pt-[8px]">

      <div className="mx-[8px]">

        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 py-5 flex items-center justify-between">

          <Link href="/" className="flex items-center">

            <Image
              src="/images/alraimi-logo-black-1.png"
              alt="Alraimi Logo"
              width={42}
              height={38}
              priority
            />

          </Link>

          <nav className="flex items-center gap-4 sm:gap-6 md:gap-10 text-sm text-neutral-700">

            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>

            <Link href="/fashion-manufacturing" className="hover:text-black transition-colors">
              Fashion
            </Link>

            <Link href="/luxury-packaging" className="hover:text-black transition-colors">
              Packaging
            </Link>

            <Link href="/contact" className="hover:text-black transition-colors">
              Contact
            </Link>

          </nav>

          <Link
            href="/contact#get-pi"
            className="hidden md:inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium bg-[#8C7A5B] text-white hover:bg-[#7A6A4E] transition"
          >
            Get Your PI
          </Link>

        </div>

      </div>

    </header>

  )

}


/* =========================
   HERO
========================= */

function Hero() {

  return (

    <section className="bg-[#F3F2EF] pt-[8px]">

      <div className="px-[8px]">

        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 py-20 md:py-24">

          <div className="bg-white border border-[#DDD7CE] rounded-2xl px-8 sm:px-12 md:px-16 xl:px-20 py-16 md:py-20">

            <div className="max-w-[720px]">

              <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-8">
                Legal
              </div>

              <h1 className="text-[36px] sm:text-[40px] md:text-[44px] leading-[1.1] tracking-[-0.02em] font-normal text-neutral-900 mb-6">
                Privacy Policy
              </h1>

              <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.7] text-neutral-600">
                This page explains what information may be collected through this
                website and how it is used. Our goal is simple: clear communication
                with brands and partners who contact us.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}


/* =========================
   CONTENT
========================= */

function Content() {

  return (

    <section className="bg-[#F3F2EF] pt-[8px] pb-24">

      <div className="px-[8px]">

        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16">

          <div className="bg-white border border-[#DDD7CE] rounded-2xl px-8 sm:px-12 md:px-16 xl:px-20 py-16 md:py-20">

            <div className="max-w-[760px] space-y-14 text-[16px] sm:text-[17px] md:text-[18px] leading-[1.7] text-neutral-600">

              {/* WHO WE ARE */}

              <div>

                <h2 className="text-[22px] font-medium text-neutral-900 mb-4">
                  Who We Are
                </h2>

                <p>
                  This website is operated by <strong>Alraimi Business Group</strong>.
                  We specialize in apparel manufacturing and luxury packaging
                  production for international brands. We respect the privacy of
                  every visitor and aim to keep data collection minimal and clear.
                </p>

              </div>



              {/* INFORMATION */}

              <div>

                <h2 className="text-[22px] font-medium text-neutral-900 mb-4">
                  Information We Collect
                </h2>

                <p>
                  When you contact us through inquiry forms or email, we may
                  receive basic business information such as your name, email
                  address, company name, and project details. This information
                  is provided voluntarily when you submit a request or inquiry.
                </p>

              </div>



              {/* HOW USED */}

              <div>

                <h2 className="text-[22px] font-medium text-neutral-900 mb-4">
                  How Information Is Used
                </h2>

                <p>
                  The information shared with us is used only to respond to
                  inquiries, prepare quotations, discuss production details,
                  and maintain communication with brands and partners. We do
                  not sell or distribute your information to third parties.
                </p>

              </div>



              {/* ANALYTICS */}

              <div>

                <h2 className="text-[22px] font-medium text-neutral-900 mb-4">
                  Website Analytics
                </h2>

                <p>
                  This website uses privacy-friendly analytics tools to
                  understand general traffic patterns such as which pages are
                  visited or which regions visitors come from. These analytics
                  are used only to improve the website experience and do not
                  identify individual visitors.
                </p>

              </div>



              {/* DATA SECURITY */}

              <div>

                <h2 className="text-[22px] font-medium text-neutral-900 mb-4">
                  Data Security
                </h2>

                <p>
                  We take reasonable measures to protect information shared
                  through this website. Communication related to production,
                  quotations, and project details is handled directly between
                  our team and the client.
                </p>

              </div>



              {/* CONTACT */}

              <div>

                <h2 className="text-[22px] font-medium text-neutral-900 mb-4">
                  Contact
                </h2>

                <p>
                  If you have questions regarding this policy or about how your
                  information is handled, please contact us at:
                </p>

                <p className="mt-3 font-medium text-neutral-900">
                  info@alraimigroup.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}