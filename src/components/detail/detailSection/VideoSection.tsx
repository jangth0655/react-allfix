import React from 'react';
import styled from 'styled-components';

import { useRelatedList } from '../../../hooks/useFetchData';
import { GetVideos } from '../../../model/interface/shared_interface';
import { videoUrl } from '../../../utils/videoUrl';
import Loading from '../../Loading';
import NoImageWithVideo from '../../NoImageWithVideo';

interface VideoSectionProps {
  movieId?: number;
  tvId?: number;
}

const VideoSection: React.FC<VideoSectionProps> = () => {
  const {
    relatedList: videos,
    isLoading,
    errors,
  } = useRelatedList<GetVideos>();
  const emptyVideo = !videos || videos.results.length === 0;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      {errors ? (
        <h1>{errors}</h1>
      ) : emptyVideo ? (
        <NoVideoContainer>
          <NoImageWithVideo text='영상이 없습니다.' />
        </NoVideoContainer>
      ) : (
        videos?.results.slice(0, 4).map((video) => (
          <VideoContainer key={video.id}>
            <VideoPlayerBox>
              <VideoPlay src={videoUrl(video.key)} width='100%' height='100%' />
            </VideoPlayerBox>
            <VideoTitle>{video.name}</VideoTitle>
          </VideoContainer>
        ))
      )}
    </Container>
  );
};
export default VideoSection;

const Container = styled.div`
  padding-bottom: ${(props) => props.theme.mp.lg};
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 3px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.color.activeColor.xl};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.color.bg.xl};
    border-radius: 10px;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${(props) => props.theme.mp.xxl};
`;

const VideoPlayerBox = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: ${(props) => props.theme.borderRadius.md};
  margin-bottom: ${(props) => props.theme.mp.lg};
`;
const VideoPlay = styled.iframe`
  border-radius: ${(props) => props.theme.borderRadius.md};
`;

const VideoTitle = styled.span``;

const NoVideoContainer = styled.div`
  width: 20rem;
  height: 20rem;
`;
