import React from "react";

const Section9 = () => {
  const faqData = [
    "How quickly can I get paid?",
    "Do I need to drive my car anywhere?",
    "How does the video call appraisal process work?",
    "Is there any cost or obligation to get an offer?",
    "What I do after I get an online offer?",
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-orange-500 text-lg">★</span>
            <span className="text-orange-500 font-semibold">FAQs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="bg-white rounded-lg border-2 border-gray-300 shadow-lg">
          {faqData.map((question, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-orange-500 font-medium text-lg pr-4">
                  {question}
                </span>
                <span className="text-orange-500 text-2xl font-light">+</span>
              </div>

              {index === 0 && (
                <div className="px-6 pb-2">
                  <div className="flex justify-center">
                    <div className="flex space-x-1"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section9;
