"use client"
/* app/page.jsx */

import Image from "next/image";
import Link from 'next/link'
import React, { useRef, useEffect, useState, useCallback } from "react";
import {
  FaApple,
  FaAmazon,
  FaGoogle,
  FaMicrosoft,
  FaFacebook,
  FaShopify,
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
  Plus,
  X,
  Download
} from "lucide-react"


import useEmblaCarousel from "embla-carousel-react"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

import { motion, useScroll, useTransform } from "framer-motion";




export default function Page() {
  return (
    <main className="bg-white text-neutral-900">
      <Hero />

      <section id="start-brand">
        <InquiryForm />
      </section>

      <ProcessExpectation />

      <section id="get-pi">
        <GetYourPI />
      </section>

      <DirectWhatsApp />
      <Footer />
    </main>
  )
}

/* ---------------- HERO ---------------- */

function Hero() {

  const heroRef = useRef(null)

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".hero-item", {
        opacity: 0,
        y: 14,
        duration: 0.35,
        ease: "power2.out",
        stagger: 0.05
      })

    }, heroRef)

    return () => ctx.revert()

  }, [])


  return (

    <section
      ref={heroRef}
      className="bg-[#F3F2EF] pt-[8px]"
    >

      {/* NAV */}

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">

        <header className="flex items-center justify-between h-[92px]">

          <Link href="/" className="flex items-center">

            <Image
              src="/images/alraimi-logo-black-1.png"
              alt="Alraimi Logo"
              width={42}
              height={38}
              priority
            />

          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm text-neutral-600">

            <Link href="/" className="hover:text-black transition">
              Home
            </Link>

            <Link href="/fashion-manufacturing" className="hover:text-black transition">
              Fashion
            </Link>

            <Link href="/luxury-packaging" className="hover:text-black transition">
              Packaging
            </Link>

            <Link href="/contact" className="text-black">
              Contact
            </Link>

          </nav>

          <Link
            href="/contact#get-pi"
            className="hidden md:inline-flex items-center bg-black text-white px-7 py-3 rounded-lg text-sm font-medium hover:bg-neutral-800 transition"
          >
            Get Your PI
          </Link>

        </header>

      </div>



      {/* HERO SURFACE */}

      <div className="px-[8px]">

        <div
          className="relative rounded-2xl border border-white/10 text-white overflow-hidden"
          style={{
            background: "linear-gradient(135deg,#191919 0%,#2C2C2C 100%)"
          }}
        >

          {/* IMAGE */}

          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1660980041852-230420b8f99f?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.18
            }}
          />

          {/* LEFT FADE */}

          <div
            className="absolute inset-y-0 left-0 w-[55%]"
            style={{
              background: `
              linear-gradient(
                to right,
                #191919 0%,
                rgba(25,25,25,0.98) 20%,
                rgba(25,25,25,0.9) 40%,
                rgba(25,25,25,0.65) 60%,
                rgba(25,25,25,0.3) 80%,
                rgba(25,25,25,0) 100%
              )`
            }}
          />

          {/* RIGHT FADE */}

          <div
            className="absolute inset-y-0 right-0 w-[55%]"
            style={{
              background: `
              linear-gradient(
                to left,
                #2C2C2C 0%,
                rgba(44,44,44,0.98) 20%,
                rgba(44,44,44,0.9) 40%,
                rgba(44,44,44,0.65) 60%,
                rgba(44,44,44,0.3) 80%,
                rgba(44,44,44,0) 100%
              )`
            }}
          />



          {/* CONTENT */}

          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-24 md:py-28">

            <div className="max-w-[760px] mx-auto text-center">

              {/* LABEL */}

              <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-8 hero-item">
                START YOUR BRAND
              </div>


              {/* TITLE */}

              <h1
                className="
                hero-item
                font-light
                leading-[1.05]
                tracking-[-0.02em]

                text-[34px]
                sm:text-[40px]
                md:text-[46px]
                lg:text-[50px]
                "
              >

                Submit Your Production Request

              </h1>


              {/* TEXT */}

              <p
                className="
                hero-item
                mt-6
                text-[17px]
                leading-[1.7]
                text-white/70
                max-w-[540px]
                mx-auto
                "
              >

                Tell us about your production plans. Our team will review your
                requirements and guide you through the next steps.

              </p>


              {/* CTA SPLIT */}

              <div className="hero-item mt-10 flex flex-col sm:flex-row justify-center gap-4">

                <Link
                  href="/contact#start-brand"
                  className="inline-flex px-8 py-3.5 rounded-lg text-sm font-medium text-white transition"
                  style={{ backgroundColor: "#8C7A5B" }}
                >
                  Start Your Brand
                </Link>

                <Link
                  href="/contact#get-pi"
                  className="inline-flex px-8 py-3.5 rounded-lg text-sm font-medium border border-white/30 text-white hover:bg-white/10 transition"
                >
                  Get Your PI
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}

