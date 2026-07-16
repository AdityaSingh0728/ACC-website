import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import presidentImg from "../assets/presidentImg.jpg";
import vp from "../assets/vp.jpg";
import wh1 from "../assets/wh1.png";
import wh2 from "../assets/wh2.png";
import ch1 from "../assets/ch1.jpg";
import ch2 from "../assets/ch2.png";

const members = [
  {
    name: "Aman Kr. Jha",
    role: "President",
    image: presidentImg,
  },
  {
    name: "Anant Chaudhary",
    role: "Vice President",
    image: vp,
  },
  {
    name: "Mohit Patwari",
    role: "Web Head",
    image: wh1,
  },
  {
    name: "Tushar Kumar",
    role: "Web Head",
    image: wh2,
  },
  {
    name: "Dhruv Sahu",
    role: "Content Head",
    image: ch1,
  },
  {
    name: "Saksham Sagar",
    role: "Content Head",
    image: ch2,
  },
];

export default function TeamCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % members.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className=" py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm">
            Leadership
          </p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Core Team
            </span>
          </h2>
        </div>

       {/* Carousel */}
<div className="relative mt-16 h-[430px] overflow-hidden">
  {members.map((member, index) => {
    const total = members.length;

    let offset = index - current;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    let classes =
      "absolute top-0 left-1/2 transition-all duration-700 ease-in-out";

    if (offset === 0) {
      classes +=
        " -translate-x-1/2 scale-100 opacity-100 z-30";
    } else if (offset === -1) {
      classes +=
        " -translate-x-[125%] scale-90 opacity-60 z-20";
    } else if (offset === 1) {
      classes +=
        " translate-x-[25%] scale-90 opacity-60 z-20";
    } else if (offset === -2) {
      classes +=
        " -translate-x-[195%] scale-75 opacity-20 z-10";
    } else if (offset === 2) {
      classes +=
        " translate-x-[95%] scale-75 opacity-20 z-10";
    } else {
      classes += " opacity-0 pointer-events-none";
    }

    return (
      <div key={index} className={classes}>
        <div className="w-[300px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-500 hover:border-cyan-400/40">

          <img
            src={member.image}
            alt={member.name}
            className="h-72 w-full object-cover"
          />

          <div className="p-5 text-center">
            <h3 className="text-2xl font-semibold text-white">
              {member.name}
            </h3>

            <p className="mt-2 text-cyan-400">
              {member.role}
            </p>
          </div>

        </div>
      </div>
    );
  })}
</div>

{/* Button */}
<div className="mt-6 flex justify-center">
  <Link
    to="/team"
    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
  >
    View Full Team
    <span>→</span>
  </Link>
</div>

      </div>
    </section>
  );
}