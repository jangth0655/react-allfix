import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import { GetReview } from '../../model/interface/shared-interface';
import { fetchMovieReviews } from '../../apis/movie-api';
import { fetchTVReviews } from '../../apis/tv-api';
import ReviewComp from '../detailComponent/ReviewComp';

const Container = styled.div``;

interface ReviewSectionProps {
  movieId?: number;
  tvId?: number;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ movieId, tvId }) => {
  const { data: movieReviewData } = useQuery<GetReview>(
    ['movieReview', movieId],
    () => fetchMovieReviews({ id: movieId, page: 1 }),
    { staleTime: 60 * 60 * 24 * 7, suspense: true, enabled: !!movieId }
  );

  const { data: tvReviewData } = useQuery<GetReview>(
    ['tvReview', tvId],
    () => fetchTVReviews({ id: tvId, page: 1 }),
    { staleTime: 60 * 60 * 24 * 7, suspense: true, enabled: !!tvId }
  );

  return (
    <Container>
      {movieId
        ? movieReviewData && (
            <ReviewComp reviewResultArray={movieReviewData.results} />
          )
        : tvReviewData && (
            <ReviewComp reviewResultArray={tvReviewData.results} />
          )}
    </Container>
  );
};
export default ReviewSection;
