import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative bg-[#F3F2EF] pt-20 md:pt-28 overflow-visible">

      {/* CTA SECTION */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16">
        <div className="relative z-20 rounded-2xl overflow-hidden min-h-[340px] md:min-h-[560px] flex items-end shadow-[0_25px_60px_rgba(0,0,0,0.25)]">

          <img
            src="https://res.cloudinary.com/djgu1bhef/image/upload/v1772983520/hero-bgg_omvkvt.png"
            alt="Factory production"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

          <div className="relative z-10 w-full px-6 sm:px-10 xl:px-16 pb-12 md:pb-24 pt-16 md:pt-32 grid gap-8 md:gap-0 md:grid-cols-[1.3fr_1fr] items-end">

            <div className="max-w-3xl text-white">
              <h2 className="text-[30px] sm:text-[42px] md:text-[60px] xl:text-[70px] font-normal leading-[1.05] tracking-[-0.02em]">
                Ready to Move at Global Scale?
              </h2>
            </div>

            <div className="md:ml-auto max-w-sm text-white/85">
              <p className="mb-8 text-[16px] md:text-[18px] leading-[1.7]">
                End-to-end execution covering production, inspection, and international delivery.
              </p>

              <Link
                href="/contact#start-brand"
                className="inline-flex items-center gap-3 bg-white text-black px-7 py-3 rounded-lg text-sm font-medium transition hover:bg-neutral-200"
              >
                Start Your Brand
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white text-sm">
                  →
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>


      {/* FOOTER OVERLAP WRAPPER */}
      <div className="relative -mt-[80px] md:-mt-[168px] pt-[140px] md:pt-[228px] z-10">

        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(135deg, #191919 0%, #2C2C2C 100%)",
          }}
        />

        <footer className="relative max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 pb-20 md:pb-24 text-white">


          {/* MAIN GRID */}
          <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1.4fr] border-b border-white/10 pb-16 md:pb-20">


            {/* BRAND */}
            <div>

              <h3 className="text-lg font-medium mb-10">
                Alraimi Business Group
              </h3>

              <div className="flex gap-4">

                {[
                  {
                    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
                    url: "https://www.instagram.com/alraimigroup/"
                  },
                  {
                    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg",
                    url: "https://x.com/yourbrand"
                  },
                  {
                    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
                    url: "https://linkedin.com/company/yourbrand"
                  }
                ].map((item, i) => (

                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 rounded-lg border border-neutral-500 flex items-center justify-center transition hover:bg-neutral-100 hover:border-neutral-300"
                  >

                    <img
                      src={item.icon}
                      alt="social"
                      className="w-4 h-4 opacity-70 transition invert group-hover:invert-0 group-hover:opacity-100"
                    />

                  </a>

                ))}

              </div>

            </div>


            {/* NAVIGATION */}
            <div>

              <h4 className="text-xs font-semibold tracking-wider uppercase mb-6 text-white/70">
                Navigation
              </h4>

              <ul className="space-y-4 text-white/60 text-sm">

                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>

              </ul>

            </div>


            {/* SERVICES */}
            <div>

              <h4 className="text-xs font-semibold tracking-wider uppercase mb-6 text-white/70">
                Manufacturing
              </h4>

              <ul className="space-y-4 text-white/60 text-sm">

                <li>
                  <Link href="/fashion-manufacturing" className="hover:text-white transition">
                    Fashion Manufacturing
                  </Link>
                </li>

                <li>
                  <Link href="/luxury-packaging" className="hover:text-white transition">
                    Luxury Packaging
                  </Link>
                </li>

              </ul>

            </div>


            {/* CONTACT */}
            <div>

              <h4 className="text-xs font-semibold tracking-wider uppercase mb-6 text-white/70">
                Contact
              </h4>

              <ul className="space-y-4 text-white/60 text-sm leading-relaxed">

                <li>
                  Room C169, 1501, No. 207–213  
                  West Dongfeng Road, Yuexiu District  
                  Guangzhou, China
                </li>

                <li>
                  +86 199 2411 1300
                </li>

                <li>
                  Jl. Batumejan 5D Padang Linjong  
                  Canggu, Bali, Indonesia
                </li>

                <li>
                  hello@alraimigroup.com
                </li>

              </ul>

            </div>

          </div>


          {/* BOTTOM BAR */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10 md:mt-12 text-sm text-white/40">

            <p>
              © {new Date().getFullYear()} Alraimi Business Group
            </p>

            <div className="flex gap-8">

              <Link
                href="/privacy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>

            </div>

          </div>

        </footer>
      </div>

    </div>
  );
}