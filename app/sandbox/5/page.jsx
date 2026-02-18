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
      <FinalCTA />
    </main>
  );
}






/* =========================
   SECTIONS
========================= */
function Hero() {
  return (
    <section className="bg-white px-6 pt-6 pb-14">

      <div className="relative w-full max-w-[1650px] mx-auto h-[92vh] overflow-hidden rounded-[20px]">

        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.82] contrast-[1.05]"
          src="https://www.pexels.com/id-id/download/video/5488780/"
        />

        {/* HEADER */}
        <div className="relative z-20 px-14 xl:px-20">
          <header className="flex items-center justify-between py-6 text-white">

            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/alraimi-logo-white-1.png"
                alt="Logo"
                width={42}
                height={38}
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-14 text-sm text-white/85">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <Link href="/fashion-manufacturing" className="hover:text-white transition">Fashion</Link>
              <Link href="/luxury-packaging" className="hover:text-white transition">Packaging</Link>
              <Link href="#contact" className="hover:text-white transition">Contact</Link>
            </nav>

            <Link
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-neutral-200 transition"
            >
              Get Your PI
              <FaArrowRight className="text-xs" />
            </Link>

          </header>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 px-14 xl:px-20 pt-16">

          <div className="max-w-4xl">

            <div className="inline-flex items-center border border-white/40 bg-white/10 px-4 py-1 rounded-md text-xs text-white mb-10">
              China-Based Factory Partner
            </div>

            <h1 className="text-[44px] md:text-[54px] xl:text-[65px] font-normal leading-[1.06] tracking-[-0.02em] text-white">
              Build Products.
              <br />
              Remove the Risk.
            </h1>

            <p className="mt-7 text-[17px] font-normal text-white/85 leading-relaxed max-w-lg">
              We represent your brand inside China — managing sampling,
              production, inspection, and global delivery under one accountable structure.
            </p>

          </div>
        </div>

        {/* CTA BOTTOM LEFT */}
        <div className="absolute bottom-12 left-14 xl:left-20 z-10">
          <button className="bg-white text-black px-8 py-3 rounded-md text-sm font-medium hover:bg-neutral-200 transition flex items-center gap-2 shadow-md">
            Start Your Brand
            <FaArrowRight className="text-xs" />
          </button>
        </div>

        {/* FLOATING POPUP — FIXED */}
        <div className="absolute bottom-10 right-14 xl:right-20 z-20 bg-white text-black rounded-[18px] shadow-[0_15px_30px_rgba(0,0,0,0.12)] w-[380px]">

          <div className="flex items-stretch">

            {/* LEFT CONTENT */}
            <div className="flex-1 p-5">
 

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
                src="https://images.unsplash.com/photo-1589793463357-5fb813435467?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Ganti dengan gambar asli lo
                alt="Preview"
                fill
                className="object-cover rounded-r-[18px]"
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

      <div className="max-w-[1650px] mx-auto px-14 xl:px-20 py-32">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE */}
          <div>

            <div className="inline-flex items-center border border-black/40 px-4 py-1 rounded-md text-xs text-black mb-3">
              About Us
            </div>

            <h2 className="text-[42px] md:text-[50px] xl:text-[56px] font-normal leading-[1.08] tracking-[-0.02em] text-neutral-900 max-w-md">
              A Reliable Partner
              <br />
              Inside China
            </h2>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-end">

            <div className="max-w-lg text-[18px] leading-relaxed text-neutral-700">

              <p>
                Working with factories in China can feel distant and hard to control.
                We stand in between — on the ground, close to production, and aligned
                with your expectations. We stay involved from early samples to final shipment,
                making sure what is agreed is what gets produced. You stay focused on your brand.
                We stay focused on making it right.
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
    <section className="bg-white">

      <div className="max-w-[1650px] mx-auto px-14 xl:px-20 pb-32">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* CARD 1 — DARK PRIMARY */}
          <div className="relative bg-black text-white rounded-3xl p-10 min-h-[420px] overflow-hidden flex flex-col justify-between">

            {/* Decorative ring */}
            <div className="absolute top-6 right-6 w-28 h-28 border border-white/10 rounded-full" />
            <div className="absolute top-10 right-10 w-20 h-20 border border-white/5 rounded-full" />

            <div>
              <div className="text-xs uppercase tracking-widest text-white/40 mb-6">
                Manufacturing Presence
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
          <div className="relative rounded-3xl overflow-hidden min-h-[420px]">

            <img
              src="https://i.pinimg.com/736x/54/f4/2e/54f42ecca183ef520ac99eb2e0a9292a.jpg"
              alt="Factory"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 p-10 h-full flex flex-col justify-between text-white">

              <div>
                <div className="text-xs uppercase tracking-widest text-white/60 mb-6">
                  Delivery Volume
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
          <div className="bg-neutral-100 rounded-3xl p-10 min-h-[420px] flex flex-col justify-between">

            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
                Production Output
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