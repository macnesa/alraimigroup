import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function LogisticsShipping() {

  const sectionRef = useRef(null)

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger:{trigger:sectionRef.current,start:"top 80%",once:true}
      })

      tl.from(".logistics-left",{opacity:0,x:-40,duration:0.6,ease:"power2.out"})
      .from(".incoterm-item",{opacity:0,y:30,duration:0.5,ease:"power2.out",stagger:0.12},"-=0.3")

    },sectionRef)

    return () => ctx.revert()

  },[])


  const incoterms = [
    {
      code: "EXW",
      desc: "Factory pickup. You manage freight, customs, and final delivery.",
    },
    {
      code: "FOB",
      desc: "We handle export clearance and delivery to port. You manage main freight.",
    },
    {
      code: "DDP",
      desc: "Door-to-door delivery with customs clearance included. Transit typically 15 days by air and around 30 days by sea depending on route.",
    },
  ]


  return (

    <section ref={sectionRef} className="text-white">

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">

        <div className="grid grid-cols-1 md:grid-cols-[0.5fr_0.5fr] gap-10 md:gap-24">


          {/* LEFT */}

          <div className="logistics-left text-center md:text-left">

            <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
              Logistics & Shipping
            </div>

            <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-light">
              Choose the Incoterms<br/>That Suit Your Operation
            </h2>

            <div className="mt-8 text-[16px] leading-[1.7] text-white/70 max-w-[420px] mx-auto md:mx-0">
              Export documentation and packing lists are prepared by our team for all shipment types.
            </div>

            <div className="mt-12 flex justify-center md:justify-start">

              <button className="px-8 py-3.5 rounded-lg text-sm font-medium bg-white text-black hover:bg-neutral-200 transition">
                Get Your PI
              </button>

            </div>

          </div>


          {/* RIGHT */}

          <div className="space-y-6 md:space-y-10">

            {incoterms.map((item)=>(
              
              <div key={item.code} className="incoterm-item pb-6 md:pb-10 border-b border-white/10">

                <div className="text-[26px] sm:text-[30px] md:text-[34px] font-light tracking-[-0.02em] mb-3">
                  {item.code}
                </div>

                <div className="text-[16px] leading-[1.7] text-white/70 max-w-[520px]">
                  {item.desc}
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  )
}