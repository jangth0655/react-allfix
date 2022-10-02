import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchTVSearch } from "../../apis/tv-api";
import { GetTVs } from "../../interface/tv-interface";
import MovieAndTV from "../MovieAndTV";
import { TotalContainer } from "../sharedStyled";

interface TVSearchProps {
  keyword: string;
}

const TVSearch: React.FC<TVSearchProps> = ({ keyword }) => {
  const { data: tvSearchData, refetch } = useQuery<GetTVs>(
    ["tvSearch"],
    () => fetchTVSearch({ keyword }),
    { enabled: !!keyword, suspense: true }
  );

  useEffect(() => {
    if (!!keyword) {
      refetch();
    }
  }, [keyword, refetch]);

  return (
    <TotalContainer>
      {tvSearchData?.results.map((tv) => (
        <MovieAndTV key={tv.id} tv={tv} />
      ))}
    </TotalContainer>
  );
};
export default TVSearch;
