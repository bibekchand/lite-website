import Countdown from "../../components/Countdown/Countdown.jsx";
import { MapIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

function Home() {
  return (
    <div className="text-white">

      {/* Hero Section */}
      <section className="relative z-10 bg-gray-900/70 backdrop-blur-md py-24 text-center px-6 rounded-lg max-w-4xl mx-auto mt-12">
        <div className="w-32 h-32 bg-gray-600/50 rounded-full flex items-center justify-center mb-4">
          Logo
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">KEC LITE 2026</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Annual College Tech Event
        </p>
        <Countdown targetDate="2026-02-14T10:00:00" />
      </section>

      {/* Event Info / Map */}
      <section className="relative z-10 py-20 flex flex-col md:flex-row items-center justify-center gap-12 px-6 bg-gray-900/60 backdrop-blur-md rounded-lg max-w-6xl mx-auto mt-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Event Location</h2>
          <p className="text-gray-300 mb-4">
            KEC Dhapakhel, Lalitpur. Join us for workshops, competitions, and tech networking.
          </p>
          <div className="flex items-center gap-2 text-gray-300">
            <MapIcon className="w-6 h-6" />
            <span>Map Placeholder – add Google Map embed or screenshot</span>
          </div>
        </div>
        <div className="md:w-1/2 h-72 md:h-96 bg-gray-700/50 rounded-lg flex items-center justify-center">
          Map Image Placeholder
        </div>
      </section>

      {/* Countdown / Schedule */}
      <section className="relative z-10 py-20 text-center px-6 bg-gray-900/60 backdrop-blur-md rounded-lg max-w-4xl mx-auto mt-12">
        <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-2">
          <CalendarDaysIcon className="w-6 h-6" /> Countdown to Event
        </h2>
        <div className="flex justify-center">
          <Countdown targetDate="2026-02-14T10:00:00" />
        </div>
      </section>

    </div>
  );
}

export default Home;

