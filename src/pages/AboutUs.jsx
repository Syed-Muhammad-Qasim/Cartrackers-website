import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section3 from "../components/Section3";
import Footer from "../components/Footer";
import Section7 from "../components/Section7";
import Section8 from "../components/Section8";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Hero
        Image={`url('/Hero5.png')`}
        title={`Join Us`}
        para={`JOIN THE TEAM`}
        subtitle={`WANT TO BE A CAR TRACKER? CHOOSE AN OPPURTUNITY BELOW THAT FITS YOUR SKILLS`}
      />

      <Section7 />
      <Section8 />

      <Footer />
    </div>
  );
};

export default AboutUs;
