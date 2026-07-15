import React, { useState, useEffect } from "react";
import { useLocation, Routes, Route, Link, Links } from "react-router-dom";
import accLogo from "../assets/acc-logo.png";

function Navbar( {SECTION_LINKS} ) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleAnchor = (e, href) => {
    if (location.pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortal = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document
        .getElementById("events-portal")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#events-portal";
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#04080F]/90 backdrop-blur-xl border-b border-blue-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md group-hover:bg-blue-500/30 transition-all duration-300" />
            <img
              src={accLogo}
              alt="ACC"
              className="relative w-9 h-9 lg:w-11 lg:h-11 rounded-xl bg-white object-contain p-0.5"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading text-base lg:text-lg font-bold text-white tracking-wide">
              ACC
            </span>
            <span className="text-[9px] lg:text-[10px] text-blue-400/70 tracking-[0.2em] uppercase font-medium">
              NIT Jamshedpur
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {SECTION_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={(e) => handleAnchor(e, link.href)}
              className="nav-link text-sm"
            >
              {link.label}
            </Link>
          ))}

          <Link className="ml-2 btn-primary text-xs px-5 py-2.5">
            Register Now
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-blue-500/15 text-slate-400 hover:text-white hover:border-blue-500/30 transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#04080F]/98 backdrop-blur-xl border-t border-blue-500/10 anim-fade">
          <div className="px-4 sm:px-6 py-5 flex flex-col gap-1">
            {SECTION_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className="text-slate-400 hover:text-white text-base py-2.5 px-3 rounded-xl hover:bg-blue-500/5 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/projects"
              className="text-slate-400 hover:text-white text-base py-2.5 px-3 rounded-xl hover:bg-blue-500/5 transition-all"
            >
              Projects
            </Link>
            <div className="pt-3 pb-1">
              <Link
                // href="/#events-portal"
                // onClick={scrollToPortal}
                className="btn-primary w-full justify-center text-sm"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
