import React, { useState, useEffect } from "react"; // Add useState, useEffect
import { Star } from "lucide-react";

const Section5 = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const defaultTestimonials = [
      {
        id: 1,
        name: "Jane. L",
        location: "Venice Beach, CA",
        date: "July 6, 2024",
        rating: 5,
        review:
          "I've been looking to get out of my lease Car Trackers came through -- better than the dealership buyout. The process was smooth and my car was picked up the following day. And the best part... He found me a new car the same week! For all my future car needs, I definitely plan to use Car Trackers again.",
      },
      {
        id: 2,
        name: "Diane. C",
        location: "Ventura, CA",
        date: "September 1, 2024",
        rating: 5,
        review:
          "I don't often take the time to leave a review but it was so refreshing working with Car Trackers. I sold them my VW Golf and got an amazing price. The team was great and everything was extremely convenient.",
      },
      {
        id: 3,
        name: "Robert. C",
        location: "Oceanside, CA",
        date: "October 10, 2024",
        rating: 5,
        review:
          "great people to work with and I had no issues selling car. I was a bit concerned at first like everybody else, but the process was seamless and the business is legit. The money arrived in the bank with no issues and I sold the car with confidence.",
      },
    ];

    const saved = localStorage.getItem("cartracker-testimonials");
    if (saved) {
      try {
        setTestimonials(JSON.parse(saved));
      } catch (error) {
        console.error("Error parsing testimonials:", error);
        setTestimonials(defaultTestimonials);
      }
    } else {
      setTestimonials(defaultTestimonials);
      localStorage.setItem(
        "cartracker-testimonials",
        JSON.stringify(defaultTestimonials)
      );
    }
  }, []);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating
                ? "fill-orange-400 text-orange-400"
                : "text-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 bg-white m-4">
      <div className="text-center mb-12">
        <div className="flex justify-center gap-1 mb-2">
          {[...Array(4)].map((_, index) => (
            <Star
              key={index}
              className="w-8 h-8 fill-orange-400 text-orange-400"
            />
          ))}
          <Star className="w-8 h-8 fill-orange-400 text-orange-400 opacity-50" />
        </div>
        <div className="text-orange-500 text-sm font-medium mb-4 gap-1 flex flex-row justify-center">
          <Star className="w-4 h-4 inline-block fill-orange-400 mt-1" />
          <p>4.5 Stars on Yelp</p>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight ">
          What our customers are
          <br />
          saying about us
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white  shadow-md  rounded-2xl p-6  hover:shadow-lg border-2 border-[#FF8713] transition-shadow duration-300"
          >
            <StarRating rating={testimonial.rating} />

            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {testimonial.review}
            </p>

            <div className="border-t border-gray-100 pt-4">
              <div className="font-semibold text-gray-900 text-sm">
                {testimonial.name}
              </div>
              <div className="text-gray-500 text-xs mt-1">
                {testimonial.location}- {testimonial.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
