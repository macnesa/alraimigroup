
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
      <FinishesSystem />
      <FactoryCapabilities />
      <Inserts />
      <MOQsTimelines />
      <section className="bg-[#F3F2EF] pt-[8px]">
        <div className="px-[8px]">
          <div
            className="relative text-white rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #191919 0%, #2C2C2C 100%)",
            }}
          >
            <div className="py-20 md:py-24 xl:py-28">
              <QualityControl />

              <div className="h-[8px]" />

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

      gsap.from(".fade-up", {
        opacity: 0,
        y: 24,
        duration: 0.45,
        ease: "power2.out",
        stagger: 0.07
      })

    }, heroRef)

    return () => ctx.revert()

  }, [])

  return (

    <section ref={heroRef} className="bg-[#F3F2EF] pt-[8px]">

      <div className="px-[8px]">

        <div
          className="border border-neutral-200 rounded-2xl overflow-hidden text-white"
          style={{ background: "linear-gradient(135deg,#191919 0%,#2C2C2C 100%)" }}
        >

          {/* HEADER */}

          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 pt-[20px]">

            <header className="fade-up flex items-center justify-between">

              <Link href="/" className="flex items-center">

                <Image
                  src="/images/alraimi-logo-white-2.png"
                  alt="Alraimi Logo"
                  width={42}
                  height={38}
                  priority
                />

              </Link>

              <nav className="flex items-center gap-4 sm:gap-6 md:gap-10 text-sm text-white/70">

                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>

                <Link href="/fashion-manufacturing" className="hover:text-white transition">
                  Fashion
                </Link>

                <Link href="/luxury-packaging" className="text-white">
                  Packaging
                </Link>

                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>

              </nav>

              <Link
                href="/contact#get-pi"
                className="hidden md:inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium bg-[#8C7A5B] text-white hover:bg-[#7A6A4E] transition"
              >
                Get Your PI
                <FaArrowRight className="text-xs" />
              </Link>

            </header>

          </div>


          {/* HERO */}

          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 py-20 md:py-24 lg:py-28">

            <div className="grid lg:grid-cols-[0.55fr_0.45fr] gap-10 md:gap-14 items-center">


              {/* TEXT */}

              <div>

                <div className="fade-up mb-6 sm:mb-8">
                  <span className="text-xs tracking-[0.18em] uppercase text-white/50">
                    Luxury Packaging
                  </span>
                </div>

                <h1 className="fade-up font-light leading-[1.05] tracking-[-0.02em] max-w-[720px] text-[34px] sm:text-[40px] md:text-[46px] lg:text-[50px]">

                  Luxury Paper Packaging —
                  <br />

                  <span className="text-[#8C7A5B]">
                    Precision Made in China.
                  </span>

                </h1>

                <p className="fade-up mt-6 text-[16px] leading-[1.7] text-white/70 max-w-[620px]">

                  Dielines, sampling, production control, AQL inspection, and
                  door-to-door delivery — managed by our factory team.

                </p>


                {/* CTA */}

                <div className="fade-up mt-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-8">

                  <Link
                    href="/contact#start-your-brand"
                    className="inline-flex items-center bg-white text-black px-8 py-3.5 rounded-lg text-sm font-medium transition hover:bg-neutral-200"
                  >
                    Start Your Brand
                  </Link>
 
                </div>

              </div>


              {/* IMAGE */}

              <div className="fade-up">

                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">

                  <Image
                    src={cloudinaryTransform("https://res.cloudinary.com/djgu1bhef/image/upload/v1772772673/ChatGPT_Image_Mar_6_2026_11_50_57_AM_i7qlfo.png")}
                    alt="Luxury packaging production"
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

      </div>

    </section>

  )

}


