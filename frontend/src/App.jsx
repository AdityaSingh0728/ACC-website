import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import accLogo from "./assets/acc-logo.png";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import IPL2026Page from "./pages/IPL2026Page";
import TeamPage from "./pages/TeamPage";

/* ── nav config ── */
const SECTION_LINKS = [
  { label: "About",          href: "/#about" },
  { label: "Domains",        href: "/#domains" },
  { label: "Active Portals", href: "/#events-portal" },
  { label: "Team",           href: "/team" },
  { label: "Contact",        href: "/#contact" },
];

/* ══════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════ */
function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

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
      document.getElementById("events-portal")?.scrollIntoView({ behavior: "smooth" });
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
            <span className="font-heading text-base lg:text-lg font-bold text-white tracking-wide">ACC</span>
            <span className="text-[9px] lg:text-[10px] text-blue-400/70 tracking-[0.2em] uppercase font-medium">NIT Jamshedpur</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {SECTION_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleAnchor(e, link.href)}
              className="nav-link text-sm"
            >
              {link.label}
            </a>
          ))}

          <Link
            to="/projects"
            className={`nav-link text-sm ${location.pathname === "/projects" ? "active" : ""}`}
          >
            Projects
          </Link>

          <a
            href="/#events-portal"
            onClick={scrollToPortal}
            className="ml-2 btn-primary text-xs px-5 py-2.5"
          >
            Register Now
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-blue-500/15 text-slate-400 hover:text-white hover:border-blue-500/30 transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#04080F]/98 backdrop-blur-xl border-t border-blue-500/10 anim-fade">
          <div className="px-4 sm:px-6 py-5 flex flex-col gap-1">
            {SECTION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className="text-slate-400 hover:text-white text-base py-2.5 px-3 rounded-xl hover:bg-blue-500/5 transition-all"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/projects"
              className="text-slate-400 hover:text-white text-base py-2.5 px-3 rounded-xl hover:bg-blue-500/5 transition-all"
            >
              Projects
            </Link>
            <div className="pt-3 pb-1">
              <a
                href="/#events-portal"
                onClick={scrollToPortal}
                className="btn-primary w-full justify-center text-sm"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="border-t border-blue-500/10 bg-[#04080F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={accLogo} alt="ACC" className="w-9 h-9 rounded-xl bg-white object-contain p-0.5" />
              <div>
                <div className="font-heading font-bold text-white text-sm">ACC</div>
                <div className="text-[10px] text-blue-400/60 tracking-widest uppercase">NIT Jamshedpur</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of analytical leaders and strategic thinkers.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4 tracking-wide">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                ...SECTION_LINKS,
                { label: "Projects",  href: "/projects" },
                { label: "IPL 2026",  href: "/projects/ipl-2026" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-slate-500 hover:text-blue-400 text-sm transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4 tracking-wide">Connect</h4>
            <a
              href="mailto:acc@nitjsr.ac.in"
              className="text-blue-400 hover:text-blue-300 text-sm transition-colors block mb-3"
            >
              acc@nitjsr.ac.in
            </a>
            <div className="flex gap-4">
              {["LinkedIn", "Instagram", "Twitter"].map((s) => (
                <a key={s} href="#" className="text-slate-600 hover:text-blue-400 text-xs transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="grad-line mt-8 sm:mt-10 mb-5 sm:mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-xs">
          <span>
            © {new Date().getFullYear()} Analytics &amp; Consultancy Club, NIT Jamshedpur. All rights reserved.
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

/* ══════════════════════════════════════════
   APP
══════════════════════════════════════════ */
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#04080F] text-white font-sans antialiased overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/"                  element={<LandingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/projects"          element={<ProjectsPage />} />
          <Route path="/projects/ipl-2026" element={<IPL2026Page />} />
          <Route path="/project-ipl"       element={<IPL2026Page />} />
        </Routes>
        <div className="grad-line" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
