function Sponsor() {
  return (
    <div className="px-6 py-12 text-white">
      <h2 className="text-4xl font-bold mb-8">Sponsors</h2>
      <p className="text-gray-300">Sponsor logos and details go here...</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
        <div className="bg-gray-700 h-24 flex items-center justify-center">Sponsor 1</div>
        <div className="bg-gray-700 h-24 flex items-center justify-center">Sponsor 2</div>
        <div className="bg-gray-700 h-24 flex items-center justify-center">Sponsor 3</div>
        <div className="bg-gray-700 h-24 flex items-center justify-center">Sponsor 4</div>
      </div>
    </div>
  );
}

export default Sponsor;