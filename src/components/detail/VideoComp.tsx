import React from 'react';
import styled from 'styled-components';
import { Video } from '../../model/interface/shared-interface';
import { videoUrl } from '../../utils/videoUrl';
import NoImageWithVideo from '../NoImageWithVideo';

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

interface VideoCompProps {
  videoArray?: Video[];
}

const VideoComp: React.FC<VideoCompProps> = ({ videoArray }) => {
  return videoArray ? (
    <Container>
      {videoArray?.slice(0, 3).map((video) => (
        <VideoContainer key={video.id}>
          <VideoPlayerBox>
            <VideoPlay src={videoUrl(video.key)} width='100%' height='100%' />
          </VideoPlayerBox>
          <VideoTitle>{video.name}</VideoTitle>
        </VideoContainer>
      ))}
    </Container>
  ) : (
    <NoVideoContainer>
      <NoImageWithVideo text='영상이 없습니다.' />
    </NoVideoContainer>
  );
};
export default VideoComp;
