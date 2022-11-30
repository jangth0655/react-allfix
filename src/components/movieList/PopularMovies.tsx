import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { fetchPopularMovie } from '../../apis/movie-api';
import { GetMovies } from '../../model/interface/movie-interface';
import { pageNumbers } from '../../routes/movie/Movies';
import MovieAndTV from '../MovieAndTV';
import PageNumber from '../PageNumber';
import Pagination from '../Pagination';
import { MoreButtonContainer, TotalContainer } from '../sharedStyled';

const PopularMovies: React.FC = () => {
  const [page, setPage] = useState(1);
  const {
    data: popularMovies,
    refetch,
    isLoading,
  } = useQuery<GetMovies>(
    ['popularMovies'],
    () => fetchPopularMovie({ page }),
    {
      staleTime: 60 * 60 * 24 * 7,
      suspense: true,
    }
  );

  useEffect(() => {
    if (!!page) {
      refetch();
    }
  }, [page, refetch]);

  return (
    <>
      <TotalContainer>
        {popularMovies?.results?.map((movie) => (
          <MovieAndTV key={movie.id} movie={movie} />
        ))}
      </TotalContainer>
      {!isLoading && (
        <MoreButtonContainer>
          <Pagination />
        </MoreButtonContainer>
      )}
    </>
  );
};

export default PopularMovies;
