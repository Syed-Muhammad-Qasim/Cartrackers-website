import { ArrowRight, Facebook, Twitter, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#161616] text-white">
      <div className="bg-[#161616] py-12 px-4 relative overflow-hidden">
        <div className="absolute left-20 top-1/2 transform -translate-y-1/2 opacity-10 overflow-hidden h-24 lg:h-28">
          <img
            src="Image1section3.png"
            alt="Background Support"
            className="w-48 lg:w-56 object-contain"
            style={{ clipPath: "inset(0 0 50% 0)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
          <div className="text-center lg:text-left lg:pl-[130px]">
            <h3 className="text-2xl text-white lg:text-3xl mb-2">
              SUPPORT@CARTRACKERS.COM
            </h3>
            <p className="text-gray-400 text-sm max-w-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolor et.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-md flex items-center gap-3 transition-colors duration-300 border-l-4 border-orange-500">
              <span className="text-lg">
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:justify-items-center">
            <div className="lg:col-span-1 text-left lg:justify-self-start">
              <div className="flex items-start gap-2 ">
                <img
                  src="logo.png"
                  alt="Car Trackers Logo"
                  className="w-48 h-16 object-contain pb-6"
                />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Hit the road with the astounding ShiftUp theme, made especially
                for repair shops, car rental and automotive easing services.
              </p>
              <div className="space-y-3">
                <p className="text-gray-400">Support center 24/7</p>
                <p className="text-white font-semibold">+ 3 123 456 7890</p>
                <div className="mt-4">
                  <p className="text-gray-400 mb-2">Our address</p>
                  <p className="text-gray-300">94 RDA MALAKA,</p>
                  <p className="text-gray-300">WEST JAKARTA CITY</p>
                </div>
              </div>
            </div>

            <div className="text-left lg:text-center">
              <h4 className="text-lg font-semibold text-gray-400 mb-6">
                ABOUT US
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    WHO WE ARE
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    OUR OFFERS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    OUR CLIENTS
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-left lg:text-center">
              <h4 className="text-lg font-semibold mb-6 text-gray-400">
                SERVICES
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    FAQ PAGE
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    WHEELS & TIRES
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    DRIVING EVENTS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    CLASSIC STORE
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-left lg:text-center">
              <h4 className="text-lg font-semibold mb-6 text-gray-400">
                CONTACT
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    WHERE WE ARE
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    CONTACT US
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    OUR TEAM
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-left lg:text-center">
              <h4 className="text-lg font-semibold mb-6 text-gray-400">
                DISCOVER MORE
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    OIL CHANGE
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    VEHICLES
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    SCHEDULE
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © 2024 CARTRACKERS - All Rights Reserved
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-500 hover:text-orange-400 transition-colors duration-300"
            >
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:text-orange-400 transition-colors duration-300">
                <Facebook size={16} />
              </div>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-orange-400 transition-colors duration-300"
            >
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:text-orange-400 transition-colors duration-300">
                <Twitter size={16} />
              </div>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-orange-400 transition-colors duration-300"
            >
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:text-orange-400 transition-colors duration-300">
                <Linkedin size={16} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
