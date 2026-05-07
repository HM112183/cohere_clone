import { ArrowRight } from "lucide-react";

import purpleBg from "../assets/purple-bg.png";
import docsPreview from "../assets/docs-preview.png";

export default function DeveloperResources() {
  return (
    <section className="bg-[#f5f5f3] py-28 overflow-hidden">

      <div className="relative h-[850px] overflow-hidden">

        {/* PURPLE BACKGROUND IMAGE */}
        <img
          src={purpleBg}
          alt="Purple Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/10" />

        {/* LEFT CONTENT */}
        <div className="absolute bottom-16 left-14 z-20 max-w-xl text-white">

          {/* HEADING */}
          <h2 className="text-7xl leading-[0.95] font-light mb-8">
            Developer resources
          </h2>

          {/* DESCRIPTION */}
          <p className="text-xl leading-relaxed text-white/85 mb-10">
            Find everything you need to start building,
            from API access to deep technical docs,
            and try our models in the Playground.
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-8">

            <button className="north-btn group bg-white text-black px-8 py-4 rounded-full text-lg flex items-center gap-3 hover:gap-5 transition-all duration-300">

              Let&apos;s go

              <ArrowRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>

            <button className="text-white text-xl flex items-center gap-2 group">

              Get an API key

              <span className="group-hover:translate-x-1 transition-transform duration-300">
                ↗
              </span>

            </button>

          </div>

        </div>

        {/* FLOATING DOCS IMAGE */}
        <div className="absolute right-[-5px] top-[57%] -translate-y-1/2 z-30">

          <img
            src={docsPreview}
            alt="Docs Preview"
            className="w-[780px] shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}