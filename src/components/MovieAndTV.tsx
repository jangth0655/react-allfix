import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { MovieWithTVResult } from '../model/interface/shared_interface';
import { TV } from '../model/interface/tv_interface';

import ImageUrl from '../utils/imageUrl';
import NoImageWithVideo from './NoImageWithVideo';

interface MovieAndTVProps {
  result?: MovieWithTVResult;
  tv?: TV;
}

const MovieAndTV: React.FC<MovieAndTVProps> = ({ result, tv }) => {
  const [showingLayer, setShowingLayer] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onDetail = (id: number) => {
    navigate(`${pathname}/${id}`, {});
  };

  const mouseHover = () => {
    setShowingLayer(true);
  };

  return (
    <Container>
      {result && (
        <>
          {result?.poster_path ? (
            <PosterBox
              onMouseOver={mouseHover}
              onMouseLeave={() => setShowingLayer(false)}
              onClick={() => onDetail(result.id)}
            >
              {showingLayer && (
                <LayerBox>
                  <PosterLayer />
                  <DetailButton onClick={() => onDetail(result.id)}>
                    상세보기
                  </DetailButton>
                </LayerBox>
              )}
              <Poster
                poster={ImageUrl(result?.poster_path || '이미지가 없습니다.')}
              />
            </PosterBox>
          ) : (
            <NoImageContainer>
              <NoImageWithVideo text='이미지가 없습니다.' />
            </NoImageContainer>
          )}
          <InfoBox>
            <Title>{result?.title || result?.name}</Title>
            <OpeningDate>
              {result?.release_date || result?.first_air_date}
            </OpeningDate>
            <Rate>{`⭐️ ${result?.vote_average}`}</Rate>
          </InfoBox>
        </>
      )}
    </Container>
  );
};
export default MovieAndTV;

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
