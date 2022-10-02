import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchCurrentTV } from "../../apis/tv-api";
import { GetTVs } from "../../interface/tv-interface";
import MovieAndTV from "../MovieAndTV";
import { TotalContainer } from "../sharedStyled";

interface NowPlayingTVsProps {
  page: number;
}

const NowPlayingTVs: React.FC<NowPlayingTVsProps> = ({ page }) => {
  const { data: nowPlayingTVData, refetch } = useQuery<GetTVs>(
    ["nowPlayingTV"],
    () => fetchCurrentTV({ page }),
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
      {nowPlayingTVData?.results.map((tv) => (
        <MovieAndTV key={tv.id} tv={tv} />
      ))}
    </TotalContainer>
  );
};

export default NowPlayingTVs;
