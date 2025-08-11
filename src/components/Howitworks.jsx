function Howitworks() {
  return (
    <div className="relative z-20 flex justify-center -mt-32 mb-8">
      <div className="bg-white shadow-xl rounded-lg mx-4 md:h-[300px] md:mx-8 md:w-[900px] lg:mx-[100px] p-4 md:p-6">
        <h2 className="text-4xl font-bold text-center text-[#f59934] mb-3">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="text-center">
            <div className="mb-2">
              <div className="mt-4 w-8 h-8 mx-auto flex items-center justify-center">
                <span className="text-sm">
                  <img src="/Image1.png" alt="Icon 1" className="w-8 h-8" />
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#f59934] mb-1">
              Get Instant Offer
            </h3>
            <p className="text-lg text-gray-600">
              Submit your vehicle info online, it Only takes 2 minutes
            </p>
          </div>

          <div className="text-center">
            <div className="mb-2">
              <div className="mt-4 w-8 h-8 mx-auto flex items-center justify-center">
                <span className="text-sm">
                  <img src="/Image2.png" alt="Icon 1" className="w-8 h-8" />
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#f59934] mb-1">
              10 Minute Videos Appraisal
            </h3>
            <p className="text-lg text-gray-600">
              Walk around your vehicle and show us the condition with your smart
              phone
            </p>
          </div>

          <div className="text-center">
            <div className="mb-2">
              <div className="mt-4 w-8 h-8 mx-auto flex items-center justify-center">
                <span className="text-sm">
                  <img src="/Image3.png" alt="Icon 1" className="w-8 h-8" />
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#f59934] mb-1">Get Paid</h3>
            <p className="text-lg text-gray-600">
              Get paid instantly when we pick up the vehicle
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howitworks;
