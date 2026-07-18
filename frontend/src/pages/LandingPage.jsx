import { useState, useEffect, useRef } from "react";
import accLogo from "../assets/acc-logo.png";


import IntroPage from "../components/IntroPage.jsx";
import MovingBanner from "../components/MovingBanner.jsx";
import IntroOfAcc from "../components/IntroOfAcc.jsx";
import TeamCarousel from "../pages/TeamCarousel";



const PIPELINE_STEPS = [
  {
    number: "01",
    title: "Complete Digital Form Matrix",
    subtitle: "Application Portal",
    description:
      "Fill out the structured digital application covering your academic background, domain interests, prior experience, and motivation to join ACC.",
    details: [
      "Personal & academic info",
      "Domain preference selection",
      "Prior project/internship details",
      "Statement of purpose",
    ],
    icon: "ð",
    color: "#2563EB",
    colorLight: "rgba(37,99,235,0.12)",
    colorBorder: "rgba(37,99,235,0.25)",
    status: "Open Now",
    statusColor: "#10B981",
  },
  {
    number: "02",
    title: "Technical & Analytical Screening",
    subtitle: "Aptitude Assessment",
    description:
      "A timed online assessment testing quantitative aptitude, logical reasoning, data interpretation, and basic analytical thinking.",
    details: [
      "Quantitative aptitude",
      "Data interpretation",
      "Logical reasoning",
      "Case-based MCQs",
    ],
    icon: "ð§®",
    color: "#7C3AED",
    colorLight: "rgba(124,58,237,0.12)",
    colorBorder: "rgba(124,58,237,0.25)",
    status: "Upcoming",
    statusColor: "#F59E0B",
  },
  {
    number: "03",
    title: "Case Structuring Round",
    subtitle: "Live Case Interview",
    description:
      "A live 20-minute case structuring session with a senior ACC member. You will be given a business problem and evaluated on your structured thinking.",
    details: [
      "Business problem framing",
      "Hypothesis-driven approach",
      "Communication clarity",
      "Structured recommendations",
    ],
    icon: "ðï¸",
    color: "#06B6D4",
    colorLight: "rgba(6,182,212,0.12)",
    colorBorder: "rgba(6,182,212,0.25)",
    status: "Upcoming",
    statusColor: "#F59E0B",
  },
  {
    number: "04",
    title: "Core Board Handshake Interview",
    subtitle: "Final Selection",
    description:
      "A personal interview with the ACC Core Board. We assess cultural fit, passion for analytics & consulting, and long-term commitment to the club.",
    details: [
      "Core team interaction",
      "Cultural fit evaluation",
      "Domain deep-dive Q&A",
      "Final offer & onboarding",
    ],
    icon: "ð¤",
    color: "#F59E0B",
    colorLight: "rgba(245,158,11,0.12)",
    colorBorder: "rgba(245,158,11,0.25)",
    status: "By Invite",
    statusColor: "#60A5FA",
  },
];


