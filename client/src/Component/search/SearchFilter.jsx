function SearchFilter({
  category,
  setCategory,
  location,
  setLocation,
  rating,
  setRating,
  sortBy,
  setSortBy,
}) {
  return (
    <section className="py-10 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Filter Destinations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Category
              </label>

              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              >
                <option value="All">All</option>
                <option value="City">City</option>
                <option value="Beach">Beach</option>
                <option value="Hill Station">Hill Station</option>
                <option value="Heritage">Heritage</option>
                <option value="Temple">Temple</option>
                <option value="Adventure">Adventure</option>
              </select>
            </div>

            {/* State */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                State
              </label>

              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              >
                <option value="All">All States</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Goa">Goa</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Agra, Uttar Pradesh">Uttar Pradesh</option>
              </select>
            </div>

            {/* Rating */}
            <div>
              <label
                htmlFor="rating"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Minimum Rating
              </label>

              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              >
                <option value="All">All Ratings</option>
                <option value="4">4★ & Above</option>
                <option value="4.5">4.5★ & Above</option>
                <option value="4.8">4.8★ & Above</option>
                <option value="5">5★ Only</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <label
                htmlFor="sort"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Sort By
              </label>

              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              >
                <option value="None">Default</option>
                <option value="Rating">Highest Rating</option>
                <option value="LowPrice">Price: Low → High</option>
                <option value="HighPrice">Price: High → Low</option>
                <option value="Name">A → Z</option>
              </select>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default SearchFilter;