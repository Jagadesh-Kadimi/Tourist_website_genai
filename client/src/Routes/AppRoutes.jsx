import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Search from "../Pages/Search/search";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default AppRoutes;