/* ---------------- FORM ---------------- */

function InquiryForm() {

  const [formData, setFormData] = useState({
    projectType: [],
    quantity: "",
    timeline: "",
    budget: "",
    brandStage: "",
    name: "",
    email: "",
    whatsapp: "",
    company_website: ""
  })

  const [loading, setLoading] = useState(false)


  const handleChange = (e) => {

    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })

  }


  const handleCheckbox = (value) => {

    let updated = [...formData.projectType]

    if (updated.includes(value)) {
      updated = updated.filter(item => item !== value)
    } else {
      updated.push(value)
    }

    setFormData({
      ...formData,
      projectType: updated
    })

  }


  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)

    try {

      await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      window.location.href = "/inquiry-received"

    } catch (error) {

      console.error(error)
      alert("Something went wrong")

    }

    setLoading(false)

  }


  return (
    <section id="start" className="bg-[#F3F2EF] pt-[8px]">

      <div className="px-[8px]">

        <div className="border border-neutral-200 rounded-2xl">

          <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-28">

            <div className="grid md:grid-cols-[0.45fr_0.55fr] gap-[72px] items-start">

              {/* LEFT */}

              <div>

                <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-8">
                  START YOUR BRAND
                </div>

                <h2 className="text-[40px] leading-[1.1] tracking-[-0.015em] mb-6 text-neutral-900">
                  Production Inquiry
                </h2>

                <p className="text-[18px] leading-[1.7] text-neutral-600 mb-10 max-w-[520px]">
                  Tell us about your project and production requirements. Our
                  team will review feasibility, sampling needs, and production
                  timelines with our factory partners in China.
                </p>

                <div className="space-y-5 text-[16px] text-neutral-700">

                  <div className="flex gap-3">
                    <span className="text-[#8C7A5B]">01</span>
                    Submit project details
                  </div>

                  <div className="flex gap-3">
                    <span className="text-[#8C7A5B]">02</span>
                    Factory feasibility review
                  </div>

                  <div className="flex gap-3">
                    <span className="text-[#8C7A5B]">03</span>
                    Sampling & quotation
                  </div>

                  <div className="flex gap-3">
                    <span className="text-[#8C7A5B]">04</span>
                    Production planning
                  </div>

                </div>

              </div>


              {/* RIGHT FORM */}

              <div className="border border-neutral-200 rounded-2xl p-10 bg-white">

                <form onSubmit={handleSubmit} className="space-y-10">

   {/* HONEYPOT (ANTI SPAM) */}

   <input
                  type="text"
                  name="company_website"
                  value={formData.company_website}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  autoComplete="off"
                />

                  {/* PROJECT TYPE */}

                  <div>

                    <div className="text-xs tracking-[0.18em] text-neutral-500 mb-4 uppercase">
                      Project Type
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm">

                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          onChange={() => handleCheckbox("Fashion")}
                        />
                        Fashion
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          onChange={() => handleCheckbox("Packaging")}
                        />
                        Packaging
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          onChange={() => handleCheckbox("Both")}
                        />
                        Both
                      </label>

                    </div>

                  </div>


                  {/* PRODUCTION DETAILS */}

                  <div>

                    <div className="text-xs tracking-[0.18em] text-neutral-500 mb-4 uppercase">
                      Production Details
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">

                      <input
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-sm"
                        placeholder="Quantity Range"
                      />

                      <input
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-sm"
                        placeholder="Target Timeline"
                      />

                      <input
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-sm"
                        placeholder="Budget (optional)"
                      />

                      <select
                        name="brandStage"
                        value={formData.brandStage}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-sm"
                      >

                        <option value="">Brand Stage</option>
                        <option value="Startup">Startup</option>
                        <option value="Established">Established</option>

                      </select>

                    </div>

                  </div>


                  {/* CONTACT */}

                  <div>

                    <div className="text-xs tracking-[0.18em] text-neutral-500 mb-4 uppercase">
                      Contact Information
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">

                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="border border-neutral-300 rounded-lg px-4 py-3 text-sm"
                      />

                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="border border-neutral-300 rounded-lg px-4 py-3 text-sm"
                      />

                      <input
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="WhatsApp"
                        className="border border-neutral-300 rounded-lg px-4 py-3 text-sm md:col-span-2"
                      />

                    </div>

                  </div>


                  {/* CTA */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-white rounded-lg py-4 text-sm font-medium hover:bg-neutral-800 transition"
                  >

                    {loading ? "Submitting..." : "Submit Inquiry"}

                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

function GetYourPI() {

  const [formData, setFormData] = useState({
    category: [],
    quantity: "",
    country: "",
    timeline: "",
    boxType: "",
    finishes: "",
    name: "",
    email: "",
    whatsapp: "",
    company_website: "" // honeypot
  })

  const [loading, setLoading] = useState(false)


  const handleChange = (e) => {

    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })

  }


  const handleCheckbox = (value) => {

    let updated = [...formData.category]

    if (updated.includes(value)) {
      updated = updated.filter(item => item !== value)
    } else {
      updated.push(value)
    }

    setFormData({
      ...formData,
      category: updated
    })

  }


  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)

    try {

      await fetch("/api/pi-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      window.location.href = "/inquiry-received"

    } catch (error) {

      console.error(error)
      alert("Something went wrong")

    }

    setLoading(false)

  }


  return (
    <section id="get-pi" className="bg-[#F3F2EF] pt-[8px]">

      <div className="px-[8px]">

        <div className="border border-neutral-200 rounded-2xl">

          <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-28">

            {/* HEADER */}

            <div className="max-w-[720px] mx-auto text-center mb-16">

              <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
                GET YOUR PI
              </div>

              <h2 className="text-[40px] leading-[1.1] tracking-[-0.015em] text-neutral-900 mb-6">
                Request a Packaging
                <br />
                Production Quote
              </h2>

              <p className="text-[18px] leading-[1.7] text-neutral-600">
                Provide your packaging specifications and destination details.
                Our team will prepare a production quotation and shipping
                estimate for your project.
              </p>

            </div>


            {/* FORM */}

            <div className="max-w-[880px] mx-auto border border-neutral-200 rounded-2xl p-10 bg-white">

              <form onSubmit={handleSubmit} className="space-y-10">

                {/* HONEYPOT (ANTI SPAM) */}

                <input
                  type="text"
                  name="company_website"
                  value={formData.company_website}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  autoComplete="off"
                />

                {/* CATEGORY */}

                <div>

                  <div className="text-xs tracking-[0.18em] text-neutral-500 mb-4 uppercase">
                    Packaging Category
                  </div>

                  <div className="flex flex-wrap gap-6 text-sm">

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        onChange={() => handleCheckbox("Perfume / Cosmetics")}
                      />
                      Perfume / Cosmetics
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        onChange={() => handleCheckbox("Apparel / Gifting")}
                      />
                      Apparel / Gifting
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        onChange={() => handleCheckbox("Other")}
                      />
                      Other
                    </label>

                  </div>

                </div>


                {/* PRODUCTION DETAILS */}

                <div>

                  <div className="text-xs tracking-[0.18em] text-neutral-500 mb-4 uppercase">
                    Production Details
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">

                    <input
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="Quantity Range"
                      className="border border-neutral-300 rounded-lg px-4 py-3 text-sm"
                    />

                    <input
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Target Ship-To Country"
                      className="border border-neutral-300 rounded-lg px-4 py-3 text-sm"
                    />

                    <input
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      placeholder="Target Timeline"
                      className="border border-neutral-300 rounded-lg px-4 py-3 text-sm"
                    />

                    <input
                      name="boxType"
                      value={formData.boxType}
                      onChange={handleChange}
                      placeholder="Box / Bag Type (if known)"
                      className="border border-neutral-300 rounded-lg px-4 py-3 text-sm"
                    />

                    <input
                      name="finishes"
                      value={formData.finishes}
                      onChange={handleChange}
                      placeholder="Finishes (Foil, Emboss, Lamination, etc)"
                      className="border border-neutral-300 rounded-lg px-4 py-3 text-sm md:col-span-2"
                    />

                  </div>

                </div>


                {/* CONTACT */}

                <div>

                  <div className="text-xs tracking-[0.18em] text-neutral-500 mb-4 uppercase">
                    Contact Information
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">

                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="border border-neutral-300 rounded-lg px-4 py-3 text-sm"
                    />

                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="border border-neutral-300 rounded-lg px-4 py-3 text-sm"
                    />

                    <input
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="WhatsApp"
                      className="border border-neutral-300 rounded-lg px-4 py-3 text-sm md:col-span-2"
                    />

                  </div>

                </div>


                {/* CTA */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white rounded-lg py-4 text-sm font-medium transition hover:opacity-90"
                  style={{ backgroundColor: "black" }}
                >
                  {loading ? "Submitting..." : "Request Quotation"}
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

/* ---------------- PROCESS ---------------- */

function ProcessExpectation() {
  return (
    <section className="bg-[#F3F2EF] pt-[8px]">

      <div className="px-[8px]">

        <div className="border border-neutral-200 rounded-2xl">

          <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-28">

            {/* HEADER */}

            <div className="max-w-[720px] mb-16">

              <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
                WHAT HAPPENS NEXT
              </div>

              <h2 className="text-[40px] leading-[1.1] tracking-[-0.015em] text-neutral-900 mb-6">
                What Happens After
                <br />
                You Submit Your Inquiry
              </h2>

              <p className="text-[18px] leading-[1.7] text-neutral-600 max-w-[620px]">
                Our team reviews your request and coordinates directly with our
                factory network in China to determine production feasibility,
                sampling requirements, and timelines.
              </p>

            </div>


            {/* STEPS */}

            <div className="grid md:grid-cols-3 gap-[32px]">

              <Step
                number="01"
                title="Project Review"
                text="Our team reviews your requirements and determines factory feasibility, production category, and suitable factories."
              />

              <Step
                number="02"
                title="Sampling & Quotation"
                text="We prepare sampling options, production specifications, and provide a quotation for your project."
              />

              <Step
                number="03"
                title="Production Planning"
                text="Once confirmed, production scheduling begins with QC checkpoints and logistics coordination."
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}


function Step({ number, title, text }) {
  return (

    <div className="border border-neutral-200 rounded-2xl p-10 bg-white flex flex-col">

      {/* NUMBER */}

      <div className="text-[34px] font-light text-[#8C7A5B] mb-6">
        {number}
      </div>

      {/* TITLE */}

      <h3 className="text-[20px] font-medium text-neutral-900 mb-3">
        {title}
      </h3>

      {/* TEXT */}

      <p className="text-[16px] leading-[1.7] text-neutral-600">
        {text}
      </p>

    </div>

  )
}

/* ---------------- WHATSAPP ---------------- */

function DirectWhatsApp() {

  const phone = "8619924111300"

  const message = encodeURIComponent(
    "Hello, I would like to discuss my production inquiry."
  )

  const whatsappLink = `https://wa.me/${phone}?text=${message}`

  return (
    <section className="bg-[#F3F2EF] pt-[8px]">

      <div className="px-[8px]">

        <div className="border border-neutral-200 rounded-2xl">

          <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-24 text-center">

            {/* PONI */}

            <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
              CONTACT
            </div>


            {/* HEADLINE */}

            <h3 className="text-[36px] md:text-[40px] leading-[1.2] tracking-[-0.015em] text-neutral-900 mb-6">
              Need a Faster Response?
              <br />
              Contact Us on WhatsApp
            </h3>


            {/* TEXT */}

            <p className="text-[18px] leading-[1.7] text-neutral-600 max-w-[620px] mx-auto mb-10">
              If you prefer a quick discussion about your production plans,
              our team is available on WhatsApp for faster communication.
            </p>


            {/* CTA */}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium text-white transition hover:opacity-90"
              style={{ backgroundColor: "#8C7A5B" }}
            >
              Chat on WhatsApp
            </a>


            {/* RESPONSE NOTE */}

            <div className="mt-6 text-sm text-neutral-500">
              Typical response time:{" "}
              <span className="text-neutral-900">within a few hours</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <div className="relative bg-[#F3F2EF] pt-[8px]">

      {/* =====================================================
          FOOTER WRAPPER
      ===================================================== */}

      <div className=" ">

        <div className="  overflow-hidden">

          {/* DARK BACKGROUND */}

          <div
            className="relative"
            style={{
              background: "linear-gradient(135deg, #191919 0%, #2C2C2C 100%)",
            }}
          >

            <footer className="max-w-[1600px] mx-auto px-10 xl:px-16 py-24 text-white">

              {/* =====================================================
                  MAIN GRID
              ===================================================== */}

              <div className="grid md:grid-cols-4 gap-20 border-b border-white/10 pb-20">

                {/* Brand */}

                <div>

                  <h3 className="text-lg font-medium mb-8">
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
                        className="group w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center transition hover:bg-white hover:border-white cursor-pointer"
                      >

                        <img
                          src={icon}
                          alt="social"
                          className="w-4 h-4 opacity-70 transition group-hover:opacity-100"
                        />

                      </div>

                    ))}

                  </div>

                </div>


                {/* Company */}

                <div>

                  <h4 className="text-xs font-semibold tracking-wider uppercase mb-6 text-white/70">
                    Company
                  </h4>

                  <ul className="space-y-4 text-white/60 text-sm">

                    <li className="hover:text-white transition cursor-pointer">
                      About Us
                    </li>

                    <li className="hover:text-white transition cursor-pointer">
                      Careers
                    </li>

                    <li className="hover:text-white transition cursor-pointer">
                      Blog
                    </li>

                    <li className="hover:text-white transition cursor-pointer">
                      News & Updates
                    </li>

                    <li className="hover:text-white transition cursor-pointer">
                      Partners
                    </li>

                  </ul>

                </div>


                {/* Resources */}

                <div>

                  <h4 className="text-xs font-semibold tracking-wider uppercase mb-6 text-white/70">
                    Resources
                  </h4>

                  <ul className="space-y-4 text-white/60 text-sm">

                    <li className="hover:text-white transition cursor-pointer">
                      Help Center
                    </li>

                    <li className="hover:text-white transition cursor-pointer">
                      FAQs
                    </li>

                    <li className="hover:text-white transition cursor-pointer">
                      Shipping Calculator
                    </li>

                    <li className="hover:text-white transition cursor-pointer">
                      Terms & Conditions
                    </li>

                    <li className="hover:text-white transition cursor-pointer">
                      Privacy Policy
                    </li>

                  </ul>

                </div>


                {/* Contact */}

                <div>

                  <h4 className="text-xs font-semibold tracking-wider uppercase mb-6 text-white/70">
                    Contact
                  </h4>

                  <ul className="space-y-4 text-white/60 text-sm leading-relaxed">

                    <li>
                      Room C169, 1501, No. 207–213,
                      West Dongfeng Road, Yuexiu District,
                      Guangzhou, China
                    </li>

                    <li>
                      +8619924111300
                    </li>

                    <li>
                      Jl. Batumejan 5D Padang Linjong,
                      Canggu, Bali
                    </li>

                    <li>
                      hello@alraimigroup.com
                    </li>

                  </ul>

                </div>

              </div>


              {/* =====================================================
                  BOTTOM BAR
              ===================================================== */}

              <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-12 text-sm text-white/40">

                <p>
                  © {new Date().getFullYear()} Al-Raimi Group. All rights reserved.
                </p>

                <div className="flex gap-8">

                  <span className="hover:text-white transition cursor-pointer">
                    Terms of Use
                  </span>

                  <span className="hover:text-white transition cursor-pointer">
                    Privacy Policy
                  </span>

                </div>

              </div>

            </footer>

          </div>

        </div>

      </div>

    </div>
  )
}