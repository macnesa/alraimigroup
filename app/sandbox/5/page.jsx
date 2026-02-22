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
  Repeat
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
      <HowWeWork/>
      <Services/>
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
      {/* <FAQ/> */}
      <Footer />
    </main>
  );
}






/* =========================
   SECTIONS
========================= */
function Hero() {
  return (
    <section className="bg-neutral-50 px-6 pt-6 pb-20">

      <div className="relative w-full max-w-[1600px] mx-auto h-[92vh] overflow-hidden rounded-2xl">

        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.99] contrast-[1.05]"
          src="/videos/hero-bg.mp4"
        />
        <div className="absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none z-10" />

        {/* HEADER */}
        <div className="relative z-20 px-10 xl:px-16">
          <header className="flex items-center justify-between py-8 text-white">

            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/alraimi-logo-white-1.png"
                alt="Logo"
                width={42}
                height={38}
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-12 text-sm text-white/80">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <Link href="/fashion-manufacturing" className="hover:text-white transition">Fashion</Link>
              <Link href="/luxury-packaging" className="hover:text-white transition">Packaging</Link>
              <Link href="#contact" className="hover:text-white transition">Contact</Link>
            </nav>

            <Link
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-200 transition"
            >
              Get Your PI
              <FaArrowRight className="text-xs" />
            </Link>

          </header>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 px-10 xl:px-16 pt-20">

          <div className="max-w-4xl">

            <div className="inline-flex items-center border border-white/40 bg-white/10 px-4 py-1.5 rounded-md text-xs text-white mb-8 tracking-wide">
              China-Based Factory Partner
            </div>

            <h1 className="text-[50px] md:text-[60px] xl:text-[70px] font-normal leading-[1.04] tracking-[-0.02em] text-white mb-8">
            Build Your Brand
              <br />
              Remove Manufacturing Risk
            </h1>

            <p className="text-[18px] max-w-3xl text-white/80 leading-relaxed max-w-lg">
            Premium fashion manufacturing and luxury paper packaging, one accountable team from sample to shipment
            </p>

          </div>
        </div>

        {/* CTA BOTTOM LEFT */}
        <div className="absolute bottom-14 left-10 xl:left-16 z-10">
          <button className="bg-white text-black px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-neutral-200 transition flex items-center gap-2 shadow-md">
            Start Your Brand
            <FaArrowRight className="text-xs" />
          </button>
        </div>

        {/* FLOATING POPUP — FIXED */}
        <div className="absolute bottom-12 right-10 xl:right-16 z-20 bg-white text-black overflow-hidden rounded-lg shadow-xl w-[380px]">

          <div className="flex items-stretch">

            {/* LEFT CONTENT */}
            <div className="flex-1 p-6">

              <h4 className="text-sm font-medium text-neutral-800 mb-4 leading-snug">
                See how we manage sourcing, inspection and delivery.
              </h4>

              <button className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-neutral-800 transition">
                Watch Video
                <FaArrowRight className="text-xs" />
              </button>

            </div>

            {/* RIGHT IMAGE */}
            <div className="w-[150px] relative">

              <Image
                src="https://images.unsplash.com/photo-1660980041852-230420b8f99f?q=80&w=1480&auto=format&fit=crop"
                alt="Preview"
                fill
                className="object-cover"
              />

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
    "/clients/2-removebg-preview.png",
    "/clients/3-removebg-preview.png",
    "/clients/4-removebg-preview.png",
    "/clients/5-removebg-preview.png",
    "/clients/6-removebg-preview.png",
    "/clients/7-removebg-preview.png",
    "/clients/8-removebg-preview.png",
    "/clients/9-removebg-preview.png",
    "/clients/10-removebg-preview.png",
    "/clients/11-removebg-preview.png",
    "/clients/12-removebg-preview.png",
    "/clients/13-removebg-preview.png",
    "/clients/14-removebg-preview.png",
  ];
  
  return (
    <section className="bg-neutral-50 py-2">

      {/* CENTERED + NARROW VIEWPORT */}
      <div className="relative max-w-[850px] mx-auto overflow-hidden">

        {/* Edge fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-neutral-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-neutral-50 to-transparent z-10" />

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
    <section className="bg-neutral-50">
      <div className="max-w-[1650px] mx-auto px-14 xl:px-20 py-28">

        <div className="border bg-neutral-50 border-neutral-300 rounded-2xl">

          <div className="grid grid-cols-1 md:grid-cols-[0.55fr_0.45fr] gap-20 items-start p-16">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center border border-neutral-300 px-5 py-1 rounded-md text-xs text-neutral-700 mb-8">
                About Us
              </div>

              <h2 className="text-[32px] md:text-[36px] xl:text-[40px] font-normal leading-[1.15] tracking-[-0.015em] text-neutral-900">
                Structured Manufacturing
                <br />
                <span className="text-neutral-400">With Direct Oversight</span> 
              </h2>
            </div>

            {/* RIGHT */}
            <div className="max-w-2xl text-[18px] leading-[1.7] text-neutral-600">
              <p className="mb-6">
                Alraimi Business Group operates as an embedded manufacturing control structure
                integrated within established production ecosystems. The role is
                to translate brand requirements into factory-ready specifications
                and align every production variable under one accountable framework.
              </p>

              <p>
                Sampling, mass production, quality inspections under AQL standards,
                and global logistics coordination are structured within a single
                operational system — reducing execution gaps, misalignment, and
                manufacturing uncertainty.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
} 
 