function About() {

  return (

    <section className="bg-[#F3F2EF] pt-8 pb-[8px]">

      <div className="max-w-[1600px] mx-auto px-2 md:px-10 xl:px-16">

        <div className="grid grid-cols-1 md:grid-cols-[0.55fr_0.45fr] gap-[8px]">

          {/* LEFT CARD */}

          <div className="bg-white border border-[#DDD7CE] rounded-2xl px-8 sm:px-12 md:px-16 xl:px-20 py-12 md:py-16 xl:py-20 text-center md:text-left">

            <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
              OVERVIEW
            </div>

            <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900">
              Precision Packaging
              <br />
              <span>Built for Consistency</span>
            </h2>

            <div className="mt-6 h-[1px] w-24 bg-[#DDD7CE] mx-auto md:mx-0"></div>

          </div>


          {/* RIGHT CARD */}

          <div className="bg-white border border-[#DDD7CE] rounded-2xl px-8 sm:px-12 md:px-16 xl:px-20 py-12 md:py-16 xl:py-20 flex items-center">

            <div className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.7] text-neutral-700 max-w-[520px]">

              <p>
                Packaging often becomes the first physical experience a customer has with a brand.  
                Boxes for perfume, cosmetics, fashion, and retail products are developed from dieline and samples to finished packaging, produced with factory partners in China.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

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
      title: "Rigid Boxes",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772546078/image_2026-03-03_20-44-30_mwgtvl.png",
      items: ["Magnetic Lid","Shoulder / Neck","Drawer / Sleeve","Clamshell","Book-Style","Collapsible"],
    },
    {
      title: "Folding Cartons",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772545503/image_2026-03-03_20-41-34_z05dx8.png",
      items: ["Tuck-End","Crash-Lock Bottom","Sleeves"],
    },
    {
      title: "Paper Bags",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772545503/image_2026-03-03_20-42-03_ebbpyv.png",
      items: ["Rope Handles","PP Handles","Cotton Handles","Turn-Top Reinforcement","Luxury Board Bottoms"],
    },
    {
      title: "Cards & Tags",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772545503/image_2026-03-03_20-42-36_ukr9rd.png",
      items: ["Tester Blotter Cards","Swing Tags","Care Cards","Thank-You Cards"],
    },
    {
      title: "Branded Extras",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772546719/ChatGPT_Image_Mar_3_2026_09_04_58_PM_rznjwx.png",
      items: ["Ribbon","Tissue Paper","Stickers / Seals","Certificate Cards"],
    },
  ]

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      })

      tl.from(".categories-label", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: "power2.out"
      })

      tl.from(".categories-header", {
        opacity: 0,
        y: 18,
        duration: 0.7,
        ease: "power2.out"
      }, "-=0.2")

      tl.from(".category-card", {
        opacity: 0,
        y: 28,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out"
      }, "-=0.2")

      gsap.utils.toArray(".category-card").forEach((card) => {

        const tags = card.querySelectorAll(".tag-item")

        gsap.from(tags, {
          opacity: 0,
          y: 6,
          stagger: 0.05,
          duration: 0.4,
          ease: "power1.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        })

      })

      gsap.from(".categories-cta", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".categories-cta",
          start: "top 85%"
        }
      })

    }, sectionRef)

    return () => ctx.revert()

  }, [])


  return (

    <section ref={sectionRef} className="bg-[#F3F2EF] pt-[8px]">

      <div className="max-w-[1600px] mx-auto px-2 md:px-10 xl:px-16">

        <div className="bg-white border border-[#D6D1C8] rounded-2xl">

          <div className="px-8 sm:px-12 md:px-16 xl:px-20 py-12 md:py-16 xl:py-20">


            {/* LABEL */}

            <div className="flex justify-center mb-6 categories-label">

              <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium">
                 Types
              </div>

            </div>


            {/* HEADER */}

            <div className="categories-header text-center max-w-[720px] mx-auto mb-12 md:mb-16">

              <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900 mb-6">
                Packaging Types
              </h2>

              <p className="text-[16px] sm:text-[18px] leading-[1.7] text-neutral-600">
                A look at the packaging formats most often produced for perfume,
                cosmetics, fashion, and retail brands.
              </p>

            </div>


            {/* GRID */}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 justify-items-center">

              {categories.map((category) => (

                <div key={category.title} className="category-card w-full max-w-[420px] bg-white border border-[#D6D1C8]/70 rounded-2xl p-5 md:p-6">

                  <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-lg overflow-hidden mb-6 border border-neutral-200">

                    <Image
                      src={cloudinaryTransform(category.image)}
                      alt={category.title}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 420px"
                      className="object-cover"
                    />

                  </div>

                  <div className="text-[18px] font-medium text-neutral-900 mb-4">
                    {category.title}
                  </div>

                  <div className="flex flex-wrap gap-1.5 md:gap-2">

                    {category.items.map((item) => (
                      <span key={item} className="tag-item text-[13px] px-3 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-neutral-600">
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

              ))}

            </div>


            {/* CTA */}

            <div className="categories-cta mt-16 md:mt-20 flex justify-center">

              <button className="bg-white text-black px-8 py-3.5 rounded-lg text-sm font-medium border border-neutral-300 hover:bg-neutral-100 transition">
                Get Your PI
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}


function FinishesSystem() {

  const sectionRef = useRef(null)

  const cloudinaryTransform = (url) => {
    return url.replace(
      "/upload/",
      "/upload/f_auto,q_auto,c_fill,w_800/"
    )
  }

  const finishes = [
    {
      title: "Lamination",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772547724/image_2026-03-03_21-16-10_y9xlvs.png",
      items: ["Matte", "Gloss", "Soft-Touch"],
    },
    {
      title: "Foil Stamping",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772547723/image_2026-03-03_21-16-19_qbiljy.png",
      items: ["Gold", "Silver", "Rose Gold", "Custom Colors"],
    },
    {
      title: "Emboss & Sculpt",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772547725/image_2026-03-03_21-16-27_nnvsow.png",
      items: ["Emboss", "Deboss", "3D Sculpt"],
    },
    {
      title: "Surface Effects",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772547724/image_2026-03-03_21-16-37_nezu5x.png",
      items: ["Spot UV", "Full UV", "Varnish"],
    },
    {
      title: "Special Papers",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772547723/image_2026-03-03_21-17-24_fynbmu.png",
      items: ["Textured", "Linen", "Leatherette", "Pearlescent", "Colored Wraps"],
    },
    {
      title: "Print",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772547735/ChatGPT_Image_Mar_3_2026_09_20_19_PM_l2xj5t.png",
      items: ["CMYK", "Pantone Spot Colors", "Screen Print for Solids"],
    },
    {
      title: "Hardware & Details",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772547724/image_2026-03-03_21-17-43_i42uos.png",
      items: ["Hidden Magnets", "Ribbon Pulls", "Die-Cut Windows", "Inserts", "Satin Linings"],
    },
  ]

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {

      gsap.from(".finishes-header",{
        opacity:0,
        y:24,
        duration:0.7,
        ease:"power2.out",
        scrollTrigger:{
          trigger:sectionRef.current,
          start:"top 80%"
        }
      })

      gsap.from(".finish-card",{
        opacity:0,
        y:28,
        duration:0.7,
        stagger:0.1,
        ease:"power2.out",
        scrollTrigger:{
          trigger:".finishes-grid",
          start:"top 80%"
        }
      })

      gsap.utils.toArray(".finish-card").forEach((card)=>{

        const tags = card.querySelectorAll(".finish-tag")

        gsap.from(tags,{
          opacity:0,
          y:6,
          duration:0.35,
          stagger:0.05,
          ease:"power1.out",
          scrollTrigger:{
            trigger:card,
            start:"top 85%"
          }
        })

      })

    },sectionRef)

    return ()=>ctx.revert()

  },[])


  return (

    <section ref={sectionRef} className="bg-[#F3F2EF] pt-[8px]">

      <div className="max-w-[1600px] mx-auto px-2 md:px-10 xl:px-16">

        <div className="bg-white border border-[#D6D1C8] rounded-2xl">

          <div className="px-8 sm:px-12 md:px-16 xl:px-20 py-12 md:py-16 xl:py-20">


            {/* HEADER */}

            <div className="finishes-header grid grid-cols-1 md:grid-cols-[1fr_420px] gap-8 md:gap-16 items-start mb-14 md:mb-20">

              <div>

                <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
                  Finishes
                </div>

                <h2 className="text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900 max-w-[720px]">
                  Luxury Finishes
                  <br/>
                  <span>Mix & Match Control</span>
                </h2>

              </div>

              <div className="text-[16px] md:text-[17px] leading-[1.7] text-neutral-600 max-w-[420px]">

                Our production system allows brands to mix finishes precisely —
                ensuring consistency across packaging, inserts, and supporting
                materials while maintaining strict color and material control.

              </div>

            </div>


            {/* GRID */}

            <div className="finishes-grid grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">

              {finishes.map((finish)=> (

                <div
                  key={finish.title}
                  className="finish-card bg-white border border-[#D6D1C8]/70 rounded-2xl p-5 md:p-6 min-h-[120px]"
                >

                  <div className="flex items-center gap-4 md:grid md:grid-cols-[220px_1fr] md:items-center md:gap-6">

                    {/* IMAGE */}

                    <div className="relative w-[90px] h-[90px] md:w-full md:h-[110px] rounded-lg overflow-hidden border border-neutral-200 flex-shrink-0">

                      <Image
                        src={cloudinaryTransform(finish.image)}
                        alt={finish.title}
                        fill
                        sizes="(max-width:768px) 90px, 220px"
                        className="object-cover"
                      />

                    </div>


                    {/* TEXT */}

                    <div>

                      <div className="text-[18px] md:text-[20px] font-medium text-neutral-900 mb-3">
                        {finish.title}
                      </div>

                      <div className="flex flex-wrap gap-1.5 md:gap-2">

                        {finish.items.map((item)=>(
                          <span
                            key={item}
                            className="finish-tag text-[13px] px-3 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-neutral-600"
                          >
                            {item}
                          </span>
                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}


function Inserts() {

  const sectionRef = useRef(null)

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        },
        defaults: { ease: "power2.out" }
      })

      tl.from(".inserts-left", {
        opacity: 0,
        x: -40,
        duration: 0.6
      })

      tl.from(".inserts-line", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 0.7
      }, "-=0.4")

      tl.from(".insert-item", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.08
      }, "-=0.5")

    }, sectionRef)

    return () => ctx.revert()

  }, [])


  const inserts = [
    {
      title: "EVA / Foam",
      desc: "Precision-cut inserts with optional velvet wrapping."
    },
    {
      title: "Paperboard / Cardboard",
      desc: "Multi-layer precision structures for rigid support."
    },
    {
      title: "Molded Pulp",
      desc: "Recyclable interior solutions in natural or colored finishes."
    },
    {
      title: "Fabric / Satin",
      desc: "Soft cushions and trays for elevated presentation."
    },
    {
      title: "Thermoformed Trays",
      desc: "Engineered trays when compliance requires exact fit."
    }
  ]


  return (

    <section ref={sectionRef} className="bg-[#F3F2EF] pt-[8px]">

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-20 md:py-24 xl:py-28">

        <div className="grid md:grid-cols-[0.42fr_0.58fr] gap-12 md:gap-16 items-start relative">


          {/* LEFT */}

          <div className="inserts-left">

            <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
              Inserts
            </div>

            <h2 className="text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900">
              Interior Protection
              <br />
              Architecture
            </h2>

          </div>


          {/* RIGHT */}

          <div className="relative">

            <div className="inserts-line absolute left-[4px] top-0 bottom-0 w-[1px] bg-neutral-300"></div>

            <div className="pl-8 md:pl-10 space-y-10 md:space-y-12">

              {inserts.map((item) => (

                <div key={item.title} className="insert-item">

                  <div className="text-[22px] md:text-[24px] font-medium text-neutral-900 mb-3">
                    {item.title}
                  </div>

                  <div className="text-neutral-600 text-[16px] md:text-[17px] leading-[1.7] max-w-[640px]">
                    {item.desc}
                  </div>

                </div>

              ))}

            </div>

          </div>


        </div>

      </div>

    </section>

  )

}


