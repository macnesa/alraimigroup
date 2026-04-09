"use client"
/* app/page.jsx */

import Image from "next/image";
import Link from 'next/link'
import React, { useRef, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation"
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
import Footer from '../../components/organisms/Footer'



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

    <section ref={heroRef} className="bg-[#F3F2EF] pt-[8px]">


      {/* HEADER */}

      <header className="mx-[8px]">

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 py-5 flex items-center justify-between">

{/* LOGO */}
<Link href="/" className="flex items-center relative">
  <div className="relative h-[36px] md:h-[42px] lg:h-[46px] overflow-visible">
    <Image
      src="/images/alraimi-logo-black-1.png"
      alt="Alraimi Logo"
      width={90}
      height={80}
      className="h-[50px] md:h-[58px] lg:h-[66px] w-auto object-contain -my-2"
      priority
    />
  </div>
</Link>

{/* NAV */}
<nav className="flex items-center gap-4 sm:gap-6 md:gap-10 text-sm text-neutral-700">
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

{/* CTA */}
<Link
  href="/contact#get-pi"
  className="hidden md:inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium bg-black text-white hover:bg-[#7A6A4E] transition"
>
  Get Your PI
  <FaArrowRight className="text-xs" />
</Link>

</div>

      </header>



      {/* HERO SURFACE */}

      <div className="px-[8px] pt-[8px]">

        <div
          className="relative rounded-2xl border border-white/10 text-white overflow-hidden"
          style={{
            background: "linear-gradient(135deg,#191919 0%,#2C2C2C 100%)"
          }}
        >


          {/* BACKGROUND IMAGE */}

          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1660980041852-230420b8f99f?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0)",
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

          <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 xl:px-16 py-20 md:py-24 lg:py-28">

            <div className="max-w-[760px] mx-auto text-center">


              {/* LABEL */}

              <div className="hero-item inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1.5 rounded-md text-[11px] sm:text-xs tracking-[0.18em] uppercase font-medium mb-6 sm:mb-8">
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


              {/* DESCRIPTION */}

              <p
                className="
                hero-item
                mt-6
                text-[16px]
                leading-[1.7]
                text-white/70
                max-w-[540px]
                mx-auto
                "
              >
                Tell us about your production plans. Our team will review your
                requirements and guide you through the next steps.
              </p>


              {/* CTA */}

              <div className="hero-item mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">

                <Link
                  href="/contact#start-brand"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium text-white transition"
                  style={{ backgroundColor: "#8C7A5B" }}
                >
                  Start Your Brand
                  <FaArrowRight className="text-xs" />
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


function Field({ label, children, note, error }) {
  return (
    <div>
      <label className={`text-sm font-medium ${error ? "text-red-600" : "text-neutral-700"}`}>
        {label}
      </label>

      {note && <p className="text-xs text-neutral-400 mt-1">{note}</p>}

      <div className="mt-2">{children}</div>

      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  )
}

