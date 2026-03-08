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


export default function Page() {
  return (
    <main className="bg-white text-neutral-100">
      <Hero />
      {/* <ClientsMarquee/> */}
      <About />
      <ProductCategories />
      <FinishesSystem />
      <FactoryCapabilities />
      {/* <FitSizing/> */}
      <Inserts />
      <MOQsTimelines />
      <section
  className="bg-[#F3F2EF] pt-[8px]"
>

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
      {/* <Achievements/> */}
      {/* <Services/> */}
      {/* <HowWeWork/> */}
      <Projects/>
      {/* <Catalogs/> */}
      <Gallery/>
      {/* <Leadership/> */}
      {/* <Testimonials/> */}
      {/* <SocialProof/> */}
      {/* <TrustWith /> */}
      {/* <ClientSuccess /> */}
      {/* <Services/>    */}
      {/* <GrowthProof />  */}
      {/* <OurProcess /> */}
      {/* <AKMNumbers /> */}
      {/* <VisualWall /> */}
      {/* <Testimonials /> */}
      {/* <LogoWall /> */}
      {/* <Team /> */}
      {/* <Events /> */}

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

  const heroRef = useRef(null)

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
          style={{ background: "linear-gradient(135deg, #191919 0%, #2C2C2C 100%)" }}
        >

          {/* HEADER */}

          <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 pt-8 md:pt-10">

            <header className="fade-up flex items-center justify-between">


              {/* LOGO */}

              <Link href="/" className="flex items-center gap-3">

                <Image
                  src="/images/alraimi-logo-white-1.png"
                  alt="Alraimi Logo"
                  width={42}
                  height={38}
                  priority
                />

              </Link>


              {/* NAV */}

              <nav className="hidden md:flex items-center gap-10 lg:gap-12 text-sm text-white/70">

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


              {/* NAV CTA */}

              <Link
                href="/contact#get-pi"
                className="hidden md:inline-flex items-center bg-[#8C7A5B] text-white px-8 py-3.5 rounded-lg text-sm font-medium transition hover:bg-[#76674C]"
              >
                Get Your PI
              </Link>


              {/* MOBILE CTA */}

              <Link
                href="/contact#get-pi"
                className="md:hidden inline-flex items-center bg-[#8C7A5B] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition hover:bg-[#76674C]"
              >
                Get PI
              </Link>

            </header>

          </div>


          {/* HERO CONTENT */}

          <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-20 md:py-24 lg:py-28">

            <div className="grid lg:grid-cols-[0.55fr_0.45fr] gap-14 items-center">


              {/* TEXT */}

              <div>


                {/* LABEL */}

                <div className="fade-up mb-6">

                  <span className="text-xs tracking-[0.18em] uppercase text-white/50">
                    Luxury Packaging
                  </span>

                </div>


                {/* TITLE */}

                <h1 className="fade-up font-light leading-[1.05] tracking-[-0.02em] max-w-[720px] text-[34px] sm:text-[40px] md:text-[46px] lg:text-[50px]">

                  Luxury Paper Packaging —
                  <br />

                  <span className="text-[#8C7A5B]">
                    Precision Made in China.
                  </span>

                </h1>


                {/* DESCRIPTION */}

                <p className="fade-up mt-7 md:mt-8 text-[16px] md:text-[18px] leading-[1.7] text-white/70 max-w-[620px]">

                  Dielines, sampling, production control, AQL inspection, and
                  door-to-door delivery — managed by our factory team.

                </p>


                {/* CTA */}

                <div className="fade-up mt-9 md:mt-10 flex items-center gap-8">


                  {/* HERO PRIMARY CTA */}

                  <Link
                    href="/contact#get-pi"
                    className="inline-flex items-center bg-white text-black px-8 py-3.5 rounded-lg text-sm font-medium transition hover:bg-neutral-200"
                  >
                    Get Your PI
                  </Link>


                  {/* SECONDARY */}

                  <Link
                    href="/contact#start-your-brand"
                    className="text-white/70 hover:text-white text-sm font-medium transition"
                  >
                    Start Your Brand
                  </Link>

                </div>

              </div>


              {/* IMAGE */}

              <div className="fade-up">

                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">

                  <Image
                    src="https://res.cloudinary.com/djgu1bhef/image/upload/v1772772673/ChatGPT_Image_Mar_6_2026_11_50_57_AM_i7qlfo.png"
                    alt="Luxury packaging production"
                    fill
                    className="object-cover"
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


function ClientsMarquee() {
  const logos = [
    "/clients/1-1-removebg-preview.png",
    "/clients/3-removebg-preview.png",
    "/clients/12-removebg-preview.png",
    "/clients/7-removebg-preview.png",
    "/clients/11-removebg-preview.png",
    "/clients/2-removebg-preview.png",
    "/clients/4-removebg-preview.png",
    "/clients/5-removebg-preview.png",
    "/clients/6-removebg-preview.png",
    "/clients/8-removebg-preview.png",
    "/clients/9-removebg-preview.png",
    "/clients/10-removebg-preview.png",
    "/clients/13-removebg-preview.png",
    "/clients/14-removebg-preview.png",
    "/clients/VHD-white.png",
  ];
  
  return (
    <section className="bg-[#F3F2EF] py-20">

      {/* CENTERED + NARROW VIEWPORT */}
      <div className="relative max-w-[1050px] mx-auto overflow-hidden">

        {/* Edge fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#F3F2EF] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#F3F2EF] to-transparent z-10" />

        <div className="flex min-w-max animate-marquee items-center">

          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-14 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt="Client logo"
                width={240}
                height={120}
                className="object-contain h-32 w-auto invert opacity-90"
              />
            </div>
          ))}

        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 85s linear infinite;
        }
      `}</style>

    </section>
  );
}

function About() {

  return (

    <section className="bg-[#F3F2EF] pt-10 pb-[8px]">

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">

        <div className="grid grid-cols-1 md:grid-cols-[0.55fr_0.45fr] gap-[8px]">

          {/* LEFT CARD */}

          <div className="bg-white border border-[#DDD7CE] rounded-2xl px-8 sm:px-12 md:px-16 xl:px-20 py-14 md:py-16 xl:py-20 text-center md:text-left">

            <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-8">
              OVERVIEW
            </div>

            <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900">
              Precision Packaging
              <br />
              <span>Built for Consistency</span>
            </h2>

            <div className="mt-8 h-[1px] w-24 bg-[#DDD7CE] mx-auto md:mx-0"></div>

          </div>


          {/* RIGHT CARD */}

          <div className="bg-white border border-[#DDD7CE] rounded-2xl px-8 sm:px-12 md:px-16 xl:px-20 py-14 md:py-16 xl:py-20 flex items-center">

            <div className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.7] text-neutral-600">

              <p>
                We produce premium paper packaging for perfume, cosmetics,
                fashion, and luxury retail brands — from dieline development
                to finished packaging. Expect accurate color matching,
                structurally precise builds, reliable production timelines,
                and consistent quality across every reorder.
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

      /* SECTION LABEL */

      tl.from(".categories-label", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: "power2.out"
      })

      /* CARDS STAGGER */

      tl.from(".category-card", {
        opacity: 0,
        y: 28,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out"
      }, "-=0.2")

      /* IMAGE MICRO ZOOM */

      gsap.from(".category-image", {
        scale: 1.06,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".category-image",
          start: "top 85%",
        }
      })

      /* TAG MICRO STAGGER */

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

      /* CTA */

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

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">

        <div className="bg-white border border-[#D6D1C8] rounded-2xl">

          <div className="px-8 sm:px-12 md:px-16 xl:px-20 py-14 md:py-16 xl:py-20">

            {/* LABEL */}

            <div className="flex justify-center mb-14 categories-label">

              <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium">
                PACKAGING TYPES
              </div>

            </div>


            {/* GRID */}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">

              {categories.map((category) => (

                <div key={category.title} className="category-card w-full max-w-[420px] bg-white border border-[#D6D1C8]/70 rounded-2xl p-6">

                  <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-6 border border-neutral-200">

                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover category-image"
                    />

                  </div>

                  <div className="text-[18px] font-medium text-neutral-900 mb-4">
                    {category.title}
                  </div>

                  <div className="flex flex-wrap gap-2">

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

      /* HEADER */

      const headerTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".finishes-header",
          start: "top 80%"
        }
      })

      headerTL
        .from(".finishes-label", {
          opacity: 0,
          y: 16,
          duration: 0.6,
          ease: "power2.out"
        })
        .from(".finishes-title", {
          opacity: 0,
          y: 18,
          duration: 0.7,
          ease: "power2.out"
        }, "-=0.3")
        .from(".finishes-desc", {
          opacity: 0,
          y: 18,
          duration: 0.7,
          ease: "power2.out"
        }, "-=0.4")


      /* CARDS */

      gsap.from(".finish-card", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".finishes-grid",
          start: "top 80%"
        }
      })


      /* IMAGE MICRO ZOOM */

      gsap.from(".finish-image", {
        scale: 1.05,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".finishes-grid",
          start: "top 85%"
        }
      })


      /* TAG MICRO STAGGER */

      gsap.utils.toArray(".finish-card").forEach((card) => {

        const tags = card.querySelectorAll(".finish-tag")

        gsap.from(tags, {
          opacity: 0,
          y: 6,
          duration: 0.35,
          stagger: 0.05,
          ease: "power1.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%"
          }
        })

      })

    }, sectionRef)

    return () => ctx.revert()

  }, [])


  return (

    <section ref={sectionRef} className="bg-[#F3F2EF] pt-[8px]">

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">

        <div className="bg-white border border-[#D6D1C8] rounded-2xl">

          <div className="px-8 sm:px-12 md:px-16 xl:px-20 py-14 md:py-16 xl:py-20">

            {/* HEADER */}

            <div className="finishes-header grid grid-cols-1 md:grid-cols-[1fr_420px] gap-10 md:gap-16 items-start mb-16 md:mb-20">

              <div>

                <div className="finishes-label inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
                  Finishes
                </div>

                <h2 className="finishes-title text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900 max-w-[720px]">
                  Luxury Finishes
                  <br />
                  <span>Mix & Match Control</span>
                </h2>

              </div>

              <div className="finishes-desc text-[16px] md:text-[17px] leading-[1.7] text-neutral-600 max-w-[420px]">

                Our production system allows brands to mix finishes precisely — ensuring consistency across packaging, inserts, and supporting materials while maintaining strict color and material control.

              </div>

            </div>


            {/* GRID */}

            <div className="finishes-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

              {finishes.map((finish) => (

                <div key={finish.title} className="finish-card bg-white border border-[#D6D1C8]/70 rounded-2xl p-6">

                  <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-6 items-start">

                    <div className="relative w-full h-[140px] sm:h-[110px] rounded-lg overflow-hidden border border-neutral-200">

                      <Image
                        src={finish.image}
                        alt={finish.title}
                        fill
                        className="object-cover finish-image"
                      />

                    </div>

                    <div>

                      <div className="text-[20px] font-medium text-neutral-900 mb-4">
                        {finish.title}
                      </div>

                      <div className="flex flex-wrap gap-2">

                        {finish.items.map((item) => (
                          <span key={item} className="finish-tag text-[13px] px-3 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-neutral-600">
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


function FitSizing() {
  const controls = [
    {
      title: "Size Charts",
      description:
        "Prepared by us and editable by you before final approval.",
    },
    {
      title: "Measurement Documentation",
      description:
        "Photos and videos shared during every sample round.",
    },
    {
      title: "Graded Size Set",
      description:
        "Available upon request before bulk production.",
    },
    {
      title: "Golden Sample",
      description:
        "Final approved reference locked before manufacturing begins.",
    },
  ];

  return (
    <section className="bg-[#F3F2EF]">
      <div className="max-w-[1600px] mx-auto px-16 py-32">

        <div className="grid grid-cols-1 md:grid-cols-[0.45fr_0.55fr] gap-24">

          {/* LEFT SIDE */}
          <div>
            <div className="text-xs tracking-[0.18em] uppercase font-medium text-neutral-600 mb-6">
              FIT & SIZING
            </div>

            <h2 className="text-[44px] leading-[1.1] tracking-[-0.015em] font-medium text-neutral-900">
              We Set Your Fit Once —
              <br />
              Then Protect It Every Reorder
            </h2>

            <div className="mt-10 text-neutral-700 text-[18px] leading-[1.8] max-w-[420px]">
              Fit consistency is controlled through documentation,
              approvals, and locked references before production.
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-12">

            {controls.map((item) => (
              <div key={item.title}>
                <div className="text-[22px] font-medium text-neutral-900 mb-3">
                  {item.title}
                </div>

                <div className="text-neutral-700 text-[17px] leading-[1.8]">
                  {item.description}
                </div>

                <div className="mt-6 h-[1px] bg-neutral-300" />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

function MOQsTimelines() {

  const items = [
    {
      title: "MOQs",
      content: "Standard production runs start from 5,000+ units. Select SKUs may begin from 1,000+ for launches or trial batches (spec-dependent).",
    },
    {
      title: "Samples",
      content: "Typically 1–3 weeks after dieline and specification confirmation.",
    },
    {
      title: "Production",
      content: "Usually 3–6 weeks from sample approval. Complex structures or specialty finishes may extend lead time.",
    },
    {
      title: "Reorders",
      content: "Faster once master materials, colors, and structural standards are locked.",
    },
  ];

  return (

    <section className="bg-[#F3F2EF] pt-[8px]">

      <div className="px-[8px]">

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-20 md:py-24 xl:py-28">

          {/* Header */}

          <div className="mb-16 md:mb-20 text-center">

            <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
              MOQs & Timelines
            </div>

            <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900">
              Production Quantities and Lead Times
            </h2>

          </div>

          {/* Card */}

          <div className="bg-white border border-[#D6D1C8] rounded-2xl px-8 sm:px-12 md:px-16 xl:px-20 py-12 md:py-16 xl:py-20">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16 md:gap-x-16 xl:gap-x-20">

              {items.map((item, index) => (
                <div key={item.title} className="flex gap-6 md:gap-8 items-start">

                  <div className="text-[20px] sm:text-[22px] md:text-[24px] font-medium text-neutral-300 leading-none shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>

                    <div className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.3] font-medium text-neutral-900 mb-3">
                      {item.title}
                    </div>

                    <div className="text-[16px] leading-[1.7] text-neutral-600">
                      {item.content}
                    </div>

                  </div>

                </div>
              ))}

            </div>

            <div className="mt-14 md:mt-20 pt-6 md:pt-8 border-t border-neutral-200 text-sm text-neutral-500 leading-[1.7] max-w-[800px]">
              Final MOQs and production timelines are confirmed in your PI based on structure, materials, finishes, and logistics requirements.
            </div>

          </div>

        </div>

      </div>

    </section>

  );
}


function QualityControl() {

  const controls = [
    {
      title: "In-Line Quality Control",
      desc: "Supervised production-floor monitoring during active manufacturing.",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772606303/ChatGPT_Image_Mar_4_2026_12_57_21_PM_wri1bp.png",
    },
    {
      title: "Pre-Shipment AQL Inspection",
      desc: "Formal inspection with full report, measurements, and visual documentation.",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772606304/ChatGPT_Image_Mar_4_2026_12_57_06_PM_ztdptp.png",
    },
    {
      title: "Corrective Action Protocol",
      desc: "Any deviation is corrected before shipment release.",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772606304/ChatGPT_Image_Mar_4_2026_01_37_01_PM_x8gmm1.png",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(imageRef.current,{opacity:0},{opacity:1,duration:0.35,ease:"power2.out"})
  },[activeIndex])

  return (

    <section className="text-white">

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">

        {/* HEADER */}

        <div className="mb-16 md:mb-20">

          <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
            QUALITY CONTROL
          </div>

          <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-light max-w-[720px]">
            Inspection Before Shipment,<br/>Not After Complaints
          </h2>

        </div>


        {/* CONTENT */}

        <div className="grid md:grid-cols-2 gap-14 md:gap-20 xl:gap-24 items-center">


          {/* IMAGE */}

          <div className="w-full aspect-square overflow-hidden rounded-2xl">

            <img
              ref={imageRef}
              key={activeIndex}
              src={controls[activeIndex].image}
              alt=""
              className="w-full h-full object-cover"
            />

          </div>


          {/* LIST */}

          <div className="space-y-10">

            {controls.map((item,index)=>{

              const isActive = activeIndex === index

              return(

                <div key={item.title} onClick={()=>setActiveIndex(index)} className="cursor-pointer pb-8 border-b border-white/10 transition-all duration-300">

                  <div className={`text-[18px] sm:text-[19px] md:text-[20px] leading-[1.3] font-medium transition-colors duration-300 ${isActive ? "text-white" : "text-white/40 hover:text-white/70"}`}>
                    {item.title}
                  </div>

                  <div className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}`}>

                    <div className="text-[16px] leading-[1.7] text-white/70 max-w-[520px]">
                      {item.desc}
                    </div>

                  </div>

                </div>

              )

            })}


            <div className="pt-8 text-sm text-white/50 leading-[1.7] max-w-[520px]">
              Real-time production photos and video updates are shared during manufacturing to maintain transparency and alignment.
            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

function LogisticsShipping() {

  const sectionRef = useRef(null)

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger:{trigger:sectionRef.current,start:"top 80%",once:true}
      })

      tl.from(".logistics-left",{opacity:0,x:-40,duration:0.6,ease:"power2.out"})
      .from(".incoterm-item",{opacity:0,y:30,duration:0.5,ease:"power2.out",stagger:0.12},"-=0.3")

    },sectionRef)

    return () => ctx.revert()

  },[])

  const incoterms = [
    {
      code: "EXW",
      desc: "Factory pickup. You manage freight, customs, and final delivery.",
    },
    {
      code: "FOB",
      desc: "We handle export clearance and delivery to port. You manage main freight.",
    },
    {
      code: "DDP",
      desc: "Door-to-door delivery with customs clearance included. Transit typically 15 days by air and around 30 days by sea depending on route.",
    },
  ]

  return (

    <section ref={sectionRef} className="pt-16 md:pt-20 xl:pt-24 text-white">

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">

        <div className="grid grid-cols-1 md:grid-cols-[0.5fr_0.5fr] gap-14 md:gap-24">

          {/* LEFT */}

          <div className="logistics-left text-center md:text-left">

            <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
              Logistics & Shipping
            </div>

            <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-light">
              Choose the Incoterms<br/>That Suit Your Operation
            </h2>

            <div className="mt-8 text-[16px] leading-[1.7] text-white/70 max-w-[420px] mx-auto md:mx-0">
              Export documentation and packing lists are prepared by our team for all shipment types.
            </div>

            <div className="mt-12 flex justify-center md:justify-start">

              <button className="px-8 py-3.5 rounded-lg text-sm font-medium bg-white text-black hover:bg-neutral-200 transition">
                Get Your PI
              </button>

            </div>

          </div>


          {/* RIGHT */}

          <div className="space-y-8 md:space-y-12">

            {incoterms.map((item)=>(
              
              <div key={item.code} className="incoterm-item pb-8 md:pb-10 border-b border-white/10">

                <div className="text-[28px] sm:text-[32px] md:text-[36px] font-light tracking-[-0.02em] mb-4">
                  {item.code}
                </div>

                <div className="text-[16px] leading-[1.7] text-white/70 max-w-[520px]">
                  {item.desc}
                </div>

              </div>

            ))}

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
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
        defaults: { ease: "power2.out" }
      })

      tl.from(".inserts-left", { opacity: 0, x: -40, duration: 0.6 })
        .from(".inserts-line", { scaleY: 0, transformOrigin: "top center", duration: 0.7 }, "-=0.4")
        .from(".insert-item", { opacity: 0, y: 30, duration: 0.5, stagger: 0.08 }, "-=0.5")

    }, sectionRef)

    return () => ctx.revert()

  }, [])


  return (

    <section ref={sectionRef} className="bg-[#F3F2EF] py-20 md:py-24 xl:py-28">

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">

        <div className="grid md:grid-cols-12 gap-14 md:gap-20 items-start relative">


          {/* LEFT */}

          <div className="inserts-left md:col-span-4">

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

          <div className="md:col-span-8 relative">

            <div className="inserts-line absolute left-0 top-0 bottom-0 w-[1px] bg-neutral-300/70"></div>

            <div className="pl-10 md:pl-14 space-y-12 md:space-y-14">

              {[
                {
                  title: "EVA / Foam",
                  desc: "Precision-cut inserts with optional velvet wrapping.",
                },
                {
                  title: "Paperboard / Cardboard",
                  desc: "Multi-layer precision structures for rigid support.",
                },
                {
                  title: "Molded Pulp",
                  desc: "Recyclable interior solutions in natural or colored finishes.",
                },
                {
                  title: "Fabric / Satin",
                  desc: "Soft cushions and trays for elevated presentation.",
                },
                {
                  title: "Thermoformed Trays",
                  desc: "Engineered trays when compliance requires exact fit.",
                },
              ].map((item) => (

                <div key={item.title} className="insert-item">

                  <div className="text-[22px] md:text-[24px] font-medium text-neutral-900 mb-3">
                    {item.title}
                  </div>

                  <div className="text-neutral-600 text-[16px] md:text-[17px] leading-[1.7] max-w-[720px]">
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
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true }
      })

      tl.from(".factory-header", { opacity: 0, y: 30, duration: 0.5, ease: "power2.out" })

      tl.from(".factory-band", { opacity: 0, y: 30, duration: 0.5, ease: "power2.out", stagger: 0.12 }, "-=0.2")

    }, sectionRef)

    return () => ctx.revert()

  }, [])


  return (

    <section ref={sectionRef} className="bg-[#F3F2EF] pt-[8px]">

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">

        <div className="bg-gradient-to-b from-[#1E1E1E] to-[#151515] border border-white/10 rounded-2xl overflow-hidden">


          {/* HEADER */}

          <div className="factory-header relative px-8 sm:px-12 md:px-16 xl:px-20 py-10 md:py-12 xl:py-14 border-b border-white/10 text-white overflow-hidden">

            <Image
              src="https://images.unsplash.com/photo-1476683874822-744764a2438f?q=80&w=3270&auto=format&fit=crop"
              alt="Factory background"
              fill
              className="object-cover opacity-30"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10">

              <div className="inline-flex items-center border border-white/30 text-white px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
                Factory Capacity
              </div>

              <h2 className="text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal max-w-[760px]">
                Controlled Production
                <br />
                Infrastructure in China
              </h2>

            </div>

          </div>



          {/* CAPABILITIES */}

          <div className="relative">

            {/* vertical guide line */}

            <div className="absolute left-[44px] top-0 bottom-0 w-[1px] bg-white/10 hidden md:block"></div>


            {/* BAND 1 */}

            <div className="factory-band px-8 sm:px-12 md:px-16 xl:px-20 py-10 md:py-12 xl:py-14 border-b border-white/10">

              <div className="flex gap-6 items-start">

                <div className="w-[56px] h-[56px] rounded-lg bg-gradient-to-b from-[#2A2A2A] to-[#1F1F1F] border border-neutral-700 flex items-center justify-center flex-shrink-0 relative z-10">
                  <Factory size={24} className="text-neutral-300" />
                </div>

                <div>

                  <div className="text-[20px] md:text-[22px] font-medium text-white mb-3">
                    Automated Production Lines
                  </div>

                  <div className="text-neutral-400 text-[16px] md:text-[17px] leading-[1.7] max-w-[760px]">
                    Dedicated lines for die-cutting, lamination, foil stamping, UV coating,
                    folding and gluing, magnet setting, and final packing.
                  </div>

                </div>

              </div>

            </div>



            {/* BAND 2 */}

            <div className="factory-band px-8 sm:px-12 md:px-16 xl:px-20 py-10 md:py-12 xl:py-14 border-b border-white/10">

              <div className="flex gap-6 items-start">

                <div className="w-[56px] h-[56px] rounded-lg bg-gradient-to-b from-[#2A2A2A] to-[#1F1F1F] border border-neutral-700 flex items-center justify-center flex-shrink-0 relative z-10">
                  <DraftingCompass size={24} className="text-neutral-300" />
                </div>

                <div>

                  <div className="text-[20px] md:text-[22px] font-medium text-white mb-3">
                    Pre-Press & Structural Engineering
                  </div>

                  <div className="text-neutral-400 text-[16px] md:text-[17px] leading-[1.7] max-w-[760px]">
                    In-house pre-press control and structural engineering for custom dielines,
                    collapsible builds, complex shoulder boxes, and precision tolerances.
                  </div>

                </div>

              </div>

            </div>



            {/* BAND 3 */}

            <div className="factory-band px-8 sm:px-12 md:px-16 xl:px-20 py-10 md:py-12 xl:py-14">

              <div className="flex gap-6 items-start">

                <div className="w-[56px] h-[56px] rounded-lg bg-gradient-to-b from-[#2A2A2A] to-[#1F1F1F] border border-neutral-700 flex items-center justify-center flex-shrink-0 relative z-10">
                  <ShieldCheck size={24} className="text-neutral-300" />
                </div>

                <div>

                  <div className="text-[20px] md:text-[22px] font-medium text-white mb-3">
                    Stage-Based QC Cells
                  </div>

                  <div className="text-neutral-400 text-[16px] md:text-[17px] leading-[1.7] max-w-[760px]">
                    Quality control integrated at printing, finishing, assembly,
                    and pre-shipment inspection stages.
                  </div>

                </div>

              </div>

            </div>


          </div>

        </div>

      </div>

    </section>

  )

}





 
function Achievements() {
  return (
    <section className="bg-[#F3F2EF]">

      <div className="max-w-[1600px] mx-auto px-16 py-10">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* CARD 1 — DARK */}
          <div className="bg-[#191919] text-white rounded-2xl p-12 aspect-square flex flex-col justify-between">

            <div>
              <h3 className="text-[72px] leading-none font-normal mb-6">
                15+
              </h3>

              <p className="text-white/70 text-[16px] max-w-xs leading-relaxed">
                Years operating directly inside China’s factory production network.
              </p>
            </div>

            <div className="text-sm text-white/40">
              On-Ground Coordination
            </div>

          </div>


          {/* CARD 2 — IMAGE */}
          <div className="relative rounded-2xl overflow-hidden aspect-square">

            <img
              src="https://i.pinimg.com/736x/54/f4/2e/54f42ecca183ef520ac99eb2e0a9292a.jpg"
              alt="Factory"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 p-12 h-full flex flex-col justify-between text-white">

              <div>
                <h3 className="text-[72px] leading-none font-normal mb-6">
                  500K+
                </h3>

                <p className="text-white/80 text-[16px] max-w-xs leading-relaxed">
                  Luxury packaging units delivered across international markets.
                </p>
              </div>

              <div className="text-sm text-white/50">
                Factory → Port → Destination
              </div>

            </div>

          </div>


          {/* CARD 3 — LIGHT */}
          <div className="bg-white border border-[#D6D1C8] rounded-2xl p-12 aspect-square flex flex-col justify-between">

            <div>
              <h3 className="text-[72px] leading-none font-normal mb-6 text-neutral-900">
                100K+
              </h3>

              <p className="text-neutral-600 text-[16px] max-w-xs leading-relaxed">
                Apparel pieces produced and shipped under structured quality control.
              </p>
            </div>

            <div className="text-sm text-neutral-500">
              AQL-Based Inspection
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


function Services() {
  return (
    <section className="bg-[#F3F2EF] py-22">
      <div className="max-w-[1600px] mx-auto px-16">

     {/* HEADER */}
<div className="mb-20 text-center max-w-xl mx-auto">

{/* PONI */}
<div className="inline-flex items-center border border-neutral-300 px-5 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium text-neutral-700 mb-8">
  Services
</div>

{/* H2 */}
<h2 className="text-[42px] leading-[1.1] tracking-[-0.015em] font-medium text-neutral-900 mb-8">
  Services Overview
</h2>


{/* BODY */}
<p className="max-w-2xl mx-auto text-[18px] leading-[1.7] text-neutral-600">
Built to Support Your Brand’s Growth with Reliable Production
</p>

{/* STRUCTURAL DIVIDER */}
<div className="mt-8 h-[1px] w-16 bg-neutral-300 mx-auto" />

</div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* LEFT COLUMN */}
          <div className="grid gap-12">

            {/* FASHION */}
            <a
              href="/fashion-manufacturing"
              className="group rounded-2xl border border-[#D6D1C8] bg-white p-16 min-h-[280px] flex flex-col justify-between transition-colors duration-300 hover:bg-[#F8F7F5]"
            >
              <div className="flex items-start justify-between">

                <h3 className="text-[36px] leading-[1.1] font-medium text-neutral-900">
                  Fashion Manufacturing
                </h3>

                <div className="w-12 h-12 rounded-lg border border-[#D6D1C8] flex items-center justify-center text-neutral-900 transition-colors duration-300 group-hover:bg-[#191919] group-hover:text-white">
                  ↗
                </div>

              </div>

              {/* structural divider */}
              <div className="mt-12 h-[1px] w-full bg-[#E5E1DA]" />

            </a>

            {/* PACKAGING */}
            <a
              href="/luxury-packaging"
              className="group rounded-2xl border border-[#D6D1C8] bg-white p-16 min-h-[280px] flex flex-col justify-between transition-colors duration-300 hover:bg-[#F8F7F5]"
            >
              <div className="flex items-start justify-between">

                <h3 className="text-[36px] leading-[1.1] font-medium text-neutral-900">
                  Luxury Packaging
                </h3>

                <div className="w-12 h-12 rounded-lg border border-[#D6D1C8] flex items-center justify-center text-neutral-900 transition-colors duration-300 group-hover:bg-[#191919] group-hover:text-white">
                  ↗
                </div>

              </div>

              {/* structural divider */}
              <div className="mt-12 h-[1px] w-full bg-[#E5E1DA]" />

            </a>

          </div>

          {/* RIGHT VIDEO BLOCK */}
          <div className="relative rounded-2xl overflow-hidden border border-[#D6D1C8] aspect-square bg-[#191919]">

            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://www.pexels.com/id-id/download/video/7680438/"
                type="video/mp4"
              />
            </video>

            {/* overlay for authority */}
            <div className="absolute inset-0 bg-black/40" />

            {/* subtle inner frame */}
            <div className="absolute inset-6 border border-white/10 rounded-xl pointer-events-none" />

          </div>

        </div>

      </div>
    </section>
  )
}

function HowWeWork() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "Quick Brief & NDA (24–48h)",
      desc: "Send style/packaging references, quantity range, target timeline, ship-to country, and brand files.",
    },
    {
      number: "2",
      icon: DraftingCompass,
      title: "Design & Technical Prep (2–5 days)",
      desc: "Finalize tech packs/patterns or dielines and confirm specs and materials.",
    },
    {
      number: "3",
      icon: Package,
      title: "Samples & PI (7–21 days)",
      desc: "Produce samples and share guide pricing. Formal PI issued after review.",
    },
    {
      number: "4",
      icon: Factory,
      title: "Production Booking",
      desc: "Approve golden sample and secure production line.",
    },
    {
      number: "5",
      icon: Cog,
      title: "Manufacturing",
      desc: "Apparel 3–8 wks / Packaging 2–6 wks with in-line QC.",
    },
    {
      number: "6",
      icon: ShieldCheck,
      title: "Quality Assurance (AQL)",
      desc: "Pre-shipment inspection with full report and measurement checks.",
    },
    {
      number: "7",
      icon: Truck,
      title: "Logistics (EXW / FOB / DDP)",
      desc: "Export documentation and global shipping arranged.",
    },
    {
      number: "8",
      icon: Repeat,
      title: "Delivery & Aftercare",
      desc: "Unboxing checks, reorders, and structured improvements.",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[#1c1c1c] text-white py-32">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1c]/40 via-[#1c1c1c]/80 to-[#1c1c1c]" />

      <div className="relative max-w-[1600px] mx-auto px-10 xl:px-16">

        {/* PONI */}
<div>
  <div className="inline-flex items-center border border-white/20 px-5 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium text-white/70">
    Process
  </div>
</div>

{/* HEADING */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-[0.55fr_0.45fr] gap-16 items-start">

  <h2 className="text-[42px] leading-[1.1] tracking-[-0.015em] font-medium text-white">
    How We Work
  </h2>

  <p className="text-[18px] leading-[1.7] text-neutral-400">
  A clear process, realistic timelines, and close supervision keep production steady from start to delivery
  </p>

</div>

        {/* EMBLA */}
        <div className="mt-20 overflow-hidden" ref={emblaRef}>
          <div className="flex">

            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={i}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] pr-4"
                >
                  {/* SQUARE CARD */}
                  <div className="relative rounded-2xl border border-neutral-700 bg-neutral-900/70 p-8 aspect-square flex flex-col justify-between transition-colors duration-300 hover:bg-neutral-900">

                    {/* BIG NUMBER */}
                    <div className="absolute -bottom-10 right-6 text-[160px] leading-none font-semibold text-white/[0.04] pointer-events-none select-none">
                      {step.number}
                    </div>

                    {/* CONTENT */}
                    <div>
                      <div className="w-11 h-11 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 mb-8">
                        <Icon
                          size={20}
                          strokeWidth={1.5}
                          className="text-white/80"
                        />
                      </div>

                      <h4 className="text-[20px] leading-[1.3] font-medium text-white relative z-10">
                        {step.title}
                      </h4>

                      <p className="mt-4 text-[16px] leading-[1.7] text-neutral-400 relative z-10">
                        {step.desc}
                      </p>
                    </div>

                  </div>
                </div>
              )
            })}

          </div>
        </div>

        {/* DOTS */}
        <div className="mt-10 flex justify-center gap-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === selectedIndex
                  ? "bg-white"
                  : "bg-neutral-600 hover:bg-neutral-400"
              }`}
            />
          ))}
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
      description: "Rigid boxes, premium paper bags, tester cards, and branded ribbon produced across multiple SKUs. Full process from sampling to AQL inspection and DDP delivery.",
    },
    {
      title: "Foldable Magnetic Gift Boxes",
      meta: "2025 • Luxury Packaging • Rigid Boxes",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772376971/image_2026-02-27_13-50-18_kzqkhy.png",
      description: "Two collapsible magnetic rigid box sizes with matte lamination. Structural prototyping, color control, in-line QC and coordinated export delivery.",
    },
  ]


  return (

    <section ref={sectionRef} className="bg-[#F3F2EF] py-20 md:py-24 xl:py-28">

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">


        {/* HEADER */}

        <div className="projects-header mb-14 md:mb-20 text-center">

          <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
            Projects
          </div>

          <h2 className="text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900">
            Selected Packaging Production
          </h2>

        </div>


        <div className="space-y-16 md:space-y-20">

          {projects.map((project, index) => (

            <div key={project.title} className="project-block grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-stretch">


              {/* IMAGE */}

              <div className={`project-image md:col-span-8 ${index % 2 === 0 ? "md:order-2" : ""}`}>

                <div className="bg-white border border-[#D6D1C8] rounded-2xl overflow-hidden h-full">

                  <div className="aspect-[16/10] overflow-hidden">

                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />

                  </div>

                </div>

              </div>


              {/* TEXT */}

              <div className={`project-text md:col-span-4 ${index % 2 === 0 ? "md:order-1" : ""}`}>

                <div className="bg-white border border-[#D6D1C8] rounded-2xl h-full flex items-center">

                  <div className="px-8 sm:px-10 md:px-12 py-10 md:py-12 max-w-[420px]">

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

function Leadership() {
  return (
    <section className="bg-[#F3F2EF] py-48">
      <div className="max-w-[1500px] mx-auto px-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-stretch">

          {/* ================= LEFT CARD ================= */}
          <div
            className="relative rounded-2xl overflow-hidden bg-[#1c1c1c] min-h-[620px]"
            style={{
              boxShadow:
                "0 20px 40px rgba(0,0,0,0.18), 0 6px 16px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.08)"
            }}
          >

            {/* subtle noise */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

            <div className="relative px-20 py-28 flex flex-col justify-center h-full">

              <div className="text-white/40 text-xs tracking-[0.2em] mb-8">
                PRODUCTION OVERSIGHT
              </div>

              <h2 className="text-neutral-100 text-[40px] leading-[1.3] tracking-[-0.02em] max-w-[720px] mb-12">
                Sampling approval, inspection discipline, and final shipment release
                are executed under{" "}
                <span className="text-white font-medium">
                  direct operational authority
                </span>{" "}
                — eliminating ambiguity at every production stage.
              </h2>

              <div className="w-24 h-[1px] bg-[#8C7A5B] mb-8" />

              <div className="text-neutral-100 text-[22px] font-medium">
                Haitham Al-Raimi
              </div>

              <div className="text-neutral-400 text-sm mt-1">
                Managing Director · Alraimi Business Group
              </div>

            </div>
          </div>

          {/* ================= RIGHT CARD ================= */}
          <div
            className="relative rounded-2xl overflow-hidden min-h-[620px]"
            style={{
              backgroundColor: "#22262B",
              boxShadow:
                "0 18px 36px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.06)",
            }}
          >

            <img
              src="/images/haitham.png"
              alt="Managing Director"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

          </div>

        </div>

      </div>
    </section>
  )
}


function Catalogs() {
  return (
    <section className="bg-[#F3F2EF] py-28">
      <div className="max-w-[1600px] mx-auto px-10 xl:px-16">

        <div className="grid grid-cols-1 md:grid-cols-[0.55fr_0.45fr] gap-16 items-start">

          {/* LEFT */}
          <div className="pr-6">

            <div className="inline-flex items-center border border-neutral-300 px-5 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium text-neutral-700 mb-6">
              Catalogs
            </div>

            <h2 className="text-[42px] leading-[1.1] tracking-[-0.015em] font-medium text-neutral-900 mb-6">
              Production Catalogs
            </h2>

            <p className="text-[18px] leading-[1.7] text-neutral-600 max-w-xl">
              Review available categories, material options and finishes,
              minimum order quantities, and standard production timelines
              across fashion manufacturing and luxury packaging.
            </p>

          </div>

          {/* RIGHT */}
          <div className="md:pt-2">

            <div className="border border-black/20 rounded-2xl p-3">
              <div className="bg-white rounded-xl overflow-hidden">

                <button className="w-full flex items-center justify-between px-10 py-9 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:bg-neutral-100 border-b border-neutral-300">
                  <span>Get Fashion Catalog</span>
                  <Download size={18} strokeWidth={1.5} className="opacity-60" />
                </button>

                <button className="w-full flex items-center justify-between px-10 py-9 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:bg-neutral-100">
                  <span>Get Packaging Catalog</span>
                  <Download size={18} strokeWidth={1.5} className="opacity-60" />
                </button>

              </div>
            </div>

            {/* NOTE BELOW MODULE */}
            <div className="mt-6 text-sm text-neutral-500">
              Delivered directly via email upon request.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


function Gallery() {
  const sectionRef = useRef(null);

  const media = [
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772708330/ChatGPT_Image_Mar_5_2026_05_51_04_PM_hd7ngs.png",
      alt: "Container port logistics",
      type: "image",
      span: "md:col-span-8",
      height: "md:h-[420px]"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772708330/ChatGPT_Image_Mar_5_2026_05_52_41_PM_frxpql.png",
      alt: "Factory walkthrough",
      type: "image",
      span: "md:col-span-4",
      height: "md:h-[420px]"
    },
    {
      src: "https://www.pexels.com/download/video/15459710/",
      alt: "Cargo loading truck",
      type: "video",
      span: "md:col-span-5",
      height: "md:h-[380px]"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772708330/ChatGPT_Image_Mar_5_2026_05_56_24_PM_j9lanu.png",
      alt: "Factory production line",
      type: "image",
      span: "md:col-span-7",
      height: "md:h-[380px]"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772708455/ChatGPT_Image_Mar_5_2026_06_00_33_PM_qrwpp5.png",
      alt: "Quality inspection process",
      type: "image",
      span: "md:col-span-3",
      height: "md:h-[340px]"
    },
    {
      src: "https://www.pexels.com/download/video/4620565/",
      alt: "Shipping container yard",
      type: "video",
      span: "md:col-span-6",
      height: "md:h-[340px]"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772715474/ChatGPT_Image_Mar_5_2026_07_56_30_PM_srsur2.png",
      alt: "Warehouse distribution center",
      type: "image",
      span: "md:col-span-3",
      height: "md:h-[340px]"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        defaults: { ease: "power2.out" }
      });

      tl.from(".gallery-header", {
        opacity: 0,
        y: 20,
        duration: 0.7,
      });

      tl.from(".gallery-item", {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.8,
      }, "-=0.3");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F3F2EF] pt-[8px] overflow-hidden"
    >

      <div className="px-[8px]">

        {/* DARK SURFACE */}
        <div className="    rounded-2xl">

          <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-20 md:py-24">

            {/* HEADER */}
            <div className="gallery-header flex justify-center mb-16 md:mb-20">
              <div className="inline-flex items-center border border-[#8C7A5B]/40 px-5 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium text-[#8C7A5B]">
                Gallery
              </div>
            </div>



            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">

              {media.map((item, index) => {

                let mobileSpan = "col-span-1";
                let mobileHeight = "h-[190px]";

                if (index === 0) {
                  mobileSpan = "col-span-2";
                  mobileHeight = "h-[240px]";
                }

                if (index === 3) {
                  mobileSpan = "col-span-2";
                  mobileHeight = "h-[220px]";
                }

                return (
                  <div key={index} className={`gallery-item ${mobileSpan} ${item.span}`}>
                    <div className="rounded-2xl overflow-hidden border border-white/10">

                      {item.type === "video" ? (
                        <video
                          src={item.src}
                          className={`w-full ${mobileHeight} ${item.height} object-cover`}
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls={false}
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={item.alt}
                          className={`w-full ${mobileHeight} ${item.height} object-cover`}
                          loading="lazy"
                        />
                      )}

                    </div>
                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}



 


function Testimonials() {
  const testimonials = [
    {
      name: "Arsalan Khan",
      role: "Logistics Innovation Strategist",
      image:
        "https://alraimigroup.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-07-at-2.06.16-PM.jpeg",
      quote: `Alraimi understands our operational challenges, adapts to our workflows, and delivers real execution discipline. Their oversight feels like a structured extension of our internal team.`,
      stat: "8x",
      statLabel: "increase in operational efficiency",
    },
    {
      name: "Qusai Abuhejleh",
      role: "Construction Supplier · Qatar",
      image:
        "https://alraimigroup.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-26-at-4.17.18-PM.jpeg",
      quote: `Structured procurement flow and serious execution discipline. The consistency removes uncertainty in every shipment.`,
      stat: "3x",
      statLabel: "faster procurement cycles",
    },
    {
      name: "Gehad Mayas",
      role: "Solace Development · Bali",
      image:
        "https://alraimigroup.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-05-at-5.03.21-PM.jpeg",
      quote: `Outstanding operational control. Orders arrive on time and in perfect condition. The execution discipline gives real confidence when scaling projects.`,
      stat: "99%",
      statLabel: "on-time delivery rate",
    },
    {
      name: "Kamilia",
      role: "Fashion Brand Owner · Dubai",
      image:
        "https://alraimigroup.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-07-at-12.31.23-PM.jpeg",
      quote: `Two years of smooth production, fast sampling, and zero structural miscommunication. That level of clarity reduces costly mistakes significantly.`,
      stat: "2 Years",
      statLabel: "continuous production partnership",
    },
  ]

  const [index, setIndex] = React.useState(0)
  const active = testimonials[index]

  const prev = () =>
    setIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1))

  const next = () =>
    setIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1))

  return (
    <section
      className="py-28"
      style={{
        background: `
          radial-gradient(circle at 20% 0%, rgba(44,38,43,0.06) 0%, transparent 50%),
          #F3F2EF
        `
      }}
    >
      <div className="max-w-[1100px] mx-auto px-8">

        {/* HEADER */}
        <div className="mb-20 text-center">

  {/* PONI */}
  <div className="inline-flex items-center border border-neutral-300 px-5 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium text-neutral-700 mb-8">
    Testimonials
  </div>

  {/* H2 */}
  <h2 className="text-[42px] leading-[1.1] tracking-[-0.015em] font-medium text-neutral-900">
    What Our Customers
    <br />
    Say About Us
  </h2>

</div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 items-stretch">

          {/* LEFT */}
          <div className="flex flex-col gap-6 h-full">

            <div className="aspect-square rounded-xl overflow-hidden border border-[#D6D1C8]">
              <img
                src={active.image}
                alt={active.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-xl bg-white border border-[#D6D1C8] p-5 shadow-sm">
              <h3 className="text-[16px] font-medium text-[#191919]">
                {active.name}
              </h3>
              <p className="text-[#2C2C2C] mt-1 text-[13px] leading-[1.5]">
                {active.role}
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="h-full rounded-xl bg-white border border-[#D6D1C8] p-8 flex flex-col justify-between shadow-sm">

            <p className="text-[25px] leading-[1.4] text-[#2C2C2C]">
              "{active.quote}"
            </p>

            <div className="mt-6">
              <div className="text-[22px] font-medium text-[#191919]">
                {active.stat}
              </div>
              <p className="text-[#8C7A5B] text-[13px] mt-1">
                {active.statLabel}
              </p>
            </div>

          </div>

        </div>

        {/* NAV */}
        <div className="flex items-center justify-center gap-4 mt-10">

          <button
            onClick={prev}
            className="w-9 h-9 border border-[#D6D1C8] rounded-md flex items-center justify-center text-[#191919] text-sm hover:border-[#8C7A5B] transition"
          >
            ←
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition ${
                  i === index ? "bg-[#8C7A5B]" : "bg-[#D6D1C8]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 border border-[#D6D1C8] rounded-md flex items-center justify-center text-[#191919] text-sm hover:border-[#8C7A5B] transition"
          >
            →
          </button>

        </div>

      </div>
    </section>
  )
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



function Footer() {
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

              <button className="flex items-center gap-3 bg-white text-black px-7 py-3 rounded-lg text-sm font-medium transition hover:bg-neutral-200">
                Contact Us
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white text-sm">
                  →
                </span>
              </button>
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
                Al-Raimi Group
              </h3>
              <div className="flex gap-4">
  {[
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg",
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
                <li className="hover:text-white transition cursor-pointer">About Us</li>
                <li className="hover:text-white transition cursor-pointer">Careers</li>
                <li className="hover:text-white transition cursor-pointer">Blog</li>
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











/* =========================
   LOCAL HELPERS (MINIMAL)
========================= */

function Container({ children }) {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-8">
      {children}
    </div>
  );
}