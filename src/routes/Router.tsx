import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import MovieDetail from './movie/MovieDetail';
import Movies from './movie/Movies';
import Search from './Search';
import TVDetail from './tv/TVDetail';
import TVs from './tv/TVs';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<Movies />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path='tv' element={<TVs />} />
        <Route path='/tv/:id' element={<TVDetail />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
