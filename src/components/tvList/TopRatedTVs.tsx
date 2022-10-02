import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchTopRatedTV } from "../../apis/tv-api";
import { GetTVs } from "../../interface/tv-interface";
import MovieAndTV from "../MovieAndTV";
import { TotalContainer } from "../sharedStyled";

interface TopRatedTVsProps {
  page: number;
}

const TopRatedTVs: React.FC<TopRatedTVsProps> = ({ page }) => {
  const { data: topRatedTVData, refetch } = useQuery<GetTVs>(
    ["topRatedTV"],
    () => fetchTopRatedTV({ page }),
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
      {topRatedTVData?.results.map((tv) => (
        <MovieAndTV key={tv.id} tv={tv} />
      ))}
    </TotalContainer>
  );
};

export default TopRatedTVs;
