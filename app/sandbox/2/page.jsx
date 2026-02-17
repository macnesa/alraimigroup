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


 