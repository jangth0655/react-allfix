import React from "react";
import styled from "styled-components";
import { Movie, TV } from "../interface";
import ImageUrl from "../libs/imageUrl";

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
  margin-bottom: ${(props) => props.theme.mp.sm};

  @media screen and (max-width: ${(props) => props.theme.responsive.lg}) {
    height: 18rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    height: 15rem;
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

interface MovieAndTVProps {
  movie?: Movie;
  tv?: TV;
}

const MovieAndTV: React.FC<MovieAndTVProps> = ({ movie, tv }) => {
  return (
    <Container>
      <PosterBox>
        <Poster
          poster={ImageUrl(
            movie?.poster_path ? movie?.poster_path : "이미지가 없습니다."
          )}
        />
      </PosterBox>
      <InfoBox>
        <Title>{movie?.title}</Title>
        <OpeningDate>{movie?.release_date}</OpeningDate>
        <Rate>{`⭐️ ${movie?.vote_average}`}</Rate>
      </InfoBox>
    </Container>
  );
};
export default MovieAndTV;
