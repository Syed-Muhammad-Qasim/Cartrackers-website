function Section2() {
  return (
    <div className="w-full bg-gray-50 py-12 md:py-16 lg:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1">
            <span className="hidden sm:flex pl-16 w-full  flex-row gap-44">
              <p className="text-orange-500 text-sm font-medium mb-4 flex flex-row gap-1">
                <img
                  src="Image2section2.png"
                  alt="Smart Phone"
                  className="mt-1 w-[12px] h-[12px]"
                />
                Do You Have a Smart Phone?
              </p>
              <img
                src="/Image2section2.png"
                alt="Smart Phone"
                className="hidden lg:block mt-8 w-[58px] h-[58px] rounded-lg mb-4"
              />
            </span>
            <img
              src="Imagesection2.png"
              alt="Video Appraisal"
              className="pl-14 w-full h-auto rounded-lg mb-4 -mt-10"
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              10 Minute Video Appraisal
            </h2>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <div className="flex-shrink-0  rounded-lg flex items-center justify-center mx-auto sm:mx-0">
                <span className="text-xl">
                  <img
                    src="Image3section2.png"
                    alt="Smart Phone"
                    className="w-[80px] h-[80px]"
                  />
                </span>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Never Leave Your Home
                </h3>
                <p className="text-gray-600 text-sm">
                  Get a quick and accurate appraisal for your vehicle through a
                  simple video call from the comfort of your home
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <div className="flex-shrink-0  rounded-lg flex items-center justify-center mx-auto sm:mx-0">
                <span className="text-xl">
                  <img
                    src="Image4section2.png"
                    alt="Final Offer"
                    className="w-[80px] h-[80px]"
                  />
                </span>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Final Offer
                </h3>
                <p className="text-gray-600 text-sm">
                  Stop wasting time driving to dealerships only to get low
                  offers. With Car Trackers, you'll receive a final offer
                  instantly after we assess your vehicle via video call. It
                  doesn't get any easier!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
