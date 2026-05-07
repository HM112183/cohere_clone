import { useEffect, useRef, useState } from "react";
import productImg from "../assets/nav/product.jpg";
import solutionImg from "../assets/nav/solution.jpg";
import researchImg from "../assets/nav/research.jpg";
import resourceImg from "../assets/nav/resource.jpg";
import logo from "../assets/logo.png";

const menus = {
Products: {
  width: 900,

  content: (
    <div>

      {/* TITLE */}
      <div className="flex items-center justify-between mb-7">

        <h2 className="text-[38px] font-medium tracking-tight">
          Products →
        </h2>

      </div>

      {/* TOP IMAGES */}
      <div className="grid grid-cols-3 gap-6 mb-8">

        {/* CARD 1 */}
        <div>
          <img
            src={productImg}
            className="rounded-2xl h-[110px] w-full object-cover mb-4"
          />

          <p className="navMini">
            WORKPLACE SYSTEMS
          </p>
        </div>

        {/* CARD 2 */}
        <div>
          <img
            src={solutionImg}
            className="rounded-2xl h-[110px] w-full object-cover mb-4"
          />

          <p className="navMini">
            GENERATIVE MODELS
          </p>
        </div>

        {/* CARD 3 */}
        <div>
          <img
            src={researchImg}
            className="rounded-2xl h-[110px] w-full object-cover mb-4"
          />

          <p className="navMini">
            ADVANCED RETRIEVAL MODELS
          </p>
        </div>

      </div>

      {/* CONTENT */}
  {/* CONTENT */}
<div className="grid grid-cols-3 gap-10 pb-10">

  {/* COLUMN 1 */}
  <div className="space-y-6">

    <div className="megaItem">
      <button className="megaLink">
        <span className="dot blue"></span>
        North
      </button>

      <p className="megaDesc">
        An enterprise-ready AI platform that powers modern workplace productivity
      </p>
    </div>

    <div className="megaItem">
      <button className="megaLink">
        <span className="dot blue"></span>
        Compass
      </button>

      <p className="megaDesc">
        An intelligent search and discovery system to surface business insights
      </p>
    </div>

  </div>

  {/* COLUMN 2 */}
  <div className="space-y-6">

    <div className="megaItem">
      <button className="megaLink">
        <span className="dot purple"></span>
        Command
      </button>

      <p className="megaDesc">
        A family of high-performance scalable language models
      </p>
    </div>

    <div className="megaItem">
      <button className="megaLink">
        <span className="dot purple"></span>
        Transcribe
      </button>

      <p className="megaDesc">
        Speech recognition model for generating accurate transcripts
      </p>
    </div>

    <div className="megaItem">
      <button className="megaLink">
        <span className="dot purple"></span>
        Aya
      </button>

      <p className="megaDesc">
        Multilingual research model covering 70+ languages
      </p>
    </div>

  </div>

  {/* COLUMN 3 */}
  <div className="space-y-6">

    <div className="megaItem">
      <button className="megaLink">
        <span className="dot orange"></span>
        Embed
      </button>

      <p className="megaDesc">
        Advanced multimodal retrieval model
      </p>
    </div>

    <div className="megaItem">
      <button className="megaLink">
        <span className="dot orange"></span>
        Rerank
      </button>

      <p className="megaDesc">
        Semantic boost model for search quality
      </p>
    </div>

  </div>

</div>

      {/* FOOTER */}
      <div className="border-t border-black/10 pt-5 flex justify-end gap-10">

        <button className="footerMegaBtn">
          CUSTOMIZATION →
        </button>

        <button className="footerMegaBtn">
          PRICING →
        </button>

      </div>

    </div>
  ),
},

  Solutions: {
    width: 560,
    content: (
      <div className="grid grid-cols-2 gap-12">

        <div className="space-y-5">
          <h4 className="navMini">INDUSTRIES</h4>

          {[
            "Technology",
            "Financial Services",
            "Healthcare",
            "Manufacturing",
            "Energy",
          ].map((item) => (
            <div key={item} className="navLink">
              {item}
            </div>
          ))}
        </div>

        <div>
          <img
            src={solutionImg}
            className="rounded-3xl h-[250px] w-full object-cover"
          />
        </div>

      </div>
    ),
  },

  Research: {
    width: 700,
    content: (
      <div className="grid grid-cols-3 gap-12">

        <div>
          <img
            src={researchImg}
            className="rounded-3xl h-[240px] object-cover mb-4"
          />

          <h4 className="navTitle">Cohere Labs</h4>

          <p className="navDesc">
            Research lab solving complex ML problems
          </p>
        </div>

        <div className="space-y-5">
          <h4 className="navMini">MODEL</h4>

          <div className="navLink">Aya</div>

          <h4 className="navMini pt-6">RESOURCES</h4>

          <div className="space-y-4">
            <div className="navLink">Papers</div>
            <div className="navLink">Videos</div>
            <div className="navLink">Blog</div>
          </div>
        </div>

        <div className="space-y-5">
          <h4 className="navMini">INITIATIVES</h4>

          <div className="space-y-4">
            <div className="navLink">Open Science</div>
            <div className="navLink">Scholars Program</div>
            <div className="navLink">Catalyst Grant</div>
            <div className="navLink">Events</div>
          </div>
        </div>

      </div>
    ),
  },

  Resources: {
    width: 760,
    content: (
      <div className="grid grid-cols-3 gap-12">

        <div className="space-y-4">
          <h4 className="navMini">RESOURCES</h4>

          <div className="navLink">Blog</div>
          <div className="navLink">Developers</div>
          <div className="navLink">Docs</div>
          <div className="navLink">Cookbooks</div>
        </div>

        <div className="space-y-4">
          <h4 className="navMini">COMMUNITY</h4>

          <div className="navLink">Discord</div>
          <div className="navLink">Events</div>
          <div className="navLink">On-Demand</div>
        </div>

        <div>
          <img
            src={resourceImg}
            className="rounded-3xl h-[250px] w-full object-cover"
          />
        </div>

      </div>
    ),
  },

  Company: {
    width: 280,
    content: (
      <div className="space-y-5">
        <h4 className="navMini">COMPANY</h4>

        <div className="navLink">About</div>
        <div className="navLink">Careers</div>
        <div className="navLink">Newsroom</div>
        <div className="navLink">Partners</div>
      </div>
    ),
  },
};

