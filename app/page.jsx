"use client"
import Image from "next/image";
import Link from 'next/link'
import React, { useRef, useEffect, useState, useCallback, useLayoutEffect} from "react";
import { 
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
  Repeat,
  ArrowUpRight,
  ArrowRight,
  Plus,
  X,
  Download,
  Quote
} from "lucide-react"


import useEmblaCarousel from "embla-carousel-react"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame } from "framer-motion";



import Footer from '../components/organisms/Footer'

export default function Home() {
  return (
    <main className="bg-white text-neutral-100">
      <Hero />
      <ClientsMarquee/>
      <About/>
      <Achievements/>
      <HowWeWork/>
      <Services/>
      <Catalogs/>
      <Projects/>
      <Leadership/>
      <Gallery/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </main> 
  );
}


function Hero() {

  const heroRef = useRef(null)

  const cloudinaryTransform = (url) => {
    return url.replace(
      "/upload/",
      "/upload/f_auto,q_auto,c_fill,w_2000/"
    )
  }

  const heroImage = "https://res.cloudinary.com/djgu1bhef/image/upload/v1772983520/hero-bgg_omvkvt.png"

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
      })

      gsap.fromTo(
        ".hero-bg",
        { scale: 1.05 },
        { scale: 1, duration: 1.4, ease: "power3.out" }
      )

      gsap.fromTo(
        ".hero-overlay",
        { opacity: 0.8 },
        { opacity: 1, duration: 0.8 }
      )

      tl.to(".hero-header",
        { opacity: 1, y: 0, duration: 0.45 }
      )

      tl.to(".hero-nav-item",
        { opacity: 1, stagger: 0.08, duration: 0.45 },
        "-=0.25"
      )

      tl.fromTo(".hero-poni",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.45 },
        "-=0.15"
      )

      tl.fromTo(".hero-title-line",
        { yPercent: 100 },
        { yPercent: 0, stagger: 0.12, duration: 0.7 },
        "+=0.1"
      )

      tl.fromTo(".hero-sub",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.45 },
        "-=0.3"
      )

      tl.fromTo(".hero-cta",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.45 },
        "-=0.25"
      )

    }, heroRef)

    return () => ctx.revert()

  }, [])


  return (

    <>
      <style jsx>{`
.hero-section-bg {
  background: linear-gradient(
    to bottom,
    rgba(140,122,91,0.55) 0%,
    rgba(140,122,91,0.25) 8%,
    rgba(140,122,91,0.12) 16%,
    rgba(140,122,91,0.05) 22%,
    rgba(140,122,91,0) 25%
  );
  background-color: #ffffff;
}
      `}</style>


      <section
        ref={heroRef}
        className="hero-section-bg text-white pt-[8px]"
      >

        {/* NAV */}

        <header className="hero-header mx-[8px] text-black opacity-0 -translate-y-[20px]">

          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 py-5 flex items-center justify-between">

            <Link href="/" className="flex items-center">

              <Image
                src="/images/alraimi-logo-black-1.png"
                alt="Alraimi Logo"
                width={42}
                height={38}
                priority
              />

            </Link>

            <nav className="flex items-center gap-6 md:gap-10 text-sm text-neutral-700">

              <Link href="/" className="hero-nav-item opacity-0 hover:text-black transition-colors duration-300">
                Home
              </Link>

              <Link href="/fashion-manufacturing" className="hero-nav-item opacity-0 hover:text-black transition-colors duration-300">
                Fashion
              </Link>

              <Link href="/luxury-packaging" className="hero-nav-item opacity-0 hover:text-black transition-colors duration-300">
                Packaging
              </Link>

              <Link href="/contact" className="hero-nav-item opacity-0 hover:text-black transition-colors duration-300">
                Contact
              </Link>

            </nav>

            <Link
              href="/contact#get-pi"
              className="hidden md:inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium bg-[#8C7A5B] text-white hover:bg-[#7A6A4E] transition"
            >
              Get Your PI
              <FaArrowRight className="text-xs" />
            </Link>

          </div>

        </header>


        {/* HERO */}

        <div className="px-[8px] pt-[8px]">

          <div className="rounded-2xl overflow-hidden min-h-[96svh] relative">

            {/* BACKGROUND */}

            <div className="absolute inset-0">

              <Image
                src={cloudinaryTransform(heroImage)}
                alt="Manufacturing oversight in China"
                fill
                priority
                sizes="100vw"
                className="object-cover hero-bg"
                style={{ objectPosition: "70% center" }}
              />

              <div className="absolute inset-0 bg-black/35 hero-overlay" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

            </div>


            {/* CONTENT */}

            <div className="relative z-10 flex flex-col min-h-[96svh] max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16">

              <div className="flex-1 flex items-center pb-12 md:pb-0">

                <div className="w-full">

                  <div className="hero-poni inline-flex items-center px-4 py-1.5 rounded-md text-[11px] sm:text-xs tracking-[0.18em] mb-6 sm:mb-8 border border-white/30 bg-white/10 uppercase">
                    Global Manufacturing Partner
                  </div>

                  <h1
                    className="font-light leading-[1.05] tracking-[-0.02em] mb-6 sm:mb-8"
                    style={{ fontSize: "clamp(38px, 5vw, 64px)" }}
                  >

                    <div className="overflow-hidden">
                      <div className="hero-title-line">Build Your Brand</div>
                    </div>

                    <div className="overflow-hidden">
                      <div className="hero-title-line">Remove Manufacturing Risk</div>
                    </div>

                    <div className="overflow-hidden">
                      <div className="hero-title-line text-[#8C7A5B]">
                        Delivered Worldwide
                      </div>
                    </div>

                  </h1>

                  <p
                    className="hero-sub text-white/75 leading-[1.7] mb-8 sm:mb-12 max-w-2xl"
                    style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}
                  >

                    Premium fashion manufacturing and luxury paper packaging —
                    one accountable team from sample to door-to-door shipment.

                  </p>

                  <div className="hero-cta flex flex-col sm:flex-row gap-4 sm:gap-8">

                    <Link
                      href="/contact#start-brand"
                      className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-neutral-200 transition"
                    >
                      Start Your Brand
                      <FaArrowRight className="text-xs" />
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  )

}



