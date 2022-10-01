import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { fetchReviews } from "../../apis/movie-api";
import { GetReview } from "../../interface";

import { FaUser } from "react-icons/fa";
import ImageUrl from "../../libs/imageUrl";

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

const ReviewAvatar = styled.div<{ avatar: string }>`
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

interface ReviewSectionProps {
  movieId?: number;
  tvId?: number;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ movieId }) => {
  const { data: reviewData } = useQuery<GetReview>(
    ["movieReview", movieId],
    () => fetchReviews({ id: movieId, page: 1 })
  );

  const dateForm = (date: Date) => {
    return new Date(date).toLocaleDateString("ko");
  };

  const confirmAvatarPath = (avatar?: string) => {
    if (avatar?.startsWith("/https") || !avatar) {
      return false;
    }
    return true;
  };

  return (
    <Container>
      {reviewData?.results.map((review) => (
        <ReviewContainer key={review.author}>
          <ReviewAvatarBox>
            {confirmAvatarPath(review.author_details.avatar_path) ? (
              <ReviewAvatar
                avatar={ImageUrl(review.author_details.avatar_path)}
              />
            ) : (
              <NoReviewAvatar>
                <FaUser size={30} />
              </NoReviewAvatar>
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
      ))}
    </Container>
  );
};
export default ReviewSection;