function InquiryForm() {

  const router = useRouter()

  const [step, setStep] = useState(1)

  const next = () => {
    if (!validateStep()) return
    setStep((s) => Math.min(s + 1, 4))
  }

  const back = () => setStep((s) => Math.max(s - 1, 1))

  // ================= STATE =================
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    productName: "",
    specs: "",
    referenceLink: "",
    quantity: "",
    budget: "",
    brandStage: "",
    branding: "",
    targetPrice: "",
    orderTimeline: "",
    deadline: "",
    destination: "",
    notes: ""
  })

  const [files, setFiles] = useState([])
  const [fileNames, setFileNames] = useState([])

  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState("")

  // ================= AUTOSAVE =================
  useEffect(() => {
    const saved = localStorage.getItem("inquiry-form")
    if (saved) {
      const parsed = JSON.parse(saved)
      if (parsed.form) setForm(parsed.form)
      if (parsed.fileNames) setFileNames(parsed.fileNames)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      "inquiry-form",
      JSON.stringify({ form, fileNames })
    )
  }, [form, fileNames])

  // ================= ERROR =================
  const [errors, setErrors] = useState({})

  const validationConfig = {
    1: ["name", "email"],
    2: ["projectType", "productName", "specs"],
    3: ["quantity"],
    4: ["orderTimeline", "deadline", "destination"]
  }

  const errorMessages = {
    name: "Full name is required",
    email: "Email is required",
    projectType: "Please select a project type",
    productName: "Product name is required",
    specs: "Product specifications are required",
    quantity: "Quantity is required",
    orderTimeline: "Order timeline is required",
    deadline: "Delivery deadline is required",
    destination: "Shipping destination is required"
  }

  const validateStep = () => {

    const requiredFields = validationConfig[step] || []
    let newErrors = {}

    requiredFields.forEach(field => {
      if (!form[field]) newErrors[field] = errorMessages[field]
    })

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }))
    setErrors(prev => ({ ...prev, [key]: "" }))
  }

  // ================= FILE =================
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "application/pdf"
  ]

  const maxSize = 5 * 1024 * 1024
  const maxFiles = 5

  const handleFile = (e) => {

    const selected = Array.from(e.target.files)

    let updatedFiles = [...files]
    let updatedNames = [...fileNames]

    for (let file of selected) {

      if (!allowedTypes.includes(file.type)) {
        alert(`${file.name} format not allowed`)
        continue
      }

      if (file.size > maxSize) {
        alert(`${file.name} exceeds 5MB`)
        continue
      }

      if (updatedFiles.length >= maxFiles) {
        alert(`Max ${maxFiles} files`)
        break
      }

      updatedFiles.push(file)
      updatedNames.push(file.name)
    }

    setFiles(updatedFiles)
    setFileNames(updatedNames)
  }

  const removeFile = (index) => {
    const f = [...files]
    const n = [...fileNames]
    f.splice(index, 1)
    n.splice(index, 1)
    setFiles(f)
    setFileNames(n)
  }

  // ================= SUBMIT =================
  const handleSubmit = async () => {

    if (!validateStep()) return
    if (loading) return

    setLoading(true)
    setSubmitError("")

    try {
      const data = new FormData()

      Object.entries(form).forEach(([k, v]) => data.append(k, v))

      files.forEach(f => data.append("files", f))

      const res = await fetch("/api/inquiry", {
        method: "POST",
        body: data
      })

      const text = await res.text()

      if (!res.ok) throw new Error(text)

      localStorage.removeItem("inquiry-form")

      router.push("/inquiry-received")

    } catch (err) {
      setSubmitError(err.message || "Failed to send inquiry")
    }

    setLoading(false)
  }

  return (
    <section className="bg-[#F3F2EF] pt-[8px]">
      <div className="px-[8px]">
        <div className="border border-neutral-200 rounded-2xl">

          <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-28">

            <div className="grid md:grid-cols-[0.42fr_0.58fr] gap-[80px] items-start">

              {/* LEFT (UNCHANGED) */}
              <div className="max-w-[520px]">
                <div className="mb-8">
                  <div className="inline-flex border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase">
                    START YOUR BRAND
                  </div>
                </div>

                <h2 className="text-[40px] leading-[1.1] text-neutral-900 mb-6">
                  Production Inquiry
                </h2>

                <p className="text-[18px] text-neutral-600 mb-10 leading-[1.7]">
                Tell us about your project and production requirements. Our team will review feasibility, sampling needs, and production timelines with our factory partners in China.
                </p>

                <div className="space-y-6 text-neutral-700">
                  <div className="flex gap-4"><span className="text-[#8C7A5B]">01</span>Submit complete project details</div>
                  <div className="flex gap-4"><span className="text-[#8C7A5B]">02</span>Internal feasibility review</div>
                  <div className="flex gap-4"><span className="text-[#8C7A5B]">03</span>Sampling & quotation alignment</div>
                  <div className="flex gap-4"><span className="text-[#8C7A5B]">04</span>Production planning</div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="border border-neutral-200 rounded-2xl p-10 bg-white">

                {/* HEADER */}
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl border border-neutral-300 flex items-center justify-center">
                      0{step}
                    </div>
                    <div>
                      <div className="text-xs tracking-[0.2em] text-neutral-400 uppercase">
                        Step {step} of 4
                      </div>
                      <div className="text-[16px] text-neutral-800">
                        {["Client Details","Product Details","Order Details","Logistics"][step-1]}
                      </div>
                    </div>
                  </div>

                  <div className="w-[120px] h-[2px] bg-neutral-200 relative">
                    <div
                      className="absolute top-0 left-0 h-full bg-black transition-all duration-500"
                      style={{ width: `${(step/4)*100}%` }}
                    />
                  </div>
                </div>

                {submitError && (
                  <div className="mb-6 text-sm text-red-600">{submitError}</div>
                )}

                <div className="border-t border-neutral-200 pt-10 space-y-8">

                  {/* STEP 1 */}
                  {step === 1 && (
                    <>
                      <Field label="Full Name *" error={errors.name}>
                        <input value={form.name} onChange={(e)=>handleChange("name", e.target.value)} placeholder="Your full name" className={`input ${errors.name?"input-error":""}`}/>
                      </Field>

                      <Field label="Company Name">
                        <input value={form.company} onChange={(e)=>handleChange("company", e.target.value)} placeholder="Your company or business name" className="input"/>
                      </Field>

                      <div className="grid md:grid-cols-2 gap-4">
                        <Field label="Email *" error={errors.email}>
                          <input value={form.email} onChange={(e)=>handleChange("email", e.target.value)} placeholder="email@company.com" className={`input ${errors.email?"input-error":""}`}/>
                        </Field>

                        <Field label="Phone / WhatsApp">
                          <input value={form.phone} onChange={(e)=>handleChange("phone", e.target.value)} placeholder="+62 XXX XXX XXXX" className="input"/>
                        </Field>
                      </div>
                    </>
                  )}

                  {/* STEP 2 */}
                  {step === 2 && (
                    <>
                      <Field label="Project Type *" error={errors.projectType}>
                        <div className="flex flex-wrap gap-3 text-sm">
                          {["Fashion","Packaging","Other Production"].map(item => (
                            <div key={item} onClick={()=>handleChange("projectType", item)} className={`chip ${form.projectType===item?"active":""} ${errors.projectType?"chip-error":""}`}>
                              {item}
                            </div>
                          ))}
                        </div>
                      </Field>

                      <Field label="Product Name *" error={errors.productName}>
                        <input value={form.productName} onChange={(e)=>handleChange("productName", e.target.value)} placeholder="e.g. T-Shirt / Magnetic Box" className={`input ${errors.productName?"input-error":""}`}/>
                      </Field>

                      <Field label="Product Specifications *" error={errors.specs}>
                        <textarea value={form.specs} onChange={(e)=>handleChange("specs", e.target.value)} placeholder="e.g. Cotton, Linen..." className={`input h-[120px] ${errors.specs?"input-error":""}`}/>
                      </Field>

                      <Field label="References (Link or File)">
                        <div className="space-y-4">
                          <input value={form.referenceLink} onChange={(e)=>handleChange("referenceLink", e.target.value)} placeholder="Paste reference link (optional)" className="input"/>

                          <label className="flex items-center gap-4 cursor-pointer">
                            <div className="flex-1 border border-dashed border-neutral-300 rounded-lg px-4 py-4 text-sm text-neutral-500 text-center">
                              {fileNames.length > 0
                                ? fileNames.join(", ")
                                : "Upload (JPG, PNG, WEBP, PDF • max 5MB • max 5 files)"}
                            </div>
                            <input type="file" multiple accept=".jpg,.jpeg,.png,.webp,.pdf" className="hidden" onChange={handleFile}/>
                          </label>

                          {fileNames.map((name,i)=>(
                            <div key={i} className="flex justify-between text-xs">
                              {name}
                              <button onClick={()=>removeFile(i)} className="text-red-500">Remove</button>
                            </div>
                          ))}
                        </div>
                      </Field>
                    </>
                  )}

                  {/* STEP 3 */}
                  {step === 3 && (
                    <>
                      <Field label="Quantity Range *" error={errors.quantity}>
                        <input value={form.quantity} onChange={(e)=>handleChange("quantity", e.target.value)} placeholder="e.g. 500 - 2000 pcs" className={`input ${errors.quantity?"input-error":""}`}/>
                      </Field>

                      <div className="grid md:grid-cols-2 gap-4">
                        <Field label="Brand Stage">
                          <div className="relative">
                            <select value={form.brandStage} onChange={(e)=>handleChange("brandStage", e.target.value)} className="input pr-10 appearance-none">
                              <option value="">Select stage</option>
                              <option>Startup</option>
                              <option>Growing</option>
                              <option>Established</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">▾</div>
                          </div>
                        </Field>

                        <Field label="Target Price (optional)">
                          <input value={form.budget} onChange={(e)=>handleChange("budget", e.target.value)} placeholder="e.g. $5,000 - $20,000" className="input"/>
                        </Field>
                      </div>

                      <Field label="Branding Requirements">
                        <div className="flex flex-wrap gap-3 text-sm">
                          {["Custom Logo / OEM","Standard Packaging","Both","Undecided"].map(item => (
                            <div key={item} onClick={()=>handleChange("branding", item)} className={`chip ${form.branding===item?"active":""}`}>
                              {item}
                            </div>
                          ))}
                        </div>
                      </Field>

                      <Field label="Target Price per Unit (USD)">
                        <input value={form.targetPrice} onChange={(e)=>handleChange("targetPrice", e.target.value)} placeholder="e.g. 45.00" className="input"/>
                      </Field>
                    </>
                  )}

                  {/* STEP 4 */}
                  {step === 4 && (
                    <>
                      <Field label="Order Timeline *" error={errors.orderTimeline}>
                        <input value={form.orderTimeline} onChange={(e)=>handleChange("orderTimeline", e.target.value)} placeholder="e.g. Within 2 weeks" className={`input ${errors.orderTimeline?"input-error":""}`}/>
                      </Field>

                      <Field label="Delivery Deadline *" error={errors.deadline}>
                        <input value={form.deadline} onChange={(e)=>handleChange("deadline", e.target.value)} placeholder="dd/mm/yyyy" className={`input ${errors.deadline?"input-error":""}`}/>
                      </Field>

                      <Field label="Shipping Destination *" error={errors.destination}>
                        <input value={form.destination} onChange={(e)=>handleChange("destination", e.target.value)} placeholder="e.g. Doha, Qatar" className={`input ${errors.destination?"input-error":""}`}/>
                      </Field>

                      <Field label="Additional Notes">
                        <textarea value={form.notes} onChange={(e)=>handleChange("notes", e.target.value)} placeholder="Any additional details..." className="input h-[120px]"/>
                      </Field>
                    </>
                  )}

                </div>

                {/* CTA */}
                <div className="flex justify-between mt-12">
                  {step > 1 && (
                    <button onClick={back} className="px-5 py-3 border border-neutral-300 rounded-lg text-sm">
                      ← Back
                    </button>
                  )}

                  {step < 4 ? (
                    <button onClick={next} className="ml-auto bg-black text-white px-6 py-3 rounded-lg">
                      Continue →
                    </button>
                  ) : (
                    <button onClick={handleSubmit} className="ml-auto bg-[#8C7A5B] text-white px-6 py-3 rounded-lg">
                      {loading ? "Sending..." : "Submit Inquiry"}
                    </button>
                  )}
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #d4d4d4;
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 14px;
          outline: none;
          background: white;
        }

        .input:focus {
          border-color: #8C7A5B;
        }

        .input-error {
          border-color: #dc2626;
          background: #fef2f2;
        }

        .chip {
          padding: 10px 14px;
          border: 1px solid #d4d4d4;
          border-radius: 999px;
          cursor: pointer;
        }

        .chip-error {
          border-color: #dc2626;
          color: #dc2626;
        }

        .chip:hover {
          border-color: #8C7A5B;
          color: #8C7A5B;
        }

        .chip.active {
          border-color: #8C7A5B;
          background: #F3F2EF;
          color: #8C7A5B;
        }
      `}</style>

    </section>
  )
}
 

function GetYourPI() {

  const router = useRouter()
  const [step, setStep] = useState(1)

  const next = () => {
    if (!validateStep()) return
    setStep((s) => Math.min(s + 1, 4))
  }

  const back = () => setStep((s) => Math.max(s - 1, 1))

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    productName: "",
    specs: "",
    referenceLink: "",
    quantity: "",
    budget: "",
    brandStage: "",
    branding: "",
    targetPrice: "",
    orderTimeline: "",
    deadline: "",
    destination: "",
    notes: ""
  })

  const [files, setFiles] = useState([])
  const [fileNames, setFileNames] = useState([])
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setErrors({})
  }, [step])

  const validationConfig = {
    1: ["name", "email"],
    2: ["projectType", "productName", "specs"],
    3: ["quantity"],
    4: ["orderTimeline", "deadline", "destination"]
  }

  const errorMessages = {
    name: "Full name is required",
    email: "Email is required",
    projectType: "Please select a project type",
    productName: "Product name is required",
    specs: "Product specifications are required",
    quantity: "Quantity is required",
    orderTimeline: "Order timeline is required",
    deadline: "Delivery deadline is required",
    destination: "Shipping destination is required"
  }

  const validateStep = () => {
    const requiredFields = validationConfig[step] || []
    let newErrors = {}

    requiredFields.forEach(field => {
      if (!form[field]) newErrors[field] = errorMessages[field]
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }))
    setErrors(prev => ({ ...prev, [key]: "" }))
  }

  const allowedTypes = ["image/jpeg","image/png","image/webp","application/pdf"]
  const maxSize = 5 * 1024 * 1024
  const maxFiles = 5

  const handleFile = (e) => {
    const selected = Array.from(e.target.files)
    let updatedFiles = [...files]
    let updatedNames = [...fileNames]

    for (let file of selected) {
      if (!allowedTypes.includes(file.type)) continue
      if (file.size > maxSize) continue
      if (updatedFiles.length >= maxFiles) break
      updatedFiles.push(file)
      updatedNames.push(file.name)
    }

    setFiles(updatedFiles)
    setFileNames(updatedNames)
  }

  const removeFile = (index) => {
    const f = [...files]
    const n = [...fileNames]
    f.splice(index, 1)
    n.splice(index, 1)
    setFiles(f)
    setFileNames(n)
  }

  const handleSubmit = async () => {

    if (!validateStep()) return
    if (loading) return

    setLoading(true)

    try {
      const data = new FormData()

      Object.entries(form).forEach(([k, v]) => data.append(k, v))
      files.forEach(f => data.append("files", f))

      const res = await fetch("/api/inquiry", {
        method: "POST",
        body: data
      })

      if (!res.ok) {
        const text = await res.text()
        throw new Error(text)
      }

      router.push("/inquiry-received")

    } catch (err) {
      alert(err.message || "Failed to send inquiry")
    }

    setLoading(false)
  }

  return (
    <section id="get-pi" className="bg-[#F3F2EF] pt-[8px]">

      <div className="px-[8px]">
        <div className="border border-neutral-200 rounded-2xl">

          <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-28">

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

            <div className="max-w-[880px] mx-auto border border-neutral-200 rounded-2xl p-10 bg-white">

              <div className="mb-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl border border-neutral-300 flex items-center justify-center">
                    0{step}
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.2em] text-neutral-400 uppercase">
                      Step {step} of 4
                    </div>
                    <div className="text-[16px] text-neutral-800">
                      {["Client Details","Product Details","Order Details","Logistics"][step-1]}
                    </div>
                  </div>
                </div>

                <div className="w-[120px] h-[2px] bg-neutral-200 relative">
                  <div className="absolute top-0 left-0 h-full bg-black transition-all duration-500" style={{ width: `${(step/4)*100}%` }} />
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-10 space-y-8">

                {/* STEP 1 */}
                {step === 1 && (
                  <>
                    <Field label="Full Name *" error={errors.name}>
                      <input value={form.name} onChange={(e)=>handleChange("name", e.target.value)} placeholder="Your full name" className={`input ${errors.name?"input-error":""}`}/>
                    </Field>

                    <Field label="Company Name">
                      <input value={form.company} onChange={(e)=>handleChange("company", e.target.value)} placeholder="Your company or business name" className="input"/>
                    </Field>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Field label="Email *" error={errors.email}>
                        <input value={form.email} onChange={(e)=>handleChange("email", e.target.value)} placeholder="email@company.com" className={`input ${errors.email?"input-error":""}`}/>
                      </Field>

                      <Field label="Phone / WhatsApp">
                        <input value={form.phone} onChange={(e)=>handleChange("phone", e.target.value)} placeholder="+62 XXX XXX XXXX" className="input"/>
                      </Field>
                    </div>
                  </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <>
                    <Field label="Project Type *" error={errors.projectType}>
                      <div className="flex flex-wrap gap-3 text-sm">
                        {["Fashion","Packaging","Other Production"].map(item => (
                          <div key={item} onClick={()=>handleChange("projectType", item)} className={`chip ${form.projectType===item?"active":""} ${errors.projectType?"chip-error":""}`}>
                            {item}
                          </div>
                        ))}
                      </div>
                    </Field>

                    <Field label="Product Name *" error={errors.productName}>
                      <input value={form.productName} onChange={(e)=>handleChange("productName", e.target.value)} placeholder="e.g. Solar LED Street Light 100W" className={`input ${errors.productName?"input-error":""}`}/>
                    </Field>

                    <Field label="Product Specifications *" error={errors.specs}>
                      <textarea value={form.specs} onChange={(e)=>handleChange("specs", e.target.value)} placeholder="e.g. 100W, 6000K..." className={`input h-[120px] ${errors.specs?"input-error":""}`}/>
                    </Field>

                    <Field label="References (Link or File)">
                      <div className="space-y-4">

                        <input value={form.referenceLink} onChange={(e)=>handleChange("referenceLink", e.target.value)} placeholder="Paste reference link (optional)" className="input"/>

                        <label className="flex items-center gap-4 cursor-pointer">
                          <div className="flex-1 border border-dashed border-neutral-300 rounded-lg px-4 py-4 text-sm text-neutral-500 text-center">
                            {fileNames.length > 0 ? fileNames.join(", ") : "Upload (JPG, PNG, WEBP, PDF • max 5MB • max 5 files)"}
                          </div>

                          <input type="file" multiple accept=".jpg,.jpeg,.png,.webp,.pdf" className="hidden" onChange={handleFile}/>
                        </label>

                        {fileNames.map((name,i)=>(
                          <div key={i} className="flex justify-between text-xs">
                            {name}
                            <button onClick={()=>removeFile(i)} className="text-red-500">Remove</button>
                          </div>
                        ))}

                      </div>
                    </Field>
                  </>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <>
                    <Field label="Quantity Range *" error={errors.quantity}>
                      <input value={form.quantity} onChange={(e)=>handleChange("quantity", e.target.value)} placeholder="e.g. 500 - 2000 pcs" className={`input ${errors.quantity?"input-error":""}`}/>
                    </Field>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Field label="Brand Stage">
                        <div className="relative">
                          <select value={form.brandStage} onChange={(e)=>handleChange("brandStage", e.target.value)} className="input pr-10 appearance-none">
                            <option value="">Select stage</option>
                            <option>Startup</option>
                            <option>Growing</option>
                            <option>Established</option>
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">▾</div>
                        </div>
                      </Field>

                      <Field label="Target Price (optional)">
                        <input value={form.budget} onChange={(e)=>handleChange("budget", e.target.value)} placeholder="e.g. $5,000 - $20,000" className="input"/>
                      </Field>
                    </div>

                    <Field label="Branding Requirements">
                      <div className="flex flex-wrap gap-3 text-sm">
                        {["Custom Logo / OEM","Standard Packaging","Both","Undecided"].map(item => (
                          <div key={item} onClick={()=>handleChange("branding", item)} className={`chip ${form.branding===item?"active":""}`}>
                            {item}
                          </div>
                        ))}
                      </div>
                    </Field>

                    <Field label="Target Price per Unit (USD)">
                      <input value={form.targetPrice} onChange={(e)=>handleChange("targetPrice", e.target.value)} placeholder="e.g. 45.00" className="input"/>
                    </Field>
                  </>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <>
                    <Field label="Order Timeline *" error={errors.orderTimeline}>
                      <input value={form.orderTimeline} onChange={(e)=>handleChange("orderTimeline", e.target.value)} placeholder="e.g. Within 2 weeks" className={`input ${errors.orderTimeline?"input-error":""}`}/>
                    </Field>

                    <Field label="Delivery Deadline *" error={errors.deadline}>
                      <input value={form.deadline} onChange={(e)=>handleChange("deadline", e.target.value)} placeholder="dd/mm/yyyy" className={`input ${errors.deadline?"input-error":""}`}/>
                    </Field>

                    <Field label="Shipping Destination *" error={errors.destination}>
                      <input value={form.destination} onChange={(e)=>handleChange("destination", e.target.value)} placeholder="e.g. Doha, Qatar" className={`input ${errors.destination?"input-error":""}`}/>
                    </Field>

                    <Field label="Additional Notes">
                      <textarea value={form.notes} onChange={(e)=>handleChange("notes", e.target.value)} placeholder="Any additional details..." className="input h-[120px]"/>
                    </Field>
                  </>
                )}

              </div>

              <div className="flex justify-between mt-12">

                {step > 1 && (
                  <button onClick={back} className="px-5 py-3 border border-neutral-300 rounded-lg text-sm">
                    ← Back
                  </button>
                )}

                {step < 4 ? (
                  <button onClick={next} className="ml-auto bg-black text-white px-6 py-3 rounded-lg">
                    Continue →
                  </button>
                ) : (
                  <button onClick={handleSubmit} className="ml-auto bg-[#8C7A5B] text-white px-6 py-3 rounded-lg">
                    {loading ? "Sending..." : "Submit PI"}
                  </button>
                )}

              </div>

            </div>

          </div>

        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #d4d4d4;
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 14px;
          outline: none;
          background: white;
        }

        .input:focus {
          border-color: #8C7A5B;
        }

        .input-error {
          border-color: #dc2626;
          background: #fef2f2;
        }

        .chip {
          padding: 10px 14px;
          border: 1px solid #d4d4d4;
          border-radius: 999px;
          cursor: pointer;
        }

        .chip-error {
          border-color: #dc2626;
          color: #dc2626;
        }

        .chip:hover {
          border-color: #8C7A5B;
          color: #8C7A5B;
        }

        .chip.active {
          border-color: #8C7A5B;
          background: #F3F2EF;
          color: #8C7A5B;
        }
      `}</style>

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
 