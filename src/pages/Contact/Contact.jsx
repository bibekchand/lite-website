import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

function Contact() {
  return (
    <div className="px-6 py-20 text-white max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <EnvelopeIcon className="w-6 h-6" />
          <span>Email: contact@keclite.com</span>
        </div>
        <div className="flex items-center gap-4">
          <PhoneIcon className="w-6 h-6" />
          <span>Phone: +977 980xxxxxxx</span>
        </div>
        <div className="flex items-center gap-4">
          <MapPinIcon className="w-6 h-6" />
          <span>KEC Dhapakhel, Lalitpur, Nepal</span>
        </div>
      </div>

      {/* Placeholder for contact form or map */}
      <div className="mt-12 bg-gray-700 h-64 flex items-center justify-center">
        Contact Form / Map Placeholder
      </div>
    </div>
  );
}

export default Contact;
