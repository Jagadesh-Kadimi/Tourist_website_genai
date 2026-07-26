import DestinationCard from "./DestinationCard";
import destinations from "../../data/home/destination";

function SearchResult({ searchTerm }) {
    
  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
console.log(destinations);
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">
          Popular Destinations
        </h2>

        {filteredDestinations.length === 0 ? (
          <p className="text-center text-gray-500 text-xl">
            No destinations found.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SearchResult;