import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import Footer from "../components/Footer";
import Section7 from "../components/Section7";
import SellerSection from "../components/SellerSection";
const BeatMyOffer = () => {
  return (
    <div>
      <Navbar />
      <Hero
        Image={`url('/Hero3.jpg')`}
        title={`beat my offer`}
        para={`BEAT MY OFFER BY CARTRACKER`}
      />
      <Section7 />
      <SellerSection />
      <Footer />
    </div>
  );
};

export default BeatMyOffer;
