import React from 'react'
import accLogo from "../assets/acc-logo.png"

function IntroPage() {

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden grid-pattern"
    >
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-white/[0.015] blur-3xl pointer-events-none animate-orb" />
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-white/[0.01] blur-3xl pointer-events-none animate-orb-2" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 sm:h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-2">
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <span className="text-white/50 text-[10px] sm:text-xs tracking-widest uppercase font-medium">
            Est. NIT Jamshedpur
          </span>
        </div>
        <div className="animate-fade-in-up delay-100">
          <img
            src={accLogo}
            alt="ACC Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-5 sm:mb-6 rounded-2xl bg-white p-2 shadow-[0_0_60px_rgba(255,255,255,0.08)] animate-float-slow"
          />
        </div>
        <h1 className="animate-fade-in-up delay-200 font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
          Analytics &amp;
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50">
            Consultancy Club
          </span>
        </h1>
        <p className="animate-fade-in-up delay-300 mt-4 sm:mt-6 text-white/40 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2">
          Empowering the next generation of analytical leaders and strategic
          thinkers at NIT Jamshedpur.
        </p>
        <div className="animate-fade-in-up delay-400 mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#about"
            className="group w-full sm:w-auto px-7 sm:px-8 py-3.5 bg-white text-black rounded-full font-semibold text-sm tracking-wide hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 flex items-center justify-center gap-2"
          >
            Explore
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
          <a
            href="#events-portal"
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 border border-white/15 text-white/70 rounded-full font-medium text-sm tracking-wide hover:border-white/30 hover:text-white transition-all duration-500 text-center"
          >
            Active Portals
          </a>
        </div>
      </div>
      {/*<div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up delay-700">
        <span className="text-white/20 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase">
        //   Scroll 
        </span>
        <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>   */}
    </section>
  );
}

export default IntroPage