function EventCard({ title, description, img }) {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="h-40 bg-gray-600 flex items-center justify-center text-white">
        {img ? <img src={img} alt={title} /> : <span>Image</span>}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default EventCard;
