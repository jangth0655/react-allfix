import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

import { GetReview } from '../../../model/interface/shared_interface';
import { useRelatedList } from '../../../hooks/useFetchData';
import ImageUrl from '../../../utils/imageUrl';
import { dateForm } from '../../../utils/dateFormat';
import Loading from '../../Loading';
import Pagination from '../../Pagination';

const ReviewSection: React.FC = () => {
  const {
    isLoading,
    relatedList: reviews,
    errors,
  } = useRelatedList<GetReview>();

  const isEmptyAvatar = (avatar: string) => {
    return avatar?.startsWith('/https') || !avatar;
  };

  if (isLoading) {
    return <Loading />;
  }

  const noReviews = !reviews || reviews.results.length === 0;

  return (
    <Container>
      {errors ? (
        <h1>errors</h1>
      ) : noReviews ? (
        <h1>리뷰가 없습니다.</h1>
      ) : (
        reviews?.results?.map((review) => (
          <ReviewContainer key={review.author}>
            <ReviewAvatarBox>
              {isEmptyAvatar(review.author_details.avatar_path) ? (
                <NoReviewAvatar>
                  <FaUser size={30} />
                </NoReviewAvatar>
              ) : (
                <ReviewAvatar
                  avatar={ImageUrl(review.author_details.avatar_path)}
                />
              )}
            </ReviewAvatarBox>
            <ReviewBox>
              <ReviewInfo>
                <ReviewName>{review.author}</ReviewName>
                <ReviewNameBorderBar>|</ReviewNameBorderBar>
                <ReviewDate>{dateForm(review.created_at)}</ReviewDate>
                <ReviewNameBorderBar>|</ReviewNameBorderBar>
                <ReviewVote>평점 {review.author_details.rating}</ReviewVote>
              </ReviewInfo>
              <Review>
                <p>{review.content}</p>
              </Review>
            </ReviewBox>
          </ReviewContainer>
        ))
      )}
      {!noReviews && (
        <Pagination totalLength={reviews?.total_pages} type='review' />
      )}
    </Container>
  );
};
export default ReviewSection;

const Container = styled.div``;

const ReviewContainer = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.mp.xxl};
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    flex-direction: column;
  }
`;

const ReviewAvatarBox = styled.div`
  margin-right: ${(props) => props.theme.mp.md};
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    margin-bottom: ${(props) => props.theme.mp.sm};
  }
`;

const ReviewAvatar = styled.div<{ avatar?: string }>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-image: url(${(props) => props.avatar});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const NoReviewAvatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.textColor.sm};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewBox = styled.div`
  width: 90%;
`;

const ReviewInfo = styled.div`
  margin-bottom: ${(props) => props.theme.mp.sm};
`;

const ReviewName = styled.span``;
const ReviewDate = styled.span``;
const ReviewVote = styled.span`
  color: ${(props) => props.theme.color.highlight.xs};
`;
const ReviewNameBorderBar = styled.span`
  margin: 0 ${(props) => props.theme.mp.sm};
`;

const Review = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: ${(props) => props.theme.borderRadius.xl};
  border-top-left-radius: 0;
  border: 2px solid ${(props) => props.theme.color.textColor.md};
  padding: ${(props) => props.theme.mp.md};
  line-height: 1.6;
  color: ${(props) => props.theme.color.textColor.md};
`;
