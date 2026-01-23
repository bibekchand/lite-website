import { useState } from "react";
import "./App.css";
import Scram from "./Scram.jsx";
import ProfileCard from "./ProfileCard.jsx";
import PixelCard from "./components/PixelCard.jsx";
import image from "./image.jpg";
import PillNav from "./PillNav";
import logo from "./image.jpg";
import DotGrid from "./components/DotGrid.jsx";
function App() {
	return (
		<>
			<div style={{ width: "100%", height: "100vh", position: "fixed" }}>
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
			<div className="flex justify-center h-25">
				<PillNav
					logo={logo}
					logoAlt="Company Logo"
					items={[
						{ label: "Home", href: "/" },
						{ label: "About", href: "/about" },
						{ label: "Services", href: "/services" },
						{ label: "Contact", href: "/contact" },
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
			<div className="flex justify-center">
				<PixelCard variant="pink">
					<div className="absolute text-center text-white">
						<div>Our Event</div>
						<div>Our Event</div>
					</div>
				</PixelCard>
			</div>
		</>
	);
}

export default App;
