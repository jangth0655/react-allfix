import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MovieDetail from "./movie/MovieDetail";
import Movies from "./movie/Movies";
import Search from "./Search";
import TVDetail from "./tv/TVDetail";
import TVs from "./tv/TVs";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route path=":id" element={<MovieDetail />} />
        </Route>
        <Route path="tvs" element={<TVs />}>
          <Route path=":id" element={<TVDetail />} />
        </Route>
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
