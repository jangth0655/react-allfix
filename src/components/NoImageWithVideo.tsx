import styled from 'styled-components';

const NoItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.bg.full};
  color: ${(props) => props.theme.color.textColor.xs};
  font-size: ${(props) => props.theme.textSize.xl};
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface NoImageWithVideoProps {
  text?: string;
}

const NoImageWithVideo: React.FC<NoImageWithVideoProps> = ({ text }) => {
  return (
    <NoItem>
      <span>{text}</span>
    </NoItem>
  );
};
export default NoImageWithVideo;
