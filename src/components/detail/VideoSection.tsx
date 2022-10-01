import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { fetchVideos } from "../../apis/movie-api";
import { GetVideos } from "../../interface";
import { videoUrl } from "../../libs/videoUrl";
import NoImageWithVideo from "../NoImageWithVideo";

const VideoBox = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: ${(props) => props.theme.borderRadius.md};
  margin-bottom: ${(props) => props.theme.mp.lg};
`;
const Video = styled.iframe`
  border-radius: ${(props) => props.theme.borderRadius.md};
`;

const VideoTitle = styled.span``;

const NoVideoContainer = styled.div`
  width: 20rem;
  height: 20rem;
`;

interface VideoSectionProps {
  movieId?: number;
  tvId?: number;
}

const VideoSection: React.FC<VideoSectionProps> = ({ movieId }) => {
  const { data: movieVideo } = useQuery<GetVideos>(
    ["movieVideo", movieId],
    () => fetchVideos(movieId && movieId),
    { staleTime: 60 * 60 * 24 * 7, suspense: true }
  );

  const errorText = !movieVideo?.results[0]?.key
    ? videoUrl(movieVideo?.results[0]?.key)
    : "";

  return movieVideo?.results[0]?.key ? (
    <>
      <VideoBox>
        <Video
          src={videoUrl(movieVideo?.results[0]?.key)}
          width="100%"
          height="100%"
        />
      </VideoBox>
      <VideoTitle>{movieVideo.results[0]?.name}</VideoTitle>
    </>
  ) : (
    <NoVideoContainer>
      <NoImageWithVideo text={errorText} />
    </NoVideoContainer>
  );
};
export default VideoSection;
