import React from "react";

const Section8 = () => {
  return (
    <section className="relative min-h-[400px] bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-opacity-50 z-10"></div>

      <div className="absolute inset-0">
        <img
          src="Image1section8.png"
          alt="Car"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-[400px] px-4 pt-16 ">
        <h2 className="text-white text-3xl md:text-2xl lg:text-3xl font-bold text-center ">
          We buy all years, makes, & models
        </h2>

        <div
          className=" h-[500px] md:h-[200px] md:bg-opacity-60 md:backdrop-blur-sm md:rounded-lg p-6 md:p-8
        "
        >
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
            <div className="flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-300">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <img
                    src="Image2section8.png"
                    alt="Audi Logo"
                    className="w-15 h-15"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <img
                  src="Image3section8.png"
                  alt="Audi Logo"
                  className="w-15 h-15"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <img
                  src="Image4section8.png"
                  alt="Audi Logo"
                  className="w-15 h-15"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <img
                  src="Image5section8.png"
                  alt="Audi Logo"
                  className="w-15 h-15"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <img
                  src="Image6section8.png"
                  alt="Audi Logo"
                  className="w-15 h-15"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
