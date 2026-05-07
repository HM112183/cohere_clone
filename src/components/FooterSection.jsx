import { ArrowRight } from "lucide-react";
import footerBg from "../assets/footer-bg.png";

export default function FooterSection() {
  return (
    <>
      {/* CTA SECTION */}
      <section className="relative h-[520px] overflow-hidden">
        
        {/* BG IMAGE */}
        <img
          src={footerBg}
          alt="Footer Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/20" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          
          <h2 className="text-white text-[72px] leading-none font-light mb-10">
            Ready to put AI to work?
          </h2>

          <button className="north-btn bg-white text-black px-10 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300">
            Request a demo
          </button>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b0b16] text-white px-12 pt-20 pb-10">

        <div className="grid grid-cols-5 gap-20">

          {/* LEFT NEWSLETTER */}
          <div className="max-w-[320px]">

            <h3 className="text-[#ff8b7b] text-3xl mb-4">
              AI moves fast
            </h3>

            <p className="text-[30px] leading-[1.2] mb-6">
              We’ll keep you up to date with the latest.
            </p>

            <p className="text-white/50 text-sm leading-relaxed mb-10">
              Enter your business email below to receive updates from Cohere.
              Please refer to our privacy policy for details.
            </p>

            {/* EMAIL */}
            <div className="border-b border-white/30 flex items-center justify-between pb-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent outline-none text-white placeholder:text-white/40 w-full"
              />

              <ArrowRight size={20} />
            </div>

          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="text-2xl mb-8">
              Products →
            </h4>

            <div className="space-y-5 text-white/85">
              <p>North</p>
              <p>Compass</p>
              <p>Command</p>
              <p>Transcribe</p>
              <p>Embed</p>
              <p>Rerank</p>
              <p>Pricing</p>
            </div>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h4 className="text-2xl mb-8">
              Solutions →
            </h4>

            <div className="space-y-5 text-white/85">
              <p>Technology</p>
              <p>Healthcare</p>
              <p>Manufacturing</p>
              <p>Public Sector</p>
              <p>Telecommunications</p>
            </div>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-2xl mb-8">
              Resources
            </h4>

            <div className="space-y-5 text-white/85">
              <p>Blog</p>
              <p>Developers</p>
              <p>Events</p>
              <p>Documentation</p>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-2xl mb-8">
              Company
            </h4>

            <div className="space-y-5 text-white/85">
              <p>About</p>
              <p>Careers</p>
              <p>Research</p>
              <p>Partners</p>
              <p>Trust Center</p>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex items-center justify-between mt-28 text-sm text-white/50">

          <div className="flex gap-8">
            <p>Cohere ©2026</p>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Manage Cookies</p>
          </div>

          <p>English</p>

        </div>

      </footer>
    </>
  );
}