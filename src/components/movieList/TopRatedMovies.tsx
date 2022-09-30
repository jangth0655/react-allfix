import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchTopRatedMovie } from "../../apis/movie/movie-api";
import { GetMovies } from "../../interface";
import MovieAndTV from "../MovieAndTV";
import { TotalContainer } from "../sharedStyled";

interface TopRatedMoviesProps {
  page: number;
}

const TopRatedMovies: React.FC<TopRatedMoviesProps> = ({ page }) => {
  const { data: topRatedMovies, refetch } = useQuery<GetMovies>(
    ["topRated"],
    () => fetchTopRatedMovie(page),
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
      {topRatedMovies?.results.map((movie) => (
        <MovieAndTV key={movie.id} movie={movie} />
      ))}
    </TotalContainer>
  );
};

export default TopRatedMovies;
