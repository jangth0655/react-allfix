import React from "react";
import styled from "styled-components";
import { Movie, TV } from "../../interface";
import ImageUrl from "../../libs/imageUrl";

const Container = styled.div``;

const PosterBox = styled.div`
  width: 100%;
  height: 22rem;
  border-radius: ${(props) => props.theme.borderRadius.md};
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

const InfoBox = styled.div``;

const Title = styled.span``;

const OpeningDate = styled.span``;

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
        <Rate></Rate>
      </InfoBox>
    </Container>
  );
};
export default MovieAndTV;