function FactoryCapabilities() {

  const sectionRef = useRef(null)

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true
        }
      })

      tl.from(".factory-header", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out"
      })

      tl.from(".factory-item", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.14,
        ease: "power2.out"
      }, "-=0.2")

    }, sectionRef)

    return () => ctx.revert()

  }, [])


  const capabilities = [
    {
      icon: Factory,
      title: "Automated Production Lines",
      desc: "Dedicated lines for die-cutting, lamination, foil stamping, UV coating, folding and gluing, magnet setting, and final packing."
    },
    {
      icon: DraftingCompass,
      title: "Pre-Press & Structural Engineering",
      desc: "In-house pre-press control and structural engineering for custom dielines, collapsible builds, complex shoulder boxes, and precision tolerances."
    },
    {
      icon: ShieldCheck,
      title: "Stage-Based QC Cells",
      desc: "Quality control integrated at printing, finishing, assembly, and pre-shipment inspection stages."
    }
  ]


  return (

    <section ref={sectionRef} className="bg-[#F3F2EF] pt-[8px]">

      <div className="max-w-[1600px] mx-auto px-2 md:px-10 xl:px-16">

        <div className="bg-[#181818] border border-white/10 rounded-2xl overflow-hidden">


          {/* HEADER */}

          <div className="factory-header px-8 sm:px-12 md:px-16 xl:px-20 py-14 md:py-16 xl:py-20 border-b border-white/10 text-white">

            <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
              Factory Capacity
            </div>

            <h2 className="text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal max-w-[720px]">
              Controlled Production Infrastructure
            </h2>

          </div>


          {/* TIMELINE */}

          <div className="relative">

            {/* vertical guide line */}

            <div className="absolute left-[44px] md:left-[52px] top-0 bottom-0 w-[1px] bg-white/10"></div>


            <div className="px-8 sm:px-12 md:px-16 xl:px-20 py-14 md:py-16 xl:py-20">

              <div className="space-y-14 md:space-y-16">

                {capabilities.map((item, i) => {

                  const Icon = item.icon

                  return (

                    <div key={i} className="factory-item flex gap-6 items-start">

                      {/* ICON */}

                      <div className="w-[56px] h-[56px] rounded-lg bg-gradient-to-b from-[#2A2A2A] to-[#1F1F1F] border border-neutral-700 flex items-center justify-center flex-shrink-0 relative z-10">

                        <Icon size={24} className="text-neutral-300" />

                      </div>


                      {/* TEXT */}

                      <div>

                        <div className="text-[20px] md:text-[22px] font-medium text-white mb-3">
                          {item.title}
                        </div>

                        <div className="text-neutral-400 text-[16px] md:text-[17px] leading-[1.7] max-w-[720px]">
                          {item.desc}
                        </div>

                      </div>

                    </div>

                  )

                })}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}
  

