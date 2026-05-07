import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const testimonials = [
  {
    company: "FUJITSU",
    quote:
      "With Cohere’s latest highly secure enterprise LLMs, we aim to provide businesses with powerful and adaptable AI solutions that address specific needs and accelerate the adoption of generative AI globally.",
    author:
      "Vivek Mahajan, Corporate Vice President, CTO and CPO",
    image:
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1600&auto=format&fit=crop",
  },

  {
    company: "NVIDIA",
    quote:
      "The team at Cohere has made foundational contributions to generative AI. Their service will help enterprises around the world harness these capabilities to automate and accelerate.",
    author:
      "Jensen Huang, Founder and CEO",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
  },

  {
    company: "McKinsey & Company",
    quote:
      "McKinsey believes that we should bring the best out there for our clients. Cohere was a natural choice.",
    author:
      "Ben Ellencweig, Senior Partner",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",
  },

  {
    company: "ORACLE",
    quote:
      "Cohere powers advanced AI capabilities in Oracle Fusion Applications, helping Oracle customers unlock real productivity gains.",
    author:
      "Miranda Nash, Group VP of Applications Development and Strategy",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
  },

  {
    company: "accenture",
    quote:
      "We have teamed up with Cohere, a leading AI platform for enterprise, to accelerate how we can help companies incorporate AI into their operations at scale, prioritizing privacy and security.",
    author:
      "Lan Guan, Chief AI Officer",
    image:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function TrustSection() {
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="bg-[#f5f5f3] py-24 overflow-hidden">

      <div className="max-w-[1900px] mx-auto px-6">

        {/* TOP */}
        <div className="flex items-center justify-between mb-10">

          <h2 className="text-[45px] leading-none font-medium tracking-tight">
            Why leading teams trust Cohere
          </h2>

          <div className="flex items-center gap-4">

            <button className="trust-prev">
              <ArrowLeft size={28} strokeWidth={1.5} />
            </button>

            <button className="trust-next">
              <ArrowRight size={28} strokeWidth={1.5} />
            </button>

          </div>

        </div>

        {/* SLIDER */}
<Swiper
  slidesPerView={1}
  spaceBetween={30}

  onSlideChange={(swiper) => {
    setActiveIndex(swiper.activeIndex);
  }}

  navigation={{
    prevEl: ".trust-prev",
    nextEl: ".trust-next",
  }}

  scrollbar={{
    draggable: true,
  }}

  modules={[Navigation, Scrollbar]}
  className="trustSwiper"
>
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              <div
  className="
    grid
    grid-cols-[1.05fr_1fr]
    items-stretch

    transition-all
    duration-[1400ms]
    ease-[cubic-bezier(0.25,1,0.5,1)]
  "
>

                {/* LEFT */}
                <div className="bg-[#f7f7f5] border border-black/30 rounded-[34px] p-10 relative min-h-[640px]">

                  <div className="max-w-[760px]">

                    <h3 className="text-[40px] leading-none mb-10 font-medium">
                      {item.company}
                    </h3>

                    <p className="text-[25px] leading-[1.22] tracking-tight mb-14">
                      “{item.quote}”
                    </p>

                    <p className="text-[20px] text-black/80">
                      — {item.author}
                    </p>

                  </div>

                  <button className="absolute bottom-10 left-10 text-[22px] flex items-center gap-2 hover:gap-4 transition-all duration-300">
                    Read more →
                  </button>

                </div>

{/* RIGHT IMAGE */}
<div
  className={`premium-card ${
    activeIndex === index ? "active" : ""
  }`}
>

  {/* MASK */}
  <div className="premium-mask">

    {/* IMAGE */}
    <img
      src={item.image}
      alt={item.company}
      className="premium-image"
    />

  </div>

  {/* SLANTED CUT */}
  <div className="absolute left-[-70px] top-0 w-[140px] h-full bg-[#f5f5f3] rotate-[8deg] z-20" />

</div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}