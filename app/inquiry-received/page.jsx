import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

export default function InquiryReceived() {
  return (
    <main className="bg-[#F3F2EF] text-neutral-900">

      <section className="pt-[8px]">

        <div className="px-[8px]">

          <div className="border border-neutral-200 rounded-2xl">

            <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-28">

              <div className="max-w-[720px] mx-auto text-center">

                {/* LABEL */}
                <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
                  Inquiry Received
                </div>

                {/* TITLE */}
                <h1 className="text-[40px] leading-[1.1] tracking-[-0.015em] text-neutral-900 mb-6">
                  Your Request Has Been
                  <br />
                  Successfully Submitted
                </h1>

                {/* DESC */}
                <p className="text-[18px] leading-[1.7] text-neutral-600 mb-12">
                  Our team is now reviewing your submission and coordinating
                  with our production partners. You will receive a response
                  within 24–48 hours regarding feasibility, next steps, and
                  quotation details.
                </p>

                {/* SYSTEM STEPS (mirror dari ProcessExpectation) */}
                <div className="grid md:grid-cols-3 gap-[24px] text-left mb-14">

                  <div className="border border-neutral-200 rounded-2xl p-6 bg-white">
                    <div className="text-[22px] font-light text-[#8C7A5B] mb-3">01</div>
                    <div className="text-[14px] text-neutral-700">
                      Internal review of your project requirements
                    </div>
                  </div>

                  <div className="border border-neutral-200 rounded-2xl p-6 bg-white">
                    <div className="text-[22px] font-light text-[#8C7A5B] mb-3">02</div>
                    <div className="text-[14px] text-neutral-700">
                      Factory coordination and feasibility check
                    </div>
                  </div>

                  <div className="border border-neutral-200 rounded-2xl p-6 bg-white">
                    <div className="text-[22px] font-light text-[#8C7A5B] mb-3">03</div>
                    <div className="text-[14px] text-neutral-700">
                      Quotation and next-step proposal
                    </div>
                  </div>

                </div>

                {/* CTA GROUP */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                  {/* PRIMARY */}
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium text-white transition"
                    style={{ backgroundColor: "black" }}
                  >
                    Back to Home
                    <FaArrowRight className="text-xs" />
                  </Link>

                  {/* SECONDARY */}
                  <a
                    href="https://wa.me/8619924111300"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium border border-neutral-300 text-neutral-800 hover:bg-neutral-100 transition"
                  >
                    Contact via WhatsApp
                  </a>

                </div>

                {/* FOOTNOTE */}
                <div className="mt-8 text-sm text-neutral-500">
                  Typical response time:{" "}
                  <span className="text-neutral-900">
                    within 24–48 hours
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}