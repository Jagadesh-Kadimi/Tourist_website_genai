function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-r from-blue-500 to-emerald-500 text-white">
      <div className="text-center max-w-3xl px-6">
        <h1 className="text-6xl font-bold mb-6">Explore the World with AI</h1>

        <p className="text-xl mb-8">
          Discover amazing destinations, hotels, local food,
          transportation, travel guides, emergency services,
          and personalized AI travel plans.
        </p>

        <div className="flex justify-center items-center mb-8">
          <input
            type="text"
            placeholder="Search your dream destination..."
            className="w-[500px] h-14 px-5 py-4 rounded-l-full text-gray-800 outline-none shadow-lg"
          />

          <button className="h-14 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 rounded-r-full transition duration-300">Search</button>
        </div>

        <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-gray-200 transition duration-300 shadow-lg">
          Explore Now
        </button>
      </div>
    </section>
  );
}

export default Hero;