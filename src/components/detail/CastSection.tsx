import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { fetchCasts } from "../../apis/movie-api";
import { GetCast } from "../../interface";
import ImageUrl from "../../libs/imageUrl";

const ActorBox = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  overflow-x: scroll;
  scrollbar-width: thin;
  padding: ${(props) => props.theme.mp.lg} 0;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.5);
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
  margin-right: ${(props) => props.theme.mp.xxxxl};
`;

const ActorNameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ActorName = styled.span`
  display: inline-block;
  margin-bottom: ${(props) => props.theme.mp.lg};
  color: white;
  padding: 0 ${(props) => props.theme.mp.md};
`;

const ActorCharacter = styled.span`
  width: 10rem;
  padding: 0 ${(props) => props.theme.mp.md};
  font-size: ${(props) => props.theme.textSize.sm};
  color: ${(props) => props.theme.color.textColor.sm};
`;

interface CastSectionProps {
  movieId?: number;
  tvId?: number;
}

const CastSection: React.FC<CastSectionProps> = ({ movieId }) => {
  const { data: ActorData } = useQuery<GetCast>(
    ["movieActor", movieId],
    () => fetchCasts(movieId),
    { staleTime: 60 * 60 * 24 * 7 }
  );

  return (
    <ActorBox>
      {ActorData?.cast.slice(0, 6).map((actor) => (
        <ActorInFoBox key={actor.name}>
          <Actor poster={ImageUrl(actor.profile_path)} />
          <ActorNameBox>
            <ActorName>{actor.name}</ActorName>
            <ActorCharacter>{actor.character}</ActorCharacter>
          </ActorNameBox>
        </ActorInFoBox>
      ))}
    </ActorBox>
  );
};
export default CastSection;
