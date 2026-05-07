import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import modelsPreview from "../assets/models-preview.png";
import commandPreview from "../assets/command-preview.png";
import transcribePreview from "../assets/transcribe-preview.png";
import embedPreview from "../assets/embed-preview.png";
import rerankPreview from "../assets/rerank-preview.png";

const tabs = [
  {
    title: "Command",
    desc: "High-performance generative models that give your organization full control",
    points: [
      "Supports 23 languages for global communication and discovery",
      "Seamlessly integrates into existing systems without disruption",
      "Powers AI applications that reason, act, and generate insights anchored in your data",
    ],
    image: commandPreview,
  },

  {
    title: "Transcribe",
    desc: "Transcribe with confidence with high-fidelity speech-to-text",
    points: [
      "Quickly converts audio data into highly accurate text outputs",
      "Supports 14 languages and is robust to real-world conversational environments",
      "Integrates with generative and retrieval systems for end-to-end speech-driven workflows",
    ],
    image: transcribePreview,
  },

  {
    title: "Embed",
    desc: "Semantic text representation built with your data, in your environment",
    points: [
      "Semantic understanding: Captures text meaning for accurate document comparison",
      "Efficient retrieval: Converts text to vectors for fast, scalable search",
      "Contextual Insights: Uncovers hidden patterns and relationships in data",
    ],
    image: embedPreview,
  },

  {
    title: "Rerank",
    desc: "Relevance-based results tuned to your users, needs, and preferences",
    points: [
      "Relevance optimization: Prioritizes most relevant documents for better user experience",
      "Personalized search: Tailors results to individual user needs and preferences",
      "Dynamic refinement: Continuously updates results based on user interactions",
    ],
    image: rerankPreview,
  },
];

const ProductsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="pt-8 pb-24 px-8 bg-[#f5f5f3]">

      <div className="max-w-[1700px] mx-auto">

        {/* HEADING */}
        <h2 className="text-center text-[55px] leading-none font-medium mb-24 tracking-tight">
          Our models. Your business.
        </h2>

        <div className="grid grid-cols-2 gap-16 items-start">

          {/* LEFT IMAGE */}
          <div className="bg-[#ece8df] rounded-[34px] overflow-hidden min-h-[760px]">

  <AnimatePresence mode="wait">

    <motion.img
      key={tabs[active].image}
      src={tabs[active].image}
      initial={{
        opacity: 0,
        scale: 1.02,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="w-full h-full object-cover"
    />

  </AnimatePresence>

</div>

          {/* RIGHT SIDE */}
          <div>

            {/* TOP GRADIENT LINE */}
            <div className="h-[2px] w-full bg-gradient-to-r from-[#ff6ca8] to-[#5468ff] mb-6" />

            {tabs.map((tab, index) => (

              <div
                key={index}
                onClick={() => setActive(index)}
                className="border-b border-black/25 py-6 cursor-pointer"
              >

                {/* TITLE */}
                <h3
                  className={`text-[38px] leading-none transition-all duration-300 ${
                    active === index
                      ? "text-black"
                      : "text-black/60"
                  }`}
                >
                  {tab.title}
                </h3>

                {/* ACTIVE CONTENT */}
                <AnimatePresence>

                  {active === index && (

                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="overflow-hidden"
                    >

                      <p className="text-[18px] leading-[1.6] mt-6 max-w-[640px]">
                        {tab.desc}
                      </p>

                      <div className="mt-10 space-y-7">

                        {tab.points.map((point, i) => (

                          <div
                            key={i}
                            className="flex items-start gap-4"
                          >

                            <span className="mt-1 text-[18px]">
                              ⊚
                            </span>

                            <p className="text-[17px] leading-[1.5]">
                              {point}
                            </p>

                          </div>

                        ))}

                      </div>

                      <button className="mt-8 text-[18px] flex items-center gap-2 group">
                        Learn more
                        <span className="group-hover:translate-x-1 transition-all">
                          →
                        </span>
                      </button>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductsSection;