import destinations from "../../data/home/destination";

function PopularDestinations() {
  return (
    <section className="py-16 bg-slate-100" id="popular-destinations">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Destinations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto cursor-pointer ">

          {destinations.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="p-5  ">

                <h3 className="text-xl font-bold">
                  {place.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  📍 {place.location}
                </p>

                <div className="flex justify-between mt-4">

                  <span className="text-yellow-500">
                    ⭐ {place.rating}
                  </span>

                  <span className="text-blue-600 font-bold">
                    {place.price}
                  </span>

                </div>

                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Explore
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PopularDestinations;