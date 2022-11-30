import { useLocation } from 'react-router-dom';
import { movie } from '../utils/category';

export const useCategory = () => {
  const { pathname } = useLocation();

  const currentPathname = pathname.split('/')[1];

  const categories = currentPathname === 'movies' ? movie.Categories : [];

  return {
    categories,
  };
};
