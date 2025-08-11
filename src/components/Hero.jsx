function Hero({ Heading, text, Image, title, para, subtitle }) {
  const isHeroImage = Image && Image.includes("Hero.png");

  return (
    <div className="relative w-full h-screen min-h-[950px] md:h-[813px] overflow-hidden px-4 sm:px-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat 
                   sm:bg-top md:bg-center
                   scale-105 hover:scale-100 transition-transform duration-700"
        style={{
          backgroundImage: Image,
        }}
      />

      {!isHeroImage && (
        <div className="absolute inset-0 bg-black bg-opacity-70 z-5"></div>
      )}

      <div className="relative z-10 flex flex-col md:flex-row w-full h-[500px] md:h-full mt-[150px] sm:mt-[200px] md:mt-0 md:pt-[200px] mx-auto gap-[24px] md:gap-[50px] items-center md:items-start pt-10  px-4 md:px-8 lg:px-[200px]">
        {!isHeroImage && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-20 ">
            <div className="flex items-center gap-2">
              <span className="text-orange-500 text-lg">
                <img
                  src="Image2section2.png"
                  alt="New Car Icon"
                  className="w-6 h-6"
                />
              </span>
              <span className="text-white font-semibold text-sm md:text-base">
                {title}
              </span>
            </div>
            <h3 className="text-7xl lg:text-8xl text-white max-w-3xl  text-center leading-tight">
              {para}
            </h3>
            <div>
              <h3 className="text-white">{subtitle}</h3>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-[24px] items-center md:items-start md:flex-1  md:w-[300px] ">
          <span className="text-4xl sm:text-4xl md:text-5xl text-white font-bold text-center md:text-left ">
            {Heading}
          </span>

          <span className="text-xl md:text-2xl text-white text-center md:text-left">
            {text}
          </span>
        </div>

        {isHeroImage && (
          <div className="bg-white rounded-lg w-full max-w-sm md:max-w-md h-[250px] md:h-[280px] md:flex-shrink-0">
            <div className="flex text-xs md:text-sm p-4 gap-4">
              <div className="flex-1 py-2 px-2 text-center text-black">
                Make / Model
              </div>
              <div className="flex-1 py-2 px-2 bg-[#EEEEEE] shadow-md text-center text-black font-bold">
                VIN
              </div>
              <div className="flex-1 py-2 px-2 text-center text-black">
                License Plate
              </div>
            </div>

            <div className="p-6">
              <label className="block text-sm md:text-base text-gray-700 mb-2">
                VIN
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded text-sm md:text-base"
              />
              <button className="w-[130px] md:w-[150px] bg-[#f59934] text-white py-2 md:py-3 rounded shadow-lg mt-4 hover:bg-orange-500 text-sm md:text-base font-medium">
                SUBMIT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Hero;
