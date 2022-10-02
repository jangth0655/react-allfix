import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { fetchNowPlayingMovie } from "../../apis/movie-api";
import { GetMovies } from "../../interface/movie-interface";

import MovieAndTV from "../MovieAndTV";
import { TotalContainer } from "../sharedStyled";

interface NowPlayingMoviesProps {
  page: number;
}

const NowPlayingMovies: React.FC<NowPlayingMoviesProps> = ({ page }) => {
  const { data: nowPlayingMovies, refetch } = useQuery<GetMovies>(
    ["nowPlaying"],
    () => fetchNowPlayingMovie(page),
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
    <TotalContainer>
      {nowPlayingMovies?.results.map((movie) => (
        <MovieAndTV key={movie.id} movie={movie} />
      ))}
    </TotalContainer>
  );
};

export default NowPlayingMovies;
