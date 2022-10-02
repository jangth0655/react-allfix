import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { fetchUpcomingMovie } from "../../apis/movie-api";
import { GetMovies } from "../../interface/movie-interface";

import MovieAndTV from "../MovieAndTV";
import { TotalContainer } from "../sharedStyled";

interface UpComingMoviesProps {
  page: number;
}

const UpcomingMovies: React.FC<UpComingMoviesProps> = ({ page }) => {
  const { data: upcomingMovies, refetch } = useQuery<GetMovies>(
    ["upcoming"],
    () => fetchUpcomingMovie(page),
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
      {upcomingMovies?.results.map((movie) => (
        <MovieAndTV key={movie.id} movie={movie} />
      ))}
    </TotalContainer>
  );
};
export default UpcomingMovies;