function Projects() {

  const sectionRef = useRef(null)

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {

      gsap.from(".projects-header", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true }
      })

      gsap.utils.toArray(".project-block").forEach((block) => {

        const tl = gsap.timeline({
          scrollTrigger: { trigger: block, start: "top 85%", once: true }
        })

        tl.from(block.querySelector(".project-image"), {
          opacity: 0,
          scale: 1.04,
          duration: 0.8,
          ease: "power2.out"
        })

        tl.from(block.querySelector(".project-text"), {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.6")

      })

    }, sectionRef)

    return () => ctx.revert()

  }, [])


  const projects = [
    {
      title: "Multiple Luxury Perfume Packaging",
      meta: "2025 • Luxury Packaging • Perfume",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772376971/image_2026-02-27_13-49-35_oikaga.png",
      description:
        "Rigid boxes, premium paper bags, tester cards, and branded ribbon produced across multiple SKUs. Full process from sampling to AQL inspection and DDP delivery.",
    },
    {
      title: "Foldable Magnetic Gift Boxes",
      meta: "2025 • Luxury Packaging • Rigid Boxes",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772376971/image_2026-02-27_13-50-18_kzqkhy.png",
      description:
        "Two collapsible magnetic rigid box sizes with matte lamination. Structural prototyping, color control, in-line QC and coordinated export delivery.",
    },
  ]


  return (

    <section ref={sectionRef} className="bg-[#F3F2EF] py-20 md:py-24 xl:py-28">

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">


        {/* HEADER */}

        <div className="projects-header mb-16 md:mb-20 text-center">

          <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
            Projects
          </div>

          <h2 className="text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900">
            Selected Packaging Production
          </h2>

        </div>


        <div className="space-y-14 md:space-y-20">

          {projects.map((project, index) => (

            <div
              key={project.title}
              className="project-block grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-stretch"
            >


              {/* IMAGE */}

              <div className={`project-image md:col-span-7 ${index % 2 === 0 ? "md:order-2" : ""}`}>

                <div className="bg-white border border-[#D6D1C8] rounded-2xl overflow-hidden h-full">

                  <div className="aspect-[16/10] md:aspect-[16/9]">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />

                  </div>

                </div>

              </div>


              {/* TEXT */}

              <div className={`project-text md:col-span-5 ${index % 2 === 0 ? "md:order-1" : ""}`}>

                <div className="bg-white border border-[#D6D1C8] rounded-2xl h-full flex items-center">

                  <div className="px-8 sm:px-10 md:px-12 py-10 md:py-12 max-w-[460px]">

                    <div className="text-xs tracking-[0.18em] uppercase text-neutral-400 mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="text-[22px] md:text-[24px] leading-[1.25] font-medium tracking-[-0.015em] text-neutral-900 mb-4">
                      {project.title}
                    </h3>

                    <p className="text-[15px] leading-[1.7] text-neutral-600 mb-6">
                      {project.description}
                    </p>

                    <div className="text-[13px] tracking-wide text-neutral-500">
                      {project.meta}
                    </div>

                  </div>

                </div>

              </div>


            </div>

          ))}

        </div>

      </div>

    </section>

  )

}

 


function Gallery() {

  function optimizeImage(url) {
    if (!url.includes("res.cloudinary.com")) return url;

    return url.replace(
      "/upload/",
      "/upload/f_auto,q_auto,w_1400/"
    );
  }

  const images = [
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773051867/ChatGPT_Image_Mar_9_2026_05_24_02_PM_qgizxe.png",
      alt: "Container port logistics",
      span: "md:col-span-4 col-span-2",
      height: "h-[260px] md:h-[420px]",
      position: "object-top"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773045608/ChatGPT_Image_Mar_9_2026_03_39_36_PM_wjk0nh.png",
      alt: "Warehouse pallet storage",
      span: "md:col-span-8 col-span-1",
      height: "h-[260px] md:h-[420px]",
      position: "object-center"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773051427/ChatGPT_Image_Mar_9_2026_03_44_40_PM_o9as43.png",
      alt: "Cargo loading truck",
      span: "md:col-span-5 col-span-1",
      height: "h-[220px] md:h-[420px]",
      position: "object-top"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773051426/ChatGPT_Image_Mar_9_2026_05_16_37_PM_lxvszq.png",
      alt: "Factory production line",
      span: "md:col-span-7 col-span-2",
      height: "h-[220px] md:h-[420px]",
      position: "object-center"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773052409/ChatGPT_Image_Mar_9_2026_05_33_10_PM_andc8r.png",
      alt: "Quality inspection process",
      span: "md:col-span-3 col-span-1",
      height: "h-[180px] md:h-[380px]",
      position: "object-center"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773052226/ChatGPT_Image_Mar_9_2026_05_30_04_PM_j74wyr.png",
      alt: "Shipping container yard",
      span: "md:col-span-6 col-span-1",
      height: "h-[180px] md:h-[380px]",
      position: "object-center"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773052544/ChatGPT_Image_Mar_9_2026_05_35_27_PM_alfevu.png",
      alt: "Warehouse distribution center",
      span: "md:col-span-3 col-span-2",
      height: "h-[180px] md:h-[380px]",
      position: "object-bottom"
    }
  ];

  return (

    <section className="bg-[#F3F2EF] py-20 md:py-24 xl:py-28">

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">


        {/* HEADER */}

        <div className="flex justify-center mb-16 md:mb-20">

          <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium">
            Gallery
          </div>

        </div>


        {/* GRID */}

        <div className="grid grid-cols-2 md:grid-cols-12 gap-[8px]">

          {images.map((item, index) => (

            <div key={index} className={item.span}>

              <div className="rounded-2xl overflow-hidden">

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
    {
      q: "Are you the manufacturer?",
      a: "Yes. Your order is produced on our lines in China under our PI, QC control, and production warranty.",
    },
    {
      q: "What MOQs do you work with?",
      a: "Standard runs start from 5,000+ units. Some projects can begin from 1,000+ depending on size, materials, and finishes. Final MOQs are confirmed in your PI.",
    },
    {
      q: "How fast are samples and production?",
      a: "Samples typically take 1–3 weeks from dieline or specification sign-off. Production usually runs 3–6 weeks after sample approval.",
    },
    {
      q: "Can you handle color matching?",
      a: "Yes — to Pantone references, client swatches, or approved master standards. We retain master samples to ensure consistent reorders.",
    },
    {
      q: "What inserts do you recommend?",
      a: "EVA or foam for precision protection, paperboard for plastic-free builds, molded pulp for sustainable solutions, and fabric or satin for premium interiors.",
    },
    {
      q: "Can you help with structure and dielines?",
      a: "Absolutely. Our structural team develops dielines and prototypes complex formats including foldable, collapsible, shoulder, and drawer constructions.",
    },
    {
      q: "Do you offer sustainable options?",
      a: "Yes — FSC-certified papers, recycled content, soy-based inks, and plastic-free insert solutions are available.",
    },
    {
      q: "How do you ensure quality at scale?",
      a: "We conduct in-line QC at each production stage and perform pre-shipment AQL inspections with functional tests (magnet strength, closure alignment, drop testing). Reports and visuals are provided.",
    },
    {
      q: "Can you ship door-to-door (DDP)?",
      a: "Yes. We offer DDP with customs clearance, or EXW / FOB if you prefer to use your own forwarder.",
    },
    {
      q: "What are your payment terms?",
      a: "Standard terms are 50% deposit and 50% pre-shipment (adjustable). Final terms and lead times are confirmed in your PI.",
    },
    {
      q: "Can I tour the factory?",
      a: "Yes. China factory tours are available by appointment, and live video inspections can be arranged anytime.",
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#F3F2EF] py-20 md:py-28">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 xl:px-16">

        <div className="grid grid-cols-1 md:grid-cols-[0.45fr_0.55fr] gap-12 md:gap-20">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
              FAQ
            </div>

            <h2 className="text-[32px] sm:text-[36px] md:text-[42px] leading-[1.1] tracking-[-0.015em] font-medium text-neutral-900">
              Frequently Asked
              <br />
              Questions
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            {faqs.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <div key={index} className="border-b border-neutral-200">

                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-start justify-between text-left py-5 md:py-6"
                  >
                    <span className="text-[17px] md:text-[18px] text-neutral-900 leading-[1.45] pr-6 md:pr-10">
                      {item.q}
                    </span>

                    <Plus
                      size={18}
                      strokeWidth={1.75}
                      className={`shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 text-neutral-900"
                          : "rotate-0 text-neutral-400"
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "max-h-[500px] pb-6 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[15px] md:text-[16px] leading-[1.75] text-neutral-600 pr-6 md:pr-10">
                      {item.a}
                    </p>
                  </div>

                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}