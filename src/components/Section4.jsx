import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CreditCard,
  Zap,
} from "lucide-react";

const Section4 = () => {
  return (
    <section className="relative">
      <div className="relative w-full h-auto min-h-[700px] sm:min-h-[600px] md:min-h-[700px] lg:h-[500px] overflow-hidden px-4 sm:px-10 py-8 sm:py-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Hero2.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black bg-opacity-80" />

        <div className="pl-4 md:pl-20 lg:pl-40 relative z-10 flex items-center h-full">
          <div className="w-full max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="hidden md:flex text-orange-400">
                  <img
                    src="Symbol.png"
                    alt="Smart Phone"
                    className="w-[20px] h-[20px]"
                  />
                </span>
                <span className="hidden md:flex text-orange-400 text-sm font-semibold uppercase tracking-wide">
                  HOW TO GET PAID
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                HOW TO GET
                <br />
                PAID
              </h2>

              <p className="text-gray-300 text-lg mb-4 max-w-md">
                Pick a payment option that works for you.
              </p>

              <p className="text-gray-400 text-sm mb-8 max-w-md leading-relaxed">
                We know customers have different preferences - whether it's a
                tangible method of payment or a direct transfer to your bank -
                we're ready to provide you with certified funds.
              </p>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold flex items-center gap-2 transition-colors">
                GET QUOTE
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="flex-1 w-full max-w-4xl mx-auto lg:mx-0">
              <div className="relative">
                <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-all">
                  <ArrowLeft size={20} />
                </button>

                <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 bg-white  bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-all">
                  <ArrowRight size={20} />
                </button>

                <div className="bg-[#F6F7F9] rounded-lg shadow-xl p-8 w-full max-w-[900px] mx-auto lg:mx-0 lg:w-[900px]">
                  <div className="flex flex-col sm:flex-row gap-6 mb-8 ">
                    <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
                      <div className="w-16 h-16 flex items-start mb-4">
                        <img
                          src="Image1section4.png"
                          alt="Wire Transfer"
                          className="w-[45px] h-[45px]"
                        />
                      </div>
                      <h3 className="font-bold text-gray-800">Same Day Wire</h3>
                      <h4 className="font-bold text-gray-800 mb-4">Transfer</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Instant delivery</li>
                        <li>• Direct Bank transfer</li>
                      </ul>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
                      <div className="w-16 h-16  flex items-center justify-center mb-4">
                        <Building2 className="w-[45px] h-[45px] text-orange-500" />
                      </div>
                      <h3 className="font-bold text-gray-800 ">
                        Next Business
                      </h3>
                      <h4 className="font-bold text-gray-800 mb-4">Day ACH</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Business day</li>
                        <li>• Direct bank transfer</li>
                      </ul>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
                      <div className="w-16 h-16  flex items-center justify-center mb-4">
                        <img
                          src="Image2section4.png"
                          alt="Company Check"
                          className="w-[55px] h-[55px]"
                        />
                      </div>
                      <h3 className="font-bold text-gray-800 ">Company</h3>
                      <h4 className="font-bold text-gray-800 mb-4">Check</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Shipped overnight</li>
                        <li>• Certified business check</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex text-orange-400">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className={
                                star <= 4 ? "text-orange-400" : "text-gray-300"
                              }
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          We've more then, 2354 + Customer satisfied with our
                          services
                        </span>
                      </div>
                      <button className="text-orange-500 text-sm font-semibold hover:text-orange-600 transition-colors">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
