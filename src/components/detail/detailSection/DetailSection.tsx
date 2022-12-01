import { useSearchParams } from 'react-router-dom';

import { detailCategoryType, QUERY_KEY } from '../../../model/types';
import CastSection from './CastSection';
import RecommendationSection from './RecommendationSection';
import ReviewSection from './ReviewSection';
import VideoSection from './VideoSection';

const DetailSection = () => {
  const [query, _] = useSearchParams();
  const queryKey = query.get(QUERY_KEY.TYPE) || detailCategoryType.VIDEO;

  const filterByCategory = (queryKey: string) => {
    switch (queryKey) {
      case detailCategoryType.VIDEO:
        return <VideoSection />;
      case detailCategoryType.CREDITS:
        return <CastSection />;
      case detailCategoryType.REVIEWS:
        return <ReviewSection />;
      case detailCategoryType.RECOMMENDATION:
        return <RecommendationSection />;
      default:
        break;
    }
  };

  return <section>{filterByCategory(queryKey)}</section>;
};
export default DetailSection;
