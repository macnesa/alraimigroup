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
      <ClientsMarquee/>
      <About/>
      <Achievements/>
      <Services/>
      <HowWeWork/>
      <Projects/>
      <Catalogs/>
      <Gallery/>
      {/* <Leadership/> */}
      <Testimonials/>
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
      
      <FAQ/>
      <Footer />
      <CookieConsent/>
    </main>
  );
}






/* =========================
   SECTIONS
========================= */
function Hero() {
  return (
    <section className="relative min-h-[100svh] text-white overflow-hidden">

      {/* ===== BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bgg.png"
          alt="Manufacturing oversight in China"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
      </div>

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="relative z-10 flex flex-col min-h-[100svh] max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16">

        {/* ===== HEADER ===== */}
        <header className="flex items-center justify-between py-6 sm:py-8">

          <Link href="/" className="flex items-center">
            <Image
              src="/images/alraimi-logo-white-1.png"
              alt="Alraimi Logo"
              width={42}
              height={38}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/fashion-manufacturing" className="hover:text-white transition">Fashion</Link>
            <Link href="/luxury-packaging" className="hover:text-white transition">Packaging</Link>
            <Link href="#contact" className="hover:text-white transition">Contact</Link>
          </nav>

          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium bg-white text-black hover:bg-neutral-200 transition"
          >
            Get Your PI
            <FaArrowRight className="text-xs" />
          </Link>

        </header>

        {/* ===== HERO CONTENT ===== */}
        <div className="flex-1 flex items-end md:items-center pb-12 md:pb-0">

          <div className="w-full max-w-full">

            {/* ===== PONI ===== */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-md text-[11px] sm:text-xs tracking-[0.18em] mb-6 sm:mb-8 border border-white/30 bg-white/10 uppercase">
              Global Manufacturing Partner
            </div>

            {/* ===== HEADLINE ===== */}
            <h1
              className="font-light leading-[1.05] tracking-[-0.02em] mb-6 sm:mb-8"
              style={{ fontSize: "clamp(38px, 5vw, 64px)" }}
            >
              Build Your Brand
              <br />
              Remove Manufacturing Risk
              <br />
              <span style={{ color: "#8C7A5B" }}>
                Delivered Worldwide
              </span>
            </h1>

            {/* ===== SUBTEXT ===== */}
            <p
              className="text-white/75 leading-[1.7] mb-8 sm:mb-12 max-w-2xl"
              style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}
            >
              Premium fashion manufacturing and luxury paper packaging —
              one accountable team from sample to door-to-door shipment.
            </p>

            {/* ===== CTA GROUP ===== */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-neutral-200 transition"
              >
                Start Your Brand
                <FaArrowRight className="text-xs" />
              </Link>

              <Link
                href="#process"
                className="inline-flex items-center justify-center text-white/70 hover:text-white text-sm font-medium transition"
              >
                View Process
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
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
    <section className="bg-[#F3F2EF]">

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 pb-20 md:pb-28">

        <div className="border border-black/20 md:bg-white rounded-2xl">

          <div className="grid grid-cols-1 md:grid-cols-[0.45fr_0.55fr] gap-10 md:gap-20 items-start py-14 md:py-20 px-6 sm:px-10 xl:px-16">

            {/* LEFT */}
            <div className="text-center md:text-left">

              <div className="inline-flex items-center border border-neutral-300 px-4 py-1 rounded-md text-[11px] sm:text-xs tracking-[0.18em] uppercase font-medium text-neutral-700 mb-6 md:mb-8">
                ABOUT
              </div>

              <h2 className="text-[30px] sm:text-[34px] md:text-[42px] leading-[1.1] tracking-[-0.015em] font-medium text-neutral-900 mb-6">
                From Concept to Production
                <br />
                <span className="text-[#8C7A5B]">
                  Fully Managed Execution
                </span>
              </h2>

              <div className="mt-8 md:mt-10 h-[1px] w-20 md:w-24 bg-[#D6D1C8] mx-auto md:mx-0" />

            </div>

            {/* RIGHT */}
            <div className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.75] text-neutral-700">

              <p className="mb-6">
                Alraimi is an operational manufacturing partner embedded in China’s production network.
                We represent brands on the factory side and translate designs into production ready
                specifications while supervising execution from sampling to shipment.
              </p>

              <p>
                Quality control, bulk production, and international logistics are managed as one
                continuous process so brands are not left navigating factories, timelines,
                or supplier communication alone.
              </p>

              <div className="mt-8 md:mt-10 text-sm text-neutral-500">
                Technical specification alignment · AQL 2.5 inspections · EXW / FOB / DDP coordination
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
 
function Achievements() {
  return (
    <section className="bg-[#F3F2EF]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* CARD 1 — DARK */}
          <div className="bg-[#191919] text-white rounded-2xl p-8 sm:p-10 lg:p-12 aspect-auto lg:aspect-square flex flex-col justify-between">
            <div>
              <h3 className="text-[48px] sm:text-[60px] lg:text-[72px] leading-none font-normal mb-4 sm:mb-6">
                15+
              </h3>

              <p className="text-white/70 text-[15px] sm:text-[16px] max-w-xs leading-relaxed">
                Years operating directly inside China’s factory production
                network.
              </p>
            </div>

            <div className="text-sm text-white/40 mt-6">
              On-Ground Coordination
            </div>
          </div>

          {/* CARD 2 — IMAGE */}
          <div className="relative rounded-2xl overflow-hidden aspect-auto lg:aspect-square">
            <img
              src="https://res.cloudinary.com/djgu1bhef/image/upload/v1772376426/boxes_nx69oz.png"
              alt="Factory"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 p-8 sm:p-10 lg:p-12 h-full flex flex-col justify-between text-white">
              <div>
                <h3 className="text-[48px] sm:text-[60px] lg:text-[72px] leading-none font-normal mb-4 sm:mb-6">
                  500K+
                </h3>

                <p className="text-white/80 text-[15px] sm:text-[16px] max-w-xs leading-relaxed">
                  Luxury packaging units delivered across international markets.
                </p>
              </div>

              <div className="text-sm text-white/50 mt-6">
                Factory → Port → Destination
              </div>
            </div>
          </div>

 {/* CARD 3 — LIGHT IMAGE MODE */}
<div className="relative rounded-2xl overflow-hidden aspect-auto lg:aspect-square border border-[#D6D1C8]">

{/* IMAGE */}
<img
  src="https://res.cloudinary.com/djgu1bhef/image/upload/v1772379360/clothes_s6ivam.png"
  alt="Apparel production"
  className="absolute inset-0 w-full h-full object-cover"
/>
 

{/* CONTENT */}
<div className="relative z-10 p-8 sm:p-10 lg:p-12 h-full flex flex-col justify-between">

  <div>
    <h3 className="text-[48px] sm:text-[60px] lg:text-[72px] leading-none font-normal mb-4 sm:mb-6 text-neutral-900">
      100K+
    </h3>

    <p className="text-neutral-600 text-[15px] sm:text-[16px] max-w-xs leading-relaxed">
      Apparel units manufactured across structured production runs
      with controlled inspection checkpoints.
    </p>
  </div>

  <div className="text-sm text-neutral-500 mt-6">
    Fit Control · Inline QC · AQL 2.5
  </div>

</div>
</div>

        
          
        </div>
      </div>
    </section>
  );
}


function Services() {
  return (
    <section className="bg-[#F3F2EF] py-20 sm:py-24 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16">

        {/* ================= HEADER ================= */}
        <div className="mb-16 sm:mb-20 lg:mb-24 text-center max-w-xl mx-auto">

          <div className="inline-flex items-center border border-neutral-300 px-5 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium text-neutral-700 mb-6">
            Services
          </div>

          <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-[-0.015em] font-medium text-neutral-900 mb-5">
            Services Overview
          </h2>

          <p className="text-[16px] sm:text-[18px] leading-[1.7] text-neutral-600">
            Built to Support Your Brand’s Growth with Reliable Production
          </p>

          <div className="mt-8 h-[1px] w-16 bg-neutral-300 mx-auto" />
        </div>

        {/* ================= STRUCTURE ================= */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-14 sm:gap-16 lg:gap-40">

          {/* ================= LEFT SERVICE ================= */}
          <a
            href="/fashion-manufacturing"
            className="group relative max-w-md text-center lg:text-right transition"
          >

            {/* Desktop Horizontal Line */}
            <div className="hidden lg:block absolute top-1/2 right-[-160px] w-[140px] h-[1px] bg-neutral-300 transition group-hover:bg-neutral-900" />

            <h3 className="text-[28px] sm:text-[32px] lg:text-[34px] leading-[1.1] font-medium text-[#8C7A5B] transition-all duration-300 group-hover:translate-x-1">
              Fashion Manufacturing
            </h3>

            <p className="mt-4 sm:mt-5 text-neutral-600 text-[16px] leading-[1.7] transition-colors duration-300 group-hover:text-neutral-700">
              Apparel production from sampling to bulk execution,
              with structured fit control and AQL inspection.
            </p>

            <span className="inline-block mt-6 sm:mt-8 text-sm text-neutral-700 transition-all duration-300 group-hover:translate-x-1">
              View Service →
            </span>

            {/* Mobile Vertical Line */}
            <div className="lg:hidden mx-auto mt-10 w-[1px] h-12 bg-neutral-300 transition group-hover:bg-neutral-900" />
          </a>

          {/* ================= CENTER HUB ================= */}
          <div className="relative flex flex-col items-center justify-center">

            <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] lg:w-[220px] lg:h-[220px] rounded-full border border-neutral-300 flex items-center justify-center bg-white">

              <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[170px] lg:h-[170px] rounded-full bg-[#191919] flex items-center justify-center">
                <img
                  src="/images/alraimi-logo-white-1.png"
                  alt="Alraimi Logo"
                  className="w-10 sm:w-12 lg:w-14 opacity-90"
                />
              </div>

            </div>

          </div>

          {/* ================= RIGHT SERVICE ================= */}
          <a
            href="/luxury-packaging"
            className="group relative max-w-md text-center lg:text-left transition"
          >

            {/* Desktop Horizontal Line */}
            <div className="hidden lg:block absolute top-1/2 left-[-160px] w-[140px] h-[1px] bg-neutral-300 transition group-hover:bg-neutral-900" />

            {/* Mobile Vertical Line (Above) */}
            <div className="lg:hidden mx-auto mb-10 w-[1px] h-12 bg-neutral-300 transition group-hover:bg-neutral-900" />

            <h3 className="text-[28px] sm:text-[32px] lg:text-[34px] leading-[1.1] font-medium text-[#8C7A5B] transition-all duration-300 group-hover:-translate-x-1">
              Luxury Packaging
            </h3>

            <p className="mt-4 sm:mt-5 text-neutral-600 text-[16px] leading-[1.7] transition-colors duration-300 group-hover:text-neutral-700">
              Premium rigid boxes, structural design,
              finishing precision, and export-ready systems.
            </p>

            <span className="inline-block mt-6 sm:mt-8 text-sm text-neutral-700 transition-all duration-300 group-hover:-translate-x-1">
              View Service →
            </span>

          </a>

        </div>

      </div>
    </section>
  );
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
  const projects = [
    {
      title: "Magnetic Gift Boxes",
      location: "United Kingdom",
      image:
        "https://res.cloudinary.com/djgu1bhef/image/upload/v1772376971/image_2026-02-27_13-50-18_kzqkhy.png",
    },
    {
      title: "Multiple Luxury Perfume Packaging",
      location: "Saudi Arabia",
      image:
        "https://res.cloudinary.com/djgu1bhef/image/upload/v1772376971/image_2026-02-27_13-49-35_oikaga.png",
    },
    {
      title: "Boutique Womenswear Brand",
      location: "Dubai",
      image: "/images/projects/womenswear.png",
    },
    {
      title: "Golf Apparel Startup",
      location: "Dubai",
      image:
        "https://res.cloudinary.com/djgu1bhef/image/upload/v1772376971/image_2026-02-27_13-50-31_c3hwyn.png",
    },
  ]

  return (
    <section
      style={{ backgroundColor: "#F3F2EF" }}
      className="py-16 md:py-28"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">

        {/* ================= HEADER ================= */}
        <div className="mb-16 md:mb-24 text-center">

          {/* PONI */}
          <div className="inline-flex items-center border border-neutral-300 px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium text-neutral-700 mb-6">
            Projects
          </div>

          {/* H2 */}
          <h2 className="text-[28px] md:text-[42px] leading-[1.1] tracking-[-0.015em] font-medium text-neutral-900 mb-6">
            Project Snapshot
          </h2>

          {/* BODY */}
          <p className="max-w-2xl mx-auto text-[16px] md:text-[18px] leading-[1.7] text-neutral-600">
            A selection of completed fashion and packaging work managed from
            development through delivery. Below are typical scopes and outcomes.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* ================= DOMINANT CASE ================= */}
          <div className="col-span-1 md:col-span-2 relative rounded-2xl overflow-hidden group aspect-square md:aspect-[16/9]">

            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 text-white max-w-[80%]">
              <div className="text-[20px] md:text-[28px] font-medium mb-2 leading-tight">
                {projects[0].title}
              </div>
              <div className="text-[11px] md:text-sm tracking-widest uppercase text-white/70">
                {projects[0].location}
              </div>
            </div>
          </div>

          {/* ================= METRIC PANEL (HIDDEN MOBILE) ================= */}
          <div
            className="hidden md:flex rounded-2xl p-12 flex-col justify-between border"
            style={{
              backgroundColor: "#191919",
              borderColor: "#2C2C2C",
              color: "#FFFFFF",
            }}
          >
            <div>
              <div className="text-xs tracking-widest uppercase text-white/50 mb-6">
                Execution Impact
              </div>

              <div className="text-[72px] leading-none font-semibold tracking-tight">
                100K+
              </div>
            </div>

            <div className="text-white/70 text-sm leading-relaxed">
              Units delivered under supervised production and AQL inspection
              frameworks.
            </div>
          </div>

          {/* ================= SECONDARY CARDS ================= */}
          {projects.slice(1).map((project, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group aspect-square md:aspect-[4/5]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8 text-white max-w-[85%]">
                <div className="text-[16px] md:text-lg font-medium leading-tight">
                  {project.title}
                </div>
                <div className="text-[10px] md:text-xs tracking-widest uppercase text-white/70 mt-2">
                  {project.location}
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
    <section className="bg-[#F3F2EF] py-20 md:py-28">

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 xl:px-16">

        <div className="grid grid-cols-1 md:grid-cols-[0.55fr_0.45fr] gap-12 md:gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="md:pr-6">

            {/* SECTION PONI */}
            <div className="inline-flex items-center border border-neutral-300 px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium text-neutral-700 mb-6">
              Catalogs
            </div>

            {/* HEADING */}
            <h2 className="text-[32px] sm:text-[36px] md:text-[42px] leading-[1.1] tracking-[-0.015em] font-medium text-neutral-900 mb-6">
              Production Catalogs
            </h2>

            {/* BODY */}
            <p className="text-[18px] leading-[1.7] text-neutral-600 max-w-xl">
              Review available categories, material options and finishes,
              minimum order quantities, and standard production timelines
              across fashion manufacturing and luxury packaging.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="md:pt-2">

            <div className="border border-black/20 rounded-2xl p-3">
              <div className="bg-white rounded-2xl overflow-hidden">

                {/* BUTTON 1 */}
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 sm:px-8 md:px-10 py-6 md:py-8 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:bg-neutral-100 border-b border-neutral-300"
                >
                  <span>Get Fashion Catalog</span>
                  <Download
                    size={18}
                    strokeWidth={1.5}
                    className="opacity-60"
                  />
                </button>

                {/* BUTTON 2 */}
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 sm:px-8 md:px-10 py-6 md:py-8 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:bg-neutral-100"
                >
                  <span>Get Packaging Catalog</span>
                  <Download
                    size={18}
                    strokeWidth={1.5}
                    className="opacity-60"
                  />
                </button>

              </div>
            </div>

            {/* NOTE */}
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
  const images = [
    {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
      alt: "Container port logistics",
      span: "md:col-span-8",
      height: "md:h-[420px]"
    },
    {
      src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
      alt: "Warehouse pallet storage",
      span: "md:col-span-4",
      height: "md:h-[420px]"
    },
    {
      src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
      alt: "Cargo loading truck",
      span: "md:col-span-5",
      height: "md:h-[380px]"
    },
    {
      src: "https://images.unsplash.com/photo-1700716465891-9e5e9f501d7d?q=80&w=2693&auto=format&fit=crop",
      alt: "Factory production line",
      span: "md:col-span-7",
      height: "md:h-[380px]"
    },
    {
      src: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80",
      alt: "Quality inspection process",
      span: "md:col-span-3",
      height: "md:h-[340px]"
    },
    {
      src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
      alt: "Shipping container yard",
      span: "md:col-span-6",
      height: "md:h-[340px]"
    },
    {
      src: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80",
      alt: "Warehouse distribution center",
      span: "md:col-span-3",
      height: "md:h-[340px]"
    }
  ];

  return (
    <section className="bg-[#F3F2EF] py-22">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">

        <div className="flex justify-center mb-16 md:mb-24">
          <div className="inline-flex items-center border border-neutral-300 px-5 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium text-neutral-700">
            Gallery
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">

          {images.map((item, index) => {

            let mobileSpan = "col-span-1";
            let mobileHeight = "h-[190px]";

            // Row 1 full width
            if (index === 0) {
              mobileSpan = "col-span-2";
              mobileHeight = "h-[240px]";
            }

            // Row 3 full width
            if (index === 3) {
              mobileSpan = "col-span-2";
              mobileHeight = "h-[220px]";
            }

            return (
              <div key={index} className={`${mobileSpan} ${item.span}`}>
                <div className="rounded-xl md:rounded-2xl overflow-hidden border border-black/10 md:border-black/20">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`w-full ${mobileHeight} ${item.height} object-cover`}
                  />
                </div>
              </div>
            );
          })}

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

        {/* HEADER (UNCHANGED) */}
        <div className="mb-20 text-center">

          <div className="inline-flex items-center border border-neutral-300 px-5 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium text-neutral-700 mb-8">
            Testimonials
          </div>

          <h2 className="text-[42px] leading-[1.1] tracking-[-0.015em] font-medium text-neutral-900">
            What Our Customers
            <br />
            Say About Us
          </h2>

        </div>

        {/* ================= MOBILE LAYOUT ================= */}
        <div className="md:hidden">

          <div className="rounded-xl bg-white border border-[#D6D1C8] p-6 shadow-sm flex flex-col min-h-[420px]">

            {/* QUOTE */}
            <div className="flex-1">
              <p className="text-[20px] leading-[1.5] text-[#2C2C2C] line-clamp-6">
                "{active.quote}"
              </p>
            </div>

            {/* STAT */}
            <div className="mt-6">
              <div className="text-[22px] font-medium text-[#191919]">
                {active.stat}
              </div>
              <p className="text-[#8C7A5B] text-[13px] mt-1">
                {active.statLabel}
              </p>
            </div>

            {/* IDENTITY */}
            <div className="flex items-center gap-4 pt-4 mt-6 border-t border-[#D6D1C8]">
              <img
                src={active.image}
                alt={active.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="text-[14px] font-medium text-[#191919]">
                  {active.name}
                </div>
                <div className="text-[12px] text-[#2C2C2C]">
                  {active.role}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ================= DESKTOP (UNCHANGED) ================= */}
        <div className="hidden md:grid md:grid-cols-[260px_1fr] gap-8 items-stretch">

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

        {/* NAV (UNCHANGED) */}
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
      q: "What type of brands do you typically work with?",
      a: "We operate with fashion labels and premium packaging brands requiring structured production oversight — from early-stage launches to established regional operators scaling across SKUs.",
    },
    {
      q: "Do you function as a factory?",
      a: "No. Alraimi operates as an embedded manufacturing control structure — aligning factories, inspections, sampling cycles, and logistics under one accountable execution system.",
    },
    {
      q: "How do you ensure production quality?",
      a: "Every project follows supervised sampling, in-line production monitoring, and formal AQL-based pre-shipment inspections before dispatch.",
    },
    {
      q: "How long does sampling and mass production take?",
      a: "Sampling typically requires 2–3 weeks. Mass production timelines vary between 4–8 weeks depending on material complexity and order volume.",
    },
    {
      q: "Do you handle international logistics?",
      a: "Yes. Shipments are coordinated under structured DDP or FOB frameworks via air or sea freight, depending on timeline requirements.",
    },
    {
      q: "What differentiates your structure from direct factory sourcing?",
      a: "Direct sourcing creates execution gaps. Our structure centralizes technical specifications, production control, inspection compliance, and logistics coordination into one aligned system.",
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

          {/* LEFT SIDE */}
          <div>

            {/* SECTION PONI */}
            <div className="inline-flex items-center border border-neutral-300 px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium text-neutral-700 mb-6">
              FAQ
            </div>

            {/* HEADING */}
            <h2 className="text-[32px] sm:text-[36px] md:text-[42px] leading-[1.1] tracking-[-0.015em] font-medium text-neutral-900">
              Frequently Asked
              <br />
              Questions
            </h2>

          </div>

          {/* RIGHT SIDE */}
          <div>

            {faqs.map((item, index) => {
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

          </div>

        </div>

      </div>

    </section>
  )
}

/* =========================================
   INDIVIDUAL FAQ ITEM
========================================= */

function FAQItem({ item, isOpen, onClick }) {
  const contentRef = useRef(null)

  return (
    <div className="border-b border-neutral-200">

      <button
        type="button"
        onClick={onClick}
        className="w-full flex items-start justify-between text-left py-6 group"
      >
        <span className="text-[18px] leading-[1.4] text-neutral-900 pr-6 md:pr-10">
          {item.q}
        </span>

        <Plus
          size={20}
          strokeWidth={1.75}
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45 text-neutral-900" : "rotate-0 text-neutral-400"
          }`}
        />
      </button>

      <div
        ref={contentRef}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[16px] leading-[1.7] text-neutral-600 pr-6 md:pr-10">
            {item.a}
          </p>
        </div>
      </div>

    </div>
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

          {/* Mobile gradient (vertical) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/80 md:hidden" />

          {/* Desktop gradient (horizontal) */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

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
                    className="group w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center transition hover:bg-white hover:border-white cursor-pointer"
                  >
                    <img
                      src={icon}
                      alt="social"
                      className="w-4 h-4 opacity-70 transition group-hover:opacity-100"
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
            <p>© {new Date().getFullYear()} Al-Raimi Group. All rights reserved.</p>

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