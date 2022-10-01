import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchPopularMovie } from "../../apis/movie-api";
import { GetMovies } from "../../interface";
import MovieAndTV from "../MovieAndTV";
import { TotalContainer } from "../sharedStyled";

interface MoviesAndTVsProps {
  page: number;
}

const PopularMovies: React.FC<MoviesAndTVsProps> = ({ page }) => {
  const { data: popularMovies, refetch } = useQuery<GetMovies>(
    ["popularMovies"],
    () => fetchPopularMovie(page),
    {
      staleTime: 50000,
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
      {popularMovies?.results?.map((movie) => (
        <MovieAndTV key={movie.id} movie={movie} />
      ))}
    </TotalContainer>
  );
};

export default PopularMovies;
