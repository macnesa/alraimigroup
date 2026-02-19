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
  FaArrowRight
} from "react-icons/fa";

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
      <Testimonials/>
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
      <Footer />
    </main>
  );
}






/* =========================
   SECTIONS
========================= */
function Hero() {
  return (
    <section className="bg-white px-6 pt-6 pb-20">

      <div className="relative w-full max-w-[1600px] mx-auto h-[92vh] overflow-hidden rounded-2xl">

        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.8] contrast-[1.05]"
          src="/videos/hero-bg.mp4"
        />

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

          <div className="max-w-3xl">

            <div className="inline-flex items-center border border-white/40 bg-white/10 px-4 py-1.5 rounded-md text-xs text-white mb-8 tracking-wide">
              China-Based Factory Partner
            </div>

            <h1 className="text-[50px] md:text-[60px] xl:text-[70px] font-normal leading-[1.04] tracking-[-0.02em] text-white mb-8">
              Build Products.
              <br />
              Remove the Risk.
            </h1>

            <p className="text-[18px] text-white/80 leading-relaxed max-w-lg">
              We represent your brand inside China — managing sampling,
              production, inspection, and global delivery under one accountable structure.
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
    <section className="bg-white overflow-hidden">

      {/* <div className="max-w-[1500px] mx-auto text-center mb-5">
        <h2 className="text-3xl md:text-2xl font-normal text-neutral-800">
          Partners of world leading companies
        </h2>
      </div> */}

      <div className="relative w-full overflow-hidden">

        {/* Edge fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex min-w-max animate-marquee items-center">

          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-16 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt="Client logo"
                width={300}
                height={140}
                className="object-contain h-28 w-auto invert"
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
          animation: marquee 60s linear infinite;
        }
      `}</style>

    </section>
  );
}

function About() {
  return (
    <section className="bg-white">
      <div className="max-w-[1650px] mx-auto px-14 xl:px-20 py-28">

        <div className="grid grid-cols-1 md:grid-cols-[0.45fr_0.55fr] gap-20 items-start">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center border border-neutral-300 px-5 py-1 rounded-md text-xs text-neutral-700 mb-8">
              About Us
            </div>

            <h2 className="text-[32px] md:text-[36px] xl:text-[40px] font-normal leading-[1.15] tracking-[-0.015em] text-neutral-900">
              Embedded Manufacturing
              <br />
              Control Structure
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-2xl text-[18px] leading-[1.7] text-neutral-600">

            <p className="mb-6">
              An operational structure embedded within the production ecosystem,
              coordinating sourcing, sampling, manufacturing, and inspection
              under one accountable system.
            </p>

            <p>
              Factories are supervised directly, quality is controlled through
              AQL-based inspections, and global logistics are managed from
              production floor to final delivery.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

 
function Achievements() {
  return (
    <section className="bg-white">

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
          <div className="bg-neutral-100 rounded-xl p-10 min-h-[420px] flex flex-col justify-between">

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
    <section className="bg-white">
      <div className="max-w-[1600px] mx-auto px-10 xl:px-16 py-32">

        {/* HEADER */}
        <div className="mb-24 max-w-3xl">
          <div className="inline-flex items-center border border-neutral-300 px-5 py-1 rounded-md text-xs text-neutral-700 mb-8">
            Services
          </div>

          <h2 className="text-[42px] leading-[1.1] tracking-[-0.015em] text-neutral-900">
            Structured Manufacturing Divisions
          </h2>
        </div>

        {/* INDUSTRIAL FRAME */}
        <div className="relative border border-neutral-200 rounded-2xl overflow-hidden">

          {/* subtle diagonal structural motif */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
            <div className="w-full h-full bg-[repeating-linear-gradient(135deg,#000_0px,#000_1px,transparent_1px,transparent_28px)]" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT DIVISION */}
            <div className="p-16 lg:border-r border-neutral-200 flex flex-col justify-between min-h-[480px]">

              <div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
                  Division 01
                </div>

                <h3 className="text-[32px] font-normal text-neutral-900 mb-8">
                  Fashion Manufacturing
                </h3>

                <p className="text-[18px] leading-[1.7] text-neutral-600 max-w-xl">
                  Resortwear, activewear, modest fashion, and capsule collections.
                  Technical preparation, sampling, production, trims, AQL-based
                  quality control, and global logistics managed under one
                  operational structure.
                </p>
              </div>

              <div className="mt-16">
                <a
                  href="/fashion-manufacturing"
                  className="inline-flex items-center gap-4 text-sm font-medium text-neutral-900 transition hover:text-black"
                >
                  Explore Division
                  <span className="w-10 h-10 border border-neutral-300 rounded-lg flex items-center justify-center transition hover:bg-black hover:text-white">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT DIVISION */}
            <div className="p-16 flex flex-col justify-between min-h-[480px]">

              <div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
                  Division 02
                </div>

                <h3 className="text-[32px] font-normal text-neutral-900 mb-8">
                  Luxury Packaging
                </h3>

                <p className="text-[18px] leading-[1.7] text-neutral-600 max-w-xl">
                  Rigid boxes, perfume packaging, premium paper structures,
                  inserts, and advanced finishing including soft-touch lamination,
                  foil stamping, embossing, and Pantone-controlled production.
                </p>
              </div>

              <div className="mt-16">
                <a
                  href="/luxury-packaging"
                  className="inline-flex items-center gap-4 text-sm font-medium text-neutral-900 transition hover:text-black"
                >
                  Explore Division
                  <span className="w-10 h-10 border border-neutral-300 rounded-lg flex items-center justify-center transition hover:bg-black hover:text-white">
                    →
                  </span>
                </a>
              </div>
            </div>

          </div>
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
      image: "https://alraimigroup.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-07-at-2.06.16-PM.jpeg",
      quote: `Used for over a year now for our brand and is one of the best things we ever did! The Customer service is top not, fast replies at pretty much anytime of day and always fighting on our behalf to get the best rates so that no one else can match or beat us. Really grateful to have the team onboard helping us and fueling the fire for our brands on the backend. Highly recommend using if you want to source and find and sell any product throughout China!`
    },
    {
      name: "Qusai Abuhejleh",
      role: "Construction Supplier · Qatar",
      image: "https://alraimigroup.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-26-at-4.17.18-PM.jpeg",
      quote: `"I am extremely pleased with my experience with [Alraimi business group ]. As a businessman in Qatar, sourcing high-quality interior materials can be challenging, but they made the process smooth and efficient. The materials, manufactured in China, are of exceptional quality, allowing me to complete my projects without delays. The customer service was outstanding; the team was always available to answer my questions and provided regular updates. I highly recommend [Alraimi business group ] to anyone in need of reliable materials and excellent support. They truly care about their clients!"`
    },
    {
      name: "Gehad Mayas",
      role: "Solace Development · Bali",
      image: "https://alraimigroup.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-05-at-5.03.21-PM.jpeg",
      quote: `"As the owner of a Solace development company in Bali, I can confidently say that Alraimi business group is exceptional. Their interior materials, manufactured in China, are top-notch and always exceed my expectations. What truly impresses me is their outstanding customer service. The team is responsive and attentive, ensuring that every detail is perfect. My orders arrive on time and in great condition, which is vital for my projects. I highly recommend Alraimi business group to anyone seeking reliable suppliers of quality materials."`
    },
    {
      name: "Kamilia",
      role: "Fashion Brand Owner · Dubai",
      image: "https://alraimigroup.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-07-at-12.31.23-PM.jpeg",
      quote: `I own a women’s clothing brand in Dubai and we’ve been working with Alraimi Group for the past 2 years. Extremely satisfied with their work as we’ve always had smooth communication, no production issues or delays, samples are always done quickly! They are very good at communication which means nothing is missed out on and it reduces a lot of potential mistakes. These are very important things when it comes to a clothing brand production - and I’m very happy for being able to find such amazing suppliers!`
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
    <section className="bg-white">
      <div className="max-w-[1600px] mx-auto px-10 xl:px-16 py-32">

        {/* HEADER */}
<div className="mb-24 max-w-full flex flex-col items-center text-center">

<div className="inline-flex items-center border border-neutral-300 px-5 py-1 rounded-md text-xs tracking-wide text-neutral-600 mb-8">
  Testimonials
</div>

<h2 className="text-[42px] leading-[1.1] tracking-[-0.015em] text-neutral-900 max-w-3xl">
  Trusted By Businesses Worldwide
</h2>

</div>


        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.2fr] gap-20 items-center">

          {/* LEFT — PHOTO */}
          <div>
            <div className="rounded-2xl overflow-hidden border border-neutral-200">
              <img
                src={active.image}
                alt={active.name}
                className="w-full h-[560px] object-cover"
              />
            </div>
          </div>

          {/* RIGHT — QUOTE */}
          <div className="relative">

            {/* Decorative Quote */}
            <div className="absolute -top-10 -left-6 text-[160px] text-neutral-100 leading-none select-none">
              “
            </div>

            <p className="text-[18px] xl:text-[20px] leading-[1.55] text-neutral-700 relative z-10 whitespace-pre-line">
              {active.quote}
            </p>

            {/* Name + Role + Navigation */}
            <div className="mt-16 border-t border-neutral-200 pt-8 flex items-end justify-between">

              <div>
                <p className="text-[20px] font-medium text-neutral-900">
                  {active.name}
                </p>
                <p className="text-sm text-neutral-500 mt-1">
                  {active.role}
                </p>
              </div>

              {/* Navigation — moved right bottom */}
              <div className="flex gap-3">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 border border-neutral-300 rounded-lg flex items-center justify-center text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition"
                >
                  ←
                </button>

                <button
                  onClick={nextSlide}
                  className="w-10 h-10 border border-neutral-300 rounded-lg flex items-center justify-center text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition"
                >
                  →
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}


 







function Footer() {
  return (
    <div className="bg-white pt-28 overflow-hidden">
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