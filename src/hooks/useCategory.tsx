import { useLocation } from 'react-router-dom';
import { movie, tv } from '../utils/category';

export const useCategory = () => {
  const { pathname } = useLocation();

  const currentPathname = pathname.split('/')[1];

  const categories =
    currentPathname === 'movie' ? movie.Categories : tv.Categories;

  return {
    categories,
  };
};
