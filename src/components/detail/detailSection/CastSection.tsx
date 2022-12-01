import styled from 'styled-components';

import { useRelatedList } from '../../../hooks/useFetchData';
import { GetMovieCast } from '../../../model/interface/movie_interface';
import { GetTVCast } from '../../../model/interface/tv_interface';
import ImageUrl from '../../../utils/imageUrl';
import Loading from '../../Loading';

interface CastSectionProps {
  movieId?: number;
  tvId?: number;
}

const CastSection: React.FC<CastSectionProps> = ({ movieId, tvId }) => {
  const { isLoading, relatedList: casts } = useRelatedList<
    GetMovieCast & GetTVCast
  >();

  const emptyCasts = !casts?.cast || casts.cast.length === 0;

  return isLoading ? (
    <Loading />
  ) : (
    <ActorBox>
      {emptyCasts ? (
        <NoActorImage>이미지가 없습니다.</NoActorImage>
      ) : (
        casts?.cast.slice(0, 6).map((actor) => (
          <ActorInFoBox key={actor.name}>
            <Actor poster={ImageUrl(actor.profile_path)} />
            <ActorNameBox>
              <ActorName>{actor.name}</ActorName>
              <ActorCharacter>{actor.character}</ActorCharacter>
            </ActorNameBox>
          </ActorInFoBox>
        ))
      )}
    </ActorBox>
  );
};
export default CastSection;

const ActorBox = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  overflow-x: scroll;
  scrollbar-width: thin;
  padding: ${(props) => props.theme.mp.lg} 0;
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

const ActorInFoBox = styled.div``;

const Actor = styled.div<{ poster?: string }>`
  background-image: url(${(props) => props.poster});
  background-position: center center;
  background-size: cover;
  object-fit: cover;
  width: 7rem;
  height: 7rem;
  border: 2px solid white;
  border-radius: 50%;
  margin-bottom: ${(props) => props.theme.mp.md};
  margin-right: ${(props) => props.theme.mp.xxl};
`;

const ActorNameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 ${(props) => props.theme.mp.sm};
`;

const ActorName = styled.span`
  display: inline-block;
  margin-bottom: ${(props) => props.theme.mp.lg};
  color: white;
`;

const ActorCharacter = styled.span`
  width: 10rem;
  font-size: ${(props) => props.theme.textSize.sm};
  color: ${(props) => props.theme.color.textColor.sm};
`;

const NoActorImage = styled(Actor)`
  background-color: ${(props) => props.theme.color.bg.md};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.textSize.xs};
`;
