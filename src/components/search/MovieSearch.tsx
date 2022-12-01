import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { fetchMovieSearch } from '../../apis/movie-api';
import { GetMovies } from '../../model/interface/movie_interface';
import MovieAndTV from '../MovieAndTV';
import { TotalContainer } from '../sharedStyled';

interface MovieSearchProps {
  keyword: string;
}

const MovieSearch: React.FC<MovieSearchProps> = ({ keyword }) => {
  const { data: movieSearchData, refetch } = useQuery<GetMovies>(
    ['movieSearch'],
    () => fetchMovieSearch({ keyword }),
    { enabled: !!keyword, suspense: true }
  );

  useEffect(() => {
    if (!!keyword) {
      refetch();
    }
  }, [keyword, refetch]);

  return (
    <TotalContainer>
      {movieSearchData?.results.map((movie) => (
        <MovieAndTV key={movie.id} movie={movie} />
      ))}
    </TotalContainer>
  );
};
export default MovieSearch;
