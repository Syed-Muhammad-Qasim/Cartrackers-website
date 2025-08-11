import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import Footer from "../components/Footer";
import Section7 from "../components/Section7";
import ApplyCarForm from "../components/Applycarform";

const KellyBlueBook = () => {
  return (
    <div>
      <Navbar />
      <Hero
        Image={`url('/Hero4.png')`}
        title={`beat my offer`}
        para={` MEET OUR APPRAISERS`}
      />
      <Section7 />
      <ApplyCarForm />
      <Footer />
    </div>
  );
};

export default KellyBlueBook;
