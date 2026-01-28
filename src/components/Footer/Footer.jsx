import { FaDiscord, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-md text-white mt-20 w-full">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* KEC LITE Logo */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-xl font-bold mb-2">KEC LITE</h3>
          <div className="bg-gray-700/50 w-32 h-16 flex items-center justify-center rounded-lg">
            Logo Placeholder
          </div>
        </div>

        {/* Prospectus */}
        <div>
          <h3 className="text-xl font-bold mb-4">Prospectus</h3>
          <p className="text-gray-300 mb-2">Download our KEC LITE prospectus</p>
          <a
            href="#" // replace ile link later
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition shadow hover:shadow-lg hover:animate-pulse"
          >
            Download
          </a>
        </div>

        {/* Join Discord */}
        <div>
          <h3 className="text-xl font-bold mb-4">Community</h3>
          <p className="text-gray-300 mb-2">Join our Discord community</p>
          <a
            href="#" // replace with Discord invite link later
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition shadow hover:shadow-lg hover:animate-pulse"
          >
            <FaDiscord /> Join Discord
          </a>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow & Contact</h3>
          <div className="flex gap-4 mb-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 hover:text-pink-500 transition hover:scale-110" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6 hover:text-blue-600 transition hover:scale-110" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 hover:text-blue-500 transition hover:scale-110" />
            </a>
          </div>
          <p className="text-gray-300">KEC Dhapakhel, Lalitpur, Nepal</p>
          <p className="text-gray-300">Email: contact@keclite.com</p>
          <p className="text-gray-300">Phone: +977 980xxxxxxx</p>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; 2026 KEC LITE. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
