import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustedLogos from "./components/TrustedLogos";
import FeaturesSection from "./components/FeaturesSection";
import IndustriesSlider from "./components/IndustriesSlider";
import ShowcaseSection from "./components/ShowcaseSection";
import NorthSection from "./components/NorthSection";
import ProductsSection from "./components/ProductsSection";
import DeveloperResources from "./components/DeveloperResources";
import TrustSection from "./components/TrustSection";
import NewsSection from "./components/NewsSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
      <TrustedLogos />
      <FeaturesSection />
      <NorthSection />
      <IndustriesSlider />
      <ProductsSection />
      <DeveloperResources />
      <TrustSection />
      <NewsSection />
      <FooterSection />
    </div>
  );
}

export default App;