import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ImageUrl from "../../libs/imageUrl";
import NoImageWithVideo from "../NoImageWithVideo";

const SliderItem = styled.div`
  margin-right: ${(props) => props.theme.mp.md};
  cursor: pointer;
  transition: ${(props) => props.theme.transition.md};
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    transform: translateY(-10px);
  }
`;

const ItemImage = styled.div<{ poster?: string }>`
  border-radius: ${(props) => props.theme.borderRadius.md};
  box-shadow: ${(props) => props.theme.shadow.md};
  background-image: url(${(props) => props.poster});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: ${(props) => props.theme.mp.md};
  width: 15rem;
  height: 90%;
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
  }
`;

const ItemTitle = styled.h1`
  width: 100%;
  height: 10%;
`;

const NoImageContainer = styled(ItemImage)``;

interface RecommendationCompProps {
  backdrop_path?: string;
  poster_path?: string;
  id?: number;
  title?: string;
  name?: string;
}

const RecommendationComp: React.FC<RecommendationCompProps> = ({
  backdrop_path,
  poster_path,
  id,
  title,
  name,
}) => {
  const navigate = useNavigate();
  const onDetailPage = (id?: number, backdrop_path?: string) => {
    if (!id || !backdrop_path) return;
    if (title) {
      navigate(`/movies/${id}`, {
        state: {
          backdrop_path,
          id,
        },
      });
    }
    if (name) {
      navigate(`/tvs/${id}`, {
        state: {
          backdrop_path,
          id,
        },
      });
    }
  };

  return (
    <SliderItem onClick={() => onDetailPage(id, backdrop_path)}>
      {poster_path ? (
        <ItemImage poster={ImageUrl(poster_path ? poster_path : "")} />
      ) : (
        <NoImageContainer>
          <NoImageWithVideo text="이미지가 없습니다." />
        </NoImageContainer>
      )}
      <ItemTitle>{title ? title : name}</ItemTitle>
    </SliderItem>
  );
};
export default RecommendationComp;