function EventDashboardModal({ event, onClose }) {
  const [activeTab, setActiveTab] = useState("about");

  /* Lock body scroll, handle Escape */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const accent = event.accentColor || "#2563EB";

  /* External action buttons config â only render if link is non-empty */
  const actions = [
    {
      key: "register",
      label: "Register & Fill Form",
      sublabel: "Official registration portal",
      icon: (
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      href: event.form_external_link,
      primary: true,
    },
    {
      key: "dataset",
      label: "Download Dataset Matrix",
      sublabel: "Problem data & resources",
      icon: (
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
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      ),
      href: event.dataset_download_link,
      primary: false,
    },
    {
      key: "ppt",
      label: "Submit Solution Deck (PPT)",
      sublabel: "Upload your presentation",
      icon: (
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
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l4-4m0 0l4 4m-4-4v12"
          />
        </svg>
      ),
      href: event.ppt_submit_link,
      primary: false,
    },
  ].filter((a) => a.href && a.href.trim() !== "");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
      style={{ background: "rgba(2,5,12,0.94)", backdropFilter: "blur(14px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-6xl mx-auto my-6 sm:my-10 rounded-2xl overflow-hidden anim-scale"
        style={{ background: "#070D1A", border: `1px solid ${accent}22` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ââ HERO HEADER ââ */}
        <div
          className="relative px-5 sm:px-8 pt-8 pb-6"
          style={{
            background: `linear-gradient(135deg, ${accent}14 0%, transparent 60%)`,
            borderBottom: `1px solid ${accent}18`,
          }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors z-10"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            aria-label="Close"
          >
            <svg
              className="w-4 h-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Club badge + title */}
          <div className="flex items-start gap-4 mb-5">
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
              style={{
                background: `${accent}18`,
                border: `1px solid ${accent}30`,
              }}
            >
              {event.icon}
            </div>
            <div className="flex-1 min-w-0 pr-8">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span
                  className="text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-0.5 rounded-full border"
                  style={{
                    color: accent,
                    borderColor: `${accent}40`,
                    background: `${accent}12`,
                  }}
                >
                  {event.portalStatus}
                </span>
                <span
                  className={`text-[10px] tracking-widest uppercase border rounded-full px-2 py-0.5 ${event.tagClass}`}
                >
                  {event.tag}
                </span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                {event.title}
              </h2>
              <div className="flex items-center gap-2 mt-1.5">
                <img
                  src={accLogo}
                  alt="ACC"
                  className="w-4 h-4 rounded bg-white object-contain p-0.5"
                />
                <span className="text-slate-500 text-xs font-medium">
                  Analytics &amp; Consultancy Club Â· NIT Jamshedpur
                </span>
              </div>
            </div>
          </div>

          {/* Tracking metrics row â Unstop style */}
          <div className="flex flex-wrap gap-3 sm:gap-5">
            {[
              {
                label: "Registered",
                value: `${event.registered} Users`,
                icon: "ð¥",
              },
              { label: "Team Size", value: event.teamSize, icon: "ð¤" },
              { label: "Eligibility", value: event.eligibility, icon: "ð" },
              { label: "Date", value: event.date, icon: "ð" },
              { label: "Seats", value: event.seats, icon: "ðº" },
            ].map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-sm">{m.icon}</span>
                <div>
                  <div className="text-[9px] text-slate-600 uppercase tracking-widest leading-none">
                    {m.label}
                  </div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">
                    {m.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ââ TWO-COLUMN BODY ââ */}
        <div className="flex flex-col lg:flex-row">
          {/* ââ LEFT PANEL â 70% ââ */}
          <div
            className="flex-1 min-w-0 px-5 sm:px-8 py-6"
            style={{ borderRight: "1px solid rgba(255,255,255,0.05)" }}
          >
            {/* Tab navigation */}
            <div
              className="flex gap-0 mb-6 border-b"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              {[
                { key: "about", label: "About & Guidelines" },
                { key: "timeline", label: "Stages & Timelines" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="relative px-4 sm:px-5 py-3 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 -mb-px"
                  style={{
                    color:
                      activeTab === tab.key ? accent : "rgba(148,163,184,0.7)",
                    borderBottom:
                      activeTab === tab.key
                        ? `2px solid ${accent}`
                        : "2px solid transparent",
                  }}
                >
                  {tab.label}
                  {activeTab === tab.key && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-px blur-sm"
                      style={{ background: accent }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* ââ TAB 1: About & Guidelines ââ */}
            {activeTab === "about" && (
              <div className="space-y-6 anim-fade">
                {/* Description paragraphs */}
                <div>
                  <h3 className="font-heading text-sm font-bold text-white mb-3 flex items-center gap-2">
                    <span
                      className="w-1 h-4 rounded-full inline-block"
                      style={{ background: accent }}
                    />
                    About This Event
                  </h3>
                  <div className="space-y-3">
                    {(event.about || [event.description]).map((para, i) => (
                      <p
                        key={i}
                        className="text-slate-400 text-sm leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Eligibility */}
                {event.eligibilityRules &&
                  event.eligibilityRules.length > 0 && (
                    <div>
                      <h3 className="font-heading text-sm font-bold text-white mb-3 flex items-center gap-2">
                        <span
                          className="w-1 h-4 rounded-full inline-block"
                          style={{ background: accent }}
                        />
                        Eligibility Criteria
                      </h3>
                      <ul className="space-y-2">
                        {event.eligibilityRules.map((rule, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm text-slate-400"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                              style={{ background: accent }}
                            />
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Evaluation */}
                {event.evaluationCriteria &&
                  event.evaluationCriteria.length > 0 && (
                    <div>
                      <h3 className="font-heading text-sm font-bold text-white mb-3 flex items-center gap-2">
                        <span
                          className="w-1 h-4 rounded-full inline-block"
                          style={{ background: accent }}
                        />
                        Evaluation Criteria
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {event.evaluationCriteria.map((c, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-slate-400"
                            style={{
                              background: "rgba(255,255,255,0.03)",
                              border: "1px solid rgba(255,255,255,0.06)",
                            }}
                          >
                            <span
                              className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                              style={{
                                background: `${accent}20`,
                                color: accent,
                              }}
                            >
                              {i + 1}
                            </span>
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Highlights chips */}
                <div>
                  <h3 className="font-heading text-sm font-bold text-white mb-3 flex items-center gap-2">
                    <span
                      className="w-1 h-4 rounded-full inline-block"
                      style={{ background: accent }}
                    />
                    What You Get
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {event.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 rounded-full font-medium"
                        style={{
                          color: accent,
                          background: `${accent}12`,
                          border: `1px solid ${accent}25`,
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ââ TAB 2: Stages & Timelines ââ */}
            {activeTab === "timeline" && (
              <div className="anim-fade">
                <div className="relative">
                  {/* Vertical connector line */}
                  <div
                    className="absolute left-[19px] top-6 bottom-6 w-px"
                    style={{
                      background: `linear-gradient(180deg, ${accent}60, ${accent}10)`,
                    }}
                  />

                  <div className="space-y-5">
                    {(event.rounds || []).map((round, i) => {
                      const isLive = round.status === "Live";
                      return (
                        <div key={i} className="flex gap-4 relative">
                          {/* Step dot */}
                          <div className="flex-shrink-0 relative z-10">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                              style={{
                                background: isLive
                                  ? accent
                                  : "rgba(255,255,255,0.05)",
                                border: `2px solid ${isLive ? accent : "rgba(255,255,255,0.1)"}`,
                                color: isLive
                                  ? "#fff"
                                  : "rgba(148,163,184,0.5)",
                                boxShadow: isLive
                                  ? `0 0 16px ${accent}50`
                                  : "none",
                              }}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </div>
                          </div>

                          {/* Round content */}
                          <div
                            className="flex-1 rounded-xl p-4 mb-1"
                            style={{
                              background: isLive
                                ? `${accent}0A`
                                : "rgba(255,255,255,0.02)",
                              border: `1px solid ${isLive ? `${accent}30` : "rgba(255,255,255,0.06)"}`,
                            }}
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                              <h4 className="font-heading text-sm font-bold text-white">
                                {round.title}
                              </h4>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] text-slate-500">
                                  {round.date}
                                </span>
                                <span
                                  className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                                  style={
                                    isLive
                                      ? {
                                          color: "#10B981",
                                          background: "rgba(16,185,129,0.12)",
                                          border:
                                            "1px solid rgba(16,185,129,0.3)",
                                        }
                                      : {
                                          color: "rgba(148,163,184,0.5)",
                                          background: "rgba(255,255,255,0.04)",
                                          border:
                                            "1px solid rgba(255,255,255,0.08)",
                                        }
                                  }
                                >
                                  {isLive ? "â Live" : "ð Locked"}
                                </span>
                              </div>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed">
                              {round.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ââ RIGHT PANEL â sticky action sidebar 30% ââ */}
          <div className="lg:w-72 xl:w-80 flex-shrink-0 px-5 sm:px-6 py-6">
            <div className="lg:sticky lg:top-6 space-y-4">
              {/* Important dates card */}
              <div
                className="rounded-xl p-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <h4 className="font-heading text-xs font-bold text-white mb-3 tracking-wide uppercase flex items-center gap-2">
                  <svg
                    className="w-3.5 h-3.5"
                    style={{ color: accent }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Critical Dates
                </h4>
                <div className="space-y-2.5">
                  {(event.rounds || []).map((r, i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between gap-2"
                    >
                      <span className="text-slate-500 text-xs leading-snug flex-1">
                        {r.title.split("â")[1]?.trim() || r.title}
                      </span>
                      <span
                        className="text-[10px] font-semibold flex-shrink-0"
                        style={{
                          color:
                            r.status === "Live"
                              ? "#10B981"
                              : "rgba(148,163,184,0.4)",
                        }}
                      >
                        {r.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* External action buttons */}
              <div className="space-y-2.5">
                <h4 className="font-heading text-xs font-bold text-white tracking-wide uppercase flex items-center gap-2">
                  <svg
                    className="w-3.5 h-3.5"
                    style={{ color: accent }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Quick Actions
                </h4>

                {actions.map((action) => (
                  <a
                    key={action.key}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-300 group"
                    style={
                      action.primary
                        ? {
                            background: `linear-gradient(135deg, ${accent}, ${accent}CC)`,
                            border: `1px solid ${accent}`,
                            color: "#fff",
                          }
                        : {
                            background: `${accent}0D`,
                            border: `1px solid ${accent}25`,
                            color: accent,
                          }
                    }
                  >
                    <span className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      {action.icon}
                    </span>
                    <div className="flex-1 min-w-0 text-left">
                      <div className="text-xs font-bold leading-tight">
                        {action.label}
                      </div>
                      <div
                        className="text-[10px] mt-0.5 leading-tight"
                        style={{
                          color: action.primary
                            ? "rgba(255,255,255,0.7)"
                            : `${accent}99`,
                        }}
                      >
                        {action.sublabel}
                      </div>
                    </div>
                    <svg
                      className="w-3.5 h-3.5 flex-shrink-0 opacity-60 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}

                {actions.length === 0 && (
                  <div className="text-center py-4 text-slate-600 text-xs">
                    Action links coming soon
                  </div>
                )}
              </div>

              {/* Share / info note */}
              <div
                className="rounded-xl p-3 text-center"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <p className="text-slate-600 text-[10px] leading-relaxed">
                  All external links open in a new tab.
                  <br />
                  Contact{" "}
                  <span className="text-blue-500">acc@nitjsr.ac.in</span> for
                  queries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Contact() {
  const [ref, inView] = useInView();
  return (
    <section
      id="contact"
      ref={ref}
      className="relative section-py px-4 sm:px-6 border-t border-white/5"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-white/[0.015] blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span
          className={`text-white/30 text-xs tracking-[0.3em] uppercase font-medium ${inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          Get In Touch
        </span>
        <h2
          className={`mt-3 sm:mt-4 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white ${inView ? "animate-fade-in-up delay-100" : "opacity-0"}`}
        >
          Ready to Join ACC?
        </h2>
        <p
          className={`mt-3 sm:mt-4 text-white/40 text-sm sm:text-base max-w-lg mx-auto ${inView ? "animate-fade-in-up delay-200" : "opacity-0"}`}
        >
          Whether you are a data enthusiast, strategy buff, or just curious -
          there is a place for you here.
        </p>
        <div
          className={`mt-8 sm:mt-10 ${inView ? "animate-fade-in-up delay-300" : "opacity-0"}`}
        >
          <a
            href="mailto:acc@nitjsr.ac.in"
            className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-black rounded-full font-semibold text-sm tracking-wide hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-all duration-500 hover:scale-105"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            acc@nitjsr.ac.in
          </a>
        </div>
        <div
          className={`mt-6 sm:mt-8 flex items-center justify-center gap-4 sm:gap-6 ${inView ? "animate-fade-in-up delay-400" : "opacity-0"}`}
        >
          {["LinkedIn", "Instagram", "Twitter"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-white/25 hover:text-white text-xs sm:text-sm transition-colors duration-300"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------
   LANDING PAGE
-------------------------------------------------------------- */
function LandingPage() {
  return (
    <>
      <IntroPage />
      <MovingBanner />
      <IntroOfAcc />
      <TeamCarousel/>
      {/* <InductionPipeline /> */}
      {/* <Contact /> */}
    </>
  );
}

export default LandingPage;
