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
import Domains from "./pages/DomainPage";
import Events from "./pages/EventsPage";
import Navbar from "./components/navBar.jsx";
import Footer from "./components/footer.jsx";
import ScrollToTop from "./utilities/ScrollToTop.jsx";

const SECTION_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Domains", href: "/domains" },
  { label: "Active Portals", href: "/events-portal" },
  { label: "Team", href: "/team" },
];

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#04080F] text-white font-sans antialiased overflow-x-hidden">
        <Navbar SECTION_LINKS={SECTION_LINKS} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/events-portal" element={<Events />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/ipl-2026" element={<IPL2026Page />} />
          <Route path="/project-ipl" element={<IPL2026Page />} />
        </Routes>
        <div className="grad-line" />
        <Footer SECTION_LINKS={SECTION_LINKS} />
      </div>
    </BrowserRouter>
  );
}

export default App;
