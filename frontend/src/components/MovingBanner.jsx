import React from "react";
import accLogo from "../assets/acc-logo.png";

const MARQUEE_ITEMS = [
  "Analytics",
  "Consulting",
  "Strategy",
  "Data Science",
  "Machine Learning",
  "Case Studies",
  "Finance",
  "Product",
  "Analytics",
  "Consulting",
  "Strategy",
  "Data Science",
  "Machine Learning",
  "Case Studies",
  "Finance",
  "Product",
];

function MovingBanner() {
  return (
    <div className="border-y border-white/5 bg-white/[0.01] py-3 sm:py-4 overflow-hidden">
      <div className="flex w-max items-center whitespace-nowrap animate-marquee">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <React.Fragment key={i}>
            <span className="mx-8 text-xs sm:text-sm uppercase tracking-widest">
              {item}
            </span>
            <img src={accLogo} alt="ACC" className="w-5 h-5 mx-8" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default MovingBanner;
