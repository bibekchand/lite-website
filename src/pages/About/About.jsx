import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { UserGroupIcon, LightBulbIcon, TrophyIcon } from "@heroicons/react/24/outline";

function About() {
  const scrollRef = useRef(null);

  // Horizontal scroll transform
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -150]); // adjust for longer scroll

  return (
    <div className="text-white">

      {/* Hero Section */}
      <section className="relative z-10 bg-gray-900/70 backdrop-blur-md py-24 text-center px-6 rounded-lg max-w-4xl mx-auto mt-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">About KEC LITE</h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
          KEC LITE is the flagship tech event of our college, where students showcase projects, participate in competitions, and attend workshops.
        </p>
      </section>

      {/* Mission + Image Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center gap-12 px-6 py-20 bg-gray-900/60 backdrop-blur-md rounded-lg max-w-6xl mx-auto mt-12">
        <div className="md:w-1/2 h-72 md:h-96 bg-gray-700/50 rounded-lg flex items-center justify-center">
          Image Placeholder
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-200 mb-4">
            KEC LITE encourages innovation, teamwork, and practical application of technical knowledge. Students get to compete, collaborate, and learn from experts.
          </p>

          {/* Horizontal Scroll Inspiring Line */}
          <div className="relative h-28 md:h-32 my-8 overflow-hidden flex items-center">
            <motion.div
              ref={scrollRef}
              className="whitespace-nowrap text-2xl md:text-3xl font-bold text-white uppercase tracking-wide"
              style={{ x: x }}
            >
              <span className="mx-8">
                Code.Innovate.Learn.Collab.
              </span>
              <span className="mx-8">
                Code. Innovate. Learn. Collab.
                
              </span>
            </motion.div>
          </div>

          <p className="text-gray-200">
            Each year, we host workshops, coding challenges, robotics competitions, and tech talks. Our goal is to inspire creativity and excellence in technology.
          </p>
        </div>
      </section>

      {/* Highlights / Stats */}
      <section className="relative z-10 py-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 bg-gray-900/60 backdrop-blur-md rounded-lg max-w-6xl mx-auto mt-12">
        <div className="bg-gray-700/50 p-6 rounded-lg flex flex-col items-center hover:scale-105 transition-transform">
          <UserGroupIcon className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Participants</h3>
          <p className="text-gray-200 text-center">Hundreds of students from across Nepal attend every year.</p>
        </div>
        <div className="bg-gray-700/50 p-6 rounded-lg flex flex-col items-center hover:scale-105 transition-transform">
          <LightBulbIcon className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Innovations</h3>
          <p className="text-gray-200 text-center">Students showcase projects, prototypes, and creative solutions.</p>
        </div>
        <div className="bg-gray-700/50 p-6 rounded-lg flex flex-col items-center hover:scale-105 transition-transform">
          <TrophyIcon className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Competitions</h3>
          <p className="text-gray-200 text-center">Coding, robotics, and tech challenges for all participants.</p>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="relative z-10 py-20 px-6 bg-gray-900/60 backdrop-blur-md rounded-lg max-w-6xl mx-auto mt-12">
        <h2 className="text-4xl font-bold mb-12 text-center">Past Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-700/50 h-48 flex items-center justify-center">Image 1</div>
          <div className="bg-gray-700/50 h-48 flex items-center justify-center">Image 2</div>
          <div className="bg-gray-700/50 h-48 flex items-center justify-center">Image 3</div>
          <div className="bg-gray-700/50 h-48 flex items-center justify-center">Image 4</div>
          <div className="bg-gray-700/50 h-48 flex items-center justify-center">Image 5</div>
          <div className="bg-gray-700/50 h-48 flex items-center justify-center">Image 6</div>
        </div>
        <p className="text-gray-400 text-center mt-6">
          Replace placeholders with images from previous KEC LITE events.
        </p>
      </section>

    </div>
  );
}

export default About;

