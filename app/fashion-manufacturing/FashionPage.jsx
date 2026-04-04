

"use client"
/* app/page.jsx */

import Image from "next/image";
import Link from 'next/link'
import React, { useRef, useEffect, useState, useCallback } from "react";
import {
  FaApple,
  FaAmazon,
  FaGoogle,
  FaMicrosoft,
  FaFacebook,
  FaShopify,
  FaArrowRight
} from "react-icons/fa";

import {
  FileText,
  DraftingCompass,
  Package,
  Factory,
  Cog,
  ShieldCheck,
  Truck,
  Repeat,
  ArrowUpRight,
  Plus,
  X,
  Download
} from "lucide-react"


import useEmblaCarousel from "embla-carousel-react"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

import { motion, useScroll, useTransform } from "framer-motion";

import QualityControl from '../../components/organisms/QualityControl'
import LogisticsShipping from '../../components/organisms/LogisticsShipping'
import MOQsTimelines from '../../components/organisms/MOQsTimelines'
import Footer from '../../components/organisms/Footer'




export default function Page() {
  return (
    <main className="bg-white text-neutral-100">
      <Hero />
      <About />
      <ProductCategories />
      <MaterialsTrims />
      <FitSizing />
      <MOQsTimelines />
      <section className="bg-[#F3F2EF] pt-[8px]">
        <div className="px-[8px]">
          <div
            className="relative text-white rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #191919 0%, #2C2C2C 100%)",
            }}
          >
            <div className="py-16 md:py-24 xl:py-28">
              <QualityControl />

              {/* subtle divider between subsections */}
              <div className="h-[2px] bg-white/10 my-14 md:my-20" />

              <LogisticsShipping />
            </div>
          </div>
        </div>
      </section>
      <Projects />
      <Gallery />
      <FAQ />
      <Footer />
    </main>
  );
}






