import presidentImg from "../assets/presidentImg.jpg";
import vp from "../assets/vp.jpg";
import wh1 from "../assets/wh1.png"
import wh2 from "../assets/wh2.png"
import ch1 from "../assets/ch1.jpg"
import ch2 from "../assets/ch2.png"
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

function Card({ member }) {
  return (
    <div
      className="
        group
        relative
       
        w-[400px]
        h-[440px]
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:bg-white/[0.06]
        hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]
      "
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col items-center">
        {/* Image */}
        <div className="h-90 w-64 overflow-hidden rounded-2xl bg-black shadow-lg">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Name */}
        <h3 className="mt-8 text-center text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
          {member.name}
        </h3>

        {/* Role */}
        <span className="mt-4 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium tracking-wide text-cyan-300">
          {member.role}
        </span>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export default function Team() {
  return (
    <section className="relative overflow-hidden bg-black py-28 px-6">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            Leadership
          </p>

          <h2 className="mt-4 text-6xl font-bold">
            <span className="text-white">Meet Our </span>
          
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Core Team
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            The people driving innovation, collaboration, and growth at
            Analytics & Consulting Club.
          </p>
        </div>

        {/* Top Row - President & Vice President */}
        <div className="mt-20 flex flex-wrap justify-center gap-12">
          {members.slice(0, 2).map((member, index) => (
            <Card key={index} member={member} />
          ))}
        </div>

        {/* Bottom Row - Remaining Members */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {members.slice(2).map((member, index) => (
            <div key={index} className="flex justify-center">
              <Card member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}