function ClientsMarquee() {

  const trackRef = useRef(null)
  const x = useMotionValue(0)
  const segmentWidthRef = useRef(0)

  const logos = [
    "/clients/1-1-removebg-preview.png",
    "/clients/3-removebg-preview.png",
    "/clients/12-removebg-preview.png",
    "/clients/7-removebg-preview.png",
    "/clients/11-removebg-preview.png",
    "/clients/2-removebg-preview.png",
    "/clients/4-removebg-preview.png",
    "/clients/5-removebg-preview.png",
    "/clients/6-removebg-preview.png",
    "/clients/8-removebg-preview.png",
    "/clients/9-removebg-preview.png",
    "/clients/10-removebg-preview.png",
    "/clients/13-removebg-preview.png",
    "/clients/14-removebg-preview.png",
    "/clients/VHD-white.png",
  ]

  const duplicated = [...logos, ...logos]


  useLayoutEffect(() => {

    const el = trackRef.current
    if (!el) return

    const measure = () => {
      const total = el.scrollWidth
      if (!total) return
      segmentWidthRef.current = total / 2
    }

    measure()

    const ro = new ResizeObserver(measure)
    ro.observe(el)

    window.addEventListener("resize", measure)

    return () => {
      ro.disconnect()
      window.removeEventListener("resize", measure)
    }

  }, [])



  useAnimationFrame((_, delta) => {

    const segmentWidth = segmentWidthRef.current
    if (!segmentWidth) return

    const speed = 40

    let next = x.get() - (speed * delta) / 1000

    if (next <= -segmentWidth) {
      next += segmentWidth
    }

    x.set(next)

  })



  return (

    <section className="bg-[#F3F2EF] pt-[8px]">

      <div className="px-[8px]">

        <div className="bg-white border border-neutral-200 rounded-2xl">

          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 py-14 md:py-16 text-center">

            <div className="text-xs tracking-[0.18em] uppercase text-neutral-600 mb-8">
              Trusted by
            </div>


            <div className="relative max-w-[1050px] mx-auto overflow-hidden">

              {/* fade kiri */}

              <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />

              {/* fade kanan */}

              <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />


              <motion.div
                ref={trackRef}
                style={{ x }}
                className="flex items-center"
              >

                {duplicated.map((logo, index) => (

                  <div
                    key={index}
                    className="flex-shrink-0 mx-12 flex items-center justify-center"
                  >

                    <Image
                      src={logo}
                      alt="Client logo"
                      width={240}
                      height={120}
                      className="object-contain h-24 w-auto invert opacity-80"
                    />

                  </div>

                ))}

              </motion.div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}


function About() {

  const sectionRef = useRef(null)

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        defaults: { ease: "power2.out" },
      })

      tl.from(".about-card", { opacity: 0, y: 40, stagger: 0.15, duration: 0.8 })

      tl.from(".about-poni", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")

      tl.from(".about-title-line", { yPercent: 100, stagger: 0.12, duration: 0.9 }, "-=0.3")

      tl.from(".about-divider", { scaleX: 0, transformOrigin: "left center", duration: 0.7 }, "-=0.5")

      tl.from(".about-paragraph", { opacity: 0, y: 20, stagger: 0.08, duration: 0.7 }, "-=0.4")

    }, sectionRef)

    return () => ctx.revert()

  }, [])

  return (

    <section ref={sectionRef} className="bg-[#F3F2EF] pt-[8px]">

      <div className="px-[8px]">

        <div className="grid grid-cols-1 md:grid-cols-[0.45fr_0.55fr] gap-[8px]">

          {/* LEFT CARD */}

          <div className="about-card rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(0,0,0,0.04)] px-10 md:px-14 py-20 md:py-28 flex flex-col justify-end" style={{ background: "radial-gradient(circle at 25% 25%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 40%, rgba(245,243,239,1) 100%)" }}>

            <div className="max-w-[720px]">

              <div className="about-poni inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-10">
                About
              </div>

              <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900 mb-10">

                <div className="overflow-hidden">
                  <div className="about-title-line">
                    From Concept
                  </div>
                </div>

                <div className="overflow-hidden">
                  <div className="about-title-line">
                    to Global Delivery
                  </div>
                </div>

              </h2>

              <div className="about-divider h-[1px] w-24 bg-neutral-300" />

            </div>

          </div>



          {/* RIGHT CARD */}

          <div className="about-card rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(0,0,0,0.04)] px-10 md:px-14 py-20 md:py-28 bg-white flex flex-col justify-start">

            <div className="max-w-[760px] text-[16px] sm:text-[18px] leading-[1.7] text-neutral-700">

              <p className="about-paragraph mb-8">
                Alraimi Business Group is a China-based manufacturing partner for premium brands. We produce fashion and luxury paper packaging, managing the full workflow from sampling and production to quality control and international shipping.
              </p>

              <p className="about-paragraph mb-10">
                Brands work with us because they want one accountable team on the factory side—clear specs, stable quality, and reliable delivery so brands are not left navigating factories, timelines, or supplier communication alone.
              </p>

              <div className="about-paragraph text-sm text-neutral-500">
                Sampling • Production • AQL Inspection • EXW / FOB / DDP Shipping
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}


