import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Howitworks from "../components/Howitworks";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";
import Section8 from "../components/Section8";
import Section9 from "../components/Section9";
import Section10 from "../components/Section10";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-[#f6f7f9] relative w-full min-h-screen ">
      <Hero
        Heading={` THE NEW WAY TO SELL YOUR CAR`}
        text={` so you can sell your vehicle today!`}
        Image={`url('/Hero.png')`}
      />
      <Navbar />
      <Howitworks />
      <Section2 />
      <Section3
        Heading={`WE UNDERSTAND`}
        text={` We can do video call appraisals to purchase your vehicle from the
            convenience of your home, work, or anywhere you have signal. Our
            licensed appraisers will handle everything from paperwork to
            payment.`}
      />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section3
        Heading={`SHOPPING AROUND? WE PAY THE MOST?`}
        text={`We beat most dealership offers by upto $500*. Send over a valid written offer and we can pay you top dollars thanks for our low overhead `}
      />
      <Section10 />
      <Footer />
    </div>
  );
}
export default Home;
