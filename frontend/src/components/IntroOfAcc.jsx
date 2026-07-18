import { useRef, useState, useEffect } from "react";
import React from "react";

const STATS = [
  { value: "75+", label: "Active Members" },
  { value: "8+", label: "Projects Delivered" },
  { value: "5+", label: "Corporate Partners" },
  { value: "2+", label: "Years of Excellence" },
];

const POINTS_OF_INTRO = [
  {
    heading: "VISION",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis nobis et architecto, natus, ab ullam impedit perspiciatis obcaecati amet, repellat debitis vel? Odio architecto dolorem autem nulla accusantium porro Earum ducimus debitis culpa eius accusantium dignissimos aliquid asperiores cum, quisquam maxime labore, corrupti laboriosam at excepturi optio obcaecati similique est quis, iusto voluptates modi eligendi? Dolorem animi nostrum nam?",
  },

  {
    heading: "MISSION",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis nobis et architecto, natus, ab ullam impedit perspiciatis obcaecati amet, repellat debitis vel? Odio architecto dolorem autem nulla accusantium porro Earum ducimus debitis culpa eius accusantium dignissimos aliquid asperiores cum, quisquam maxime labore, corrupti laboriosam at excepturi optio obcaecati similique est quis, iusto voluptates modi eligendi? Dolorem animi nostrum nam?",
  },

  {
    heading: "FUTURE PLAN",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis nobis et architecto, natus, ab ullam impedit perspiciatis obcaecati amet, repellat debitis vel? Odio architecto dolorem autem nulla accusantium porro Earum ducimus debitis culpa eius accusantium dignissimos aliquid asperiores cum, quisquam maxime labore, corrupti laboriosam at excepturi optio obcaecati similique est quis, iusto voluptates modi eligendi? Dolorem animi nostrum nam?",
  }
];

function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, ...options },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isInView];
}

