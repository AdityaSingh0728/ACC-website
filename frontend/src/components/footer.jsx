import React from "react";
import { useLocation, Routes, Route, Link, Links } from "react-router-dom";
import accLogo from "../assets/acc-logo.png";
import linkedIn from "../assets/linkedin.png";
import insta from "../assets/instagram.webp";
import twitter from "../assets/twitter.jpg";

const socialMedia = [
  { lebel: "LinkedIn", pic: linkedIn  },
  { lebel: "Instagram", pic: insta },
  { lebel: "Twitter", pic: twitter },
];

function Footer({ SECTION_LINKS }) {
  return (
    <footer className="border-t border-blue-500/10 bg-[#04080F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={accLogo}
                alt="ACC"
                className="w-9 h-9 rounded-xl bg-white object-contain p-0.5"
              />
              <div>
                <div className="font-heading font-bold text-white text-sm">
                  ACC
                </div>
                <div className="text-[10px] text-blue-400/60 tracking-widest uppercase">
                  NIT Jamshedpur
                </div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of analytical leaders and strategic
              thinkers.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4 tracking-wide">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {[
                ...SECTION_LINKS,
                { label: "Projects", href: "/projects" },
                { label: "IPL 2026", href: "/projects/ipl-2026" },
              ].map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  className="text-slate-500 hover:text-blue-400 text-sm transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4 tracking-wide">
              Connect
            </h4>
            <Link
              to="mailto:acc@nitjsr.ac.in"
              className="text-blue-400 hover:text-blue-300 text-sm transition-colors block mb-3"
            >
              acc@nitjsr.ac.in
            </Link>
            <div className="flex gap-4">
              {socialMedia.map((s) => (
                <Link
                  key={s.lebel}
                  to="#"
                  className="text-slate-600 hover:text-blue-400 text-xs transition-colors"
                >
                  <div className="flex ">
                    <img
                      src={s.pic}
                      alt={s.lebel}
                      className="relative w-6 h-6 lg:w-11 lg:h-11 rounded-xl  object-contain p-0.5"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="grad-line mt-8 sm:mt-10 mb-5 sm:mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-xs">
          <span>
            © {new Date().getFullYear()} Analytics &amp; Consultancy Club, NIT
            Jamshedpur. All rights reserved.
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
