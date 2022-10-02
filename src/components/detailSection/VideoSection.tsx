import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchMovieVideos } from "../../apis/movie-api";
import { fetchTVVideos } from "../../apis/tv-api";

import { GetVideos } from "../../interface/shared-interface";
import VideoComp from "../detailComponent/VideoComp";

interface VideoSectionProps {
  movieId?: number;
  tvId?: number;
}

const VideoSection: React.FC<VideoSectionProps> = ({ movieId, tvId }) => {
  const { data: movieVideo } = useQuery<GetVideos>(
    ["movieVideo", movieId],
    () => fetchMovieVideos(movieId && movieId),
    { staleTime: 60 * 60 * 24 * 7, suspense: true, enabled: !!movieId }
  );

  const { data: tvVideo } = useQuery<GetVideos>(
    ["tvVideo", tvId],
    () => fetchTVVideos({ id: tvId }),
    { staleTime: 60 * 60 * 24 * 7, suspense: true, enabled: !!tvId }
  );

  return (
    <>
      {movieId ? (
        movieVideo && <VideoComp videoArray={movieVideo?.results} />
      ) : (
        <VideoComp videoArray={tvVideo?.results} />
      )}
    </>
  );
};

export default VideoSection;
