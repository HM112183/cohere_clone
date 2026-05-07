import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Security",
    description:
      "Your data stays under your control with multi-layered protection and industry-certified security standards.",
    image: "/src/assets/security.png",
  },
  {
    title: "Deployment",
    description:
      "Secure within your virtual private cloud (VPC), on-premises, or dedicated infrastructure.",
    image: "/src/assets/deployment.png",
  },
  {
    title: "Customization",
    description:
      "Train on your proprietary data and build unique AI solutions made for your use cases.",
    image: "/src/assets/customization.png",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#f5f5f3] py-24 px-8">
      <h2 className="text-center text-6xl font-light tracking-tight mb-24">
        Safe.Flexible.Independent.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-24 h-24 object-contain mb-10"
            />

            <h3 className="text-4xl font-light mb-6">
              {feature.title}
            </h3>

            <p className="text-xl leading-relaxed text-black/80 mb-12">
              {feature.description}
            </p>

            <button className="flex items-center gap-2 text-2xl font-light hover:gap-4 transition-all duration-300">
              Learn more
              <ArrowRight size={26} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}