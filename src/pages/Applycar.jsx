import ApplyCarForm from "../components/Applycarform";
import Footer from "../components/Footer";
import GotQuestionsSection from "../components/GotQuestionsSection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Section3 from "../components/Section3";

function ApplyCar() {
  return (
    <div className="bg-[#f6f7f9] relative w-full min-h-screen ">
      <Navbar />
      <Hero
        Image={`url('/ImageHero2.png')`}
        title={`New Car`}
        para={`APPLY FOR A NEW CAR`}
      />
      <Section3
        Heading={`WE UNDERSTAND`}
        text={` We can do video call appraisals to purchase your vehicle from the
            convenience of your home, work, or anywhere you have signal. Our
            licensed appraisers will handle everything from paperwork to
            payment.`}
      />
      <ApplyCarForm />
      <GotQuestionsSection />
      <Footer />
    </div>
  );
}
export default ApplyCar;