export default function Navbar() {
  const [active, setActive] = useState(null);

  const bgRef = useRef(null);

  useEffect(() => {
    if (!active || !bgRef.current) return;

    const dropdown = document.querySelector(
      `.dropdown-panel[data-menu="${active}"]`
    );

    if (!dropdown) return;

    const rect = dropdown.getBoundingClientRect();

    bgRef.current.style.width = `${rect.width}px`;
    bgRef.current.style.height = `${rect.height}px`;

    bgRef.current.style.transform = `
      translate(-50%, 0)
    `;

    bgRef.current.style.opacity = 1;
  }, [active]);

  return (
    <div
  className="relative z-[999]"
  onMouseLeave={(e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setActive(null);
    }
  }}
>
      {/* NAVBAR */}
      <nav className="h-[74px] border-b border-black/10 bg-white flex items-center justify-between px-10 relative">

  {/* LEFT LOGO */}
  <div className="flex items-center">
    <img
      src={logo}
      alt="Cohere"
      className="h-[30px] object-contain"
    />
  </div>

  {/* CENTER NAV */}
  <div className="flex items-center gap-14">

    {Object.keys(menus).map((item) => (
      <button
        key={item}
        onMouseEnter={() => setActive(item)}
        className="text-[15px] hover:opacity-60 transition"
      >
        {item}
      </button>
    ))}

  </div>

  {/* RIGHT SIDE */}
  <div className="flex items-center gap-8">

    <button className="north-btn text-[15px] font-medium">
      Sign in
    </button>

    <button className="demo-btn bg-[#111116] text-white px-6 py-3 rounded-full text-[14px] font-medium hover:opacity-90 transition">
      Request a demo
    </button>

  </div>

</nav>

      {/* BACKDROP BLUR */}
      <div
  className={`fixed left-0 right-0 top-[74px] h-[520px]
  bg-gradient-to-b
  from-white/45
  via-white/30
  to-transparent
  backdrop-blur-[14px]
  transition-all duration-500 ${
    active
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none"
  }`}
/>

      {/* MORPHING BG */}
      <div
        ref={bgRef}
        className={`megaMorph ${
  active ? "activeMorph" : "opacity-0"
}`}
      />

      {/* DROPDOWNS */}
      <div
  className="absolute top-[86px] left-1/2 -translate-x-1/2 z-50"
  onMouseLeave={() => {
  setActive(null);

  if (bgRef.current) {
    bgRef.current.style.opacity = 0;
  }
}}
>

        {Object.entries(menus).map(([key, value]) => (
          <div
            key={key}
            data-menu={key}
            className={`dropdown-panel ${
              active === key
                ? "dropdownActive"
                : ""
            }`}
            style={{
              width: `${value.width}px`,
            }}
          >
            {value.content}
          </div>
        ))}

      </div>
    </div>
  );
}