/* =========================
   SECTIONS
========================= */
function Hero() {

  const heroRef = useRef(null)

  const cloudinaryTransform = (url) => {
    return url.replace(
      "/upload/",
      "/upload/f_auto,q_auto,c_fill,w_1400/"
    )
  }

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" }
      })

      tl.from(".hero-label", {
        opacity: 0,
        y: 10,
        duration: 0.35
      })

      .from(".hero-title span", {
        y: 22,
        opacity: 0,
        stagger: 0.04,
        duration: 0.4
      }, "-=0.2")

      .from(".hero-desc", {
        y: 16,
        opacity: 0,
        duration: 0.35
      }, "-=0.25")

      .from(".hero-cta", {
        y: 16,
        opacity: 0,
        duration: 0.35
      }, "-=0.25")

      .from(".hero-image", {
        opacity: 0,
        y: 20,
        duration: 0.45
      }, "-=0.35")

    }, heroRef)

    return () => ctx.revert()

  }, [])

  return (

    <section ref={heroRef} className="bg-[#F3F2EF] pt-[8px]">

      {/* HEADER */}

      <header className="mx-[8px]">

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 py-4 md:py-5 flex items-center justify-between">

{/* LOGO */}
<Link href="/" className="flex items-center relative">
  <div className="relative h-[36px] md:h-[42px] lg:h-[46px] overflow-visible">
    <Image
      src="/images/alraimi-logo-black-1.png"
      alt="Alraimi Logo"
      width={90}
      height={80}
      className="h-[50px] md:h-[58px] lg:h-[66px] w-auto object-contain -my-2"
      priority
    />
  </div>
</Link>

{/* NAV */}
<nav className="flex items-center gap-4 sm:gap-6 md:gap-10 text-sm text-neutral-700">
  <Link href="/" className="hover:text-black transition-colors">
    Home
  </Link>

  <Link href="/fashion-manufacturing" className="text-black">
    Fashion
  </Link>

  <Link href="/luxury-packaging" className="hover:text-black transition-colors">
    Packaging
  </Link>

  <Link href="/contact" className="hover:text-black transition-colors">
    Contact
  </Link>
</nav>

{/* CTA */}
<Link
  href="/contact#get-pi"
  className="hidden md:inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium bg-[#8C7A5B] text-white hover:bg-[#7A6A4E] transition"
>
  Get Your PI
  <FaArrowRight className="text-xs" />
</Link>

</div>

      </header>


      {/* HERO */}

      <div className="px-[8px] pt-[8px]">

        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 py-16 md:py-24 lg:py-28">

          <div className="grid lg:grid-cols-[0.54fr_0.46fr] gap-8 md:gap-14 items-center">

            {/* TEXT */}

            <div>

              <div className="hero-label mb-6 sm:mb-8">
                <span className="text-xs tracking-[0.2em] text-neutral-500">
                  FASHION MANUFACTURING
                </span>
              </div>

              <h1 className="hero-title font-light leading-[1.05] tracking-[-0.02em] text-neutral-900 max-w-[700px] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[52px]">

                <span className="block">
                  From Tech Pack to Shipment.
                </span>

                <span className="block text-[#8C7A5B]">
                  Controlled Fit. Structured Production.
                </span>

              </h1>

              <p style={{ fontSize: "clamp(15px, 1.4vw, 20px)" }} className="hero-desc mt-6 leading-[1.7] text-neutral-600 max-w-[620px]">

                Womenswear, resortwear, and activewear manufactured through
                structured sampling, measured production control, AQL inspection,
                and coordinated global delivery from our factory network in China.

              </p>

              <div className="hero-cta mt-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-8">

                <Link
                  href="/contact#start-brand"
                  className="inline-flex items-center gap-2 bg-black text-white px-7 py-3 rounded-lg text-sm font-medium transition hover:bg-neutral-800"
                >
                  Start Your Brand
                  <FaArrowRight className="text-xs" />
                </Link>

              </div>

            </div>


            {/* IMAGE */}

            <div className="hero-image">

              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 aspect-[4/3]">

                <Image
                  src={cloudinaryTransform("https://res.cloudinary.com/djgu1bhef/image/upload/v1772771351/ChatGPT_Image_Mar_6_2026_11_28_31_AM_dyz5pq.png")}
                  alt="Garment inspection"
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 700px"
                  className="object-cover"
                  priority
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}

 
function About() {
  return (
    <section className="bg-[#F3F2EF] pt-10 pb-[8px]">
      <div className="max-w-[1600px] mx-auto px-2 md:px-10 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[0.55fr_0.45fr] gap-[8px]">

          {/* LEFT CARD */}
          <div className="bg-white border border-[#DDD7CE] rounded-2xl px-8 sm:px-12 md:px-16 xl:px-20 py-14 md:py-16 xl:py-20 text-left">

            <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-8">
              OVERVIEW
            </div>

            <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900">
              Production
              <br />
              <span>From Idea to Delivery</span>
            </h2>

            <div className="mt-8 h-[1px] w-24 bg-[#DDD7CE]"></div>

          </div>

          {/* RIGHT CARD */}
          <div className="bg-white border border-[#DDD7CE] rounded-2xl px-8 sm:px-12 md:px-16 xl:px-20 py-14 md:py-16 xl:py-20 flex items-start">

            <div className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.7] text-neutral-600">

              <p>
                Production starts with an idea — a sketch, a reference piece,
                sometimes just a conversation about what the brand wants to
                create. From there the process moves through tech packs,
                sampling, and factory production in China, with quality checks
                and shipping arranged until the finished pieces reach their
                final destination.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


function ProductCategories() {

  const sectionRef = useRef(null)

  const cloudinaryTransform = (url) => {
    return url.replace(
      "/upload/",
      "/upload/f_auto,q_auto,c_fill,w_1000/"
    )
  }

  const categories = [
    {
      title: "Womenswear",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772602454/ChatGPT_Image_Mar_4_2026_12_33_53_PM_nkppls.png",
      items: ["Evening Dresses","Day Dresses","Coordinated Sets","Blouses","Skirts"],
    },
    {
      title: "Resort & Modest",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772602454/ChatGPT_Image_Mar_4_2026_12_30_47_PM_oyn4tt.png",
      items: ["Kaftans","Abayas","Flowy Sets"],
    },
    {
      title: "Active & Golf",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772602454/ChatGPT_Image_Mar_4_2026_12_28_48_PM_mnolg2.png",
      items: ["Polos","Shorts","Pants","Caps","Performance Layers"],
    },
    {
      title: "Active Sportswear",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772697205/ChatGPT_Image_Mar_5_2026_02_52_33_PM_sliigg.png",
      items: ["Performance Tops","Compression Leggings","Training Shorts","Sports Bras","Technical Layers"],
    },
    {
      title: "Capsule Collections",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772602064/ChatGPT_Image_Mar_4_2026_12_27_04_PM_ukiamf.png",
      items: ["Multi-Style Drops","Trims","Labels","Retail-Ready Packing"],
    },
  ]

  return (

    <section ref={sectionRef} className="bg-[#F3F2EF] pt-[8px]">

      <div className="max-w-[1600px] mx-auto px-2 sm:px-10 xl:px-16">

        <div className="bg-white border border-[#D6D1C8] rounded-2xl">

          <div className="px-8 sm:px-12 md:px-16 xl:px-20 py-14 md:py-16 xl:py-20">


            {/* LABEL */}

            <div className="flex justify-center mb-6">

              <div className="pc-label inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium">
                Product Categories
              </div>

            </div>


            {/* HEADING */}

            <div className="text-center mb-14">

              <h2 className="pc-heading text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900 max-w-[820px] mx-auto">
                Fashion Production Categories
              </h2>

            </div>


            {/* GRID */}

            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-10">

              {categories.map((category, i) => {

                let position = "md:col-span-2"

                if (i === 3) position += " md:col-start-2"
                if (i === 4) position += " md:col-start-4"

                return (

                  <div key={category.title} className={`pc-card ${position}`}>

                    <div className="relative w-full aspect-[4/3] md:aspect-square rounded-xl overflow-hidden border border-neutral-200 mb-4 md:mb-5">

                      <Image
                        src={cloudinaryTransform(category.image)}
                        alt={category.title}
                        fill
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 300px"
                        className="pc-image object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                      />

                    </div>

                    <div className="text-[18px] md:text-[20px] font-medium text-neutral-900 mb-2">
                      {category.title}
                    </div>

                    <div className="text-[16px] leading-[1.6] text-neutral-600">
                      {category.items.join(", ")}
                    </div>

                  </div>

                )

              })}

            </div>


            {/* CTA */}

            <div className="flex justify-center mt-12 md:mt-20">

              <Link
                href="/contact#start-brand"
                className="pc-cta bg-white text-black px-8 py-3.5 rounded-lg text-sm font-medium border border-neutral-300 hover:bg-neutral-100 transition"
              >
                Start Your Brand
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}


function MaterialsTrims() {

  const sectionRef = useRef(null)

  const cloudinaryTransform = (url) => {
    return url.replace(
      "/upload/",
      "/upload/f_auto,q_auto,c_fill,w_1000/"
    )
  }

  const data = [
    {
      title: "Fabrics",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772705132/ChatGPT_Image_Mar_5_2026_05_03_50_PM_nns9zv.png",
      fade: "w-[45%] md:w-[58%]",
      items: ["Cotton","Linen","Rayon","Viscose","Polyester","Spandex Blends","Performance Knits"],
    },
    {
      title: "Trims & Labels",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772705134/ChatGPT_Image_Mar_5_2026_05_03_25_PM_pfdojt.png",
      fade: "w-[45%] md:w-[52%]",
      items: ["Woven Labels","Heat Transfer","Care Labels","Size Labels","Zippers","Buttons","Swing Tags"],
    },
    {
      title: "Packing Options",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772705131/ChatGPT_Image_Mar_5_2026_05_05_00_PM_nvpo8l.png",
      fade: "w-[45%] md:w-[60%]",
      items: ["Retail Poly","Eco-Friendly Garment Bags","Compostable","Biodegradable"],
    },
    {
      title: "Color Control",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772705133/ChatGPT_Image_Mar_5_2026_05_02_04_PM_wqntnm.png",
      fade: "w-[45%] md:w-[55%]",
      items: ["Client Swatch","Reference Samples","Pantone Matching"],
    },
  ]

  return (

    <section ref={sectionRef} className="bg-[#F3F2EF] pt-[8px]">

      <div className="px-[8px]">

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 pt-8 md:pt-14 xl:pt-16">

          {/* HEADER */}

          <div className="mb-6 md:mb-12 xl:mb-14">

            <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-4">
              MATERIALS & TRIMS
            </div>

            <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900 max-w-[720px]">
              Fabric Selection, Trim Development,<br/>and Packing Control
            </h2>

          </div>

          {/* GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px] pb-10 md:pb-12 xl:pb-14">

            {data.map((block) => (

              <div
                key={block.title}
                className="relative bg-white border border-neutral-300 rounded-2xl overflow-hidden min-h-[170px] md:min-h-[200px] flex items-center"
              >

                {/* IMAGE */}

                <div className={`absolute inset-y-0 right-0 ${block.fade} pointer-events-none`}>

                  <img
                    src={cloudinaryTransform(block.image)}
                    alt={block.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/60 to-white"/>

                </div>

                {/* CONTENT */}

                <div className="relative z-10 px-6 md:px-8 py-5 md:py-6 max-w-[65%]">

                  {/* FIXED TITLE (BALANCED) */}
                  <div className="text-[18px] sm:text-[19px] md:text-[20px] leading-[1.25] tracking-[-0.005em] font-medium text-neutral-900 mb-2.5">
                    {block.title}
                  </div>

                  <div className="flex flex-wrap gap-1.5">

                    {block.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs border border-neutral-300 rounded-md text-neutral-700"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  )

}
 

function FitSizing() {

  const sectionRef = useRef(null)

  const controls = [
    {
      title: "Size Charts",
      description: "Prepared by us and editable by you before final approval.",
    },
    {
      title: "Measurement Documentation",
      description: "Photos and videos shared during every sample round.",
    },
    {
      title: "Graded Size Set",
      description: "Available upon request before bulk production.",
    },
    {
      title: "Golden Sample",
      description: "Final approved reference locked before manufacturing begins.",
    },
  ]

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      })

      tl.from(".fit-label",{opacity:0,y:16,duration:0.4,ease:"power2.out"})
      .from(".fit-title",{opacity:0,y:24,duration:0.45,ease:"power3.out"},"-=0.25")
      .from(".fit-desc",{opacity:0,y:16,duration:0.4,ease:"power2.out"},"-=0.3")
      .from(".fit-item",{opacity:0,y:20,stagger:0.07,duration:0.45,ease:"power2.out"},"-=0.25")

    }, sectionRef)

    return () => ctx.revert()

  }, [])


  return (

    <section ref={sectionRef} className="relative bg-[#F3F2EF] pt-[8px] overflow-hidden">

      {/* LEFT TEXTURE */}

      <div
        className="absolute left-0 top-0 h-full w-[25%] md:w-[35%] pointer-events-none opacity-[1]"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/djgu1bhef/image/upload/v1772706209/ChatGPT_Image_Mar_5_2026_05_23_08_PM_s6kvvj.png)",
          backgroundSize: "900px",
          backgroundRepeat: "repeat",
          backgroundPosition: "left center",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskComposite: "destination-in",
          maskImage:
            "linear-gradient(to right, black 0%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          maskComposite: "intersect",
        }}
      />

      {/* RIGHT TEXTURE */}

      <div
        className="absolute right-0 top-0 h-full w-[25%] md:w-[35%] pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/djgu1bhef/image/upload/v1772706209/ChatGPT_Image_Mar_5_2026_05_23_08_PM_s6kvvj.png)",
          backgroundSize: "900px",
          backgroundRepeat: "repeat",
          backgroundPosition: "right center",
          WebkitMaskImage:
            "linear-gradient(to left, black 0%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskComposite: "destination-in",
          maskImage:
            "linear-gradient(to left, black 0%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          maskComposite: "intersect",
        }}
      />

      {/* CONTENT */}

      <div className="relative px-[8px]">

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-10 md:py-14 xl:py-16">

          <div className="grid grid-cols-1 md:grid-cols-[0.45fr_0.55fr] gap-8 md:gap-14 xl:gap-16">

            {/* LEFT */}

            <div>

              <div className="fit-label inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-4">
                FIT & SIZING
              </div>

              <h2 className="fit-title text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900">
                We Set Your Fit Once —<br/>Then Protect It Every Reorder
              </h2>

              <div className="fit-desc mt-6 text-[16px] sm:text-[17px] md:text-[18px] leading-[1.7] text-neutral-600 max-w-[480px]">
                Fit consistency is controlled through documentation, approvals, and locked references before production.
              </div>

            </div>


            {/* RIGHT */}

            <div className="space-y-6 md:space-y-8">

              {controls.map((item) => (
                <div key={item.title} className="fit-item">

                  <div className="text-[18px] sm:text-[19px] md:text-[20px] leading-[1.3] font-medium text-neutral-900 mb-2">
                    {item.title}
                  </div>

                  <div className="text-[16px] leading-[1.7] text-neutral-600">
                    {item.description}
                  </div>

                  <div className="mt-3 h-[1px] bg-neutral-300" />

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

 

function Projects() {

  const sectionRef = useRef(null);

  const projects = [
    {
      title: "Boutique Womenswear Brand",
      location: "Dubai",
      meta: "2025 • Fashion • Womenswear",
      image: "/images/projects/womenswear.png",
      description:
        "Dress-led collections produced across multiple drops, supported by structured sampling, measurement approvals, and in-line quality control to ensure consistency at scale.",
    },
    {
      title: "Golf Apparel Startup",
      location: "Dubai",
      meta: "2025 • Fashion • Activewear",
      image: "/images/projects/golf-apparel.png",
      description:
        "End-to-end production for a golf apparel startup, covering multiple categories with coordinated packaging and a streamlined process from sampling to final delivery.",
    },
  ];

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      gsap.from(".projects-header", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      });

      gsap.utils.toArray(".project-item").forEach((el) => {

        gsap.from(el, {
          opacity: 0,
          y: 32,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          }
        });

      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F3F2EF] pt-[8px]">

      <div className="px-[8px]">

        {/* ❌ padding bottom dihapus */}
        <div className="max-w-[1600px] mx-auto px-5 sm:px-6 md:px-10 xl:px-16 pt-16 md:pt-20">

          {/* HEADER */}
          <div className="projects-header mb-16 md:mb-20 text-center">

            <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
              Projects
            </div>

            <h2 className="text-[30px] sm:text-[34px] md:text-[40px] leading-[1.05] tracking-[-0.02em] text-neutral-900">
              Selected Fashion Production
            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-14 md:gap-20 justify-items-center">

            {projects.map((project) => (

              <div
                key={project.title}
                className="project-item w-full max-w-[420px] md:max-w-[460px]"
              >

                {/* IMAGE */}
                <div className="mb-6 md:mb-8 rounded-2xl overflow-hidden">
                  <div className="aspect-[3/4]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* TEXT */}
                <div>

                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] leading-[1.2] text-neutral-900 mb-2">
                    {project.title}
                  </h3>

                  <div className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#8C7A5B] mb-5 md:mb-6">
                    {project.location}
                  </div>

                  {/* DESC BLOCK */}
                  <div className="pt-5 md:pt-6 border-t border-neutral-300/70 max-w-[340px] sm:max-w-[360px]">

                    <p className="text-[14px] sm:text-[15px] leading-[1.7] text-neutral-700">
                      {project.description}
                    </p>

                  </div>

                  <div className="text-[11px] sm:text-[12px] text-neutral-400 tracking-wide mt-5 md:mt-6">
                    {project.meta}
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}


 
 

function Gallery() {

  // CLOUDINARY IMAGE OPTIMIZER
  function optimizeImage(url) {
    if (!url.includes("res.cloudinary.com")) return url;

    return url.replace(
      "/upload/",
      "/upload/f_auto,q_auto,w_1400/"
    );
  }

  const images = [
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773039574/ChatGPT_Image_Mar_9_2026_01_59_13_PM_hve5z9.png",
      alt: "Container port logistics",
      span: "md:col-span-8 col-span-2",
      height: "h-[260px] md:h-[420px]",
      position: "object-top"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773041127/ChatGPT_Image_Mar_9_2026_12_48_45_PM_d4hx1l.png",
      alt: "Warehouse pallet storage",
      span: "md:col-span-4 col-span-1",
      height: "h-[260px] md:h-[420px]",
      position: "object-bottom"
    },

    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773042867/ChatGPT_Image_Mar_9_2026_02_54_05_PM_amonvp.png",
      alt: "Cargo loading truck",
      span: "md:col-span-5 col-span-1",
      height: "h-[220px] md:h-[420px]",
      position: "object-top"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773040919/ChatGPT_Image_Mar_9_2026_02_17_06_PM_e3yiqw.png",
      alt: "Factory production line",
      span: "md:col-span-7 col-span-2",
      height: "h-[220px] md:h-[420px]",
      position: "object-top"
    },

    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773041431/ChatGPT_Image_Mar_9_2026_02_30_09_PM_kgvfq2.png",
      alt: "Quality inspection process",
      span: "md:col-span-3 col-span-1",
      height: "h-[180px] md:h-[340px]",
      position: "object-center"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773041791/ChatGPT_Image_Mar_9_2026_02_36_12_PM_zbqhpq.png",
      alt: "Shipping container yard",
      span: "md:col-span-6 col-span-1",
      height: "h-[180px] md:h-[340px]",
      position: "object-center"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773053102/ChatGPT_Image_Mar_9_2026_05_39_45_PM_knu0my.png",
      alt: "Warehouse distribution center",
      span: "md:col-span-3 col-span-2",
      height: "h-[180px] md:h-[340px]",
      position: "object-bottom"
    }
  ];

  return (
    <section className="bg-[#F3F2EF] py-22">
      <div className="max-w-[1600px] mx-auto px-6 xl:px-16">

        {/* HEADER */}
        <div className="flex justify-center mb-24">
          <div className="inline-flex items-center border border-neutral-300 px-5 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium text-neutral-700">
            Gallery
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
          {images.map((item, index) => (
            <div key={index} className={item.span}>
              <div className="rounded-2xl overflow-hidden border border-black/20">
                <img
                  src={optimizeImage(item.src)}
                  alt={item.alt}
                  loading="lazy"
                  className={`w-full ${item.height} object-cover ${item.position}`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

 

function FAQ() {

const faqs = [
  {q:"Are you the manufacturer?",a:"Yes. Your order is produced on our lines in China under our PI, QC, and warranty."},
  {q:"What MOQs do you work with?",a:"Typical first runs are 150–200 pcs per color per style. Final MOQs are confirmed by style and material in your PI."},
  {q:"How fast are samples and production?",a:"Samples usually take 2–3 weeks after specification confirmation. Production typically runs 4–8 weeks depending on style and material."},
  {q:"Do you help with tech packs and size charts?",a:"Yes. We prepare editable size charts, support tech packs, and share measurement photos and videos during each sample round."},
  {q:"How do you ensure quality?",a:"We conduct in-line QC during production and a pre-shipment AQL inspection with a full report and visual documentation."},
  {q:"Can you ship door-to-door?",a:"Yes. We offer DDP with customs clearance, or EXW/FOB if you prefer to use your own forwarder."},
  {q:"What are your standard payment terms?",a:"50% deposit and 50% pre-shipment (adjustable). Final terms are confirmed in your PI."},
  {q:"Can I visit the factory?",a:"Absolutely. China factory tours are available by appointment, or live video inspections can be arranged anytime."},
]

const [openIndex, setOpenIndex] = useState(null)
const [showAll, setShowAll] = useState(false)

const toggle = (index) => {
  setOpenIndex(openIndex === index ? null : index)
}

const visibleFaqs = showAll ? faqs : faqs.slice(0, 6)

return (

  <section className="bg-[#F3F2EF]">

    <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">

      <div className="grid grid-cols-1 md:grid-cols-[0.45fr_0.55fr] gap-8 md:gap-20">

        {/* LEFT */}
        <div>

          <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-5">
            FAQ
          </div>

          <h2 className="text-[30px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900">
            Frequently Asked
            <br />
            Questions
          </h2>

        </div>

        {/* RIGHT */}
        <div>

          {visibleFaqs.map((item, index) => {

            const isOpen = openIndex === index

            return (
              <FAQItem
                key={index}
                item={item}
                isOpen={isOpen}
                onClick={() => toggle(index)}
              />
            )

          })}

          {faqs.length > 6 && (

            <div className="mt-8">

              <button
                onClick={() => setShowAll(!showAll)}
                className="text-sm font-medium text-neutral-700 hover:text-black transition"
              >
                {showAll ? "Show Less" : "Show More Questions"}
              </button>

            </div>

          )}

        </div>

      </div>

    </div>

  </section>

)
}


function FAQItem({ item, isOpen, onClick }) {

return (

  <div className="border-b border-neutral-300 py-4 md:py-6">

    <button
      onClick={onClick}
      className="w-full flex items-start justify-between text-left"
    >

      <span className="text-[16px] md:text-[18px] leading-[1.4] text-neutral-900 pr-6">
        {item.q}
      </span>

      <Plus
        size={18}
        strokeWidth={1.75}
        className={`shrink-0 transition-all duration-300 ${
          isOpen
            ? "rotate-45 text-neutral-900"
            : "rotate-0 text-neutral-500"
        }`}
      />

    </button>

    {isOpen && (
      <div className="mt-3 text-[15px] md:text-[16px] leading-[1.7] text-neutral-600 pr-10">
        {item.a}
      </div>
    )}

  </div>

)

}
 