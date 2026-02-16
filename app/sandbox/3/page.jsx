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
      transition: { staggerChildren: 0.08 },
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
    <section className="relative bg-white text-black overflow-hidden">
      {/* ================= HEADER ================= */}
      <div className="mx-auto max-w-7xl px-6 pt-8">
        <motion.header
          variants={item}
          initial="hidden"
          animate="show"
          className="flex items-center justify-between border-b border-neutral-200 pb-6"
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/images/alraimi-logo-white-1.png"
              alt="Logo"
              width={48}
              height={40}
              priority
              className="invert"
            />
          </Link>

          <nav className="hidden items-center gap-10 text-sm text-neutral-600 md:flex">
            <Link href="/">Home</Link>
            <Link href="/fashion-manufacturing">
              Fashion Manufacturing
            </Link>
            <Link href="/luxury-packaging">
              Luxury Packaging
            </Link>
            <Link href="#contact">Contact</Link>
          </nav>

          <button className="hidden md:block bg-black px-6 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition">
            Get Your PI →
          </button>
        </motion.header>
      </div>

      {/* ================= TOP SPLIT ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-6 pt-20 pb-16 grid lg:grid-cols-2 gap-16 items-start"
      >
        {/* LEFT CONTENT */}
        <motion.div variants={item}>
          <div className="inline-flex items-center border border-neutral-300 px-4 py-1 text-xs text-neutral-600">
            China-Based Factory Partner
          </div>

          <h1 className="mt-8 text-[52px] leading-[1.05] font-semibold tracking-tight md:text-[72px]">
            Smarter Production.
            <br />
            Simplified.
          </h1>

          <p className="mt-8 text-lg text-neutral-600 leading-relaxed max-w-xl">
            We translate your brand into factory-ready execution —
            managing sampling, production, AQL inspection,
            and international delivery under one accountable structure.
          </p>
        </motion.div>

        {/* RIGHT GEOMETRIC PANEL */}
        <motion.div variants={item} className="relative h-[260px] lg:h-[320px]">
          <div className="absolute inset-0 bg-neutral-100" />

          {/* geometric split */}
          <div className="absolute inset-0">
            <div className="absolute right-0 top-0 h-full w-1/2 bg-black" />
            <div className="absolute left-0 bottom-0 h-1/2 w-full bg-neutral-200" />
          </div>
        </motion.div>
      </motion.div>

      {/* ================= IMAGE SECTION ================= */}
      <div className="relative mt-10">
        <div className="relative h-[560px] w-full">
          <Image
            src="https://i.pinimg.com/736x/de/ef/39/deef39f72f889cdf21b163bcf66c3498.jpg"
            alt="Factory Warehouse"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
        </div>

        {/* FLOATING CARD (LIKE REFERENCE) */}
        <div className="absolute right-8 top-12 max-w-md bg-white shadow-xl border border-neutral-200 p-8">
          <p className="text-neutral-700 leading-relaxed">
            Real-time production visibility, standardized AQL inspection,
            and structured global shipping across your entire supply chain.
          </p>

          <button className="mt-6 bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition">
            Start Production Inquiry →
          </button>
        </div>
      </div>

      {/* ================= METRICS ================= */}
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 border-t border-neutral-200">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {[
            { title: "20+", desc: "Verified Factory Partners" },
            { title: "AQL", desc: "Inspection Standard" },
            { title: "DDP", desc: "Door-to-Door Delivery" },
            { title: "End-to-End", desc: "Sampling to Shipment" },
          ].map((metric, i) => (
            <motion.div key={i} variants={item}>
              <p className="text-3xl font-semibold">{metric.title}</p>
              <p className="mt-2 text-sm text-neutral-600">
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ================= TRUST LOGOS ================= */}
      <div className="border-t border-neutral-200 py-14">
        <p className="text-center text-sm uppercase tracking-wide text-neutral-500 mb-10">
          Trusted by global brands
        </p>

        <div className="flex flex-wrap justify-center gap-12 text-3xl text-neutral-400">
          {brandIcons.map((Icon, index) => (
            <Icon
              key={index}
              className="transition duration-300 hover:text-black"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

 