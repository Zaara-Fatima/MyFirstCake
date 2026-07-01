import React from "react";

const timeline = [
  {
    year: "2005",
    title: "Sweet Beginnings",
    text: "Clara bakes her first cakes from her home kitchen.",
  },
  {
    year: "2007",
    title: "First Shop Opens",
    text: "Demand grows, leading to the opening of the first bakery.",
  },
  {
    year: "2010",
    title: "Expanding the Menu",
    text: "Custom cakes and wider pastry selection introduced.",
  },
  {
    year: "2015",
    title: "Online Presence & Expansion",
    text: "Launched our online ordering platform and opened a second charming location.",
  },
  {
    year: "2020",
    title: "Award Winning Excellence",
    text: "Recognized as 'Best Local Bakery' for our commitment to quality and community.",
  },
  {
    year: "2023",
    title: "18 years of Sweetness",
    text: "Celebrated nearly two decades of baking joy, gratitude, and countless sweet memories with our loyal customers.",
  },
];

export const Timeline = () => {
  return (
    <section className="max-w-5xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-16">
        Our Sweet History
      </h2>

      <div className="relative grid grid-cols-3 gap-y-16">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-[#5a5a5a5e] -translate-x-1/2 z-"></div>

        {timeline.map((item, index) => (
          <React.Fragment key={index}>
            {/* Left */}
            <div className={`text-right pr-8 ${index % 2 ? "invisible" : ""}`}>
              <p className="text-[#b76e79] text-sm font-semibold">
                {item.year}
              </p>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-[#5a5a5a] text-sm">{item.text}</p>
            </div>

            {/* Dot */}
            <div className="flex justify-center">
              <span className="w-4 h-4 bg-[#b76e79] rounded-full mt-2 z-10"></span>
            </div>

            {/* Right */}
            <div className={`pl-8 ${index % 2 === 0 ? "invisible" : ""}`}>
              <p className="text-[#b76e79] text-sm font-semibold">
                {item.year}
              </p>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-[#5a5a5a] text-sm">{item.text}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

