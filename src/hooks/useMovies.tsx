import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { MOVIE_PAGE, QUERY_KEY } from '../model/types';
import { MovieAPI } from '../service/movie/movieAPI';
import { MovieClient } from '../service/movie/movieClient';

const movieClient = new MovieClient();
const movieAPI = new MovieAPI(movieClient);

export const useMovies = <T = any,>() => {
  const [query, _] = useSearchParams();
  const queryKey = query.get(QUERY_KEY.CURRENT);
  const page = Number(query.get(QUERY_KEY.PAGE));
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery<T>(
    [queryKey, page],
    async () =>
      await movieAPI.moviesByCategory(
        page ? page : 1,
        queryKey ? queryKey : MOVIE_PAGE.POPULAR
      )
  );

  console.log(error);

  return {
    movies,
    isLoading,
  };
};
