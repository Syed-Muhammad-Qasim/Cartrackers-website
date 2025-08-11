import React from "react";
import { Plus } from "lucide-react";

const GotQuestionsSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-400 to-orange-500 py-16 px-4 overflow-hidden">
      <div className="absolute right-0 top-0 opacity-20">
        <div className="w-64 h-64 rounded-full border-8 border-white/30 transform translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 rounded-full border-4 border-white/40 mt-16 ml-16">
            <div className="w-16 h-16 rounded-full border-2 border-white/50 mt-8 ml-8"></div>
          </div>
        </div>
      </div>

      <div className="absolute right-20 bottom-4 opacity-15">
        <div className="w-24 h-24 rounded-full border-4 border-white/40"></div>
      </div>

      <div className="absolute right-32 top-1/2 opacity-10">
        <div className="w-16 h-16 rounded-full border-3 border-white/50"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
          GOT QUESTIONS?
        </h2>

        <p className="text-white text-lg md:text-xl mb-8 font-medium">
          Give us a call and we'll walk you through everything.
        </p>

        <button className="inline-flex items-center justify-center bg-white text-gray-800 font-semibold px-8 py-3 rounded-md hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          <Plus className="w-5 h-5 mr-2" />
          GET IN TOUCH
        </button>
      </div>
      <div>
        <img
          src="Image1section3.png"
          alt="Got Questions"
          className="absolute bottom-20 right-0 w-1/2 h-auto object-cover opacity-80 pl-72"
        />
      </div>
    </div>
  );
};

export default GotQuestionsSection;
