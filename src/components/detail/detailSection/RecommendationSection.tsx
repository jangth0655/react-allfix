import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRef } from 'react';
import { GetMovies } from '../../../model/interface/movie-interface';
import { fetchTVRecommendation } from '../../../apis/tv-api';
import { fetchMovieRecommendation } from '../../../apis/movie-api';
import RecommendationComp from '../RecommendationComp';
import { GetTVs } from '../../../model/interface/tv-interface';

const SliderContainer = styled.div`
  width: 100%;
  position: relative;
`;

const SliderBox = styled.div`
  width: 100%;
  height: 25rem;
  display: flex;
  overflow-x: scroll;
  padding: 0 ${(props) => props.theme.mp.xl};
  padding-bottom: ${(props) => props.theme.mp.lg};
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

const Direction = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1.5rem;
  height: 1.5rem;
  margin: auto;
  background-color: ${(props) => props.theme.color.textColor.sm};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 100;
  cursor: pointer;
  transition: ${(props) => props.theme.transition.lg};
  &:hover {
    background-color: ${(props) => props.theme.color.bg.xl};
  }
`;

const Left = styled(Direction)`
  left: 0;
`;

const Right = styled(Direction)`
  right: 0;
`;

interface RecommendationSectionProps {
  movieId?: number;
  tvId?: number;
}

const RecommendationSection: React.FC<RecommendationSectionProps> = ({
  movieId,
  tvId,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const { data: movieRecommendationData } = useQuery<GetMovies>(
    ['movieRecommendation', movieId],
    () => fetchMovieRecommendation(movieId),
    { staleTime: 60 * 60 * 24 * 7, suspense: true, enabled: !!movieId }
  );

  const { data: tvRecommendationData } = useQuery<GetTVs>(
    ['tvRecommendation', tvId],
    () => fetchTVRecommendation({ id: tvId }),
    { staleTime: 60 * 60 * 24 * 7, suspense: true, enabled: !!tvId }
  );

  const onHandleRightDirection = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    } else {
      return;
    }
  };

  const onHandleLeftDirection = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    } else {
      return;
    }
  };

  return (
    <SliderContainer>
      <Left onClick={onHandleLeftDirection}>
        <FaArrowLeft />
      </Left>
      <Right onClick={onHandleRightDirection}>
        <FaArrowRight />
      </Right>
      <SliderBox ref={sliderRef}>
        <>
          {movieId
            ? movieRecommendationData &&
              movieRecommendationData?.results.map((movie) => (
                <RecommendationComp
                  key={movie.id}
                  backdrop_path={movie.backdrop_path}
                  id={movie.id}
                  poster_path={movie.poster_path}
                  title={movie.title}
                />
              ))
            : tvRecommendationData &&
              tvRecommendationData.results.map((tv) => (
                <RecommendationComp
                  key={tv.id}
                  backdrop_path={tv.backdrop_path}
                  id={tv.id}
                  poster_path={tv.poster_path}
                  name={tv.name}
                />
              ))}
        </>
      </SliderBox>
    </SliderContainer>
  );
};
export default RecommendationSection;
