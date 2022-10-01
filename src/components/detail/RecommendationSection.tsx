import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { fetchRecommendation } from "../../apis/movie-api";
import { GetMovies } from "../../interface";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ImageUrl from "../../libs/imageUrl";
import NoImageWithVideo from "../NoImageWithVideo";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

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

const NoImageContainer = styled(ItemImage)``;

interface RecommendationSectionProps {
  movieId?: number;
  tvId?: number;
}

const RecommendationSection: React.FC<RecommendationSectionProps> = ({
  movieId,
  tvId,
}) => {
  const navigate = useNavigate();
  const { data: recommendationData } = useQuery<GetMovies>(
    ["movieRecommendation", movieId],
    () => fetchRecommendation(movieId),
    { staleTime: 60 * 60 * 24 * 7, suspense: true }
  );
  const sliderRef = useRef<HTMLDivElement>(null);

  const onHandleRightDirection = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 500, behavior: "smooth" });
    } else {
      return;
    }
  };

  const onHandleLeftDirection = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -500, behavior: "smooth" });
    } else {
      return;
    }
  };

  const onDetailPage = (id: number, backdrop_path: string) => {
    navigate(`/movies/${id}`, {
      state: {
        backdrop_path,
        id,
      },
    });
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
        {recommendationData?.results.map((movie) => (
          <SliderItem
            onClick={() => onDetailPage(movie.id, movie.backdrop_path)}
            key={movie.id}
          >
            {movie?.poster_path ? (
              <ItemImage
                poster={ImageUrl(movie?.poster_path ? movie?.poster_path : "")}
              />
            ) : (
              <NoImageContainer>
                <NoImageWithVideo text="이미지가 없습니다." />
              </NoImageContainer>
            )}
            <ItemTitle>{movie.title}</ItemTitle>
          </SliderItem>
        ))}
      </SliderBox>
    </SliderContainer>
  );
};
export default RecommendationSection;
