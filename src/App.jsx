import React from "react";
import Home from "./pages/Home";
import Sellyourcar from "./pages/Sellyourcar";
import Applycar from "./pages/Applycar";
import { Route, Routes } from "react-router";
import BeatMyOffer from "./pages/BeatMyOffer";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import KellyBlueBook from "./pages/KellyBlueBook";
import Media from "./pages/Media";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell-your-car" element={<Sellyourcar />} />
        <Route path="/apply-new-car" element={<Applycar />} />
        <Route path="/beat-my-offer" element={<BeatMyOffer />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/Kelly-Blue-Book" element={<KellyBlueBook />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </div>
  );
}

export default App;
