import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Howitworks from "../components/Howitworks";
import Navbar from "../components/Navbar";
import Section2 from "../components/Section2";
import Section5 from "../components/Section5";
import Section8 from "../components/Section8";
import Section9 from "../components/Section9";
import SellerSection from "../components/SellerSection";

function Sellyourcar() {
  return (
    <div className="bg-[#f6f7f9] relative w-full min-h-screen ">
      <Navbar />
      <Hero
        Heading={`We'll beat any dealer offer`}
        text={` so you can sell your vehicle today!`}
        Image={`url('/Hero.png')`}
      />
      <Howitworks />
      <Section2 />
      <Section8 />
      <Section5 />
      <Section9 />
      <SellerSection />
      <Footer />
    </div>
  );
}

export default Sellyourcar;