function Achievements() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".achievement-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        scale: 0.99,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });

      document.querySelectorAll(".count-number").forEach((el) => {
        const target = parseFloat(el.dataset.target);

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 1,
            ease: "power2.out",
            snap: { innerText: 0.1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
            onUpdate: function () {

              const value = parseFloat(el.innerText);

              if (el.dataset.unit === "M") {
                el.innerText = value.toFixed(1).replace(".0", "");
              } else if (el.dataset.unit === "K") {
                el.innerText = Math.floor(value);
              } else {
                el.innerText = Math.floor(value);
              }

            },
          }
        );
      });

      gsap.from(".achievement-underline", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        stagger: 0.1,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F3F2EF] pt-[8px]"
    >

      <div className="px-[8px]">

        {/* OUTER SURFACE */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-[8px]">

          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 py-20 md:py-24">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[8px]">

              {/* CARD 1 */}
              <div
                className="achievement-card text-white rounded-2xl p-8 sm:p-10 lg:p-12 aspect-auto lg:aspect-square flex flex-col justify-between"
                style={{
                  background: `
                    radial-gradient(
                      circle at 20% 20%,
                      rgba(255,255,255,0.05) 0%,
                      rgba(0,0,0,0) 60%
                    ),
                    #191919
                  `,
                  boxShadow: `0 20px 50px rgba(0,0,0,0.25)`
                }}
              >
                <div>
                  <h3 className="text-[48px] sm:text-[60px] lg:text-[72px] leading-none font-normal mb-4 sm:mb-6">
                    <span className="count-number" data-target="15">0</span>+
                    <div className="achievement-underline h-[2px] w-12 bg-[#8C7A5B] mt-3"></div>
                  </h3>

                  <p className="text-white/70 text-[15px] sm:text-[16px] max-w-xs leading-relaxed">
                    Years operating directly inside China’s factory production network.
                  </p>
                </div>

                <div className="text-sm text-white/40 mt-6">
                  On-Ground Coordination
                </div>
              </div>



              {/* CARD 2 */}
              <div className="achievement-card relative rounded-2xl overflow-hidden aspect-auto lg:aspect-square">

                <img
                  src="https://res.cloudinary.com/djgu1bhef/image/upload/v1772376426/boxes_nx69oz.png"
                  alt="Packaging production"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="relative z-10 p-8 sm:p-10 lg:p-12 h-full flex flex-col justify-between text-white">

                  <div>
                    <h3 className="text-[48px] sm:text-[60px] lg:text-[72px] leading-none font-normal mb-4 sm:mb-6">
                      <span
                        className="count-number"
                        data-target="5"
                        data-unit="M"
                      >
                        0
                      </span>M+
                      <div className="achievement-underline h-[2px] w-16 bg-[#8C7A5B] mt-3"></div>
                    </h3>

                    <p className="text-white/80 text-[15px] sm:text-[16px] max-w-xs leading-relaxed">
                      Luxury packaging units delivered across international markets.
                    </p>
                  </div>

                  <div className="text-sm text-white/50 mt-6">
                    Factory → Port → Destination
                  </div>

                </div>

              </div>



              {/* CARD 3 */}
              <div className="achievement-card relative rounded-2xl overflow-hidden aspect-auto lg:aspect-square border border-[#D6D1C8]">

                <img
                  src="https://res.cloudinary.com/djgu1bhef/image/upload/v1772379360/clothes_s6ivam.png"
                  alt="Apparel production"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-[#F3F2EF]/60" />

                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      radial-gradient(
                        circle at 80% 20%,
                        rgba(255,255,255,0.5) 0%,
                        rgba(255,255,255,0) 60%
                      )
                    `
                  }}
                />

                <div className="relative z-10 p-8 sm:p-10 lg:p-12 h-full flex flex-col justify-between">

                  <div>
                    <h3 className="text-[48px] sm:text-[60px] lg:text-[72px] leading-none font-normal mb-4 sm:mb-6 text-neutral-900">
                      <span
                        className="count-number"
                        data-target="100"
                        data-unit="K"
                      >
                        0
                      </span>K+
                      <div className="achievement-underline h-[2px] w-14 bg-[#8C7A5B] mt-3"></div>
                    </h3>

                    <p className="text-neutral-600 text-[15px] sm:text-[16px] max-w-xs leading-relaxed">
                      Apparel units manufactured across structured production runs with controlled inspection checkpoints.
                    </p>
                  </div>

                  <div className="text-sm text-neutral-500 mt-6">
                    Fit Control · Inline QC · AQL 2.5
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


function HowWeWork() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false })

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
    { icon: FileText, title: "Quick Brief & NDA", desc: "Send style/packaging references, quantity range, target timeline, ship-to country, and brand files." },
    { icon: DraftingCompass, title: "Design & Technical Prep", desc: "Finalize tech packs/patterns or dielines and confirm specs and materials." },
    { icon: Package, title: "Samples & PI", desc: "Produce samples and share guide pricing. Formal PI issued after review." },
    { icon: Factory, title: "Production Booking", desc: "Approve golden sample and secure production line." },
    { icon: Cog, title: "Manufacturing", desc: "Apparel 3–8 wks / Packaging 2–6 wks with in-line QC." },
    { icon: ShieldCheck, title: "Quality Assurance (AQL)", desc: "Pre-shipment inspection with full report and measurement checks." },
    { icon: Truck, title: "Logistics (EXW / FOB / DDP)", desc: "Export documentation and global shipping arranged." },
    { icon: Repeat, title: "Delivery & Aftercare", desc: "Unboxing checks, reorders, and structured improvements." },
  ]

  return (
    <section className="bg-[#F3F2EF] pt-[8px]">
      <div className="px-[8px]">
        <div className="bg-[#1b1b1b] rounded-2xl text-white">
          <div className="max-w-[1600px] mx-auto px-10 xl:px-16 py-20 md:py-24">

            {/* LABEL */}
            <div>
              <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium">
                Process
              </div>
            </div>

            {/* HEADER */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-[0.55fr_0.45fr] gap-16 items-start">

              <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-white">
                How We Work
              </h2>

              <p className="text-[16px] sm:text-[18px] leading-[1.7] text-white/65">
                A clear process, realistic timelines, and close supervision keep production steady from start to delivery.
              </p>

            </div>

            {/* CAROUSEL */}
            <div className="mt-20 overflow-hidden" ref={emblaRef}>

              <div className="flex">

                {steps.map((step, i) => {

                  const Icon = step.icon

                  return (
                    <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pr-6">

                      <div className="group relative rounded-2xl border border-white/10 bg-[#232323] p-12 min-h-[420px] flex flex-col transition-all duration-300 hover:border-[#8C7A5B]/40 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">

                        {/* NUMBER */}
                        <div className="absolute top-6 right-8 text-[72px] font-semibold text-white/5 transition-colors duration-300 group-hover:text-[#8C7A5B]/20">
                          {String(i + 1).padStart(2, "0")}
                        </div>

                        {/* TEXTURE */}
                        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('https://res.cloudinary.com/djgu1bhef/image/upload/v1772523788/ChatGPT_Image_Mar_3_2026_02_42_56_PM_euyhsb.png')", backgroundSize: "500px", backgroundRepeat: "repeat", opacity: 0.15, filter: "contrast(140%) brightness(115%)" }} />

                        {/* ICON */}
                        <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-lg border border-white/10 bg-[#2a2a2a]">
                          <Icon size={22} strokeWidth={1.5} className="text-[#8C7A5B]" />
                        </div>

                        {/* TEXT */}
                        <div className="relative z-10 mt-auto">

                          <h4 className="text-[22px] sm:text-[24px] leading-[1.25] font-medium text-white transition-colors duration-300 group-hover:text-[#8C7A5B]">
                            {step.title}
                          </h4>

                          <p className="mt-6 text-[16px] leading-[1.7] text-white/60">
                            {step.desc}
                          </p>

                        </div>

                      </div>

                    </div>
                  )
                })}

              </div>

            </div>

            {/* DOTS */}
            <div className="mt-14 flex justify-center gap-4">

              {scrollSnaps.map((_, index) => (

                <button key={index} onClick={() => emblaApi && emblaApi.scrollTo(index)} className={`transition ${index === selectedIndex ? "w-3 h-3 bg-[#8C7A5B]" : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"} rounded-full`} />

              ))}

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}


