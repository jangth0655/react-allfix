import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Notfound from '../components/Notfound';
import Home from './Home';
import MovieDetail from './movie/MovieDetail';
import Movies from './movie/Movies';
import Search from './Search';
import TVDetail from './tv/TVDetail';
import TVs from './tv/TVs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/movie',
        element: <Movies />,
      },
      {
        path: 'movie/:id',
        element: <MovieDetail />,
      },
      {
        path: 'tv',
        element: <TVs />,
      },
      {
        path: 'tv/:id',
        element: <TVDetail />,
      },
      {
        path: '/search',
        element: <Search />,
      },
    ],
    errorElement: <Notfound />,
  },
]);

export default router;
