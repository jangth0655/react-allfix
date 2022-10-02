import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchMovieDetail, fetchMovieKeywords } from "../../apis/movie-api";
import { fetchTVDetail, fetchTVKeywords } from "../../apis/tv-api";
import { IMovieDetail, GetMovieKeyword } from "../../interface/movie-interface";
import { GetTVKeyword, ITVDetail } from "../../interface/tv-interface";
import InfoComp from "../detailComponent/InfoComp";

interface InfoSectionProps {
  movieId?: number;
  tvId?: number;
}

const InfoSection: React.FC<InfoSectionProps> = ({ movieId, tvId }) => {
  const { data: movieDetailData } = useQuery<IMovieDetail>(
    ["movieDetail", movieId],
    () => fetchMovieDetail(movieId && movieId),
    { staleTime: 60 * 60 * 24 * 7, suspense: true, enabled: !!movieId }
  );
  const { data: movieKeywordData } = useQuery<GetMovieKeyword>(
    ["movieKeyword", movieId],
    () => fetchMovieKeywords(movieId && movieId),
    { staleTime: 60 * 60 * 24 * 7, suspense: true, enabled: !!movieId }
  );

  const { data: tvDetailData } = useQuery<ITVDetail>(
    ["tvDetail", tvId],
    () => fetchTVDetail({ id: tvId }),
    { staleTime: 60 * 60 * 24 * 7, suspense: true, enabled: !!tvId }
  );

  const { data: tvKeywordData } = useQuery<GetTVKeyword>(
    ["tvKeyword", tvId],
    () => fetchTVKeywords({ id: tvId }),
    { staleTime: 60 * 60 * 24 * 7, suspense: true, enabled: !!tvId }
  );

  return (
    <>
      {movieId
        ? movieDetailData && (
            <InfoComp
              poster_path={movieDetailData?.poster_path}
              title={movieDetailData?.title}
              release_date={movieDetailData?.release_date}
              overview={movieDetailData?.overview}
              vote_average={movieDetailData?.vote_average}
              genres={movieDetailData?.genres}
              movieKeywords={movieKeywordData}
            />
          )
        : tvDetailData && (
            <InfoComp
              poster_path={tvDetailData?.poster_path}
              overview={tvDetailData?.overview}
              vote_average={tvDetailData?.vote_average}
              genres={tvDetailData?.genres}
              tvKeywords={tvKeywordData}
              first_air_date={tvDetailData.first_air_date}
              name={tvDetailData?.name}
            />
          )}
    </>
  );
};
export default InfoSection;
