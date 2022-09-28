import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.mp.xxxxl};
  @media screen and (min-width: ${(props) => props.theme.responsive.lg}) {
    flex-direction: row;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${(props) => props.theme.responsive.lg}) {
    width: 50%;
    margin-right: ${(props) => props.theme.mp.xxxl};
  }
`;

const Title = styled.span`
  font-size: ${(props) => props.theme.textSize.xxxl};
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.mp.lg};
  text-align: center;
`;

const SubTitle = styled.span`
  display: inline-block;
  text-align: center;
  color: ${(props) => props.theme.color.textColor.xs};
  font-size: ${(props) => props.theme.textSize.lg};
`;

const ImageBox = styled.div`
  position: relative;
  width: 30rem;
  height: 28rem;
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    width: 22rem;
    height: 20rem;
    padding: 0 ${(props) => props.theme.mp.xs};
  }
`;
const Image = styled.div<{ url: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.url});
`;

const VideoBox = styled.div`
  position: absolute;
  top: 46%;
  left: 50%;
  max-width: 73%;
  max-height: 54%;
  height: 100%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: -1;
`;

const SecondVideoBox = styled.div`
  position: absolute;
  top: 34%;
  left: 50%;
  max-width: 63%;
  max-height: 47%;
  height: 100%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: -1;
  border: 1px solid white;
`;

const Video = styled.video`
  width: 100%;
  object-fit: cover;
`;

interface SectionTemProps {
  title: string;
  subTitle: string;
  url: string;
  videoUrl?: string;
  secondVideo?: boolean;
}

const SectionTem: React.FC<SectionTemProps> = ({
  title,
  subTitle,
  url,
  videoUrl,
  secondVideo,
}) => {
  return (
    <Section>
      <TitleBox>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TitleBox>
      <ImageBox>
        <Image url={url}>
          {secondVideo ? (
            <SecondVideoBox>
              <Video loop={true} autoPlay muted={true}>
                <source src={videoUrl} type="video/mp4" />
              </Video>
            </SecondVideoBox>
          ) : (
            <VideoBox>
              <Video loop={true} autoPlay muted={true}>
                <source src={videoUrl} type="video/mp4" />
              </Video>
            </VideoBox>
          )}
        </Image>
      </ImageBox>
    </Section>
  );
};
export default SectionTem;
