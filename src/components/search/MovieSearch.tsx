import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { GetMovies } from '../../model/interface/movie_interface';
import MovieAndTV from '../MovieAndTV';
import { TotalContainer } from '../sharedStyled';

interface MovieSearchProps {
  keyword: string;
}

const MovieSearch: React.FC<MovieSearchProps> = ({ keyword }) => {
  return (
    <TotalContainer>
      {[].map((movie, i) => (
        <MovieAndTV key={i} />
      ))}
    </TotalContainer>
  );
};
export default MovieSearch;
