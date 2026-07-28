import SearchHero from "../../Component/search/SearchHero";
import SearchFilter from "../../Component/search/SearchFilter";
import SearchResult from "../../Component/search/SearchResult";

import {useState} from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category , setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");
  const [sortBy, setSortBy] = useState("");

  return (
    <main className="bg-gray-100 min-h-screen">
      <SearchHero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <SearchFilter 
      category={category}
      setCategory={setCategory}
      location = {location}
      setLocation = {setLocation} 
      rating ={rating} 
      setRating = {setRating}
      sortBy = {sortBy}
      setSortBy = {setSortBy}
      />

      <SearchResult
        searchTerm={searchTerm}
        category={category}
        location ={location}
        rating ={rating}
        sortBy = {sortBy}
      />
    </main>
  );
}




export default Search;