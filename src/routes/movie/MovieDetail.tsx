import React, { Suspense, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import ImageUrl from "../../libs/imageUrl";

const Background = styled.div<{ backgroundImage?: string }>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-position: center center;
  background-size: cover;
  z-index: -2;
`;
const BackgroundLayer = styled.div`
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
`;

const Container = styled.div`
  padding: 0 ${(props) => props.theme.mp.md};
  padding-top: 10rem;
  z-index: 100;
  max-width: ${(props) => props.theme.responsive.xl};
  margin: auto;
`;

const ContainerSection = styled.section`
  padding-bottom: 5rem;
  padding-top: ${(props) => props.theme.mp.xxl};
  border-bottom: 1.5px solid ${(props) => props.theme.color.textColor.sm};
  font-weight: 600;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    border-bottom: 0;
  }
`;

const SectionTitle = styled.h1`
  margin-bottom: ${(props) => props.theme.mp.xxxxl};
  font-size: ${(props) => props.theme.textSize.xxl};
  color: ${(props) => props.theme.color.activeColor.md};
`;

const InfoContainer = styled(ContainerSection)`
  display: flex;
  @media screen and (max-width: ${(props) => props.theme.responsive.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const VideoContainer = styled(ContainerSection)``;

const CastContainer = styled(ContainerSection)``;

const ReviewContainer = styled(ContainerSection)``;

const RecommendationContainer = styled(ContainerSection)``;

interface LocationState {
  backdrop_path?: string;
  id: number;
}

const MovieDetail = () => {
  const { backdrop_path, id: movieId } = useLocation().state as LocationState;
  const startRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    startRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);

  const InfoSectionComponent = React.lazy(
    () => import("../../components/detail/InfoSection")
  );

  const VideoSectionComponent = React.lazy(
    () => import("../../components/detail/VideoSection")
  );

  const CastSectionComponent = React.lazy(
    () => import("../../components/detail/CastSection")
  );

  const ReviewSectionComponent = React.lazy(
    () => import("../../components/detail/ReviewSection")
  );

  const RecommendationComponent = React.lazy(
    () => import("../../components/detail/RecommendationSection")
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout isMainPaddingTop={false} isMainMaxWidth={false}>
      {backdrop_path && (
        <Background
          backgroundImage={ImageUrl(backdrop_path ? backdrop_path : "")}
        />
      )}
      <BackgroundLayer />
      <Container ref={startRef}>
        <InfoContainer>
          <Suspense fallback={<Loading />}>
            <InfoSectionComponent movieId={movieId} />
          </Suspense>
        </InfoContainer>
        <VideoContainer>
          <SectionTitle>트레일러</SectionTitle>
          <Suspense fallback={<Loading />}>
            <VideoSectionComponent movieId={movieId} />
          </Suspense>
        </VideoContainer>
        <CastContainer>
          <SectionTitle>배우</SectionTitle>
          <Suspense fallback={<Loading />}>
            <CastSectionComponent movieId={movieId} />
          </Suspense>
        </CastContainer>
        <ReviewContainer>
          <SectionTitle>리뷰</SectionTitle>
          <Suspense fallback={<Loading />}>
            <ReviewSectionComponent movieId={movieId} />
          </Suspense>
        </ReviewContainer>
        <RecommendationContainer>
          <SectionTitle>추천 영화</SectionTitle>
          <Suspense fallback={<Loading />}>
            <RecommendationComponent movieId={movieId} />
          </Suspense>
        </RecommendationContainer>
      </Container>
    </Layout>
  );
};
export default MovieDetail;
