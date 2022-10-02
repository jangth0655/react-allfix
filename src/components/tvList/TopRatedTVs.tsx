import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchTopRatedTV } from "../../apis/tv-api";
import { GetTVs } from "../../interface/tv-interface";
import { pageNumbers } from "../../routes/movie/Movies";
import MovieAndTV from "../MovieAndTV";
import PageNumber from "../PageNumber";
import { MoreButtonContainer, TotalContainer } from "../sharedStyled";

const TopRatedTVs: React.FC = () => {
  const [page, setPage] = useState(1);
  const {
    data: topRatedTVData,
    refetch,
    isLoading,
  } = useQuery<GetTVs>(["topRatedTV"], () => fetchTopRatedTV({ page }), {
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
        {topRatedTVData?.results.map((tv) => (
          <MovieAndTV key={tv.id} tv={tv} />
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

export default TopRatedTVs;
