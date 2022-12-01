import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import {
  IMovieDetail,
  GetMovieKeyword,
} from '../../../model/interface/movie-interface';
import { GetTVKeyword, ITVDetail } from '../../../model/interface/tv-interface';
import ImageUrl from '../../../utils/imageUrl';
import NoImageWithVideo from '../../NoImageWithVideo';

interface InfoSectionProps {
  movieId?: number;
  tvId?: number;
  detail?: IMovieDetail & ITVDetail;
  keywords?: GetMovieKeyword & GetTVKeyword;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  tvId,
  detail,
  keywords,
}) => {
  const keyword = keywords?.keywords || keywords?.results;

  return (
    <>
      <Helmet>
        <title>{`${detail?.title || detail?.name} | Movie`}</title>
      </Helmet>

      {detail?.poster_path ? (
        <PosterBox>
          <Poster poster={ImageUrl(detail.poster_path)} />
        </PosterBox>
      ) : (
        <NoImageWithVideo text='이미지가 없습니다.' />
      )}
      <InfoBox>
        <Title>
          <span>{detail?.title || detail?.name}</span>
        </Title>
        <Genres>
          {detail?.genres?.map((genre) => (
            <React.Fragment key={genre.id}>
              <span>{genre.name}</span>
              <span>·</span>
            </React.Fragment>
          ))}
        </Genres>
        <ReleaseDate>
          <span>{detail?.release_date || detail?.first_air_date}</span>
        </ReleaseDate>
        <Vote>
          <span>평점</span>
          <span>{detail?.vote_average?.toFixed(2)}</span>
        </Vote>
        <Overview>
          <p>{detail?.overview}</p>
        </Overview>
        <KeywordsBox>
          <h1>키워드</h1>
          {keyword && (
            <Keywords>
              {keyword?.map((keyword) => (
                <Keyword key={keyword.id}>
                  <span>＃{keyword.name}</span>
                </Keyword>
              ))}
            </Keywords>
          )}
        </KeywordsBox>
      </InfoBox>
    </>
  );
};
export default InfoSection;

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
