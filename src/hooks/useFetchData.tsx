import { useQuery } from '@tanstack/react-query';
import { useLocation, useSearchParams } from 'react-router-dom';

import { MovieWithTvApi } from '../service/api';
import { HttpClient } from '../service/httpClient';

import { QUERY_KEY } from '../model/types';

const client = new HttpClient();
const movieWithTvApi = new MovieWithTvApi(client);

export const useList = <T = any,>() => {
  const [query, _] = useSearchParams();
  const queryKey = query.get(QUERY_KEY.CURRENT);
  const page = Number(query.get(QUERY_KEY.PAGE));
  const { pathname } = useLocation();
  const currentPage = pathname.split('/')[1];

  const {
    data: list,
    isLoading,
    error,
  } = useQuery<T>(
    [queryKey, page, currentPage],
    async () =>
      await movieWithTvApi.listByCategory(
        page || 1,
        currentPage,
        queryKey || 'popular'
      )
  );

  return {
    list,
    isLoading,
  };
};
