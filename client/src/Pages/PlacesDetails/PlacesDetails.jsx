import { useParams, Link } from "react-router-dom";
import destinations from "../../data/home/destination";

function PlacesDetails() {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return (
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Destination Not Found
        </h1>

        <p className="text-gray-500 mt-3">
          The destination you are looking for does not exist.
        </p>

        <Link
          to="/search"
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
        >
          ← Back to Search
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">

      {/* Hero */}
      <section className="relative h-[500px]">

        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 pb-12 text-white">

            <p className="text-lg">
              📍 {destination.location}
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mt-3">
              {destination.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-5">

              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
                ⭐ {destination.rating}
              </span>

              <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                {destination.category || "Travel Destination"}
              </span>

              <span className="text-xl font-bold">
                ₹{destination.price}
              </span>

            </div>

          </div>
        </div>

      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        {/* About + Price */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* About */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8">

            <h2 className="text-3xl font-bold text-gray-800">
              About {destination.name}
            </h2>

            <p className="text-gray-600 leading-7 mt-5">
              {destination.description ||
                "Explore this beautiful destination and discover its culture, attractions and experiences."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

              <div className="bg-blue-50 rounded-xl p-5">
                <p className="text-gray-500 text-sm">
                  Location
                </p>

                <p className="font-bold text-gray-800 mt-2">
                  📍 {destination.location}
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-5">
                <p className="text-gray-500 text-sm">
                  Rating
                </p>

                <p className="font-bold text-gray-800 mt-2">
                  ⭐ {destination.rating}
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-5">
                <p className="text-gray-500 text-sm">
                  Category
                </p>

                <p className="font-bold text-gray-800 mt-2">
                  {destination.category || "Tourism"}
                </p>
              </div>

            </div>

          </div>

          {/* Price Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 h-fit">

            <p className="text-gray-500">
              Estimated Trip Price
            </p>

            <p className="text-4xl font-bold text-blue-600 mt-2">
              ₹{destination.price}
            </p>

            <p className="text-gray-500 mt-2">
              Starting price
            </p>

            <button className="w-full mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-xl transition">
              Plan My Trip
            </button>

            <Link
              to="/search"
              className="block text-center mt-4 text-blue-600 font-semibold hover:text-blue-800"
            >
              ← Back to Search
            </Link>

          </div>

        </div>

        {/* Top Attractions */}
        <section className="mt-12">

          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Top Attractions
          </h2>

          {destination.attractions &&
          destination.attractions.length > 0 ? (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {destination.attractions.map((attraction, index) => (

                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
                >

                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    📍
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mt-4">
                    {attraction}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2">
                    Explore this popular attraction in{" "}
                    {destination.name}.
                  </p>

                </div>

              ))}

            </div>

          ) : (

            <div className="bg-white rounded-2xl p-8 text-gray-500">
              Attractions information coming soon.
            </div>

          )}

        </section>
        {/* Travel Information */}

<section className="mt-12">

  <h2 className="text-3xl font-bold text-gray-800 mb-6">
    Travel Information
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Best Time */}
    <div className="bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition">

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
          📅
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Best Time to Visit
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-1">
            {destination.bestTime || "Available throughout the year"}
          </h3>
        </div>

      </div>

    </div>

    {/* Duration */}
    <div className="bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition">

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-2xl">
          ⏱️
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Recommended Duration
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-1">
            {destination.duration || "2 - 3 Days"}
          </h3>
        </div>

      </div>

    </div>

  </div>

</section>
{/* Famous Food */}

<section className="mt-12">

  <h2 className="text-3xl font-bold text-gray-800 mb-6">
    Famous Local Food
  </h2>

  {destination.famousFood &&
  destination.famousFood.length > 0 ? (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {destination.famousFood.map((food, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
        >

          <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
            🍴
          </div>

          <h3 className="text-lg font-bold text-gray-800 mt-4">
            {food}
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Popular local food to try in {destination.name}.
          </p>

        </div>

      ))}

    </div>

  ) : (

    <div className="bg-white rounded-2xl p-8 text-gray-500">
      Food information coming soon.
    </div>

  )}

</section>

      </section>

    </main>
  );
}

export default PlacesDetails;