import React from 'react';
import styled from 'styled-components';
import HomeVideo from './Video';

interface Props {
  title: string;
  subTitle: string;
  url: string;
  videoUrl?: string;
  secondVideo?: boolean;
  firstVideo?: boolean;
}

const SectionContainer: React.FC<Props> = ({
  title,
  subTitle,
  url,
  videoUrl,
  firstVideo,
  secondVideo,
}) => {
  return (
    <Section>
      <TitleBox>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TitleBox>
      <ImageBox>
        <Image src={url} />
        {firstVideo && (
          <FirstVideoBox>
            <HomeVideo url={videoUrl} />
          </FirstVideoBox>
        )}

        {secondVideo && (
          <SecondVideoBox>
            <HomeVideo url={videoUrl} />
          </SecondVideoBox>
        )}
      </ImageBox>
    </Section>
  );
};
export default SectionContainer;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) => props.theme.mp.xs} solid
    ${(props) => props.theme.color.textColor.sm};
  padding: ${(props) => props.theme.mp.xxxxl} 0;
  @media screen and (min-width: ${(props) => props.theme.responsive.lg}) {
    flex-direction: row;
    padding: ${(props) => props.theme.mp.xxxl};
  }
  &:last-child {
    border-bottom: 0;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: start;
  @media screen and (min-width: ${(props) => props.theme.responsive.lg}) {
    width: 40%;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.lg}) {
    width: 100%;
    text-align: center;
    padding: 0 ${(props) => props.theme.mp.xl};
  }
`;

const Title = styled.span`
  font-size: ${(props) => props.theme.textSize.xxxxl};
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.mp.lg};
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    font-size: ${(props) => props.theme.textSize.xxl};
    text-align: center;
  }
`;

const SubTitle = styled.span`
  display: inline-block;
  width: 100%;
  color: ${(props) => props.theme.color.textColor.xs};
  font-size: ${(props) => props.theme.textSize.lg};
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    font-size: ${(props) => props.theme.textSize.md};
    text-align: center;
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 40rem;
  height: auto;
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    width: 100%;
  }
`;
const Image = styled.img`
  position: relative;
  z-index: 2;
  border: 0;
  height: auto;
  max-width: 100%;
`;

const FirstVideoBox = styled.div`
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
`;
