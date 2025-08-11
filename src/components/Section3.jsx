function Section3({ Heading, text }) {
  return (
    <section className="bg-[#FF8713] py-4 md:py-6 lg:py-4 xl:py-2 px-4 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-[auto,1fr,auto] items-center gap-4 relative min-h-[250px] md:min-h-[200px] lg:min-h-[180px] xl:min-h-[160px] z-10">
        <div className="relative flex items-center gap-4">
          <div
            className="hidden md:block absolute left-0 border-l-2 border-dashed border-white z-10"
            style={{ top: "0px", bottom: "0px" }}
          ></div>

          <div className="hidden md:flex w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] bg-orange-400 bg-opacity-40 items-center justify-center z-10">
            <img
              src="Image1section3.png"
              alt="Decorative Left"
              className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[270px] xl:h-[270px]"
            />
          </div>

          <div
            className="hidden md:block absolute left-full ml-2 w-0.5 border-l-2 border-dashed border-white"
            style={{ top: "0px", bottom: "0px" }}
          ></div>
        </div>

        <div className="text-center px-4 md:px-10 z-10">
          <h2 className="text-white text-3xl sm:text-4xl md:text-4xl font-bold leading-tight xl:whitespace-nowrap">
            <span className="text-white  ">{Heading}</span>
            {Heading === "WE UNDERSTAND" && (
              <span className="text-gray-900">HOW BUSY YOU ARE.</span>
            )}
          </h2>
          <p className="text-white text-lg sm:text-xl md:text-sm mt-2 max-w-2xl mx-auto">
            {text}
          </p>
        </div>

        <div className="relative flex items-center gap-4">
          <div
            className="hidden md:block absolute right-full mr-2 w-0.5 border-l-2 border-dashed border-white"
            style={{ top: "0px", bottom: "0px" }}
          ></div>

          <div className="hidden md:flex w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] bg-orange-400 bg-opacity-40 items-center justify-center z-10">
            <img
              src="Image1section3.png"
              alt="Decorative Right"
              className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[270px] xl:h-[270px] rotate-180"
            />
          </div>

          <div
            className="hidden md:block absolute right-0 border-l-2 border-dashed border-white z-10"
            style={{ top: "0px", bottom: "0px" }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
