import { Routes, Route } from "react-router-dom";
import DotGrid from "./components/DotGrid/DotGrid.jsx";
import PillNav from "./components/PillNav/PillNav.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Events from "./pages/Events/Events.jsx";
import Sponsor from "./pages/Sponsor/Sponsor.jsx";
import Contact from "./pages/Contact/Contact.jsx";

import logo from "./assets/logo.png";

function App() {
  return (
    <>
      {/* Background */}
      <div style={{ width: "100%", height: "100%", position: "fixed" }}>
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-center h-25 z-50 relative">
        <PillNav
          logo={logo}
          logoAlt="KEC LITE Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Events", href: "/events" },
            { label: "Sponsor", href: "/sponsor" },
            { label: "Contact", href: "/contact" },
            { label: "More", href: "/more" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          theme="light"
          initialLoadAnimation={false}
        />
      </div>

      {/* Page Content */}
      <div className="pt-24 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/more" element={<Home />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
