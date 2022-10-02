import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchPopularTV } from "../../apis/tv-api";
import { GetTVs } from "../../interface/tv-interface";
import MovieAndTV from "../MovieAndTV";
import { TotalContainer } from "../sharedStyled";

interface PopularTVsProps {
  page: number;
}

const PopularTVs: React.FC<PopularTVsProps> = ({ page }) => {
  const { data: popularTVData, refetch } = useQuery<GetTVs>(
    ["popularTV"],
    () => fetchPopularTV({ page }),
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
      {popularTVData?.results.map((tv) => (
        <MovieAndTV key={tv.id} tv={tv} />
      ))}
    </TotalContainer>
  );
};

export default PopularTVs;
