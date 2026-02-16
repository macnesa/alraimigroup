"use client"
/* app/page.jsx */

import Image from "next/image";
import Link from 'next/link'
import React, { useRef, useEffect, useState } from "react";
import {
  FaApple,
  FaAmazon,
  FaGoogle,
  FaMicrosoft,
  FaFacebook,
  FaShopify,
} from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { motion } from "framer-motion";


export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <Hero />
      {/* <SocialProof/> */}
      {/* <HowWeWork/> */}
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
      {/* <FinalCTA /> */}
    </main>
  );
}






/* =========================
   SECTIONS
========================= */
function Hero() {
  const brandIcons = [
    FaApple,
    FaAmazon,
    FaGoogle,
    FaMicrosoft,
    FaFacebook,
    FaShopify,
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#070b14] text-white">
      {/* ATMOSPHERE */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(59,130,246,0.25),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(99,102,241,0.2),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-6 pt-8 pb-32"
      >
        {/* HEADER */}
        <motion.header
          variants={item}
          className="flex items-center justify-between"
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/images/alraimi-logo-white-1.png"
              alt="Alraimi Logo"
              width={48}
              height={40}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-10 text-sm text-neutral-400 md:flex">
            <Link href="/">Home</Link>
            <Link href="/fashion-manufacturing">
              Fashion Manufacturing
            </Link>
            <Link href="/luxury-packaging">
              Luxury Packaging
            </Link>
            <Link href="#contact">Contact</Link>
          </nav>

          <button className="hidden md:block rounded-full bg-white px-6 py-2 text-sm font-medium text-black hover:bg-neutral-200 transition">
            Get Your PI →
          </button>
        </motion.header>

        {/* HEADLINE ZONE */}
        <div className="mt-28 grid gap-20 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <div>
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-neutral-300 backdrop-blur"
            >
              <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[11px] font-medium">
                China
              </span>
              End-to-End Factory Operator
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-8 text-6xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
            >
              Build Products.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Remove the Risk.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-lg text-neutral-400 leading-relaxed"
            >
              We translate your brand into factory-ready execution —
              managing sampling, production, AQL inspection, and global
              shipping under one accountable structure.
            </motion.p>

            <motion.div variants={item} className="mt-12 flex gap-5">
              <button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-sm font-medium hover:opacity-90 transition">
                Start Production Inquiry →
              </button>

              <button className="rounded-full border border-white/20 px-8 py-3 text-sm text-neutral-300 hover:border-white hover:text-white transition">
                View Process
              </button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div variants={item} className="relative">
            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://i.pinimg.com/736x/de/ef/39/deef39f72f889cdf21b163bcf66c3498.jpg"
                  alt="Factory floor"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* FLOATING QC PANEL */}
            <motion.div
              variants={item}
              className="absolute -left-10 top-10 hidden w-60 rounded-2xl border border-white/10 backdrop-blur-xl shadow-xl md:block overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10" />
              <div className="absolute inset-0 bg-black/45" />
              <div className="relative p-5">
                <p className="text-xs text-neutral-200">Quality Control</p>
                <p className="mt-2 text-xl font-semibold text-white">
                  AQL Inspection
                </p>
                <div className="mt-3 h-2 w-full rounded-full bg-white/20">
                  <div className="h-2 w-[82%] rounded-full bg-green-400" />
                </div>
                <p className="mt-2 text-xs text-neutral-200">
                  Pre-shipment verification completed
                </p>
              </div>
            </motion.div>

            {/* FLOATING LOGISTICS PANEL */}
            <motion.div
              variants={item}
              className="absolute -bottom-10 right-0 hidden w-64 rounded-2xl border border-white/10 backdrop-blur-xl shadow-xl md:block overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10" />
              <div className="absolute inset-0 bg-black/45" />
              <div className="relative p-5">
                <p className="text-xs text-neutral-200">Logistics</p>
                <p className="mt-2 text-xl font-semibold text-white">
                  DDP / FOB Shipping
                </p>
                <p className="mt-2 text-xs text-neutral-200">
                  Customs, freight, and delivery managed globally
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* METRICS */}
        <motion.div
          variants={item}
          className="mt-32 grid grid-cols-1 gap-12 border-t border-white/10 pt-16 md:grid-cols-4"
        >
          {[
            { title: "20+", desc: "Verified Factory Partners" },
            { title: "AQL", desc: "Standardized Inspection Protocol" },
            { title: "DDP", desc: "Door-to-Door International Delivery" },
            { title: "End-to-End", desc: "Sampling to Final Shipment" },
          ].map((metric, i) => (
            <div key={i}>
              <p className="text-3xl font-semibold">{metric.title}</p>
              <p className="mt-2 text-sm text-neutral-400">
                {metric.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* TRUST LOGOS */}
        <motion.div variants={item} className="mt-20 text-center">
          <p className="mb-10 text-sm text-neutral-500">
            Trusted by global brands & procurement teams
          </p>

          <div className="flex flex-wrap justify-center gap-12 text-3xl text-white/40">
            {brandIcons.map((Icon, index) => (
              <motion.div key={index} variants={item}>
                <Icon className="transition duration-300 hover:text-white" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}



function SocialProof() {
  const metrics = [
    { value: "15+", label: "Years in China Manufacturing" },
    { value: "500,000+", label: "Luxury Packs Delivered" },
    { value: "100,000+", label: "Apparel Pieces Delivered" },
  ];

  const guarantees = [
    "Pre-shipment Quality Control (AQL)",
    "Door-to-door (DDP) incl. customs clearance",
    "Factory tours — on-site or live video",
    "Serving brands worldwide",
  ];

  return (
    <section className="bg-neutral-50 py-24">
      <Container>
        
        {/* METRICS STRIP */}
        <div className="border-t border-b border-neutral-200">
          <div className="flex flex-col md:flex-row">

            {metrics.map((item, i) => (
              <div
                key={i}
                className="flex-1 px-10 py-16 md:border-r md:border-neutral-200 last:md:border-r-0"
              >
                <div className="text-6xl md:text-7xl font-semibold tracking-tight text-neutral-900">
                  {item.value}
                </div>

                <div className="mt-4 text-xs uppercase tracking-[0.18em] text-neutral-500">
                  {item.label}
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* OPERATIONAL GUARANTEES */}
        <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 text-sm text-neutral-600">
          {guarantees.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 bg-neutral-400" />
              <span className="tracking-wide">{item}</span>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}

function HowWeWork() {
  const steps = [
    {
      short: "BRIEF",
      title: "Quick Brief & NDA (24–48h)",
      desc: "Style references, quantities, timeline, ship-to country, brand files.",
    },
    {
      short: "DESIGN",
      title: "Design & Technical Prep (2–5 days)",
      desc: "Tech packs / dielines finalized. Specs and materials confirmed.",
    },
    {
      short: "SAMPLE",
      title: "Samples & PI (7–21 days)",
      desc: "Prototype production and guide pricing (ex-factory). Formal PI issued.",
    },
    {
      short: "BOOK",
      title: "Production Booking",
      desc: "Golden sample approval. Deposit secures production line.",
    },
    {
      short: "MAKE",
      title: "Manufacturing",
      desc: "Apparel 3–8 wks / Packaging 2–6 wks. In-line QC & milestone updates.",
    },
    {
      short: "QA",
      title: "Quality Assurance (AQL)",
      desc: "Pre-shipment inspection report with measurements & checks.",
    },
    {
      short: "SHIP",
      title: "Logistics (EXW / FOB / DDP)",
      desc: "Export docs and global shipping arranged.",
    },
    {
      short: "DELIVER",
      title: "Delivery & Aftercare",
      desc: "Unboxing checks, reorders, continuous improvement.",
    },
  ];

  return (
    <section className="bg-neutral-50 py-28">
      <Container>

        {/* HEADER */}
        <div className="mb-20 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Production Pipeline
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            From idea to global delivery — executed in China
          </h2>
        </div>

        {/* PIPELINE STRIP */}
        <div className="overflow-x-auto">
          <div className="min-w-[1000px] border border-neutral-200 bg-white">

            <div className="flex divide-x divide-neutral-200">

              {steps.map((step, i) => (
                <div key={i} className="flex-1 p-8">

                  <div className="text-[11px] tracking-[0.25em] text-neutral-400">
                    {step.short}
                  </div>

                  <div className="mt-4 text-sm font-medium text-neutral-900">
                    {step.title}
                  </div>

                  <div className="mt-3 text-xs leading-relaxed text-neutral-600">
                    {step.desc}
                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>

        {/* OPERATIONAL LAYER */}
        <div className="mt-24 border-t border-neutral-200 pt-14 grid md:grid-cols-2 gap-16">

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Communication & Visibility
            </div>

            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              WhatsApp group with your project manager. Weekly updates.
              Factory tours in China by appointment. Live video inspections anytime.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Typical Terms
            </div>

            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              PI with unit price (ex-factory), MOQ, timeline.
              Standard terms: 50% deposit / 50% pre-shipment (adjustable).
              DDP quotes available.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-24">
          <button className="rounded-full bg-neutral-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-neutral-700">
            Get Your PI →
          </button>
        </div>

      </Container>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-neutral-950 py-32 text-neutral-100">
      <Container>

        {/* HEADER */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Services Overview
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight">
            Core Production Capabilities
          </h2>
        </div>

        {/* GRID */}
        <div className="mt-24 grid gap-20 lg:grid-cols-2">

          {/* PACKAGING — IMAGE DOMINANT */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden border border-neutral-800">
              <Image
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1600"
                alt="Packaging Engineering"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-medium">
                Packaging Engineering & Structural Development
              </h3>
              <p className="mt-6 text-sm text-neutral-400 leading-relaxed max-w-xl">
                Rigid box structures, sleeves, inserts, and custom folding constructions engineered for durability and premium presentation. Pantone and physical sample color-matching available.
              </p>
            </div>
          </div>

          {/* FASHION — TEXT DOMINANT */}
          <div className="flex flex-col justify-center border-t border-neutral-800 pt-12 lg:border-0 lg:pt-0">
            <h3 className="text-2xl font-medium">
              Sampling & Mass Production
            </h3>
            <p className="mt-6 text-sm text-neutral-400 leading-relaxed max-w-xl">
              From tech packs and dielines to golden samples and full-scale production. Material sourcing, line booking, and timeline control managed by our China factory team.
            </p>
          </div>

          {/* QC — TEXT DOMINANT */}
          <div className="flex flex-col justify-center border-t border-neutral-800 pt-12">
            <h3 className="text-2xl font-medium">
              In-line Quality Control (AQL)
            </h3>
            <p className="mt-6 text-sm text-neutral-400 leading-relaxed max-w-xl">
              Structured in-line inspections during production plus pre-shipment AQL checks with detailed reports, measurements, and documentation.
            </p>
          </div>

          {/* LOGISTICS — IMAGE DOMINANT */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden border border-neutral-800">
              <Image
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1600"
                alt="Global Delivery"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-medium">
                Global Delivery (EXW / FOB / DDP)
              </h3>
              <p className="mt-6 text-sm text-neutral-400 leading-relaxed max-w-xl">
                Export documentation, freight coordination, and door-to-door delivery including customs clearance. Air and sea options based on timeline and volume.
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-32 border-t border-neutral-800 pt-12">
          <button className="border border-neutral-700 px-8 py-3 text-sm text-neutral-200 hover:bg-neutral-900 transition">
            Start Your Brand →
          </button>
        </div>

      </Container>
    </section>
  );
}

 
function TrustBar() {
  return (
    <section className="border-t border-neutral-900 bg-neutral-950 py-10">
      <Container>
        <p className="mb-6 text-center text-sm text-neutral-400">
          Trusted by fast-growing brands worldwide
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
        </div>
      </Container>
    </section>
  );
}

function TrustWith() {
  const services = [
    {
      title: "Growth Strategy",
      desc: "We take over all of your Ecommerce business levers and help to actualise your goals with data.",
      note: "*recommended for brands doing over $5M+ annually",
      icon: "🚀",
    },
    {
      title: "Investing In You",
      desc: "We’re not just an agency. As of 2022, we dived into the world of private equity, ensuring we invest into our brands whilst simultaneously growing them.",
      icon: "🔁",
    },
    {
      title: "Paid Acquisition",
      desc: "Paid advertising is our favourite. From Meta to Google and all the way to TikTok, Snapchat and others. If your business needs customers, we will find them.",
      icon: "💸",
    },
    {
      title: "Ad Creatives",
      desc: "We create winning performance creatives that drive conversions and profitable revenue for your brand.",
      icon: "💬",
    },
  ];

  return (
    <section className="relative bg-neutral-950 py-32">

      <Container>
        {/* header */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1 text-xs text-neutral-300">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
              ✦
            </span>
            Services
          </span>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
            What brands trust us with
          </h2>

          <p className="mt-4 text-base text-neutral-400">
            We don’t sell tactics. We take ownership of the systems that
            actually move revenue.
          </p>
        </div>

        {/* cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={i}
              className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-8 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-800 text-lg">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold">
                  {s.title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                {s.desc}
              </p>

              {s.note && (
                <p className="mt-4 text-xs italic text-neutral-500">
                  {s.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ClientSuccess() {
  const cases = [
    {
      brand: "Multiple Luxury Perfume Packaging — Saudi Arabia",
      desc:
        "Comprehensive paper packaging for several Saudi perfume brands. 100,000+ luxury rigid boxes, premium paper bags, tester blotter cards and branded ribbon delivered across SKUs.",
      image:
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200",
      stats: [
        { label: "Matte / Soft-touch Lamination", tone: "gray" },
        { label: "Foil & Emboss", tone: "gray" },
        { label: "AQL + Production Videos", tone: "blue" },
      ],
      sales: "DDP Air ≈15 days • Sea ≈30 days",
    },
    {
      brand: "Boutique Womenswear Brand — Dubai",
      desc:
        "Ongoing manufacturing for a Dubai-based womenswear label. 5,000+ pieces across multiple drops including evening & day collections with mixed performance materials.",
      image:
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200",
      stats: [
        { label: "Editable Size Charts", tone: "gray" },
        { label: "In-line QC + AQL", tone: "blue" },
        { label: "Eco Garment Bags", tone: "gray" },
      ],
      sales: "Production 4–8 weeks (style dependent)",
    },
    {
      brand: "Golf Apparel Startup — Dubai",
      desc:
        "End-to-end apparel manufacturing and custom packaging from first collection onward. Polo shirts, shorts, pants, caps and custom rigid paper box packaging.",
      image:
        "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1200",
      stats: [
        { label: "≈3,000 pcs Initial Order", tone: "gray" },
        { label: "Performance Blends", tone: "gray" },
        { label: "AQL Inspection", tone: "blue" },
      ],
      sales: "On-schedule launch • Scalable reorders",
    },
  ];

  return (
    <section className="bg-neutral-50 py-32 text-neutral-900">
      <Container>
        {/* header */}
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1 text-xs text-neutral-700">
              Project Snapshots (Confidential)
            </span>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight">
              Typical Scopes & Production Outcomes
            </h2>
          </div>

          <button className="self-start rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 md:self-auto">
            See All Project Snapshots →
          </button>
        </div>

        {/* grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {cases.map((c, i) => (
            <div key={i}>
              {/* image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-200">
                <Image
                  src={c.image}
                  alt={c.brand}
                  fill
                  className="object-cover"
                />
              </div>

              {/* content */}
              <div className="mt-6">
                <h3 className="text-xl font-medium">
                  {c.brand}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {c.desc}
                </p>

                {/* stat pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.stats.map((s, idx) => (
                    <span
                      key={idx}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        s.tone === "blue"
                          ? "bg-neutral-900 text-white"
                          : "bg-neutral-200 text-neutral-700"
                      }`}
                    >
                      {s.label}
                    </span>
                  ))}
                </div>

                {/* bottom badge */}
                <div className="mt-5">
                  <span className="inline-block rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white">
                    {c.sales}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* footer CTA */}
        <div className="mt-20 flex justify-center">
          <button className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium hover:bg-neutral-100">
            View All Confidential Work →
          </button>
        </div>
      </Container>
    </section>
  );
}


function GrowthProof() {
  return (
    <section className="bg-neutral-950 py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* LEFT */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              We help brands cross the growth valley
            </h2>

            <p className="mt-4 text-base text-neutral-400">
              Scaling isn’t about hacks. It’s about surviving the most
              dangerous phase of growth — where complexity increases faster
              than revenue.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-white px-7 py-3 text-sm font-medium text-neutral-950 hover:bg-neutral-200">
                See How It Works
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <GrowthGraph />
        </div>
      </Container>
    </section>
  );
}

function OurProcess() {
  const steps = [
    {
      title: "Expert AI Analysis",
      desc: "We always start off our process with detailed analysis on who you are, your data, your economics and educating you on how we got to our recommendations. Leveraged by our very own AKM AI model. We never work with a brand we have not done an analysis on beforehand.",
      icon: "📄",
    },
    {
      title: "Smooth Scaling",
      desc: "Once a plan of action is agreed upon and you are aligned on the HOW. We begin our operations for ads, creative and improving your business metrics. Spanning Meta, Google, TikTok, retention marketing & comprehensive tracking.",
      icon: "🚀",
    },
    {
      title: "Killer Accountability",
      desc: "We grow as partners and therefore we like to keep all parties accountable. When we set out a goal to beat your forecasts, we make sure that everyone is in check. All brands get access to our AKM growth tracker to stay on top & accountable of real growth.",
      icon: "🪄",
    },
  ];

  return (
    <section className="bg-neutral-50 py-32 text-neutral-900">
      <Container>
        {/* header */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1 text-xs text-neutral-700">
            🧠 Process
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight">
            Our Process
          </h2>
        </div>

        {/* cards */}
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white p-10 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 text-lg">
                {s.icon}
              </div>

              <h3 className="mt-8 text-xl font-medium">
                {s.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* trusted by */}
        <div className="mt-24">
          <p className="mb-8 text-sm text-neutral-500">
            Trusted by brands like
          </p>

          <div className="flex flex-wrap items-center gap-10 text-neutral-400">
            <span className="text-sm">78 / 79</span>
            <span className="text-sm">BLANC SPACE</span>
            <span className="text-sm">Vatika</span>
            <span className="text-sm">HAIRBURST</span>
            <span className="text-sm">P</span>
          </div>
        </div>
      </Container>
    </section>
  );
}


function AKMNumbers() {
  return (
    <section className="bg-neutral-50 py-28 text-neutral-900">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            AKM in Numbers
          </h2>
          <p className="mt-4 text-base text-neutral-600">
            A snapshot of scale, impact, and execution across brands and
            markets.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <NumberItem
            value="$164M+"
            label="Revenue generated"
          />
          <NumberItem
            value="$738M+"
            label="Ad spend managed"
          />
          <NumberItem
            value="146+"
            label="Brands scaled"
          />
        </div>
      </Container>
    </section>
  );
}

function VisualWall() {
  
  const VISUAL_ITEMS = [
    {
      image:
        "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=800",
    },
    {
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155228f9c4?q=80&w=800",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580910051074-7f61a8c3fda3?q=80&w=800",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155228f9c4?q=80&w=800",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=800",
    },
    {
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580910051074-7f61a8c3fda3?q=80&w=800",
    },
  ];
  
  
  return (
    <section className="bg-neutral-950 py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Work we are proud to show
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            A snapshot of creatives, campaigns, and brands we’ve helped
            scale across industries.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {VISUAL_ITEMS.map((item, idx) => (
            <VisualTile key={idx} image={item.image} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        "AKM didn’t just help us scale. They forced us to confront the weak parts of our business — and fix them.",
      name: "Founder",
      role: "DTC Skincare Brand",
    },
    {
      quote:
        "What stood out wasn’t the tactics. It was the clarity. Every move had a reason, and every result was measured.",
      name: "CEO",
      role: "E-commerce Fashion Company",
    },
    {
      quote:
        "They operate like an internal growth team, not an agency. No fluff — just execution and accountability.",
      name: "Head of Growth",
      role: "Wellness Brand",
    },
  ];

  return (
    <section className="bg-neutral-950 py-32">
      <Container>
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Hear what our clients have to say
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            We work with a small number of brands at a time — and go deep
            with each one.
          </p>
        </div>

        <div className="mt-24 grid gap-20 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i}>
              <p className="text-lg leading-relaxed text-neutral-200">
                “{t.quote}”
              </p>

              <div className="mt-8">
                <p className="font-medium text-neutral-100">
                  {t.name}
                </p>
                <p className="text-sm text-neutral-400">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function LogoWall() {
  const logos = new Array(12).fill(0);

  return (
    <section className="bg-neutral-50 py-24 text-neutral-900">
      <Container>
        <p className="mb-12 text-center text-sm font-medium text-neutral-500">
          Brands & platforms we’ve worked with
        </p>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {logos.map((_, i) => (
            <div
              key={i}
              className="flex h-14 items-center justify-center rounded-xl border border-neutral-200 bg-white"
            >
              <span className="text-xs font-medium text-neutral-400">
                LOGO
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Team() {
  const team = [
    { name: "Alex Morgan", role: "Founder" },
    { name: "Sarah Lee", role: "Growth Lead" },
    { name: "Daniel Kim", role: "Performance Marketing" },
    { name: "Emma Wright", role: "Creative Director" },
    { name: "Chris Nolan", role: "Operations" },
    { name: "Maya Patel", role: "Analytics" },
  ];

  return (
    <section className="bg-neutral-950 py-32">
      <Container>
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Meet the team
          </h2>
          <p className="mt-4 text-neutral-400">
            A tight-knit team spreading across strategy, execution,
            and operations.
          </p>
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {team.map((m, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-4 h-40 w-40 rounded-full bg-neutral-800" />
              <p className="font-medium">{m.name}</p>
              <p className="text-sm text-neutral-400">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Events() {
  const events = new Array(4).fill(0);

  return (
    <section className="bg-neutral-950 py-28">
      <Container>
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Speaking at events worldwide
          </h2>
          <p className="mt-4 text-neutral-400">
            Sharing insights, strategies, and lessons learned from
            scaling brands globally.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {events.map((_, i) => (
            <div
              key={i}
              className="aspect-[3/4] rounded-2xl bg-neutral-800"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-neutral-950 py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] bg-[radial-gradient(120%_120%_at_50%_120%,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_30%,rgba(0,0,0,0)_60%),linear-gradient(135deg,#1e40ff_0%,#2563eb_45%,#3b82f6_100%)] px-10 py-28 text-white md:px-20">

          {/* subtle top dark fade */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent" />

          {/* grain texture */}
          <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.18] mix-blend-overlay" />

          {/* floating stat — SALES */}
          <div className="absolute left-6 top-6 hidden -rotate-6 rounded-2xl bg-white px-5 py-4 text-neutral-900 shadow-[0_20px_40px_rgba(0,0,0,0.25)] md:block">
            <p className="text-[11px] font-medium text-neutral-500">Sales</p>
            <p className="mt-0.5 text-xl font-semibold tracking-tight">
              £21.49M
            </p>
            <p className="mt-1 text-[11px] font-medium text-blue-600">
              Report →
            </p>
          </div>

          {/* floating stat — SPEND */}
          <div className="absolute bottom-8 right-8 hidden rotate-6 rounded-2xl bg-white px-5 py-4 text-neutral-900 shadow-[0_20px_40px_rgba(0,0,0,0.25)] md:block">
            <p className="text-[11px] font-medium text-neutral-500">Spend</p>
            <p className="mt-0.5 text-xl font-semibold tracking-tight">
              £9.52M
            </p>
            <p className="mt-1 text-[11px] font-medium text-blue-600">
              Report →
            </p>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 mx-auto max-w-[720px] text-center">

            {/* pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-black/30 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20">
                📅
              </span>
              Book a Call
            </div>

            {/* heading */}
            <h2 className="mt-10 text-[42px] font-medium tracking-tight md:text-[52px]">
              Ready To Scale?
            </h2>

            {/* description */}
            <p className="mx-auto mt-6 max-w-[560px] text-[15px] leading-relaxed text-white/80">
              Schedule in your <strong className="text-white">FREE</strong> growth
              guide audit with our team. We will learn everything we can about you
              and offer you our recommendations on which direction you should go!
            </p>

            {/* CTA ROW */}
            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

              {/* primary button */}
              <button className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:bg-neutral-800">
                Schedule a free call
                <span className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </button>

              {/* trust */}
              <div className="flex items-center gap-3 text-sm text-white/90">
                <div className="flex gap-0.5 text-white">
                  ★★★★★
                </div>
                <span>
                  Trusted by <strong className="text-white">235+ brands</strong>
                </span>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
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
    <section className="bg-neutral-50 py-32 text-neutral-900">
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

function HeroVisual() {
  return (
    <div className="relative">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200"
          alt="AKM team"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute -left-8 top-12 hidden rounded-2xl border border-neutral-800 bg-neutral-900 px-5 py-4 text-sm md:block">
        <p className="font-medium text-neutral-100">$164M+</p>
        <p className="text-neutral-400">Revenue Generated</p>
      </div>

      <div className="absolute -bottom-6 right-8 hidden rounded-2xl border border-neutral-800 bg-neutral-900 px-5 py-4 text-sm md:block">
        <p className="font-medium text-neutral-100">146+</p>
        <p className="text-neutral-400">Brands Scaled</p>
      </div>
    </div>
  );
}

function Logo() {
  return <div className="h-8 w-24 rounded-md bg-neutral-800" />;
}

function TrustCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
        {desc}
      </p>
    </div>
  );
}

function CaseCard({ title, tag, metric, image }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <span className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
          {tag}
        </span>

        <h3 className="mt-4 text-lg font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-sm text-neutral-600">
          {metric}
        </p>
      </div>
    </div>
  );
}

function GrowthGraph() {
  return (
    <div className="relative rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
      <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-neutral-800 to-neutral-900" />

      {/* fake axis */}
      <div className="absolute bottom-8 left-8 right-8 h-px bg-neutral-700" />
      <div className="absolute bottom-8 left-8 top-8 w-px bg-neutral-700" />

      {/* fake line */}
      <div className="absolute bottom-8 left-8 right-8 top-8">
        <div className="h-full w-full rounded-2xl bg-gradient-to-tr from-blue-500/30 via-blue-400/40 to-blue-300/60" />
      </div>

      {/* label */}
      <div className="absolute right-6 top-6 rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm">
        <p className="font-medium text-neutral-100">Revenue Growth</p>
        <p className="text-neutral-400">System-driven scale</p>
      </div>
    </div>
  );
}

function ProcessStep({ step, title, desc }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-8">
      <span className="text-sm font-medium text-neutral-400">
        {step}
      </span>

      <h3 className="mt-4 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
        {desc}
      </p>
    </div>
  );
}

function NumberItem({ value, label }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-8">
      <p className="text-4xl font-semibold tracking-tight">
        {value}
      </p>
      <p className="mt-2 text-sm text-neutral-600">
        {label}
      </p>
    </div>
  );
}

function VisualTile({ image }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
      <div className="relative aspect-[3/4]">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-opacity duration-300 group-hover:opacity-90"
        />
      </div>
    </div>
  );
}

