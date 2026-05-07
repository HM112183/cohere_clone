import { ArrowRight } from "lucide-react";

import bgImage from "../assets/north-bg.jpg";
import dashboardImage from "../assets/dashboard.png";

export default function NorthSection() {
  return (
    <section className="bg-[#f5f5f3] py-28 overflow-hidden">

      <div className="relative h-[850px] overflow-hidden">

        {/* GREEN BACKGROUND IMAGE */}
        <img
          src={bgImage}
          alt="North Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/15" />

        {/* TOP LEFT NORTH LOGO */}
        <div className="absolute top-14 left-14 z-20 flex items-center gap-3 text-white">

          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm" />

          <span className="text-5xl font-light tracking-tight">
            north
          </span>

        </div>

        {/* BOTTOM LEFT CONTENT */}
        <div className="absolute bottom-16 left-14 z-20 max-w-xl text-white">

          {/* HEADING */}
          <h2 className="text-7xl leading-[0.95] font-light mb-8">
            Your sovereign
            <br />
            AI workplace
          </h2>

          {/* DESCRIPTION */}
          <p className="text-xl leading-relaxed text-white/85 mb-10">
            All your tools connected, nothing outsourced.
            North brings everything together on your terms.
          </p>

          {/* BUTTON */}
          <button className="north-btn group bg-white text-black px-8 py-4 rounded-full text-lg flex items-center gap-3 hover:gap-5 transition-all duration-300">

            Go North

            <ArrowRight
              size={22}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </button>

        </div>

        {/* SMALLER FLOATING DASHBOARD */}
        <div className="absolute right-[-120px] top-[60%] -translate-y-1/2 z-30">

          <img
            src={dashboardImage}
            alt="Dashboard"
            className="w-[760px] rounded-[20px] shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}