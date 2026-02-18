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
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

import { motion, useScroll, useTransform } from "framer-motion";


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
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const q = self.selector;

      // =============================
      // INITIAL STATES
      // =============================

      gsap.set(q(".image-reveal"), {
        scaleY: 0,
        transformOrigin: "bottom",
      });

      // 👇 TAG BLUR INITIAL
      gsap.set(q(".tag-reveal"), {
        opacity: 0,
        filter: "blur(8px)",
        y: 8,
      });

      // 👇 DESC BLUR INITIAL
      gsap.set(q(".desc-reveal"), {
        opacity: 0,
        filter: "blur(12px)",
        y: 12,
      });

      // =============================
      // SPLIT HEADLINE
      // =============================

      const split = new SplitText(q(".headline"), {
        type: "lines,words",
        linesClass: "line-wrapper",
      });

      gsap.set(q(".line-wrapper"), {
        overflow: "hidden",
      });

      gsap.set(split.words, {
        yPercent: 105,
      });

      const tl = gsap.timeline();

      // =============================
      // HEADLINE REVEAL
      // =============================

      tl.to(split.words, {
        yPercent: 0,
        stagger: 0.07,
        duration: 0.9,
        ease: "power2.out",
      });

      // =============================
      // SESSION 2
      // =============================

      const start = 0.9;
      const easeClean = "power2.out";

      tl.from(
        q(".header-reveal"),
        {
          y: -16,
          opacity: 0,
          duration: 0.8,
          ease: easeClean,
        },
        start
      );

      // 👇 TAG BLUR REVEAL
      tl.to(
        q(".tag-reveal"),
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.9,
          ease: easeClean,
        },
        start + 0.05
      );

      // 👇 DESC BLUR REVEAL
      tl.to(
        q(".desc-reveal"),
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          ease: easeClean,
        },
        start + 0.08
      );

      tl.from(
        q(".cta-reveal"),
        {
          y: 8,
          opacity: 0,
          duration: 0.7,
          ease: easeClean,
        },
        start + 0.1
      );

      tl.to(
        q(".image-reveal"),
        {
          scaleY: 1,
          duration: 1,
          ease: easeClean,
        },
        start + 0.06
      );

      tl.from(
        q(".metric-item"),
        {
          y: 16,
          opacity: 0,
          stagger: 0.06,
          duration: 0.8,
          ease: easeClean,
        },
        start + 0.12
      );

      tl.from(
        q(".logo-item"),
        {
          opacity: 0,
          stagger: 0.05,
          duration: 0.7,
          ease: easeClean,
        },
        start + 0.16
      );

      return () => {
        split.revert();
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const brandIcons = [
    FaApple,
    FaAmazon,
    FaGoogle,
    FaMicrosoft,
    FaFacebook,
    FaShopify,
  ];

  return (
    <section
      ref={heroRef}
      className="relative bg-[#1c1c1c] text-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24">
        <header className="header-reveal flex items-center justify-between border-b border-white/10 pb-6">
          <Link href="/">
            <Image
              src="/images/alraimi-logo-white-1.png"
              alt="Logo"
              width={44}
              height={38}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm text-white/70">
            <Link href="/">Home</Link>
            <Link href="/fashion-manufacturing">
              Fashion Manufacturing
            </Link>
            <Link href="/luxury-packaging">
              Luxury Packaging
            </Link>
            <Link href="#contact">Contact</Link>
          </nav>

          <button className="hidden md:block border border-white/30 px-6 py-2 text-sm font-medium">
            Get Your PI →
          </button>
        </header>

        <div className="mt-20 max-w-3xl">
          <div className="tag-reveal inline-flex items-center border border-white/20 px-4 py-1 text-xs text-white/70 mb-8">
            China-Based Factory Partner
          </div>

          <h1 className="headline text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
            Build Products.
            <br />
            Remove the Risk.
          </h1>

          <p className="desc-reveal mt-8 text-lg text-white/70 leading-relaxed">
            We represent your brand inside China — managing sampling,
            production, inspection, and global delivery under one accountable structure.
          </p>

          <div className="cta-reveal mt-12 flex gap-6">
            <button className="bg-white text-[#4b4c3e] px-8 py-3 text-sm font-medium">
              Start Production Inquiry →
            </button>

            <button className="border border-white/30 px-8 py-3 text-sm text-white/70">
              View Process
            </button>
          </div>
        </div>
      </div>

      <div className="image-reveal relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://i.pinimg.com/736x/de/ef/39/deef39f72f889cdf21b163bcf66c3498.jpg"
          alt="Factory warehouse"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { title: "20+", desc: "Verified Factory Partners" },
            { title: "AQL", desc: "Inspection Standard" },
            { title: "DDP", desc: "Door-to-Door Delivery" },
            { title: "End-to-End", desc: "Sampling to Shipment" },
          ].map((metric, i) => (
            <div key={i} className="metric-item">
              <p className="text-3xl font-semibold">{metric.title}</p>
              <p className="mt-2 text-sm text-white/50">{metric.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 py-16 text-center">
        <p className="mb-10 text-xs tracking-widest text-white/40 uppercase">
          Trusted by global brands
        </p>

        <div className="flex flex-wrap justify-center gap-14 text-3xl text-white/30">
          {brandIcons.map((Icon, index) => (
            <div key={index} className="logo-item">
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

 