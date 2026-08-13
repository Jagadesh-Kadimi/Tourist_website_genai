import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Search from "../Pages/Search/search";
import PlacesDetails  from "../Pages/PlacesDetails/PlacesDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/destination/:id" element={<PlacesDetails/>}/>
      
    </Routes>
  );
}

export default AppRoutes;