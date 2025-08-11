import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section3 from "../components/Section3";
import Footer from "../components/Footer";
import Section10 from "../components/Section10";

const Media = () => {
  return (
    <div>
      <Navbar />
      <Hero
        Image={`url('Hero6.jpg')`}
        title={`BLOGS`}
        para={`SELL YOUR CAR OVER THE PHONE`}
      />
      <Section3
        Heading={`WE UNDERSTAND`}
        text={` We can do video call appraisals to purchase your vehicle from the
            convenience of your home, work, or anywhere you have signal. Our
            licensed appraisers will handle everything from paperwork to
            payment.`}
      />
      <Section10 />
      <Footer />
    </div>
  );
};

export default Media;
