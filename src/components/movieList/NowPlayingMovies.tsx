import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { fetchNowPlayingMovie } from '../../apis/movie-api';
import { GetMovies } from '../../model/interface/movie-interface';
import { pageNumbers } from '../../routes/movie/Movies';

import MovieAndTV from '../MovieAndTV';
import PageNumber from '../PageNumber';
import { MoreButtonContainer, TotalContainer } from '../sharedStyled';

const NowPlayingMovies: React.FC = () => {
  const [page, setPage] = useState(1);
  const {
    data: nowPlayingMovies,
    refetch,
    isLoading,
  } = useQuery<GetMovies>(['nowPlaying'], () => fetchNowPlayingMovie(page), {
    staleTime: 60 * 60 * 24 * 7,
    suspense: true,
  });

  useEffect(() => {
    if (!!page) {
      refetch();
    }
  }, [page, refetch]);
  return (
    <>
      <TotalContainer>
        {nowPlayingMovies?.results.map((movie) => (
          <MovieAndTV key={movie.id} movie={movie} />
        ))}
      </TotalContainer>
      {!isLoading && (
        <MoreButtonContainer>
          <PageNumber setPage={setPage} page={page} pageNumbers={pageNumbers} />
        </MoreButtonContainer>
      )}
    </>
  );
};

export default NowPlayingMovies;
