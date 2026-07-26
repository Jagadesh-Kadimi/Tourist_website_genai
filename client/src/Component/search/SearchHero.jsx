function SearchHero({searchTerm, setSearchTerm}){
    return (
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-5xl font-bold text-white">
                    Find Your Dream Destination with AI-Powered Search
                </h1>
                <p className="text-blue-100 text-lg mt-4 max-w-2xl mx-auto">
                    Discover amazing destinations, hotels, local food, transportation, travel guides, emergency services, and personalized AI travel plans with our advanced search feature.
                </p>
                <div className="mt-10 flex justify-center">
                    <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden w-full max-w-3xl">
                        <span className="px-5 text-2xl">
                            🔍
                        </span>
<input
  className="flex-1 py-4 outline-none text-gray-700"
  type="text"
  value={searchTerm}
  onChange={(e)=>setSearchTerm(e.target.value)}
  placeholder="Search Destinations..."
/>                        <button className="bg-yellow-400 hover:bg-yellow-500 px-8 py-4 font-semibold transition">
                            Search
                        </button>
                    </div>
                </div>
                </div>

        </section>
    );
}
export default SearchHero;