const DOMAINS = [
  {
    icon: "📊",
    title: "Analytics & Consulting",
    description:
      "Empowering students with data-driven decision-making, business analytics, consulting frameworks, and case-based problem solving.",
  },
  {
    icon: "🤝",
    title: "Corporate Relations & Networking",
    description:
      "Building strong industry and alumni connections through partnerships, networking events, workshops, and collaborations.",
  },
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Developing modern, responsive websites and web applications using the latest frontend and backend technologies.",
  },
  {
    icon: "🎥",
    title: "Media & Communications",
    description:
      "Managing branding, social media, content creation, photography, videography, and effective communication.",
  },
];

function Domains() {

  return (
    <section
      id="domains"

      className="relative section-py px-4 sm:px-6 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <span
            className={`text-white/30 text-xs tracking-[0.3em] uppercase font-medium`}
          >
            What We Do
          </span>
          <h2
            className={`mt-3 sm:mt-4 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white `}
          >
            Our Domains
          </h2>
          <p
            className={`mt-3 sm:mt-4 text-white/40 text-sm sm:text-base max-w-lg mx-auto `}
          >
            We operate across four core verticals, each fostering deep expertise
            and hands-on experience.
          </p>
        </div>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {DOMAINS.map((d, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-5 sm:p-6 lg:p-8 group hover-lift `}
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl block mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {d.icon}
              </span>
              <h3 className="font-heading text-base sm:text-lg font-semibold text-white mb-2">
                {d.title}
              </h3>
              <p className="text-white/35 text-xs sm:text-sm leading-relaxed">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Domains;