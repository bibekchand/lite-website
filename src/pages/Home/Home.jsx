import Links from "../../components/Links/Links.jsx";
import PixelCard from "../../components/PixelCard/PixelCard.jsx";
import Shuffle from "../../components/Shuffle/Shuffle.jsx";
import TextType from "../../components/TextType/TextType.jsx";
export default function Home() {
	return (
		<>
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
			<div></div>
			<Links url="https://maps.app.goo.gl/TSgtXmcomGa4yaXz8" />
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
