import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { fetchMovieDetail, fetchMovieKeywords } from "../../apis/movie-api";
import { GetKeyword, IMovieDetail } from "../../interface";
import ImageUrl from "../../libs/imageUrl";
import NoImageWithVideo from "../NoImageWithVideo";

const PosterBox = styled.div`
  width: 30%;
  height: 30rem;
  margin-right: ${(props) => props.theme.mp.lg};
  @media screen and (max-width: ${(props) => props.theme.responsive.md}) {
    width: 50%;
    margin-right: 0;
    height: 25rem;
    margin-bottom: ${(props) => props.theme.mp.sm};
  }
`;

const Poster = styled.div<{ poster?: string }>`
  box-shadow: ${(props) => props.theme.shadow.md};
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.theme.borderRadius.md};
  background-image: url(${(props) => props.poster});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: ${(props) => props.theme.responsive.md}) {
    height: 22rem;
    background-size: contain;
    box-shadow: none;
  }
`;

const InfoBox = styled.div`
  width: 70%;
`;

const Title = styled.div`
  font-weight: 700;
  color: white;
  font-size: ${(props) => props.theme.textSize.xxxl};
  margin-bottom: ${(props) => props.theme.mp.md};
  @media screen and (max-width: ${(props) => props.theme.responsive.md}) {
    font-size: ${(props) => props.theme.textSize.xxl};
  }
`;

const Genres = styled.div`
  margin-bottom: ${(props) => props.theme.mp.xs};
  & span {
    color: ${(props) => props.theme.color.textColor.sm};
  }
  & span:last-child {
    display: none;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.md}) {
    font-size: ${(props) => props.theme.textSize.sm};
  }
`;

const ReleaseDate = styled.div`
  margin-bottom: ${(props) => props.theme.mp.md};
  & span {
    color: ${(props) => props.theme.color.textColor.sm};
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.md}) {
    font-size: ${(props) => props.theme.textSize.sm};
  }
`;

const Vote = styled.div`
  margin-bottom: ${(props) => props.theme.mp.xxl};
  & span:first-child {
    display: inline-block;
    margin-right: ${(props) => props.theme.mp.xs};
  }
  & span:last-child {
    color: ${(props) => props.theme.color.highlight.sm};
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.md}) {
    font-size: ${(props) => props.theme.textSize.sm};
    margin-bottom: ${(props) => props.theme.mp.lg};
  }
`;

const Overview = styled.div`
  margin-bottom: ${(props) => props.theme.mp.xxl};
  & p {
    line-height: 1.5;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.md}) {
    font-size: ${(props) => props.theme.textSize.md};
    margin-bottom: ${(props) => props.theme.mp.lg};
  }
`;

const KeywordsBox = styled.div`
  & h1 {
    color: ${(props) => props.theme.color.textColor.sm};
    margin-bottom: ${(props) => props.theme.mp.sm};
  }
`;
const Keywords = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  @media screen and (max-width: ${(props) => props.theme.responsive.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
const Keyword = styled.li`
  padding: ${(props) => props.theme.mp.xs} ${(props) => props.theme.mp.md};
  font-size: ${(props) => props.theme.textSize.sm};
  margin-right: ${(props) => props.theme.mp.sm};
  margin-bottom: ${(props) => props.theme.mp.sm};
  border-radius: ${(props) => props.theme.borderRadius.md};
  transition: ${(props) => props.theme.transition.md};
  background-color: ${(props) => props.theme.color.bg.lg};
  cursor: pointer;
  color: ${(props) => props.theme.color.textColor.xs};
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-color: ${(props) => props.theme.color.bg.md};
    color: white;
  }
`;

interface InfoSectionProps {
  movieId?: number;
  tvId?: number;
}

const InfoSection: React.FC<InfoSectionProps> = ({ movieId }) => {
  const { data: detailData } = useQuery<IMovieDetail>(
    ["movieDetail", movieId],
    () => fetchMovieDetail(movieId && movieId),
    { staleTime: 60 * 60 * 24 * 7, suspense: true }
  );
  const { data: keywordData } = useQuery<GetKeyword>(
    ["movieKeyword", movieId],
    () => fetchMovieKeywords(movieId && movieId),
    { staleTime: 60 * 60 * 24 * 7, suspense: true }
  );

  const errorText = !detailData?.poster_path
    ? ImageUrl(detailData?.poster_path)
    : "";
  return (
    <>
      {detailData?.poster_path ? (
        <PosterBox>
          <Poster
            poster={ImageUrl(
              detailData?.poster_path ? detailData?.poster_path : ""
            )}
          />
        </PosterBox>
      ) : (
        <NoImageWithVideo text={errorText} />
      )}
      <InfoBox>
        <Title>
          <span>{detailData?.title}</span>
        </Title>
        <Genres>
          {detailData?.genres?.map((genre) => (
            <React.Fragment key={genre.id}>
              <span>{genre.name}</span>
              <span>·</span>
            </React.Fragment>
          ))}
        </Genres>
        <ReleaseDate>
          <span>{detailData?.release_date}</span>
        </ReleaseDate>
        <Vote>
          <span>평점</span>
          <span>{detailData?.vote_average?.toFixed(2)}</span>
        </Vote>
        <Overview>
          <p>{detailData?.overview}</p>
        </Overview>
        <KeywordsBox>
          <h1>키워드</h1>
          <Keywords>
            {keywordData?.keywords.map((keyword) => (
              <Keyword key={keyword.id}>
                <span>＃{keyword.name}</span>
              </Keyword>
            ))}
          </Keywords>
        </KeywordsBox>
      </InfoBox>
    </>
  );
};
export default InfoSection;