function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        defaults: { ease: "power2.out" }
      });

      tl.from(".services-header", {
        opacity: 0,
        y: 30,
        duration: 0.8,
      });

      tl.from(".services-accent", {
        scaleX: 0,
        transformOrigin: "center",
        duration: 0.7,
      });

      tl.from(".service-hub", {
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
      }, "<");

      tl.from([".service-left", ".service-right"], {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.8,
      }, "-=0.1");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F3F2EF] pt-24 pb-32 md:pt-28 md:pb-40 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">

        {/* HEADER */}
        <div className="services-header mb-14 md:mb-16 text-center max-w-xl mx-auto">

          <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
            Services
          </div>

          <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900 mb-5">
            Services Overview
          </h2>

          <p className="text-[16px] sm:text-[18px] leading-[1.7] text-neutral-600">
            Built to support your brand’s growth with reliable production,
            structured quality control, and global delivery systems.
          </p>

          <div className="services-accent mt-8 h-[1px] w-16 bg-[#8C7A5B] mx-auto" />
        </div>

        {/* STRUCTURE */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-14 md:gap-16 lg:gap-40">

          {/* LEFT */}
          <a
            href="/fashion-manufacturing"
            className="service-left flex-1 max-w-md group text-center lg:text-right transition-transform duration-300 hover:-translate-y-[4px]"
          >

            <h3 className="text-[26px] sm:text-[28px] md:text-[30px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900 transition-colors duration-300 group-hover:text-black">
              Fashion Manufacturing
            </h3>

            <p className="mt-4 text-[16px] leading-[1.7] text-neutral-600">
              Apparel production from sampling to bulk execution, with
              structured fit control, technical packs, and AQL inspection.
            </p>

            <span className="inline-flex items-center gap-2 mt-6 text-sm text-neutral-700 group-hover:text-black transition-colors">

              View Service

              <span className="transition-transform duration-300 group-hover:translate-x-[6px]">
                →
              </span>

            </span>

          </a>

          {/* HUB */}
          <div className="service-hub flex-shrink-0 relative flex flex-col items-center justify-center">

            <div className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] rounded-full border border-neutral-300 flex items-center justify-center bg-white">

              <div
                className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] lg:w-[170px] lg:h-[170px] rounded-full flex items-center justify-center transition-transform duration-500 hover:scale-[1.04]"
                style={{
                  background: `
                    radial-gradient(circle at 30% 30%,
                    rgba(170,150,115,1) 0%,
                    rgba(140,122,91,1) 60%,
                    rgba(100,85,60,1) 100%)
                  `
                }}
              >
                <img
                  src="/images/alraimi-logo-white-1.png"
                  alt="Alraimi Logo"
                  className="w-10 sm:w-12 lg:w-14 opacity-95"
                />
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <a
            href="/luxury-packaging"
            className="service-right flex-1 max-w-md group text-center lg:text-left transition-transform duration-300 hover:-translate-y-[4px]"
          >

            <h3 className="text-[26px] sm:text-[28px] md:text-[30px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900 transition-colors duration-300 group-hover:text-black">
              Luxury Packaging
            </h3>

            <p className="mt-4 text-[16px] leading-[1.7] text-neutral-600">
              Premium rigid boxes, structural engineering, finishing
              precision, and export-ready packaging systems.
            </p>

            <span className="inline-flex items-center gap-2 mt-6 text-sm text-neutral-700 group-hover:text-black transition-colors">

              View Service

              <span className="transition-transform duration-300 group-hover:translate-x-[6px]">
                →
              </span>

            </span>

          </a>

        </div>

      </div>
    </section>
  );
}


