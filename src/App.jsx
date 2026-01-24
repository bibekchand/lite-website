import DotGrid from "./components/DotGrid/DotGrid.jsx";
import PillNav from "./components/PillNav/PillNav.jsx";
import PixelCard from "./components/PixelCard/PixelCard.jsx";
import Shuffle from "./components/Shuffle/Shuffle.jsx";
import logo from "./logo.svg";
import TextType from "./components/TextType/TextType.jsx";
import Button from "./components/Button/Button.jsx";
import  Links from "./components/Links/Links.jsx";

function App() {
	return (
		<>
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
			<div className="flex justify-center h-25">
				<PillNav
					logo={logo}
					logoAlt="Event Logo"
					items={[
						{ label: "Home", href: "/" },
						{ label: "Events", href: "/about" },
						{ label: "About", href: "/services" },
						{ label: "Contacts", href: "/contact" },
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
			<div className="text-center p-4">
				<Shuffle
					text="KEC Lite 2082"
					shuffleDirection="right"
					duration={0.35}
					animationMode="evenodd"
					shuffleTimes={1}
					ease="power3.out"
					stagger={0.03}
					threshold={0.1}
					triggerOnce={true}
					triggerOnHover
					respectReducedMotion={true}
					loop={false}
					loopDelay={0}
				/>
			</div>
			<div>
        </div>
        <Links url="https://maps.app.goo.gl/TSgtXmcomGa4yaXz8"/>
			<div className="text-5xl text-center p-6 relative">
				<TextType
					text={["We've go events for:", "Electronics", "Computer", "Civil"]}
					typingSpeed={75}
					pauseDuration={1500}
					showCursor
					cursorCharacter="_"
					texts={[
						"Welcome to React Bits! Good to see you!",
						"Build some amazing experiences!",
					]}
					deletingSpeed={50}
					variableSpeedEnabled={false}
					variableSpeedMin={60}
					variableSpeedMax={120}
					cursorBlinkDuration={0.5}
				/>
			</div>

			<div className="flex justify-center">
				<PixelCard variant="pink">
					<div className="absolute text-center ">
						<div>Our Event</div>
						<div>Our Event</div>
					</div>
				</PixelCard>
			</div>
		</>
	);
}

export default App;
