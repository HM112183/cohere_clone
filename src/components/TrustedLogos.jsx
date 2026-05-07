import rbc from "../assets/rbc.png";
import asana from "../assets/asana.png";
import mckinsey from "../assets/mckinsey.png";
import ensemble from "../assets/ensemble.png";
import oracle from "../assets/oracle.png";
import dell from "../assets/dell.png";

const logos = [
  rbc,
  asana,
  mckinsey,
  ensemble,
  oracle,
  dell,
];

const TrustedLogos = () => {
  return (
    <section className="pt-4 pb-20 overflow-hidden bg-[#f5f5f3]">

      {/* Heading */}
      <div className="text-center mb-14">

        <h2 className="text-[26px] md:text-[34px] font-medium tracking-tight text-[#202020]">
          Trusted by industry leaders and developers worldwide
        </h2>

      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden w-full">

        <div className="flex marquee items-center gap-28">

          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="min-w-[220px] flex justify-center items-center opacity-60 hover:opacity-100 transition duration-500"
            >

              <img
                src={logo}
                alt="company"
                className="h-14 object-contain transition duration-500"
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TrustedLogos;