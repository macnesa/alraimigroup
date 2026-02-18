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
      <Footer />
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
          <div className="relative bg-black text-white rounded-xl p-10 min-h-[420px] overflow-hidden flex flex-col justify-between">

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
          <div className="bg-neutral-100 rounded-xl p-10 min-h-[420px] flex flex-col justify-between">

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

function Footer() {
  return (
    <div className="bg-white pt-24 overflow-hidden">
      {/* =====================================================
          CTA SECTION
      ===================================================== */}
      <div className="max-w-7xl mx-auto px-6 mb-28">
        <div className="relative rounded-3xl overflow-hidden min-h-[550px] flex items-end">
          
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1742281694367-30557c03d0a1?q=80&w=2340&auto=format&fit=crop"
            alt="Factory production"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

          {/* Content */}
          <div className="relative z-10 w-full px-12 pb-20 pt-32 md:px-20 grid md:grid-cols-[1.3fr_1fr] items-end">
            
            {/* Left */}
            <div className="max-w-3xl text-white">
              <h2 className="text-5xl md:text-6xl font-normal leading-tight tracking-tight">
                Ready to Move at Global Scale?
              </h2>
            </div>

            {/* Right */}
            <div className="md:ml-auto max-w-sm text-white/90 mt-10 md:mt-0">
              <p className="mb-6 text-base leading-relaxed">
              End-to-end execution inside China covering production, inspection, and international delivery.
              </p>

              <button className="group flex items-center gap-3 bg-white text-black px-8 py-3 rounded-lg font-medium transition hover:bg-gray-200">
                Get Started
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white text-sm transition group-hover:translate-x-1">
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
      <footer className="relative max-w-7xl mx-auto px-6 pb-20">
         
        {/* Main Grid */}
        <div className="relative grid md:grid-cols-4 gap-16 border-b border-gray-200 pb-16">
          
          {/* Brand */}
          <div>
            <h3 className="font-semibold text-lg text-black mb-6">
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
                  className="group w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition hover:bg-black hover:border-black cursor-pointer"
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
            <h4 className="text-xs font-semibold tracking-wider text-black uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="hover:text-black transition cursor-pointer">About Us</li>
              <li className="hover:text-black transition cursor-pointer">Careers</li>
              <li className="hover:text-black transition cursor-pointer">Blog</li>
              <li className="hover:text-black transition cursor-pointer">News & Updates</li>
              <li className="hover:text-black transition cursor-pointer">Partners</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-black uppercase mb-5">
              Resources
            </h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="hover:text-black transition cursor-pointer">Help Center</li>
              <li className="hover:text-black transition cursor-pointer">FAQs</li>
              <li className="hover:text-black transition cursor-pointer">Shipping Calculator</li>
              <li className="hover:text-black transition cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-black transition cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-black uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-4 text-gray-500 text-sm leading-relaxed">
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
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} All Right Reserved</p>

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