import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative bg-[#F3F2EF] pt-20 md:pt-28 overflow-visible">

      {/* =====================================================
          CTA SECTION
      ===================================================== */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16">
        <div className="relative z-20 rounded-2xl overflow-hidden min-h-[420px] md:min-h-[560px] flex items-end shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
          
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1742281694367-30557c03d0a1?q=80&w=2340&auto=format&fit=crop"
            alt="Factory production"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

          {/* Content */}
          <div className="relative z-10 w-full px-6 sm:px-10 xl:px-16 pb-16 md:pb-24 pt-20 md:pt-32 grid gap-12 md:gap-0 md:grid-cols-[1.3fr_1fr] items-end">
            
            {/* Left */}
            <div className="max-w-3xl text-white">
              <h2 className="text-[34px] sm:text-[42px] md:text-[60px] xl:text-[70px] font-normal leading-[1.05] tracking-[-0.02em]">
                Ready to Move at Global Scale?
              </h2>
            </div>

            {/* Right */}
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

      {/* =====================================================
          FOOTER OVERLAP WRAPPER
      ===================================================== */}
      <div className="relative -mt-[80px] md:-mt-[168px] pt-[140px] md:pt-[228px] z-10">

        {/* DARK GRADIENT BACKGROUND */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(135deg, #191919 0%, #2C2C2C 100%)",
          }}
        />

        {/* =====================================================
            FOOTER SECTION
        ===================================================== */}
        <footer className="relative max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 pb-20 md:pb-24 text-white">
         
          {/* Main Grid */}
          <div className="grid gap-14 md:gap-20 md:grid-cols-4 border-b border-white/10 pb-16 md:pb-20">
            
            {/* Brand */}
            <div>
              <h3 className="text-lg font-medium mb-8">
                ALRAIMI BUSSINESS GROUP
              </h3>
              <div className="flex gap-4">
                {[
                  "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
                  "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg",
                  "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
                ].map((icon, i) => (
                  <div
                    key={i}
                    className="group w-10 h-10 rounded-lg border border-neutral-500 flex items-center justify-center transition hover:bg-neutral-100 hover:border-neutral-300 cursor-pointer"
                  >
                    <img
                      src={icon}
                      alt="social"
                      className="w-4 h-4 opacity-60 transition group-hover:opacity-100"
                      style={{ filter: "invert(1)" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-semibold tracking-wider uppercase mb-6 text-white/70">
                Company
              </h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li className="hover:text-white transition cursor-pointer">Fashion</li>
                <li className="hover:text-white transition cursor-pointer">Packaging</li>
                <li className="hover:text-white transition cursor-pointer">Contact</li>
                <li className="hover:text-white transition cursor-pointer">News & Updates</li>
                <li className="hover:text-white transition cursor-pointer">Partners</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-semibold tracking-wider uppercase mb-6 text-white/70">
                Resources
              </h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li className="hover:text-white transition cursor-pointer">Help Center</li>
                <li className="hover:text-white transition cursor-pointer">FAQs</li>
                <li className="hover:text-white transition cursor-pointer">Shipping Calculator</li>
                <li className="hover:text-white transition cursor-pointer">Terms & Conditions</li>
                <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold tracking-wider uppercase mb-6 text-white/70">
                Contact
              </h4>
              <ul className="space-y-4 text-white/60 text-sm leading-relaxed">
                <li>
                  Room C169, 1501, No. 207–213, West Dongfeng Road, Yuexiu District,
                  Guangzhou, China
                </li>
                <li>+8619924111300</li>
                <li>
                  Jl. Batumejan 5D Padang Linjong, Canggu, Bali
                </li>
                <li>hello@alraimigroup.com</li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10 md:mt-12 text-sm text-white/40">
            <p>© {new Date().getFullYear()} ALRAIMI BUSSINESS GROUP. All rights reserved.</p>

            <div className="flex gap-8">
              <span className="hover:text-white transition cursor-pointer">
                Terms of Use
              </span>
              <span className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </span>
            </div>
          </div>

        </footer>
      </div>

    </div>
  );
}