function Catalogs() {
  return (
    <section className="bg-[#F3F2EF] pt-[8px]">

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">

        <div className="grid grid-cols-1 md:grid-cols-[0.55fr_0.45fr] gap-[8px]">

          {/* LEFT CARD */}
          <div className="border border-neutral-200 rounded-2xl bg-white">

            <div className="px-8 sm:px-10 xl:px-12 py-14 md:py-16">

              {/* SECTION LABEL */}
              <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
                Catalogs
              </div>

              {/* HEADING */}
              <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900 mb-6">
                Production Catalogs
              </h2>

              {/* BODY LARGE */}
              <p className="text-[18px] leading-[1.7] text-neutral-600 max-w-xl">
                Review available categories, material options and finishes,
                minimum order quantities, and standard production timelines
                across fashion manufacturing and luxury packaging.
              </p>

            </div>

          </div>


          {/* RIGHT CARD */}
          <div className="border border-neutral-200 rounded-2xl bg-white">

            <div className="px-8 sm:px-10 xl:px-12 py-14 md:py-16">

              <div className="border border-black/20 rounded-2xl p-3">

                <div className="bg-white rounded-2xl overflow-hidden">

                  {/* BUTTON 1 */}
                  <a
                    href="https://github.com/boson-collective/alraimi-downloads/releases/download/catalog-2026/alraimi-fashion-manufacturing-catalog-2026.zip"
                    className="w-full flex items-center justify-between px-6 sm:px-8 md:px-10 py-6 md:py-8 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:bg-neutral-100 border-b border-neutral-300"
                  >
                    <span>Get Fashion Catalog</span>
                    <Download size={18} strokeWidth={1.5} className="opacity-60" />
                  </a>

                  {/* BUTTON 2 */}
                  <a
                    href="https://github.com/boson-collective/alraimi-downloads/releases/download/catalog-2026/alraimi-luxury-packaging-catalog-2026.zip"
                    className="w-full flex items-center justify-between px-6 sm:px-8 md:px-10 py-6 md:py-8 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:bg-neutral-100"
                  >
                    <span>Get Packaging Catalog</span>
                    <Download size={18} strokeWidth={1.5} className="opacity-60" />
                  </a>

                </div>

              </div>

              {/* NOTE */}
              <div className="mt-6 text-sm text-neutral-500">
                Delivered directly via email upon request.
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


function Projects() {

  const sectionRef = useRef(null)

  const projects = [
    {
      title: "Magnetic Gift Boxes",
      location: "United Kingdom",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772376971/image_2026-02-27_13-50-18_kzqkhy.png",
      description:
        "High-volume collapsible magnetic rigid boxes produced for a major UK holiday event. Over 20,000 boxes delivered with matte lamination and premium printing."
    },
    {
      title: "Multiple Luxury Perfume Packaging",
      location: "Saudi Arabia",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772376971/image_2026-02-27_13-49-35_oikaga.png",
      description:
        "Comprehensive paper packaging program for several Saudi perfume brands including rigid boxes, paper bags, tester blotters, and branded ribbon."
    },
    {
      title: "Boutique Womenswear Brand",
      location: "Dubai",
      image: "/images/projects/womenswear.png",
      description:
        "Ongoing apparel manufacturing for a Dubai womenswear label producing dress collections, coordinated sets, and seasonal capsule drops."
    },
    {
      title: "Golf Apparel Startup",
      location: "Dubai",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772707102/VHD_Golf_Shoot-1284_1_m9lktl.png",
      description:
        "End-to-end manufacturing including polos, shorts, pants and caps alongside custom packaging built for launch-ready retail presentation."
    },
  ]

  const Card = ({ project }) => (
    <div className="project-card group relative w-full md:w-[28vw] max-w-[520px] md:max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:shadow-none z-10">

      {/* IMAGE */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.05]"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/75 transition-colors duration-500" />

      {/* NORMAL CONTENT */}
      <div className="absolute bottom-6 left-6 right-6 text-white transition-opacity duration-300 group-hover:opacity-0">

        <div className="text-[18px] sm:text-[20px] leading-[1.25] tracking-[-0.01em] font-medium">
          {project.title}
        </div>

        <div className="text-xs tracking-[0.18em] uppercase text-white/70 mt-2">
          {project.location}
        </div>

      </div>

      {/* HOVER CONTENT */}
      <div className="absolute inset-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">

        <div className="px-8 text-white">

          <div className="text-[20px] font-medium mb-3">
            {project.title}
          </div>

          <div className="text-xs tracking-[0.18em] uppercase text-white/60 mb-5">
            {project.location}
          </div>

          <p className="text-[15px] leading-[1.6] text-white/80">
            {project.description}
          </p>

        </div>

      </div>

    </div>
  )

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        defaults: { ease: "power2.out" }
      })

      tl.from(".projects-header", { opacity: 0, y: 20, duration: 0.7 })

      tl.from(".project-card", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8
      }, "-=0.3")

    }, sectionRef)

    return () => ctx.revert()

  }, [])

  return (

    <section ref={sectionRef} className="bg-[#F3F2EF] pt-[8px] overflow-hidden">

      <div className="px-[8px]">

        <div className="max-w-[1600px] mx-auto bg-white rounded-2xl overflow-hidden relative">

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[520px] bg-gradient-to-t from-[#F3F2EF] to-white" />

          <div className="relative px-6 md:px-10 xl:px-16 pt-16 md:pt-20 pb-20 md:pb-24">

            {/* HEADER */}
            <div className="projects-header mb-14 md:mb-16 text-center">

              <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
                Projects
              </div>

              <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900">
                Project Snapshot
              </h2>

              <p className="mx-auto text-[16px] sm:text-[18px] leading-[1.7] text-neutral-600 mt-6 max-w-[720px]">
                A selection of completed fashion and packaging work managed from development through delivery. Below are typical scopes and outcomes.
              </p>

            </div>


            {/* DESKTOP GRID */}
            <div
              className="hidden md:grid"
              style={{
                gridTemplateColumns: "1fr auto 1fr",
                gridTemplateRows: "auto 48px auto",
                alignItems: "center"
              }}
            >

              <div style={{ gridColumn: 2, gridRow: 1, alignSelf: "end" }}>
                <Card project={projects[1]} />
              </div>

              <div style={{ gridColumn: 1, gridRow: 2, justifySelf: "center" }}>
                <Card project={projects[0]} />
              </div>

              <div style={{ gridColumn: 3, gridRow: 2, justifySelf: "center" }}>
                <Card project={projects[3]} />
              </div>

              <div style={{ gridColumn: 2, gridRow: 3, alignSelf: "start" }}>
                <Card project={projects[2]} />
              </div>

            </div>


            {/* MOBILE */}
            <div className="md:hidden flex flex-col gap-10 max-w-[520px] mx-auto">
              {projects.map((project, i) => (
                <Card key={i} project={project} />
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>

  )

}


function Leadership() {

  const sectionRef = useRef(null)
  const quoteRef = useRef(null)

  useEffect(() => {

    let split

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }, defaults: { ease: "power2.out" } })

      tl.from(".leadership-card", { opacity: 0, y: 40, duration: 0.8 })

      split = new SplitText(quoteRef.current, { type: "lines", linesClass: "split-line" })

      split.lines.forEach(line => {
        const wrapper = document.createElement("div")
        wrapper.style.overflow = "hidden"
        line.parentNode.insertBefore(wrapper, line)
        wrapper.appendChild(line)
      })

      tl.from(split.lines, { yPercent: 100, opacity: 0, stagger: 0.2, duration: 0.8 }, "-=0.4")

      tl.from(".leadership-identity", { opacity: 0, y: 20, duration: 0.7 }, "-=0.3")

    }, sectionRef)

    return () => {
      if (split) split.revert()
      ctx.revert()
    }

  }, [])

  return (
    <section ref={sectionRef} className="bg-[#F3F2EF] py-20 overflow-hidden">

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">

        <div className="leadership-card relative rounded-2xl border border-neutral-200 shadow-[0_12px_40px_rgba(0,0,0,0.04)] px-8 sm:px-12 md:px-16 xl:px-20 py-14 md:py-16 xl:py-20" style={{ background: "radial-gradient(circle at 20% 20%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.96) 35%, rgba(245,243,239,1) 100%)" }}>

          <svg className="absolute top-12 right-12 w-[110px] h-[110px] opacity-15" viewBox="0 0 24 24" fill="#8C7A5B">
            <path d="M7.17 6C5.97 6 5 6.97 5 8.17v3.66C5 13.03 5.97 14 7.17 14H9v3H6v2h3c1.1 0 2-.9 2-2V8.17C11 6.97 10.03 6 8.83 6H7.17zm9 0c-1.2 0-2.17.97-2.17 2.17v3.66c0 1.2.97 2.17 2.17 2.17H18v3h-3v2h3c1.1 0 2-.9 2-2V8.17C20 6.97 19.03 6 17.83 6h-1.66z"/>
          </svg>

          <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-8 md:mb-10">
            Factory & Production Oversight
          </div>

          <h2 ref={quoteRef} className="text-neutral-900 text-[18px] sm:text-[20px] md:text-[22px] leading-[1.7] tracking-[-0.01em] w-full max-w-[900px]">
            We treat every order like it’s our own brand. Your idea is translated into production-ready details, then we manage sampling and execution step by step with our team in China. You get clear updates, real visibility during production, and a final quality check before anything leaves the factory. Quality first — then shipment.
          </h2>

          <div className="leadership-identity mt-10 md:mt-14 xl:mt-16 flex items-center gap-4 sm:gap-6">

            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-neutral-200">
              <img src="/images/haitham.png" alt="Haitham Al-Raimi" className="w-full h-full object-cover object-top" />
            </div>

            <div>
              <div className="text-neutral-900 font-medium text-[18px]">
                Haitham Al-Raimi
              </div>
              <div className="text-neutral-500 text-sm mt-1">
                Managing Director · Alraimi Business Group
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}