function InductionPipeline() {
  const [ref, inView] = useInView();
  const [activeStep, setActiveStep] = useState(0);
  return (
    <section
      id="induction-pipeline"
      ref={ref}
      className="relative section-py px-4 sm:px-6 border-t border-white/5"
    >
      <div className="absolute inset-0 hex-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/4 blur-[120px] pointer-events-none anim-pulse-glow" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span
            className={`section-label justify-center ${inView ? "anim-fade-up d-0" : "opacity-0"}`}
          >
            Induction Protocol
          </span>
          <h2
            className={`font-heading mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white ${inView ? "anim-fade-up d-1" : "opacity-0"}`}
          >
            Your Path Into <span className="gradient-text">ACC</span>
          </h2>
          <p
            className={`mt-4 text-slate-500 text-sm sm:text-base max-w-xl mx-auto ${inView ? "anim-fade-up d-2" : "opacity-0"}`}
          >
            A rigorous, merit-based 4-stage selection process designed to
            identify the sharpest analytical minds at NIT Jamshedpur.
          </p>
        </div>
        <div
          className={`flex sm:hidden gap-2 mb-6 overflow-x-auto no-scrollbar pb-1 ${inView ? "anim-fade-up d-3" : "opacity-0"}`}
        >
          {PIPELINE_STEPS.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 ${activeStep === i ? "text-white border-transparent" : "text-slate-500 border-white/10 hover:border-white/20"}`}
              style={
                activeStep === i
                  ? { background: s.color, borderColor: s.color }
                  : {}
              }
            >
              {s.number} {s.title.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
        </div>
        <div
          className={`hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 ${inView ? "anim-fade-up d-3" : "opacity-0"}`}
        >
          {PIPELINE_STEPS.map((step, i) => (
            <div
              key={i}
              onClick={() => setActiveStep(i)}
              className="glass rounded-2xl p-5 sm:p-6 flex flex-col cursor-pointer hover-lift group"
              style={{
                borderColor: activeStep === i ? step.colorBorder : undefined,
                boxShadow:
                  activeStep === i
                    ? `0 0 30px ${step.colorLight}, 0 8px 40px rgba(0,0,0,0.4)`
                    : undefined,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="step-badge text-white"
                  style={{ background: step.color }}
                >
                  {step.number}
                </div>
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </span>
              </div>
              <div className="mb-3">
                <span
                  className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full border"
                  style={{
                    color: step.statusColor,
                    borderColor: `${step.statusColor}40`,
                    background: `${step.statusColor}12`,
                  }}
                >
                  {step.status}
                </span>
              </div>
              <h3 className="font-heading text-sm sm:text-base font-bold text-white leading-snug mb-1">
                {step.title}
              </h3>
              <p
                className="text-xs font-medium mb-3"
                style={{ color: step.color }}
              >
                {step.subtitle}
              </p>
              <p className="text-slate-500 text-xs leading-relaxed flex-1 mb-4">
                {step.description}
              </p>
              <div className="flex flex-col gap-1.5">
                {step.details.map((d, di) => (
                  <div
                    key={di}
                    className="flex items-center gap-2 text-xs text-slate-500"
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: step.color }}
                    />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="sm:hidden">
          {(() => {
            const step = PIPELINE_STEPS[activeStep];
            return (
              <div
                className="glass rounded-2xl p-6 anim-scale"
                key={activeStep}
                style={{
                  borderColor: step.colorBorder,
                  boxShadow: `0 0 30px ${step.colorLight}`,
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="step-badge text-white"
                    style={{ background: step.color }}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-white">
                      {step.title}
                    </h3>
                    <p
                      className="text-xs font-medium"
                      style={{ color: step.color }}
                    >
                      {step.subtitle}
                    </p>
                  </div>
                  <span className="text-3xl ml-auto">{step.icon}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {step.details.map((d, di) => (
                    <div
                      key={di}
                      className="flex items-center gap-2 text-xs text-slate-500"
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: step.color }}
                      />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
        <div
          className={`mt-10 sm:mt-12 text-center ${inView ? "anim-fade-up d-8" : "opacity-0"}`}
        >
          <a
            href="#events-portal"
            className="btn-primary px-8 py-3.5 text-sm inline-flex"
          >
            Start Your Application
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <p className="mt-3 text-slate-600 text-xs">
            Applications open · Batch 2026-27
          </p>
        </div>
      </div>
    </section>
  );
}

function CountUp({ value, inView, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  // Split value into prefix/number/suffix, e.g. "50+" -> "", 50, "+"
  const match = String(value).match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : "";
  const decimals =
    match && match[2].includes(".") ? match[2].split(".")[1].length : 0;

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(target * progress); // linear, no easing
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <>
      {prefix}
      {decimals ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </>
  );
}

function IntroOfAcc() {
  const [ref, inView] = useInView();

  return (
    <section id="about" ref={ref} className="relative section-py px-4 sm:px-6">
      <div className="max-w-7xl mx-auto ">
        <div className={`  ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="text-white text-9xl uppercase font-semibold">
            Who We Are ???
          </span>
        </div>
        <div className="  mt-6 sm:mt-8 grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div>
            <h2
              className={`font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight ${inView ? "animate-fade-in-up delay-100" : "opacity-0"}`}
            >
              Where Data Meets
              <br />
              <span className="text-white/50">Decision Making</span>
            </h2>
            <p
              className={`mt-5 sm:mt-6 text-white/40 text-sm sm:text-base md:text-lg leading-relaxed ${inView ? "animate-fade-in-up delay-200" : "opacity-0"}`}
            >
              The Analytics &amp; Consultancy Club (ACC) at NIT Jamshedpur is a
              student-driven initiative dedicated to bridging the gap between
              academic theory and real-world business application. We cultivate
              analytical thinking, strategic problem-solving, and data-driven
              decision-making skills.
            </p>
            <p
              className={`mt-4 text-white/40 text-sm sm:text-base md:text-lg leading-relaxed ${inView ? "animate-fade-in-up delay-300" : "opacity-0"}`}
            >
              Through case competitions, workshops, industry projects, and
              knowledge sessions, our members develop the skills and mindset
              needed to excel in consulting, analytics, and strategy roles.
            </p>
          </div>
          <div
            className={`grid grid-cols-2 gap-3 mt-10 sm:gap-4 ${inView ? "animate-fade-in-up delay-300" : "opacity-0"}`}
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-5 sm:p-6 lg:p-8 text-center hover:scale-[1.03] transition-transform duration-300"
              >
                <span className="block font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  <CountUp value={s.value} inView={inView} />
                </span>
                <span className="block mt-1.5 sm:mt-2 text-white/30 text-xs sm:text-sm tracking-wide">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-auto  flex flex-col justify-center items-center mt-5">
          {POINTS_OF_INTRO.map((item) => (

            
            <div 
            className="flex flex-col justify-center  items-center h-auto border border-white/20 px-5  py-2 rounded-3xl mt-10 w-[90%]  "
            key={item.heading}>
              <span
                className={`  font-heading text-2xl underline decoration-dashed decoration-white/70 sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight ${inView ? "animate-fade-in-up delay-100" : "opacity-0"} `}
              >
                {item.heading}
              </span>
              <span
                className={` text-white/40 text-sm sm:text-base md:text-lg leading-relaxed ${inView ? "animate-fade-in-up delay-200" : "opacity-0"} `}
              >
                {item.content}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntroOfAcc;
