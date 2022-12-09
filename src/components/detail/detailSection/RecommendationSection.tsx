import styled from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRef } from 'react';

import { GetMovies } from '../../../model/interface/movie_interface';
import { GetTVs } from '../../../model/interface/tv_interface';
import { useRelatedList } from '../../../hooks/useFetchData';
import NoImageWithVideo from '../../NoImageWithVideo';
import ImageUrl from '../../../utils/imageUrl';
import Loading from '../../Loading';
import { currentPage } from '../../../model/types';

const RecommendationSection: React.FC = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const currentParamPage = id && pathname.split(`/${id}`)[0];
  const {
    isLoading,
    relatedList: recommendation,
    errors,
  } = useRelatedList<GetTVs & GetMovies>();

  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleRightDirection = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    } else {
      return;
    }
  };

  const handleLeftDirection = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    } else {
      return;
    }
  };

  const onDetailPage = (id?: number) => {
    navigate(`/movie/${id}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  const isEmptyRecommendation =
    !recommendation?.results || recommendation.results.length === 0;

  return isEmptyRecommendation ? (
    <h1>
      {currentParamPage === currentPage.MOVIE
        ? '영화가없습니다.'
        : 'TV프로그램이 없습니다.'}
    </h1>
  ) : (
    <SliderContainer>
      <Left onClick={handleLeftDirection}>
        <FaArrowLeft />
      </Left>
      <Right onClick={handleRightDirection}>
        <FaArrowRight />
      </Right>

      <SliderBox ref={sliderRef}>
        {errors ? (
          <h1>{errors}</h1>
        ) : (
          recommendation?.results.map((re) => (
            <SliderItem key={re.id} onClick={() => onDetailPage(re.id)}>
              {re.poster_path ? (
                <ItemImage poster={ImageUrl(re.poster_path)} />
              ) : (
                <NoImageContainer>
                  <NoImageWithVideo text='이미지가 없습니다.' />
                </NoImageContainer>
              )}
              <ItemTitle>{re.title || re.name}</ItemTitle>
            </SliderItem>
          ))
        )}
      </SliderBox>
    </SliderContainer>
  );
};
export default RecommendationSection;

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
