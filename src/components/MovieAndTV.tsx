import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Movie } from '../model/interface/movie-interface';
import { TV } from '../model/interface/tv-interface';

import ImageUrl from '../utils/imageUrl';
import NoImageWithVideo from './NoImageWithVideo';

const Container = styled.div`
  transition: ${(props) => props.theme.transition.md};
  &:hover {
    transform: translateY(-10px);
  }
`;

const PosterBox = styled.div`
  cursor: pointer;
  width: 100%;
  height: 22rem;
  border-radius: ${(props) => props.theme.borderRadius.md};
  margin-bottom: ${(props) => props.theme.mp.md};
  position: relative;
  @media screen and (max-width: ${(props) => props.theme.responsive.lg}) {
    height: 18rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    height: 15rem;
  }
`;

const LayerBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
`;

const PosterLayer = styled.div`
  background-color: black;
  opacity: 0.7;
  width: 100%;
  height: 100%;
`;

const DetailButton = styled.button`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 10px;
  width: 5rem;
  background-color: ${(props) => props.theme.color.activeColor.sm};
  color: white;
  border-radius: ${(props) => props.theme.borderRadius.md};
  cursor: pointer;
  padding: ${(props) => props.theme.mp.sm} ${(props) => props.theme.mp.md};
  transition: ${(props) => props.theme.transition.md};
  &:hover {
    background-color: ${(props) => props.theme.color.activeColor.lg};
  }
`;

const Poster = styled.div<{ poster?: string }>`
  border-radius: ${(props) => props.theme.borderRadius.md};
  background-image: url(${(props) => props.poster});
  object-fit: cover;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-weight: 700;
`;

const OpeningDate = styled.span`
  font-size: ${(props) => props.theme.textSize.sm};
  color: ${(props) => props.theme.color.textColor.xs};
  margin: ${(props) => props.theme.mp.xs} 0;
`;

const Rate = styled.span``;

const NoImageContainer = styled.div`
  width: 100%;
  height: 22rem;
`;

interface MovieAndTVProps {
  movie?: Movie;
  tv?: TV;
}

const MovieAndTV: React.FC<MovieAndTVProps> = ({ movie, tv }) => {
  const [showingLayer, setShowingLayer] = useState(false);
  const navigate = useNavigate();

  const onMovieDetail = (id: number) => {
    navigate(`/movies/${id}`, {
      state: {
        backdrop_path: movie?.backdrop_path ? movie?.backdrop_path : '',
        id: movie?.id,
      },
    });
  };

  const onTVDetail = (id: number) => {
    navigate(`/tvs/${id}`, {
      state: {
        backdrop_path: tv?.backdrop_path ? tv?.backdrop_path : '',
        id: tv?.id,
      },
    });
  };

  const mouseHover = () => {
    setShowingLayer(true);
  };

  const errorText = !movie?.poster_path ? ImageUrl(movie?.poster_path) : '';

  return (
    <Container>
      {movie && (
        <>
          {movie?.poster_path ? (
            <PosterBox
              onMouseOver={mouseHover}
              onMouseLeave={() => setShowingLayer(false)}
              onClick={() => onMovieDetail(movie.id)}
            >
              {showingLayer && (
                <LayerBox>
                  <PosterLayer />
                  <DetailButton onClick={() => onMovieDetail(movie.id)}>
                    상세보기
                  </DetailButton>
                </LayerBox>
              )}
              <Poster
                poster={ImageUrl(
                  movie?.poster_path ? movie?.poster_path : '이미지가 없습니다.'
                )}
              />
            </PosterBox>
          ) : (
            <NoImageContainer>
              <NoImageWithVideo text={errorText} />
            </NoImageContainer>
          )}
          <InfoBox>
            <Title>{movie?.title}</Title>
            <OpeningDate>{movie?.release_date}</OpeningDate>
            <Rate>{`⭐️ ${movie?.vote_average}`}</Rate>
          </InfoBox>
        </>
      )}

      {tv && (
        <>
          {tv?.poster_path ? (
            <PosterBox
              onMouseOver={mouseHover}
              onMouseLeave={() => setShowingLayer(false)}
              onClick={() => onTVDetail(tv?.id)}
            >
              {showingLayer && (
                <LayerBox>
                  <PosterLayer />
                  <DetailButton onClick={() => onTVDetail(tv?.id)}>
                    상세보기
                  </DetailButton>
                </LayerBox>
              )}
              <Poster
                poster={ImageUrl(
                  tv?.poster_path ? tv?.poster_path : '이미지가 없습니다.'
                )}
              />
            </PosterBox>
          ) : (
            <NoImageContainer>
              <NoImageWithVideo text={errorText} />
            </NoImageContainer>
          )}
          <InfoBox>
            <Title>{tv?.name}</Title>
            <OpeningDate>{tv?.first_air_date}</OpeningDate>
            <Rate>{`⭐️ ${tv?.vote_average}`}</Rate>
          </InfoBox>
        </>
      )}
    </Container>
  );
};
export default MovieAndTV;
