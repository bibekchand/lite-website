import { useState } from "react";
import EventCard from "../../components/EventCard/EventCard.jsx";

function Events() {
  const events = [
    { title: "Coding Contest", description: "Test your programming skills.", img: "" },
    { title: "Robotics Challenge", description: "Build and compete with robots.", img: "" },
    { title: "AI Workshop", description: "Hands-on AI sessions.", img: "" },
    { title: "Hackathon", description: "Collaborate and innovate in teams.", img: "" },
    { title: "Tech Talks", description: "Learn from experts.", img: "" },
    { title: "Tech Talks", description: "Learn from experts.", img: "" },
  ];

  return (
    <div className="px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-12 text-center">Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="h-48 bg-gray-600 flex items-center justify-center">
              {event.img ? (
                <img src={event.img} alt={event.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-300">Image Placeholder</span>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-300">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;

