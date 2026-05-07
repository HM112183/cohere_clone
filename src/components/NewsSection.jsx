import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

const news = [
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    date: "MAR 17, 2026",
    title:
      "Cohere advances sovereign AI capabilities with NVIDIA",
  },

  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    date: "DEC 11, 2025",
    title:
      "Introducing Rerank 4: Cohere’s most powerful reranker yet",
  },

  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    date: "NOV 27, 2025",
    title:
      "Cohere expands partnership with SAP to provide Europe sovereign AI solutions",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-[#f5f5f3] py-24 overflow-hidden">

      <div className="max-w-[1820px] mx-auto px-12">

        {/* TOP */}
        <div className="flex items-center justify-between mb-10">

          <h2 className="text-[54px] leading-none tracking-tight font-medium">
            Latest news
          </h2>

          <div className="flex items-center gap-4">

            <button className="news-prev">
              <ArrowLeft size={26} strokeWidth={1.5} />
            </button>

            <button className="news-next">
              <ArrowRight size={26} strokeWidth={1.5} />
            </button>

          </div>

        </div>

        {/* SLIDER */}
        <Swiper
          slidesPerView={3}
          spaceBetween={28}
          navigation={{
            prevEl: ".news-prev",
            nextEl: ".news-next",
          }}
          modules={[Navigation]}
        >
          {news.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="news-card">

                {/* IMAGE */}
                <div className="overflow-hidden rounded-[12px]">

                  <img
                    src={item.image}
                    alt=""
                    className="
                      w-full
                      h-[145px]
                      object-cover

                      transition-transform
                      duration-700
                      ease-out

                      hover:scale-[1.05]
                    "
                  />

                </div>

                {/* DATE */}
                <p className="mt-6 text-[13px] tracking-[0.18em] uppercase">
                  COHERE TEAM — {item.date}
                </p>

                {/* TITLE */}
                <h3 className="mt-5 text-[30px] leading-[1.1] tracking-tight">

                  {item.title}

                </h3>

                {/* BOTTOM */}
                <div className="bottom-row">

                  <button className="text-[18px]">
                    Read more
                  </button>

                  <button className="text-[32px]">
                    ↗
                  </button>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}