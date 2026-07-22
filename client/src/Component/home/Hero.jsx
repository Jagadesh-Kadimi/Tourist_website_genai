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

        <div className="flex items-center bg-white rounded-full shadow-xl max-w-3xl mx-auto overflow-hidden">

            <span className="text-2xl px-5">🔍</span>

            <input
              type="text"
              placeholder="Search your dream destination..."
              className="flex-1 py-4 pr-4 outline-none text-gray-700"
            />

            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 transition duration-300">
              Search
            </button>

          </div>

        <div className="mt-8">
  <button className="bg-white text-blue-600 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition cursor-pointer"
      onClick={()=>document.getElementById("popular-destinations")?.scrollIntoView({behaviour:"smooth"})}>
    Explore Now →
  </button>
</div>
      </div>
    </section>
  );
}

export default Hero;