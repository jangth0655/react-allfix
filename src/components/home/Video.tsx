import styled from 'styled-components';

interface Props {
  url?: string;
}

const HomeVideo = ({ url }: Props) => {
  return (
    <Video loop={true} autoPlay muted={true}>
      <source src={url} type='video/mp4' />
    </Video>
  );
};
export default HomeVideo;

const Video = styled.video`
  width: 100%;
  object-fit: cover;
`;
