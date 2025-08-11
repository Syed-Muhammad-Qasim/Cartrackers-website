import React, { useState, useEffect } from "react";
import { Car, Clock, Award, Users } from "lucide-react";

const Section6 = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const defaultStats = [
      {
        id: 1,
        icon: Car,
        iconImage: "./Image2section6.png",
        number: "1,566+",
        label: "Car Trackers Installed",
      },
      {
        id: 2,
        icon: Clock,
        iconImage: "Image3section6.png", // Add your image path here
        number: "25+",
        label: "Years Experience",
      },
      {
        id: 3,
        icon: Award,
        iconImage: "Image4section6.png",
        number: "125+",
        label: "Get Wining awards",
      },
      {
        id: 4,
        icon: Users,
        iconImage: "Image5section6.png",
        number: "180+",
        label: "Expert Team Members",
      },
    ];

    const savedStats = localStorage.getItem("cartracker-stats");
    if (savedStats) {
      try {
        const parsedStats = JSON.parse(savedStats);

        const statsWithIcons = parsedStats.map((stat, index) => ({
          ...stat,
          icon: defaultStats[index].icon,
          iconImage: defaultStats[index].iconImage,
        }));
        console.log(
          "Stats with icons loaded from localStorage:",
          statsWithIcons
        );
        setStats(statsWithIcons);
      } catch (error) {
        console.error("Error parsing stats:", error);
        setStats(defaultStats);
        localStorage.setItem(
          "cartracker-stats",
          JSON.stringify(
            defaultStats.map((stat) => ({
              id: stat.id,
              number: stat.number,
              label: stat.label,
              iconImage: stat.iconImage,
            }))
          )
        );
      }
    } else {
      console.log("No saved stats found, using defaults:", defaultStats);
      console.log("First stat iconImage:", defaultStats[0].iconImage);
      setStats(defaultStats);

      localStorage.setItem(
        "cartracker-stats",
        JSON.stringify(
          defaultStats.map((stat) => ({
            id: stat.id,
            number: stat.number,
            label: stat.label,
            iconImage: stat.iconImage,
          }))
        )
      );
    }
  }, []);

  return (
    <div className="relative w-full">
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex items-center"
        style={{
          backgroundImage: "url('Image1section6.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80" />

        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.id} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                  {stat.iconImage ? (
                    <img
                      src={stat.iconImage}
                      alt={stat.label}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        console.error(
                          `Failed to load image: ${stat.iconImage}`
                        );
                        e.target.style.display = "none";

                        const nextIcon =
                          e.target.parentElement.querySelector(
                            "[data-lucide]"
                          ) || e.target.nextElementSibling;
                        if (nextIcon) {
                          nextIcon.style.display = "block";
                        }
                      }}
                      onLoad={() => {
                        console.log(`Successfully loaded: ${stat.iconImage}`);
                      }}
                    />
                  ) : null}
                  {stat.icon && (
                    <stat.icon
                      className={`w-8 h-8 text-white ${
                        stat.iconImage ? "hidden" : "block"
                      }`}
                      strokeWidth={2}
                    />
                  )}
                </div>

                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {stat.number}
                </div>

                <div className="text-gray-300 text-sm md:text-base font-medium tracking-wide">
                  {stat.label}
                </div>

                {index < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-24 bg-gray-600 opacity-50" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-2 h-2 bg-orange-500 rounded-full opacity-60 animate-pulse" />
          <div className="absolute top-20 right-20 w-1 h-1 bg-blue-500 rounded-full opacity-40 animate-pulse" />
          <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-50 animate-pulse" />
          <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Section6;
