import { motion } from "framer-motion";
import showcaseBg from "../assets/showcase-bg.jpg";
import showcasePerson from "../assets/showcase-person.jpg";

const ShowcaseSection = () => {
  return (
    <section className="px-8 pt-8 pb-24">

      <div className="max-w-[1500px] mx-auto grid grid-cols-[2fr_1fr] gap-6">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[28px] overflow-hidden h-[480px]"
        >

          {/* Background */}
          <img
            src={showcaseBg}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Floating Dashboard Card */}
          <motion.div
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: 0.3,
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[58%] h-[58%] bg-[#171721]/95 rounded-[24px] backdrop-blur-md
            border border-gray-700/40 shadow-2xl p-8"
          >

            {/* Fake blurred content */}
            <div className="w-full h-full relative overflow-hidden rounded-2xl">

              <div className="absolute top-4 left-10 w-40 h-10 bg-gray-400/30 rounded-xl" />

              <div className="absolute top-28 left-8 w-52 h-14 bg-gray-300/30 rounded-2xl flex items-center px-4">
                <span className="text-black/60 text-3xl">
                  $18.5 million upside
                </span>
              </div>

              <div className="absolute bottom-16 right-8 w-56 h-14 bg-gray-300/30 rounded-2xl flex items-center px-4">
                <span className="text-black/60 text-3xl">
                  expanded deal sizes
                </span>
              </div>

              {/* Fake dashboard blur */}
              <div className="absolute inset-0 backdrop-blur-[4px]" />

            </div>

          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-[28px] overflow-hidden h-[480px]"
        >

          <img
            src={showcasePerson}
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
          />

        </motion.div>

      </div>
    </section>
  );
};

export default ShowcaseSection;