import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"

export default function QualityControl() {

  const cloudinaryTransform = (url) => {
    return url.replace(
      "/upload/",
      "/upload/f_auto,q_auto,c_fill,w_1200/"
    )
  }

  const controls = [
    {
      title: "In-Line Quality Control",
      desc: "Supervised production-floor monitoring during active manufacturing.",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772606303/ChatGPT_Image_Mar_4_2026_12_57_21_PM_wri1bp.png",
    },
    {
      title: "Pre-Shipment AQL Inspection",
      desc: "Formal inspection with full report, measurements, and visual documentation.",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772606304/ChatGPT_Image_Mar_4_2026_12_57_06_PM_ztdptp.png",
    },
    {
      title: "Corrective Action Protocol",
      desc: "Any deviation is corrected before shipment release.",
      image: "https://res.cloudinary.com/djgu1bhef/image/upload/v1772606304/ChatGPT_Image_Mar_4_2026_01_37_01_PM_x8gmm1.png",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const imageRef = useRef(null)

  useEffect(() => {

    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.35, ease: "power2.out" }
    )

  }, [activeIndex])

  return (

    <section className="text-white">

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">

        {/* HEADER */}

        <div className="mb-16 md:mb-20">

          <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
            QUALITY CONTROL
          </div>

          <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-light max-w-[720px]">
            Inspection Before Shipment,<br/>Not After Complaints
          </h2>

        </div>


        {/* CONTENT */}

        <div className="grid md:grid-cols-2 gap-14 md:gap-20 xl:gap-24 items-center">


          {/* IMAGE */}

          <div className="w-full aspect-square overflow-hidden rounded-2xl">

            <img
              ref={imageRef}
              key={activeIndex}
              src={cloudinaryTransform(controls[activeIndex].image)}
              alt={controls[activeIndex].title}
              loading="lazy"
              className="w-full h-full object-cover"
            />

          </div>


          {/* LIST */}

          <div className="space-y-10">

            {controls.map((item,index)=>{

              const isActive = activeIndex === index

              return(

                <div
                  key={item.title}
                  onClick={()=>setActiveIndex(index)}
                  className="cursor-pointer pb-8 border-b border-white/10 transition-all duration-300"
                >

                  <div
                    className={`text-[18px] sm:text-[19px] md:text-[20px] leading-[1.3] font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    {item.title}
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isActive
                        ? "max-h-40 mt-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >

                    <div className="text-[16px] leading-[1.7] text-white/70 max-w-[520px]">
                      {item.desc}
                    </div>

                  </div>

                </div>

              )

            })}


            <div className="pt-8 text-sm text-white/50 leading-[1.7] max-w-[520px]">
              Real-time production photos and video updates are shared during manufacturing to maintain transparency and alignment.
            </div>

          </div>

        </div>

      </div>

    </section>

  )
}