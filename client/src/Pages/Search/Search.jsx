import SearchHero from "../../Component/search/SearchHero";
import SearchFilter from "../../Component/search/SearchFilter";
import SearchResult from "../../Component/search/SearchResult";

import {useState} from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="bg-gray-100 min-h-screen">
      <SearchHero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <SearchFilter />

      <SearchResult
        searchTerm={searchTerm}
      />
    </main>
  );
}




export default Search;