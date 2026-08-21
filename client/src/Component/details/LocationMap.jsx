function LocationMap({ name, location }) {
  const mapQuery = `${name}, ${location}`;

  return (
    <section className="mt-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Location
        </h2>

        <p className="text-gray-500 mt-2">
          Find {name} on the map
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <iframe
          title={`${name} location`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            mapQuery
          )}&output=embed`}
          className="w-full h-[450px] border-0"
          loading="lazy"
        />
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 mt-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl">
          📍
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Destination Location
          </p>

          <h3 className="text-lg font-bold text-gray-800">
            {name}, {location}
          </h3>
        </div>
      </div>
    </section>
  );
}

export default LocationMap;