import { useQuery } from '@tanstack/react-query';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MOVIE_PAGE, QUERY_KEY } from '../model/types';
import { MovieAPI } from '../service/movie/movieAPI';
import { MovieClient } from '../service/movie/movieClient';

const movieClient = new MovieClient();
const movieAPI = new MovieAPI(movieClient);

export const useMovies = <T = any,>() => {
  const [query, _] = useSearchParams();
  const queryKey = query.get(QUERY_KEY.CURRENT);
  const page = Number(query.get(QUERY_KEY.PAGE));
  const location = useLocation();
  const moviePath = location.pathname;

  const {
    data: movies,
    isLoading,
    error,
  } = useQuery<T>(
    [queryKey, page, moviePath],
    async () =>
      await movieAPI.moviesByCategory(page || 1, queryKey || MOVIE_PAGE.POPULAR)
  );

  return {
    movies,
    isLoading,
  };
};
