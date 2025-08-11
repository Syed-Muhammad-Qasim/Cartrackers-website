import React from "react";

const Section7 = () => {
  return (
    <section className="bg-gradient-to-r from-orange-400 to-orange-500 xl:pb-4 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-2xl   tracking-wider">
            OUR PARTNERS & SUPPORTS
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          <img
            src="Image1section7.png"
            alt="Pertamina Logo"
            className="w-[200px]  object-contain filter brightness-0 invert"
          />

          <img
            src="Image2section7.png"
            alt="Kyocera Logo"
            className="w-[200px] object-contain filter brightness-0 invert"
          />

          <img
            src="Image3section7.png"
            alt="Kyocera Logo"
            className="w-[200px] object-contain filter brightness-0 invert"
          />

          <img
            src="Image4section7.png"
            alt="Kyocera Logo"
            className="w-[200px]  object-contain filter brightness-0 invert"
          />

          <img
            src="Image5section7.png"
            alt="Kyocera Logo"
            className="w-[200px] object-contain filter brightness-0 invert"
          />
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-white bg-opacity-30 rounded-full"></div>
            <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
            <div className="w-2 h-2 bg-white bg-opacity-30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
