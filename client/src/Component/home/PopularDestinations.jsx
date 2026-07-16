const destinations = [
  {
    id: 1,
    name: "Goa",
    location: "Goa, India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Araku Valley",
    location: "Andhra Pradesh",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Taj Mahal",
    location: "Agra",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Munnar",
    location: "Kerala",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
    rating: 4.8,
  },
];

function PopularDestinations() {
  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Destinations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold">{place.name}</h3>

                <p className="text-gray-600 mt-1">
                  {place.location}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="font-semibold text-yellow-500">
                        ⭐ {place.rating}
                  </span>

                  <button className="text-blue-600 font-semibold hover:text-blue-800">
                    Explore →
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

export default PopularDestinations;