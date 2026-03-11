

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
      <CookieConsent />
    </main>
  );
}






/* =========================
   SECTIONS
========================= */
function Hero() {

  const cloudinaryTransform = (url) => {
    return url.replace(
      "/upload/",
      "/upload/f_auto,q_auto,c_fill,w_2000/"
    )
  }

  const heroImage =
    "https://res.cloudinary.com/djgu1bhef/image/upload/v1773152395/ChatGPT_Image_Mar_10_2026_09_16_01_PM_ssybh8.png"

  return (

    <section className="bg-[#F3F2EF] pt-[8px]">

      {/* HEADER */}

      <header className="mx-[8px] text-black">

        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 py-5 flex items-center justify-between">

          {/* LOGO */}

          <Link href="/" className="flex items-center">

            <Image
              src="/images/alraimi-logo-black-1.png"
              alt="Alraimi Logo"
              width={42}
              height={38}
              priority
            />

          </Link>


          {/* NAV */}

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


          {/* HEADER CTA */}

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

        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 py-20 md:py-24">

          <div className="grid lg:grid-cols-[0.54fr_0.46fr] gap-12 md:gap-16 items-center">

            {/* TEXT */}

            <div>

              <div className="mb-6 sm:mb-8">

                <span className="text-xs tracking-[0.2em] text-neutral-500 uppercase">
                  Global Manufacturing Partner
                </span>

              </div>


              <h1
                className="font-light leading-[1.05] tracking-[-0.02em] text-neutral-900 mb-6 sm:mb-8"
                style={{ fontSize: "clamp(42px,4vw,64px)" }}
              >

                <span className="block">
                  Fashion Manufacturing
                </span>

                <span className="block text-[#8C7A5B]">
                  & Luxury Packaging
                </span>

                <span className="block">
                  Managed in China
                </span>

              </h1>


              <p
                className="text-neutral-600 leading-[1.7] max-w-xl"
                style={{ fontSize: "clamp(16px,1.3vw,19px)" }}
              >

                Sampling, production control, AQL inspection,
                and international delivery managed by one team.

              </p>

            </div>


            {/* IMAGE */}

            <div>

              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 aspect-[4/3]">

                <Image
                  src={cloudinaryTransform(heroImage)}
                  alt="Manufacturing oversight in China"
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
          <div className="bg-white border border-[#DDD7CE] rounded-2xl px-8 sm:px-12 md:px-16 xl:px-20 py-14 md:py-16 xl:py-20 text-center md:text-left">

            <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-8">
              OVERVIEW
            </div>

            <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900">
              Production
              <br />
              <span>From Idea to Delivery</span>
            </h2>

            <div className="mt-8 h-[1px] w-24 bg-[#DDD7CE] mx-auto md:mx-0"></div>

          </div>

          {/* RIGHT CARD */}
          <div className="bg-white border border-[#DDD7CE] rounded-2xl px-8 sm:px-12 md:px-16 xl:px-20 py-14 md:py-16 xl:py-20 flex items-center">

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

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {

      gsap.from(".pc-label", {
        opacity: 0,
        y: 12,
        duration: 0.45,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      })

      gsap.from(".pc-heading", {
        opacity: 0,
        y: 16,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })

      gsap.from(".pc-card", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      })

      gsap.from(".pc-image", {
        scale: 1.05,
        duration: 1.1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      })

      gsap.from(".pc-cta", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".pc-cta",
          start: "top 90%",
        }
      })

    }, sectionRef)

    ScrollTrigger.refresh()

    return () => ctx.revert()

  }, [])

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

            <div className="grid grid-cols-1 md:grid-cols-6 gap-10">

              {categories.map((category, i) => {

                let position = "md:col-span-2"

                if (i === 3) position += " md:col-start-2"
                if (i === 4) position += " md:col-start-4"

                return (

                  <div key={category.title} className={`pc-card ${position}`}>

                    <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-neutral-200 mb-5">

                      <Image
                        src={cloudinaryTransform(category.image)}
                        alt={category.title}
                        fill
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 300px"
                        className="pc-image object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                      />

                    </div>

                    <div className="text-[20px] font-medium text-neutral-900 mb-2">
                      {category.title}
                    </div>

                    <div className="text-[16px] leading-[1.7] text-neutral-600">
                      {category.items.join(", ")}
                    </div>

                  </div>

                )

              })}

            </div>


            {/* CTA */}

            <div className="flex justify-center mt-16 md:mt-20">

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
      fade: "w-[58%]",
      items: ["Cotton","Linen","Rayon","Viscose","Polyester","Spandex Blends","Performance Knits"],
    },
    {
      title: "Trims & Labels",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772705134/ChatGPT_Image_Mar_5_2026_05_03_25_PM_pfdojt.png",
      fade: "w-[52%]",
      items: ["Woven Labels","Heat Transfer","Care Labels","Size Labels","Zippers","Buttons","Swing Tags"],
    },
    {
      title: "Packing Options",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772705131/ChatGPT_Image_Mar_5_2026_05_05_00_PM_nvpo8l.png",
      fade: "w-[60%]",
      items: ["Retail Poly","Eco-Friendly Garment Bags","Compostable","Biodegradable"],
    },
    {
      title: "Color Control",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772705133/ChatGPT_Image_Mar_5_2026_05_02_04_PM_wqntnm.png",
      fade: "w-[55%]",
      items: ["Client Swatch","Reference Samples","Pantone Matching"],
    },
  ]

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {

      gsap.from(".mt-label", {
        opacity: 0,
        y: 12,
        duration: 0.45,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%"
        }
      })

      gsap.from(".mt-heading", {
        opacity: 0,
        y: 18,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      })

      gsap.from(".mt-card", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".mt-grid",
          start: "top 80%"
        }
      })

      gsap.from(".mt-image", {
        scale: 1.05,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".mt-grid",
          start: "top 80%"
        }
      })

      gsap.from(".mt-tag", {
        opacity: 0,
        y: 10,
        duration: 0.35,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".mt-grid",
          start: "top 78%"
        }
      })

    }, sectionRef)

    ScrollTrigger.refresh()

    return () => ctx.revert()

  }, [])

  return (

    <section ref={sectionRef} className="bg-[#F3F2EF] pt-[8px]">

      <div className="px-[8px]">

        <div className=" ">

          <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 pt-16 md:pt-20 xl:pt-24">

            {/* HEADER */}

            <div className="mb-12 md:mb-16 xl:mb-20">

              <div className="mt-label inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-10">
                MATERIALS & TRIMS
              </div>

              <h2 className="mt-heading text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900 max-w-[720px]">
                Fabric Selection, Trim Development,<br/>and Packing Control
              </h2>

            </div>

            {/* GRID */}

            <div className="mt-grid grid grid-cols-1 md:grid-cols-2 gap-[8px] pb-14 md:pb-16 xl:pb-20">

              {data.map((block) => (

                <div
                  key={block.title}
                  className="mt-card relative bg-white border border-neutral-300 rounded-2xl overflow-hidden min-h-[220px] flex items-center"
                >

                  {/* IMAGE */}

                  <div className={`mt-image absolute inset-y-0 right-0 ${block.fade} pointer-events-none`}>

                    <img
                      src={cloudinaryTransform(block.image)}
                      alt={block.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/60 to-white"/>

                  </div>

                  {/* CONTENT */}

                  <div className="relative z-10 px-6 md:px-8 py-8 max-w-[65%]">

                    <div className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.3] font-medium text-neutral-900 mb-4">
                      {block.title}
                    </div>

                    <div className="flex flex-wrap gap-2">

                      {block.items.map((item) => (
                        <span
                          key={item}
                          className="mt-tag px-3 py-1.5 text-sm border border-neutral-300 rounded-md text-neutral-700"
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

      <div className="absolute left-0 top-0 h-full w-[35%] pointer-events-none opacity-[1]" style={{backgroundImage:"url(https://res.cloudinary.com/djgu1bhef/image/upload/v1772706209/ChatGPT_Image_Mar_5_2026_05_23_08_PM_s6kvvj.png)",backgroundSize:"900px",backgroundRepeat:"repeat",backgroundPosition:"left center",WebkitMaskImage:"linear-gradient(to right, black 0%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",WebkitMaskComposite:"destination-in",maskImage:"linear-gradient(to right, black 0%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",maskComposite:"intersect"}} />

      {/* RIGHT TEXTURE */}

      <div className="absolute right-0 top-0 h-full w-[35%] pointer-events-none opacity-[0.06]" style={{backgroundImage:"url(https://res.cloudinary.com/djgu1bhef/image/upload/v1772706209/ChatGPT_Image_Mar_5_2026_05_23_08_PM_s6kvvj.png)",backgroundSize:"900px",backgroundRepeat:"repeat",backgroundPosition:"right center",WebkitMaskImage:"linear-gradient(to left, black 0%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",WebkitMaskComposite:"destination-in",maskImage:"linear-gradient(to left, black 0%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",maskComposite:"intersect"}} />

      {/* CONTENT */}

      <div className="relative px-[8px]">

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-20 md:py-24 xl:py-28">

          <div className="grid grid-cols-1 md:grid-cols-[0.45fr_0.55fr] gap-14 md:gap-20 xl:gap-24">

            {/* LEFT */}

            <div>

              <div className="fit-label inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
                FIT & SIZING
              </div>

              <h2 className="fit-title text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900">
                We Set Your Fit Once —<br/>Then Protect It Every Reorder
              </h2>

              <div className="fit-desc mt-8 text-[16px] sm:text-[17px] md:text-[18px] leading-[1.7] text-neutral-600 max-w-[420px]">
                Fit consistency is controlled through documentation, approvals, and locked references before production.
              </div>

            </div>


            {/* RIGHT */}

            <div className="space-y-10 md:space-y-12">

              {controls.map((item) => (
                <div key={item.title} className="fit-item">

                  <div className="text-[18px] sm:text-[19px] md:text-[20px] leading-[1.3] font-medium text-neutral-900 mb-3">
                    {item.title}
                  </div>

                  <div className="text-[16px] leading-[1.7] text-neutral-600">
                    {item.description}
                  </div>

                  <div className="mt-6 h-[1px] bg-neutral-300" />

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

  const sectionRef = useRef(null)

  useEffect(()=>{

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(()=>{

      gsap.from(".projects-header",{opacity:0,y:30,duration:0.6,ease:"power2.out",scrollTrigger:{trigger:sectionRef.current,start:"top 80%",once:true}})

      gsap.utils.toArray(".project-block").forEach((block)=>{

        const tl = gsap.timeline({scrollTrigger:{trigger:block,start:"top 85%",once:true}})

        tl.from(block.querySelector(".project-image"),{opacity:0,scale:1.05,duration:0.8,ease:"power2.out"})
        tl.from(block.querySelector(".project-text"),{opacity:0,y:40,duration:0.6,ease:"power2.out"},"-=0.6")

      })

    },sectionRef)

    return ()=>ctx.revert()

  },[])

  const projects = [
    {
      title:"Boutique Womenswear Brand",
      location:"Dubai (Confidential)",
      meta:"2025 • Fashion • Womenswear",
      image:"/images/projects/womenswear.png",
      description:"Dress-led collections; 5,000+ pcs across drops; samples 2–3 weeks; production 4–8 weeks; size-chart & measurement-video approvals; in-line QC + pre-shipment AQL; DDP available.",
    },
    {
      title:"Golf Apparel Startup",
      location:"Dubai (Confidential)",
      meta:"2025 • Fashion • Activewear",
      image:"/images/projects/golf-apparel.png",
      description:"Polos, shorts, pants, caps; first order ~3,000 pcs (~300 per color/design); samples 2–3 weeks; production 4–8 weeks; custom paper box & foil garment wrap; in-line QC + pre-shipment AQL; DDP available.",
    },
  ]

  return (

    <section ref={sectionRef} className="bg-[#F3F2EF] pt-[8px]">

      <div className="px-[8px]">

        <div className="border border-[#D6D1C8] rounded-2xl">

          <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-24 md:py-28">


            {/* HEADER */}

            <div className="projects-header mb-20 md:mb-28 text-center">

              <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
                Projects
              </div>

              <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900">
                Selected Fashion Production
              </h2>

            </div>


            <div className="space-y-[8px]">

              {projects.map((project,index)=>(

                <div key={project.title} className="project-block grid grid-cols-1 md:grid-cols-12 gap-[8px] items-stretch">


                  {/* IMAGE */}

                  <div className={`project-image md:col-span-4 ${index%2===0 ? "md:order-2":""}`}>

                    <div className="border border-[#D6D1C8] rounded-2xl overflow-hidden h-full bg-white">

                      <div className="aspect-[4/3] md:aspect-[3/4] overflow-hidden">

                        <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>

                      </div>

                    </div>

                  </div>


                  {/* TEXT */}

                  <div className={`project-text md:col-span-8 ${index%2===0 ? "md:order-1":""}`}>

                    <div className="border border-[#D6D1C8] rounded-2xl h-full flex items-center bg-white">

                      <div className="px-8 sm:px-12 md:px-16 xl:px-20 py-12 md:py-16 max-w-[640px]">

                        <div className="text-xs tracking-[0.18em] uppercase text-neutral-400 mb-4">
                          {String(index+1).padStart(2,"0")}
                        </div>

                        <h3 className="text-[24px] sm:text-[26px] md:text-[28px] leading-[1.2] tracking-[-0.015em] font-medium text-neutral-900 mb-5">
                          {project.title}
                        </h3>

                        <p className="text-[16px] leading-[1.7] text-neutral-600 mb-6">
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

        </div>

      </div>

    </section>

  )

}


function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleChoice = (choice) => {
    localStorage.setItem("cookie-consent", choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-neutral-200 z-50">
      <div className="max-w-[1600px] mx-auto px-10 xl:px-16 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div className="text-neutral-700 text-[15px] leading-[1.6] max-w-3xl">
          We use cookies to ensure structured performance monitoring,
          analytics alignment, and operational reliability across this platform.
          By continuing, you agree to our use of cookies.
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleChoice("declined")}
            className="px-6 py-2.5 text-sm border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-100 transition"
          >
            Decline
          </button>

          <button
            onClick={() => handleChoice("accepted")}
            className="px-6 py-2.5 text-sm bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition"
          >
            Accept
          </button>
        </div>

      </div>
    </div>
  )
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

  const [open,setOpen]=React.useState(null)

  return (

    <section className="bg-[#F3F2EF] pt-[8px]">

      <div className="px-[8px]">


          <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-24 md:py-28">

            <div className="grid grid-cols-1 md:grid-cols-[0.45fr_0.55fr] gap-20">

              {/* LEFT */}

              <div>

                <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
                  FAQ
                </div>

                <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900">
                  Frequently Asked<br/>Questions
                </h2>

              </div>


              {/* RIGHT */}

              <div>

                {faqs.map((item,i)=>{

                  const isOpen=open===i

                  return(

                    <div key={i} className="border-b border-neutral-200">

                      <button onClick={()=>setOpen(isOpen?null:i)} className="w-full flex items-center justify-between text-left py-6">

                        <span className="text-[18px] text-neutral-900 leading-[1.4] pr-10">
                          {item.q}
                        </span>

                        <Plus size={20} strokeWidth={1.75} className={`shrink-0 transition-all duration-300 ${isOpen?"rotate-45 text-neutral-900":"rotate-0 text-neutral-400"}`} />

                      </button>

                      <div className={`overflow-hidden transition-all duration-300 ${isOpen?"max-h-40 pb-6":"max-h-0"}`}>

                        <p className="text-[16px] leading-[1.7] text-neutral-600 pr-10">
                          {item.a}
                        </p>

                      </div>

                    </div>

                  )

                })}

              </div>

            </div>

          </div>


      </div>

    </section>

  )

}
 