function Achievements() {
  return (
    <section className="bg-neutral-50">

      <div className="max-w-[1650px] mx-auto px-14 xl:px-20 pb-32">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* CARD 1 — DARK PRIMARY */}
          <div className="relative bg-black text-white rounded-xl p-10 min-h-[420px] overflow-hidden flex flex-col justify-between">

            {/* Decorative ring */}
            <div className="absolute top-6 right-6 w-28 h-28 border border-white/10 rounded-full" />
            <div className="absolute top-10 right-10 w-20 h-20 border border-white/5 rounded-full" />

            <div>
              <div className="text-xs uppercase tracking-widest text-white/40 mb-6">
               
              </div>

              <h3 className="text-[72px] leading-none font-normal mb-4">
                15+
              </h3>

              <p className="text-white/70 text-[16px] max-w-xs leading-relaxed">
                Years operating directly inside China’s factory network.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white/40 text-sm">
                On-Ground Coordination
              </span>

              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-lg">
                →
              </div>
            </div>

          </div>


          {/* CARD 2 — IMAGE / VISUAL CARD */}
          <div className="relative rounded-xl overflow-hidden min-h-[420px]">

            <img
              src="https://i.pinimg.com/736x/54/f4/2e/54f42ecca183ef520ac99eb2e0a9292a.jpg"
              alt="Factory"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 p-10 h-full flex flex-col justify-between text-white">

              <div>
                <div className="text-xs uppercase tracking-widest text-white/60 mb-6">
                 
                </div>

                <h3 className="text-[72px] leading-none font-normal mb-4">
                  500K+
                </h3>

                <p className="text-white/80 text-[16px] max-w-xs">
                  Luxury packaging units delivered globally.
                </p>
              </div>

              <div className="text-sm text-white/60">
                Factory → Port → Destination
              </div>

            </div>

          </div>


          {/* CARD 3 — LIGHT STRUCTURED */}
          <div className="bg-white border border-neutral-300 rounded-xl p-10 min-h-[420px] flex flex-col justify-between">

            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
                
              </div>

              <h3 className="text-[72px] leading-none font-normal mb-4 text-neutral-900">
                100K+
              </h3>

              <p className="text-neutral-600 text-[16px] max-w-xs leading-relaxed">
                Apparel pieces produced and shipped under structured QC.
              </p>
            </div>

            <div className="flex items-center justify-between">

              <div className="h-[6px] w-2/3 bg-neutral-200 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-black" />
              </div>

              <span className="text-neutral-500 text-sm">
                DDP Available
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


function Services() {
  return (
    <section className="bg-neutral-50 py-32">
      <div className="max-w-[1600px] mx-auto px-10 xl:px-16">

        {/* HEADER */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center border border-neutral-300 px-5 py-1 rounded-md text-xs text-neutral-700 mb-8">
            Services
          </div>

          <h2 className="text-[52px] leading-[1.1] tracking-[-0.015em] text-neutral-900">
          How We Support Your Production
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT COLUMN */}
          <div className="grid gap-10">

            {/* FASHION */}
            <div className="rounded-2xl border border-neutral-200  p-14 min-h-[260px] flex flex-col">

              <a
                href="/fashion-manufacturing"
                className="w-12 h-12 border border-neutral-300 rounded-lg flex items-center justify-center mb-10"
              >
                <span className="text-black text-xl">↗</span>
              </a>

              <h3 className="text-[32px] leading-[1.1] font-medium text-neutral-900">
                Fashion Manufacturing
              </h3>

            </div>

            {/* PACKAGING */}
            <div className="rounded-2xl border border-neutral-200  p-14 min-h-[260px] flex flex-col">

              <a
                href="/luxury-packaging"
                className="w-12 h-12 border border-neutral-300 rounded-lg flex items-center justify-center mb-10"
              >
                <span className="text-black text-xl">↗</span>
              </a>

              <h3 className="text-[32px] leading-[1.1] font-medium text-neutral-900">
                Luxury Packaging
              </h3>

            </div>

          </div>

          {/* RIGHT VIDEO BLOCK */}
          <div className="rounded-2xl overflow-hidden border border-neutral-200 min-h-[640px] relative">

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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1c]/40 via-[#1c1c1c]/80 to-[#1c1c1c]" />

      <div className="relative max-w-[1600px] mx-auto px-10 xl:px-16">

        {/* SECTION PONI */}
        <div className="">
          <div className="inline-flex items-center border border-white/20 px-5 py-1 rounded-md text-xs tracking-widest text-white/70">
            Work Process
          </div>
        </div>

        {/* HEADING */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-[0.55fr_0.45fr] gap-16 items-start">
          <h3 className="text-[32px] md:text-[36px] xl:text-[40px] leading-[1.1] tracking-[-0.015em]">
            How We Work
          </h3>

          <p className="text-[18px] leading-[1.7] text-neutral-400">
            Clear production phases. Locked timelines. Structured oversight.
            Each stage reduces uncertainty and builds execution confidence.
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
      <div className="relative overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900/70 p-8 h-full transition-colors duration-300 hover:bg-neutral-900">

        {/* BIG OVERFLOW NUMBER (BOTTOM RIGHT) */}
        <div className="absolute -bottom-18 right-6 text-[160px] leading-none font-semibold text-white/[0.04] pointer-events-none select-none">
          {step.number}
        </div>

        {/* ICON */}
        <div className="mb-10">
          <div className="w-11 h-11 flex items-center justify-center rounded-lg border border-white/10 bg-white/5">
            <Icon
              size={20}
              strokeWidth={1.5}
              className="text-white/80"
            />
          </div>
        </div>

        {/* TITLE */}
        <h4 className="text-[20px] leading-[1.3] font-medium text-white relative z-10">
          {step.title}
        </h4>

        {/* DESC */}
        <p className="mt-4 text-[16px] leading-[1.7] text-neutral-400 relative z-10">
          {step.desc}
        </p>

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




 





function Testimonials() {
  const testimonials = [
    {
      name: "Arsalan Khan",
      role: "E-Commerce Operator",
      image:
        "https://alraimigroup.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-07-at-2.06.16-PM.jpeg",
      quote: `Used for over a year now for our brand and is one of the best decisions we made. Communication is fast, structured, and always aligned with our production goals.`,
    },
    {
      name: "Qusai Abuhejleh",
      role: "Construction Supplier · Qatar",
      image:
        "https://alraimigroup.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-26-at-4.17.18-PM.jpeg",
      quote: `Sourcing high-quality materials can be challenging, but the process here is structured and reliable. Timelines are respected and quality standards are consistent.`,
    },
    {
      name: "Gehad Mayas",
      role: "Solace Development · Bali",
      image:
        "https://alraimigroup.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-05-at-5.03.21-PM.jpeg",
      quote: `Outstanding operational control. Orders arrive on time and in perfect condition. The execution discipline gives real confidence in scaling projects.`,
    },
    {
      name: "Kamilia",
      role: "Fashion Brand Owner · Dubai",
      image:
        "https://alraimigroup.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-07-at-12.31.23-PM.jpeg",
      quote: `Two years of smooth production, fast sampling, and zero structural miscommunication. That level of clarity reduces costly mistakes.`,
    },
  ]

  const [index, setIndex] = useState(0)
  const active = testimonials[index]

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section className="bg-neutral-50">
      <div className="max-w-[1600px] mx-auto px-10 xl:px-16 py-32">

        {/* HEADER */}
        <div className="mb-24 text-center">
          <div className="inline-flex items-center border border-neutral-300 px-5 py-1 rounded-md text-xs tracking-wide text-neutral-600 mb-8">
            Testimonials
          </div>
 
        </div>

        {/* FRAME */}
        <div className="relative   rounded-2xl  px-16 py-24">

          {/* QUOTE */}
          <div className="max-w-4xl mx-auto text-center relative">

            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[120px] text-neutral-200 leading-none select-none">
              “
            </div>

            <p className="text-[28px] xl:text-[34px] leading-[1.4] text-neutral-800 relative z-10">
              {active.quote}
            </p>

            <div className="mt-12">
              <p className="text-[18px] font-medium text-neutral-900">
                {active.name}
              </p>
              <p className="text-sm text-neutral-600 mt-1">
                {active.role}
              </p>
            </div>

          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="absolute inset-y-0 left-6 flex items-center">
            <button
              onClick={prevSlide}
              className="w-10 h-10 border border-neutral-300 rounded-lg flex items-center justify-center text-neutral-600 hover:bg-white transition"
            >
              ←
            </button>
          </div>

          <div className="absolute inset-y-0 right-6 flex items-center">
            <button
              onClick={nextSlide}
              className="w-10 h-10 border border-neutral-300 rounded-lg flex items-center justify-center text-neutral-600 hover:bg-white transition"
            >
              →
            </button>
          </div>

          {/* AVATAR SELECTOR */}
          <div className="mt-20 flex justify-center gap-4">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-14 h-14 rounded-xl overflow-hidden transition ${
                  i === index
                    ? "opacity-100 scale-105"
                    : "opacity-40"
                }`}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}




 


function FAQ() {
  const faqs = [
    {
      q: "What kind of brands is your service most suitable for?",
      a: "Our service is suited to a wide-variety of brands in the DTC space. Whether you're investment backed and just started, over $100K or over $500K monthly. We offer different services that can suit your needs.",
    },
    {
      q: "How does your service help to increase my brand's revenue vs someone else?",
      a: "We don’t just focus on ads. We take ownership of the full growth system — acquisition, creative, infrastructure, and data — ensuring every lever works together to drive profitable revenue.",
    },
    {
      q: "How long does it take for you to onboard a company?",
      a: "Most brands are fully onboarded within 7–14 days, depending on complexity and existing infrastructure.",
    },
  ];

  const [open, setOpen] = React.useState(0);

  return (
    <section className="bg-white py-32 text-neutral-900">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {/* pill */}
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1 text-xs text-neutral-700">
            ❓ FAQ
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* accordion */}
        <div className="mx-auto mt-20 max-w-3xl space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className={`rounded-2xl border p-6 transition ${
                  isOpen
                    ? "border-blue-600 bg-blue-50"
                    : "border-neutral-200 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="text-base font-medium">
                    {item.q}
                  </span>

                  <span className="ml-4 text-2xl leading-none text-neutral-500">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}




function Footer() {
  return (
    <div className="bg-neutral-50 pt-28 overflow-hidden">
      {/* =====================================================
          CTA SECTION
      ===================================================== */}
      <div className="max-w-[1600px] mx-auto px-10 xl:px-16 mb-32">
        <div className="relative rounded-2xl overflow-hidden min-h-[560px] flex items-end">
          
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1742281694367-30557c03d0a1?q=80&w=2340&auto=format&fit=crop"
            alt="Factory production"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

          {/* Content */}
          <div className="relative z-10 w-full px-10 xl:px-16 pb-24 pt-32 grid md:grid-cols-[1.3fr_1fr] items-end">
            
            {/* Left */}
            <div className="max-w-3xl text-white">
              <h2 className="text-[48px] md:text-[60px] xl:text-[70px] font-normal leading-[1.05] tracking-[-0.02em]">
                Ready to Move at Global Scale?
              </h2>
            </div>

            {/* Right */}
            <div className="md:ml-auto max-w-sm text-white/85 mt-10 md:mt-0">
              <p className="mb-8 text-[18px] leading-relaxed">
                End-to-end execution covering production, inspection, and international delivery.
              </p>

              <button className="flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-lg text-sm font-medium transition hover:bg-neutral-200">
                Get Started
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white text-sm">
                  →
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          FOOTER SECTION
      ===================================================== */}
      <footer className="relative max-w-[1600px] mx-auto px-10 xl:px-16 pb-24">
         
        {/* Main Grid */}
        <div className="relative grid md:grid-cols-4 gap-20 border-b border-neutral-200 pb-20">
          
          {/* Brand */}
          <div>
            <h3 className="text-lg font-medium text-neutral-900 mb-8">
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
                  className="group w-10 h-10 rounded-lg border border-neutral-300 flex items-center justify-center transition hover:bg-black hover:border-black cursor-pointer"
                >
                  <img
                    src={icon}
                    alt="social"
                    className="w-4 h-4 opacity-70 transition group-hover:invert group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-neutral-900 uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-neutral-500 text-sm">
              <li className="hover:text-black transition cursor-pointer">About Us</li>
              <li className="hover:text-black transition cursor-pointer">Careers</li>
              <li className="hover:text-black transition cursor-pointer">Blog</li>
              <li className="hover:text-black transition cursor-pointer">News & Updates</li>
              <li className="hover:text-black transition cursor-pointer">Partners</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-neutral-900 uppercase mb-6">
              Resources
            </h4>
            <ul className="space-y-4 text-neutral-500 text-sm">
              <li className="hover:text-black transition cursor-pointer">Help Center</li>
              <li className="hover:text-black transition cursor-pointer">FAQs</li>
              <li className="hover:text-black transition cursor-pointer">Shipping Calculator</li>
              <li className="hover:text-black transition cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-black transition cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-neutral-900 uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-neutral-500 text-sm leading-relaxed">
              <li>
                Room C169, 1501, No. 207–213, West Dongfeng Road, Yuexiu District,
                Guangzhou, China
              </li>
              <li>+8619924111300</li>
              <li>
                Jl. Batumejan 5D Padang Linjong, Desa/Kelurahan Canggu,
                Kec. Kuta Utara, Kab. Badung, Provinsi Bali
              </li>
              <li>hello@alraimigroup.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-12 text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Al-Raimi Group. All rights reserved.</p>

          <div className="flex gap-8">
            <span className="hover:text-black transition cursor-pointer">
              Terms of Use
            </span>
            <span className="hover:text-black transition cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </div>
      </footer>
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