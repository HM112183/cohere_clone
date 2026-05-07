import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Scrollbar,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { motion } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    title: "Financial Services",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
  {
    title: "Public Sector",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
  {
    title: "Energy",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
  },
  {
    title: "Technology",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
  {
    title: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
  },
  {
    title: "Retail",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
  },
  {
    title: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
];

const IndustriesSlider = () => {
  return (
    <section className="pt-20 pb-10 overflow-hidden bg-[#f5f5f3]">

      <div className="max-w-[1900px] mx-auto">

        {/* TOP BAR */}
        <div className="flex items-center justify-between px-8 mb-10">

          <h2 className="text-[45px] font-medium tracking-tight">
            Powering progress across industries
          </h2>

          {/* ARROWS */}
          <div className="flex items-center gap-4">

            <button className="industry-prev w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
              <ArrowLeft size={20} />
            </button>

            <button className="industry-next w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
              <ArrowRight size={20} />
            </button>

          </div>
        </div>

        {/* SLIDER */}
        <Swiper
          slidesPerView={4.5}
          spaceBetween={18}
          navigation={{
            prevEl: ".industry-prev",
            nextEl: ".industry-next",
          }}
          scrollbar={{
            draggable: true,
          }}
          modules={[Navigation, Scrollbar]}
          className="industrySwiper px-4 mb-20"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>

              <motion.div
  initial="rest"
  whileHover="hover"
  animate="rest"
  className="relative rounded-[32px] overflow-hidden cursor-pointer"
>

  {/* IMAGE */}
  <motion.div
  whileHover="hover"
  className="overflow-hidden rounded-[32px]"
>

    <motion.img
  whileHover={{
    scale: 1.08,
  }}
  whileTap={{
    scale: 1.08,
  }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
  }}
  src={card.image}
  className="w-full aspect-square object-cover"
/>

  </motion.div>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/10 pointer-events-none" />

  {/* TITLE */}
  <div className="absolute top-8 left-8 z-10 pointer-events-none">
    <h3 className="text-white text-[40px] font-medium leading-none">
      {card.title}
    </h3>
  </div>

</motion.div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default IndustriesSlider;