function Gallery() {
  const sectionRef = useRef(null);

  const media = [
    // ROW 1 (4 blocks)
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773063330/ChatGPT_Image_Mar_9_2026_06_09_04_PM_yi7i50.png",
      alt: "Container port logistics",
      type: "image",
      span: "md:col-span-3"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773064884/ChatGPT_Image_Mar_9_2026_09_01_08_PM_amfsgu.png",
      alt: "Factory walkthrough",
      type: "image",
      span: "md:col-span-3"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773063328/ChatGPT_Image_Mar_9_2026_06_16_12_PM_iwzagy.png",
      alt: "Cargo loading truck",
      type: "image",
      span: "md:col-span-3"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773063321/ChatGPT_Image_Mar_9_2026_08_22_01_PM_eyrgwo.png",
      alt: "Factory production line",
      type: "image",
      span: "md:col-span-3"
    },

    // ROW 2 (3 blocks)
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773044805/ChatGPT_Image_Mar_9_2026_03_16_02_PM_vrmfdg.png",
      alt: "Quality inspection process",
      type: "image",
      span: "md:col-span-6"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773066154/ChatGPT_Image_Mar_9_2026_09_22_22_PM_vguqzn.png",
      alt: "Shipping container yard",
      type: "image",
      span: "md:col-span-6"
    }, 

    // ROW 3 (4 blocks)
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773065825/ChatGPT_Image_Mar_9_2026_09_16_44_PM_vat8ji.png",
      alt: "Container loading",
      type: "image",
      span: "md:col-span-3"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773064659/ChatGPT_Image_Mar_9_2026_08_45_28_PM_gv4tbh.png",
      alt: "Factory inspection",
      type: "image",
      span: "md:col-span-3"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1773064659/ChatGPT_Image_Mar_9_2026_08_57_16_PM_dupr5n.png",
      alt: "Truck loading",
      type: "image",
      span: "md:col-span-3"
    },
    {
      src: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772708330/ChatGPT_Image_Mar_5_2026_05_52_41_PM_frxpql.png",
      alt: "Distribution warehouse",
      type: "image",
      span: "md:col-span-3"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        },
        defaults: { ease: "power2.out" }
      });

      tl.from(".gallery-header", {
        opacity: 0,
        y: 20,
        duration: 0.7
      });

      tl.from(".gallery-item", {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.8
      }, "-=0.3");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F3F2EF] pt-[8px] overflow-hidden"
    >
      <div className="px-[8px]">

        <div className="rounded-2xl">

          <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-20 md:py-24">

            {/* HEADER */}
            <div className="gallery-header flex justify-center mb-16 md:mb-20">
              <div className="inline-flex items-center border border-[#8C7A5B]/40 px-5 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium text-[#8C7A5B]">
                Gallery
              </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">

              {media.map((item, index) => (
                <div
                  key={index}
                  className={`gallery-item col-span-1 ${item.span}`}
                >
                  <div className="rounded-2xl overflow-hidden border border-white/10">

                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        className="w-full h-[220px] md:h-[340px] object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls={false}
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-[220px] md:h-[340px] object-cover"
                        loading="lazy"
                      />
                    )}

                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


function Testimonials() {

  const testimonials = [
    {
      name: "Arsalan Khan",
      role: "Logistics Innovation Strategist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      quote: `Alraimi understands our operational challenges, adapts to our workflows, and delivers real execution discipline. Their oversight feels like a structured extension of our internal team.`,
      stat: "8x",
      statLabel: "increase in operational efficiency",
    },
    {
      name: "Qusai Abuhejleh",
      role: "Construction Supplier · Qatar",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      quote: `Structured procurement flow and serious execution discipline. The consistency removes uncertainty in every shipment.`,
      stat: "3x",
      statLabel: "faster procurement cycles",
    },
    {
      name: "Gehad Mayas",
      role: "Solace Development · Bali",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      quote: `Outstanding operational control. Orders arrive on time and in perfect condition. The execution discipline gives real confidence when scaling projects.`,
      stat: "99%",
      statLabel: "on-time delivery rate",
    },
    {
      name: "Kamilia",
      role: "Fashion Brand Owner · Dubai",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
      quote: `Two years of smooth production, fast sampling, and zero structural miscommunication. That level of clarity reduces costly mistakes significantly.`,
      stat: "2 Years",
      statLabel: "continuous production partnership",
    },
  ]

  const [index, setIndex] = React.useState(0)
  const active = testimonials[index]

  const prev = () => setIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1))
  const next = () => setIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1))

  return (
    <section className="py-10" style={{ background: "radial-gradient(circle at 20% 0%, rgba(44,38,43,0.06) 0%, transparent 50%), #F3F2EF" }}>

      <div className="max-w-[1100px] mx-auto px-8">

        {/* HEADER */}
        <div className="mb-20 text-center">

          <div className="inline-flex items-center border border-[#8C7A5B]/40 px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium text-[#8C7A5B] mb-8">
            Testimonials
          </div>

          <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900">
            What Our Customers
            <br />
            Say About Us
          </h2>

        </div>


        {/* MOBILE */}
        <div className="md:hidden">

          <div className="rounded-2xl bg-white border border-[#D6D1C8] p-6 shadow-sm flex flex-col min-h-[420px]">

            <div className="flex-1">
              <p className="text-[18px] sm:text-[20px] leading-[1.6] text-[#2C2C2C] line-clamp-6">
                "{active.quote}"
              </p>
            </div>

            <div className="mt-6">
              <div className="text-[22px] font-medium text-[#191919]">
                {active.stat}
              </div>
              <p className="text-[#8C7A5B] text-sm mt-1">
                {active.statLabel}
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4 mt-6 border-t border-[#D6D1C8]">

              <img src={active.image} alt={active.name} className="w-12 h-12 rounded-full object-cover" />

              <div>
                <div className="text-sm font-medium text-[#191919]">
                  {active.name}
                </div>
                <div className="text-xs text-[#2C2C2C]">
                  {active.role}
                </div>
              </div>

            </div>

          </div>

        </div>


        {/* DESKTOP */}
        <div className="hidden md:grid md:grid-cols-[260px_1fr] gap-8 items-stretch">

          <div className="flex flex-col gap-6 h-full">

            <div className="aspect-square rounded-2xl overflow-hidden border border-[#D6D1C8]">
              <img src={active.image} alt={active.name} className="w-full h-full object-cover" />
            </div>

            <div className="rounded-2xl bg-white border border-[#D6D1C8] p-5 shadow-sm">
              <h3 className="text-sm font-medium text-[#191919]">
                {active.name}
              </h3>
              <p className="text-[#2C2C2C] mt-1 text-xs leading-[1.5]">
                {active.role}
              </p>
            </div>

          </div>

          <div className="h-full rounded-2xl bg-white border border-[#D6D1C8] p-8 flex flex-col justify-between shadow-sm">

            <p className="text-[20px] lg:text-[22px] leading-[1.6] text-[#2C2C2C]">
              "{active.quote}"
            </p>

            <div className="mt-6">
              <div className="text-[22px] font-medium text-[#191919]">
                {active.stat}
              </div>
              <p className="text-[#8C7A5B] text-sm mt-1">
                {active.statLabel}
              </p>
            </div>

          </div>

        </div>


        {/* NAV */}
        <div className="flex items-center justify-center gap-4 mt-10">

          <button onClick={prev} className="w-9 h-9 border border-[#D6D1C8] rounded-md flex items-center justify-center text-[#191919] text-sm hover:border-[#8C7A5B] transition">
            ←
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full transition ${i === index ? "bg-[#8C7A5B]" : "bg-[#D6D1C8]"}`} />
            ))}
          </div>

          <button onClick={next} className="w-9 h-9 border border-[#D6D1C8] rounded-md flex items-center justify-center text-[#191919] text-sm hover:border-[#8C7A5B] transition">
            →
          </button>

        </div>

      </div>

    </section>
  )
}


function FAQ() {

  const faqs = [
    { q: "What type of brands do you typically work with?", a: "We work with premium brands that need reliable manufacturing in fashion or luxury paper packaging—especially perfume and cosmetics brands, gifting brands, and apparel brands launching or scaling collections." },
    { q: "Do you function as a factory?", a: "Yes. We operate as a manufacturing partner in China, managing sampling, production, quality control, and shipping under one accountable workflow." },
    { q: "What products can you manufacture?", a: "Fashion: womenswear, resort and modest wear, activewear and golfwear, and capsule collections. Packaging: rigid boxes, folding cartons, paper bags, sleeves, inserts, tags or cards, ribbons, and other gifting extras." },
    { q: "How do you ensure production quality?", a: "We run in-line quality checks during production and a pre-shipment AQL inspection before goods are released. We also share photo and video updates during key production stages." },
    { q: "How long does sampling and mass production take?", a: "Typical timelines are: Sampling about 2–3 weeks after specifications and materials are confirmed (sometimes faster depending on complexity). Production typically 4–8 weeks for fashion and 3–6 weeks for packaging depending on quantity and finishes." },
    { q: "What are your minimum order quantities (MOQs)?", a: "It depends on product and specifications, but typical starting points are: Fashion often 150–200 pieces per color per style. Packaging usually 5,000+ units, with some projects possible from around 1,000+ depending on structure and finishes." },
    { q: "Do you handle international shipping and customs?", a: "Yes. We can ship EXW, FOB, or DDP. With DDP, we handle door-to-door delivery including customs clearance in your destination country." },
    { q: "Can you match my brand colors?", a: "Yes. We match colors using Pantone references, your physical samples, or approved color standards. We also keep references for smoother repeat orders and consistent reorders." },
    { q: "Can you help with tech packs, size charts, or dielines?", a: "Yes. For fashion we can support tech packs and size charts. For packaging we create dielines and structural prototypes and confirm inserts and finishes before mass production." },
    { q: "Can we visit the factory?", a: "Yes. You can arrange a China factory tour on-site or join a live video inspection during sampling or production stages." },
    { q: "Do you protect confidentiality?", a: "Yes. We can sign an NDA and we do not share your designs, dielines, or production details publicly." },
    { q: "How do we start?", a: "Send your brief including references, quantity range, target timeline, and ship-to country. We confirm specifications, produce samples, and then issue your PI for production." },
  ]

  const [openIndex, setOpenIndex] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 6)

  return (
    <section className="bg-[#F3F2EF] py-20">

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">

        <div className="grid grid-cols-1 md:grid-cols-[0.45fr_0.55fr] gap-12 md:gap-20">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
              FAQ
            </div>

            <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900">
              Frequently Asked
              <br />
              Questions
            </h2>

          </div>

          {/* RIGHT */}
          <div>

            {visibleFaqs.map((item, index) => {

              const realIndex = index
              const isOpen = openIndex === realIndex

              return (
                <FAQItem key={realIndex} item={item} isOpen={isOpen} onClick={() => toggle(realIndex)} />
              )

            })}

            {faqs.length > 6 && (

              <div className="mt-10">

                <button onClick={() => setShowAll(!showAll)} className="text-sm font-medium text-neutral-700 hover:text-black transition">
                  {showAll ? "Show Less" : "Show More Questions"}
                </button>

              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  )
}


function FAQItem({ item, isOpen, onClick }) {

  return (
    <div className="border-b border-neutral-300 py-6">

      <button onClick={onClick} className="w-full flex items-start justify-between text-left">

        <span className="text-[18px] leading-[1.4] text-neutral-900 pr-6">
          {item.q}
        </span>

        <span className="text-neutral-500 text-xl">
          {isOpen ? "−" : "+"}
        </span>

      </button>

      {isOpen && (
        <div className="mt-4 text-[16px] leading-[1.7] text-neutral-600 pr-10">
          {item.a}
        </div>
      )}

    </div>
  )
}
