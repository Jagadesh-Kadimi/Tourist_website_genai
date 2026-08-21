import { Link } from "react-router-dom";

function NearbyPlaces({ currentId, currentLocation, destinations }) {
  const nearbyPlaces = destinations
    .filter(
      (destination) =>
        destination.id !== currentId &&
        destination.location === currentLocation
    )
    .slice(0, 4);

  if (nearbyPlaces.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Nearby Places
          </h2>

          <p className="text-gray-500 mt-2">
            Explore more destinations in {currentLocation}
          </p>
        </div>

        <Link
          to="/search"
          className="text-blue-600 font-semibold hover:text-blue-800"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {nearbyPlaces.map((place) => (
          <Link
            key={place.id}
            to={`/destination/${place.id}`}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800">
                {place.name}
              </h3>

              <p className="text-gray-500 mt-2">
                📍 {place.location}
              </p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-yellow-600 font-semibold">
                  ⭐ {place.rating}
                </span>

                <span className="text-blue-600 font-bold">
                  ₹{place.price}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default NearbyPlaces;