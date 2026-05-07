import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-44 pb-24 px-8">

      <div className="max-w-[1400px] mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[110px] leading-none font-medium tracking-tight"
        >
          Own your AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl mt-8 text-gray-700"
        >
          Your data. Your infrastructure.
          Cohere keeps it that way.
        </motion.p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="demo-btn">
  Request a demo
</button>

          <button className="border-b border-black text-lg">
            Explore products
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;