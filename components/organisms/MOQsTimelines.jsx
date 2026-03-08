export default function MOQsTimelines() {

  const items = [
    {
      title: "MOQs",
      content: "Standard production runs start from 5,000+ units. Select SKUs may begin from 1,000+ for launches or trial batches (spec-dependent).",
    },
    {
      title: "Samples",
      content: "Typically 1–3 weeks after dieline and specification confirmation.",
    },
    {
      title: "Production",
      content: "Usually 3–6 weeks from sample approval. Complex structures or specialty finishes may extend lead time.",
    },
    {
      title: "Reorders",
      content: "Faster once master materials, colors, and structural standards are locked.",
    },
  ];

  return (

    <section className="bg-[#F3F2EF] pt-[8px]">

      <div className="px-[8px]">

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16 py-20 md:py-24 xl:py-28">

          {/* Header */}

          <div className="mb-16 md:mb-20 text-center">

            <div className="inline-flex items-center border border-[#8C7A5B]/40 text-[#8C7A5B] px-4 py-1 rounded-md text-xs tracking-[0.18em] uppercase font-medium mb-6">
              MOQs & Timelines
            </div>

            <h2 className="text-[34px] sm:text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-normal text-neutral-900">
              Production Quantities and Lead Times
            </h2>

          </div>

          {/* Card */}

          <div className="bg-white border border-[#D6D1C8] rounded-2xl px-8 sm:px-12 md:px-16 xl:px-20 py-12 md:py-16 xl:py-20">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16 md:gap-x-16 xl:gap-x-20">

              {items.map((item, index) => (
                <div key={item.title} className="flex gap-6 md:gap-8 items-start">

                  <div className="text-[20px] sm:text-[22px] md:text-[24px] font-medium text-neutral-300 leading-none shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>

                    <div className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.3] font-medium text-neutral-900 mb-3">
                      {item.title}
                    </div>

                    <div className="text-[16px] leading-[1.7] text-neutral-600">
                      {item.content}
                    </div>

                  </div>

                </div>
              ))}

            </div>

            <div className="mt-14 md:mt-20 pt-6 md:pt-8 border-t border-neutral-200 text-sm text-neutral-500 leading-[1.7] max-w-[800px]">
              Final MOQs and production timelines are confirmed in your PI based on structure, materials, finishes, and logistics requirements.
            </div>

          </div>

        </div>

      </div>

    </section>

  );
}