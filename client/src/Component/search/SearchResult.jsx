import DestinationCard from "./DestinationCard";
import destinations from "../../data/home/destination";

function SearchResult({
  searchTerm,
  category,
  location,
  rating,
  sortBy,
}) {
  let filteredDestinations = destinations.filter((destination) => {
    const query = searchTerm.toLowerCase();

    const matchesSearch =
      query === "" ||
      destination.name.toLowerCase().includes(query) ||
      destination.location.toLowerCase().includes(query) ||
      (destination.category &&
        destination.category.toLowerCase().includes(query)) ||
      (destination.description &&
        destination.description.toLowerCase().includes(query));

    const matchesCategory =
      category === "All" ||
      destination.category === category;

    const matchesLocation =
      location === "All" ||
      destination.location.includes(location);

    const matchesRating =
      rating === "All" ||
      destination.rating >= Number(rating);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesLocation &&
      matchesRating
    );
  });

  // Sorting
  switch (sortBy) {
    case "Rating":
      filteredDestinations.sort((a, b) => b.rating - a.rating);
      break;

    case "LowPrice":
      filteredDestinations.sort((a, b) => a.price - b.price);
      break;

    case "HighPrice":
      filteredDestinations.sort((a, b) => b.price - a.price);
      break;

    case "Name":
      filteredDestinations.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;

    default:
      break;
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-8">
          Search Results ({filteredDestinations.length})
        </h2>

        {filteredDestinations.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-700">
              No destinations found
            </h3>

            <p className="text-gray-500 mt-2">
              Try another search or filter.
            </p>
          </div>
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