"use client"
/* app/page.jsx */

import Image from "next/image";
import Link from 'next/link'
import React, { useRef, useEffect, useState } from "react";

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <Hero />
      {/* <TrustWith /> */}
      {/* <ClientSuccess /> */}
      {/* <GrowthProof />  */}
      {/* <OurProcess /> */}
      {/* <AKMNumbers /> */}
      {/* <VisualWall /> */}
      {/* <Testimonials /> */}
      {/* <LogoWall /> */}
      {/* <Team /> */}
      {/* <Events /> */}
      <FAQ/>
      <FinalCTA />
    </main>
  );
}






/* =========================
   SECTIONS
========================= */
function Hero() {
  const partners = [
    "Fashion Manufacturing",
    "Luxury Packaging",
    "AQL Quality Control",
    "Sampling & Production",
    "Global Shipping (EXW / FOB / DDP)",
    "Factory Management",
  ];

  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-28 pb-24">
      <Container>
        <div className="relative grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div className="relative z-10">
            {/* pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-4 py-1 text-xs text-neutral-200">
              <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[11px] font-medium">
                China
              </span>
              End-to-End Manufacturing Partner
            </div>

            {/* headline */}
            <h1 className="mt-8 max-w-xl text-4xl font-base tracking-tight md:text-7xl">
              Your factory partner in China
            </h1>

            {/* body — compressed from project meaning */}
            <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-300">
            From idea to finished product — fast, transparent, global. Samples, production, QC, and logistics
            under one roof.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-white px-8 py-3 text-sm font-medium text-neutral-950 hover:bg-neutral-200">
                Start a Production Inquiry →
              </button>
            </div>

            {/* trust */}
            <div className="mt-6 flex items-center gap-3 text-sm text-neutral-300">
              <span>
              Your Brand. Our Factories. Premium Fashion & Packaging, Delivered.
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative z-10">
            {/* image frame */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white p-4 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1675176785803-bffbbb0cd2f4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D   "
                  alt="Factory production and quality control"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* floating stat 1 */}
            <div className="absolute -left-10 top-12 hidden rounded-2xl bg-white px-5 py-4 text-sm text-neutral-900 shadow-xl md:block">
              <p className="text-xs text-neutral-500">Production</p>
              <p className="text-xl font-semibold">Factory Managed</p>
            </div>

            {/* floating stat 2 */}
            <div className="absolute -bottom-10 right-6 hidden rounded-2xl bg-white px-5 py-4 text-sm text-neutral-900 shadow-xl md:block">
              <p className="text-xs text-neutral-500">Inspection</p>
              <p className="text-xl font-semibold">AQL Standard</p>
            </div>
          </div>
        </div>

        {/* capabilities */}
        <div className="relative z-10 mt-24 border-t border-neutral-800 pt-10">
          <p className="mb-6 text-sm text-neutral-400">
            Manufacturing capabilities
          </p>

          <div className="flex flex-wrap items-center gap-10 text-neutral-400">
            {partners.map((p, i) => (
              <span key={i} className="text-sm opacity-80">
                {p}
              </span>
            ))}
          </div>
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
      brand: "Conzuri",
      desc:
        "From $110,000 per month to $1.7M in just 14 months. Learn more about Conzuri",
      image:
        "https://images.unsplash.com/photo-1528701800489-20be3c6f3b35?q=80&w=1200",
      stats: [
        { label: "35% Lower CPA", tone: "blue" },
        { label: "3.2 ROAS", tone: "gray" },
      ],
      sales: "$60M+ in Sales Generated",
    },
    {
      brand: "Heights",
      desc:
        "CPG Brand: Scaling New Revenue by 240% in 5 Months",
      image:
        "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1200",
      stats: [
        { label: "79% Lower CPA", tone: "blue" },
        { label: "4.6X MER", tone: "gray" },
      ],
      sales: "$30M+ Generated",
    },
    {
      brand: "DIRTEA",
      desc:
        "Functional Mushrooms Meets Scale. 2391% Growth in 2.5 years",
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155228f9c4?q=80&w=1200",
      stats: [
        { label: "3X+ ROAS", tone: "blue" },
        { label: "62% Lower CPA", tone: "gray" },
      ],
      sales: "£20M+ in Sales Generated",
    },
  ];

  return (
    <section className="bg-neutral-50 py-32 text-neutral-900">
      <Container>
        {/* header */}
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1 text-xs text-neutral-700">
              ⭐ Case Studies
            </span>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight">
              Client success stories
            </h2>
          </div>

          <button className="self-start rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 md:self-auto">
            Schedule Free Growth Audit →
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

                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {c.desc}
                </p>

                {/* stat pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.stats.map((s, idx) => (
                    <span
                      key={idx}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        s.tone === "blue"
                          ? "bg-blue-600 text-white"
                          : "bg-neutral-200 text-neutral-700"
                      }`}
                    >
                      {s.label}
                    </span>
                  ))}
                </div>

                {/* sales */}
                <div className="mt-4">
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
            View Other Brands →
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

