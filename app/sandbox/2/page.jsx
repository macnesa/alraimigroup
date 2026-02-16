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
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative bg-[#0f1115] text-white overflow-hidden">
   
      
         {/* subtle industrial noise */}
         <div className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay bg-[url('/images/noise.png')]" />

{/* subtle blue structural glow (NOT SaaS glow) */}
<div className="absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 bg-blue-600/10 blur-[140px] pointer-events-none" />


      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-7xl px-6 pt-10 pb-32"
      >
        {/* HEADER */}
        <motion.header
          variants={item}
          className="flex items-center justify-between border-b border-white/10 pb-6"
        >
          <Link href="/">
            <Image
              src="/images/alraimi-logo-white-1.png"
              alt="Logo"
              width={44}
              height={38}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm text-neutral-400">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link
              href="/fashion-manufacturing"
              className="hover:text-white transition"
            >
              Fashion Manufacturing
            </Link>
            <Link
              href="/luxury-packaging"
              className="hover:text-white transition"
            >
              Luxury Packaging
            </Link>
            <Link href="#contact" className="hover:text-white transition">
              Contact
            </Link>
          </nav>

          <button className="hidden md:block border border-white/30 px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition">
            Get Your PI →
          </button>
        </motion.header>

        {/* HERO GRID */}
        <div className="mt-24 grid gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
          {/* LEFT */}
          <div>
            <motion.div
              variants={item}
              className="inline-flex items-center gap-3 text-xs tracking-wide uppercase text-neutral-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              China-Based Factory Operator
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-8 text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight"
            >
              Build Products.
              <br />
              <span className="text-blue-500">
                Remove the Risk.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-lg text-neutral-400 leading-relaxed"
            >
              We manage sampling, production, AQL inspection,
              and global shipping under one accountable structure.
            </motion.p>

            <motion.div variants={item} className="mt-12 flex gap-6">
              {/* Primary CTA (ONLY strong blue element) */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-sm font-medium transition">
                Start Production Inquiry →
              </button>

              <button className="border border-white/20 px-8 py-3 text-sm text-neutral-300 hover:border-white hover:text-white transition">
                View Process
              </button>
            </motion.div>
          </div>

          {/* RIGHT IMAGE BLOCK */}
          <motion.div variants={item} className="relative">
            <div className="relative overflow-hidden border border-white/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://i.pinimg.com/736x/de/ef/39/deef39f72f889cdf21b163bcf66c3498.jpg"
                  alt="Factory production"
                  fill
                  className="object-cover grayscale contrast-110"
                />
              </div>
            </div>

            {/* Industrial info strip — neutral only */}
            <div className="absolute -bottom-10 left-0 right-0 mx-auto w-[92%] bg-[#14161b] border border-white/10 px-6 py-6">
              <div className="grid grid-cols-3 text-sm">
                <div>
                  <p className="text-neutral-500">Quality</p>
                  <p className="mt-1 font-medium">
                    AQL Inspection
                  </p>
                </div>
                <div>
                  <p className="text-neutral-500">Logistics</p>
                  <p className="mt-1 font-medium">
                    DDP / FOB Shipping
                  </p>
                </div>
                <div>
                  <p className="text-neutral-500">Coverage</p>
                  <p className="mt-1 font-medium">
                    Global Delivery
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* METRICS (neutral, no blue spam) */}
        <motion.div
          variants={item}
          className="mt-40 grid grid-cols-1 gap-12 border-t border-white/10 pt-16 md:grid-cols-4"
        >
          {[
            { title: "20+", desc: "Verified Factory Partners" },
            { title: "AQL", desc: "Inspection Standard" },
            { title: "DDP", desc: "Door-to-Door Delivery" },
            { title: "End-to-End", desc: "Sampling to Shipment" },
          ].map((metric, i) => (
            <div key={i}>
              <p className="text-3xl font-semibold">
                {metric.title}
              </p>
              <p className="mt-2 text-sm text-neutral-500">
                {metric.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* TRUST LOGOS */}
        <motion.div variants={item} className="mt-20 text-center">
          <p className="mb-10 text-xs tracking-widest text-neutral-600 uppercase">
            Trusted by global brands
          </p>

          <div className="flex flex-wrap justify-center gap-14 text-3xl text-white/30">
            {brandIcons.map((Icon, index) => (
              <motion.div key={index} variants={item}>
                <Icon className="hover:text-white transition duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


 