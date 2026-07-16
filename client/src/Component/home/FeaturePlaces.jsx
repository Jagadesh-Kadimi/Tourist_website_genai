import featuredPlaces from "../../data/home/featuredPlaces";

function FeaturedPlaces() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Featured Places
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-12">
          Hand-picked destinations recommended by our travel experts.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {featuredPlaces.map((place) => (

            <div
              key={place.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              <img
                src={place.image}
                alt={place.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {place.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  📍 {place.location}
                </p>

                <div className="flex justify-between mt-5">

                  <span className="text-yellow-500">
                    ⭐ {place.rating}
                  </span>

                  <span className="text-gray-600">
                    {place.days}
                  </span>

                </div>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-2xl font-bold text-blue-600">
                    {place.price}
                  </span>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
                    Explore
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedPlaces;