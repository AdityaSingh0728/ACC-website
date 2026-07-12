/* --------------------------------------------------------------
   TEAM
-------------------------------------------------------------- */
// const TEAM = [
//   { name: "Club President", role: "Overall Lead", initials: "CP" },
//   { name: "Vice President", role: "Strategy & Ops", initials: "VP" },
//   { name: "Tech Lead", role: "Analytics Head", initials: "TL" },
//   { name: "Events Head", role: "Events & Outreach", initials: "EH" },
// ];
import presidentImg from "../assets/presidentImg.jpg"
import vp from "../assets/vp.jpg"
const TEAM = [
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
    // image: mohitImg,
  },
  {
    name: "Tushar Kumar",
    role: "Web Head",
    // image: tusharImg,
  },
  {
    name: "Dhruv Sahu",
    role: "Content Head",
    // image: dhruvImg,
  },
  {
    name: "Saksham Sagar",
    role: "Content Head",
    // image: sakshamImg,
  },
];
const topTeam = TEAM.slice(0, 2);
const bottomTeam = TEAM.slice(2);
function Team() {
  return (
    // <section
    //   id="team"

    //   className="relative section-py px-4 sm:px-6 border-t border-white/5"
    // >
    //   <div className="max-w-7xl mx-auto text-center">
    //     <span
    //       className={`text-white/30 text-xs tracking-[0.3em] uppercase font-medium `}
    //     >
    //       Leadership
    //     </span>
    //     <h2
    //       className={`mt-3 sm:mt-4 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white`}
    //     >
    //       The Core Team
    //     </h2>
    //     <p
    //       className={`mt-3 sm:mt-4 text-white/40 text-sm sm:text-base max-w-lg mx-auto`}
    //     >
    //       Driven by passion and purpose - meet the people steering ACC forward.
    //     </p>
    //     <div className="mt-10 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
    //       {TEAM.map((t, i) => (
    //         <div
    //           key={i}
    //           className={`glass-card rounded-2xl p-5 sm:p-6 lg:p-8 group hover:scale-[1.03] `}
    //         >
    //           <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:border-white/20 transition-colors">
    //             <span className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-white/60">
    //               {t.initials}
    //             </span>
    //           </div>
    //           <h3 className="font-heading text-sm sm:text-base lg:text-lg font-semibold text-white">
    //             {t.name}
    //           </h3>
    //           <p className="text-white/30 text-xs sm:text-sm mt-1">{t.role}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="relative section-py px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center">
  <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs tracking-[0.3em] uppercase font-semibold">
    Leadership
  </span>

<h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
  The Core Team
</h2>

  <p className="mt-5 max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed">
    Driven by <span className="text-blue-400 font-medium">passion</span> and{" "}
    <span className="text-cyan-400 font-medium">purpose</span> —
    meet the people steering <span className="text-white font-semibold">ACC</span> forward.
  </p>
</div>

    {/* Top Row */}
  <div className="mt-16 flex justify-center gap-10 flex-wrap">
  {topTeam.map((member) => (
    <div key={member.name} className="group relative w-80">

      {/* Glow */}
      <div className="absolute -inset-1 rounded-3xl bg-blue-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Card */}
      <div
        className="relative glass-card rounded-3xl p-7 text-center
                   border border-white/10
                   transition-all duration-500
                   group-hover:-translate-y-2"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-40 h-40 mx-auto rounded-2xl object-cover border border-white/10"
        />

        <h3 className="mt-5 text-xl font-semibold text-white">
          {member.name}
        </h3>

        <p className="mt-2 text-cyan-400">
          {member.role}
        </p>
      </div>
    </div>
  ))}
</div>

    {/* Bottom Row */}
   <div className="mt-12 flex justify-center flex-wrap gap-8">
  {bottomTeam.map((member) => (
    <div key={member.name} className="group relative w-80">

      {/* Glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500"></div>

      {/* Card */}
      <div
        className="relative glass-card rounded-3xl p-7 text-center
                   border border-white/10
                   transition-all duration-500
                   group-hover:-translate-y-2"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-40 h-40 mx-auto rounded-2xl object-cover border border-white/10"
        />

        <h3 className="mt-5 text-xl font-semibold text-white">
          {member.name}
        </h3>

        <p className="mt-2 text-cyan-400">
          {member.role}
        </p>
      </div>
    </div>
  ))}
</div>
  </div>
</section>
  );
}

export default Team;