import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchPopularMovie } from "../../apis/movie-api";
import { GetMovies } from "../../interface/movie-interface";
import { pageNumbers } from "../../routes/movie/Movies";
import MovieAndTV from "../MovieAndTV";
import PageNumber from "../PageNumber";
import { MoreButtonContainer, TotalContainer } from "../sharedStyled";

const PopularMovies: React.FC = () => {
  const [page, setPage] = useState(1);
  const {
    data: popularMovies,
    refetch,
    isLoading,
  } = useQuery<GetMovies>(
    ["popularMovies"],
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
          <PageNumber setPage={setPage} page={page} pageNumbers={pageNumbers} />
        </MoreButtonContainer>
      )}
    </>
  );
};

export default PopularMovies;
