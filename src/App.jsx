import { Route, Routes, useLocation } from "react-router";
import DotGrid from "./components/DotGrid/DotGrid.jsx";
import PillNav from "./components/PillNav/PillNav.jsx";
import logo from "./logo.svg";
import About from "./pages/About/About.jsx";
import Home from "./pages/Home/Home.jsx";
import cursor from "./cursor.png";

function App() {
    const location = useLocation()
	return (
		<>
			<div style={{ width: "100%", height: "100%", position: "fixed"}}>
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
			<div className="flex justify-center h-25" >
				<PillNav
					logo={logo}
					logoAlt="Event Logo"
					items={[
						{ label: "Home", href: "/" },
						{ label: "Events", href: "/events" },
						{ label: "About", href: "/about" },
						{ label: "Contacts", href: "/contact" },
					]}
					activeHref= {location.pathname}
					className="custom-nav"
					ease="power2.easeOut"
					baseColor="#002d71"
					pillColor="#ffffff"
					hoveredPillTextColor="#ffffff"
					pillTextColor="#000000"
					theme="light"
					initialLoadAnimation={false}
				/>
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
			</Routes>
		</>
	);
}

export default App;
