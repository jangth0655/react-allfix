import { useQuery } from '@tanstack/react-query';
import { useLocation, useSearchParams } from 'react-router-dom';

import { QUERY_KEY, TV_PAGE } from '../model/types';
import { TvAPI } from '../service/tv/TvAPI';
import { TvClient } from '../service/tv/TvClient';

const tvClient = new TvClient();
const tvAPI = new TvAPI(tvClient);
export const useTVs = <T = any,>() => {
  const [query, _] = useSearchParams();
  const queryKey = query.get(QUERY_KEY.CURRENT);
  const page = Number(query.get(QUERY_KEY.PAGE));
  const location = useLocation();
  const tvPath = location.pathname;
  const {
    data: tvs,
    isLoading,
    error,
  } = useQuery<T>(
    [queryKey, page, tvPath],
    async () =>
      await tvAPI.tvsByCategory(page || 1, queryKey || TV_PAGE.POPULAR)
  );

  return {
    tvs,
    isLoading,
  };
};
