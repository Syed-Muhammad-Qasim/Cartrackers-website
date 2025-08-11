import React from "react";

const SellerSection = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-orange-500 text-lg">★</span>
                <span className="text-orange-500 font-semibold">
                  Most Convenient Way to Sell your Car
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Why wait? Sell your car today with Car Trackers
              </h2>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              Selling your car to Car Trackers is the easiest and most
              convenient choice for any vehicle owner. Our virtual appraisal
              process allows you to receive an instant offer from the comfort of
              your home, eliminating the hassle of visiting multiple
              dealerships.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                  <img
                    src="Image2SellerSection.png"
                    alt="Globe Icon"
                    className="w-5 h-5"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Get Paid on the Spot
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                  <img
                    src="Image3SellerSection.png"
                    alt="Document Icon"
                    className="w-5 h-5"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  We Handle all DMV Paperwork
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                  <img
                    src="Image4SellerSection.png"
                    alt="Pickup Icon"
                    className="w-5 h-5"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Free Pickup</h3>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="w-full h-[400px] lg:h-[450px] rounded-lg flex items-center justify-center">
                <img
                  src="Image1SellerSection.png"
                  alt="Seller Section"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerSection;
