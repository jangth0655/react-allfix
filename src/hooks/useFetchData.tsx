import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

import { MovieWithTvApi } from '../service/api';
import { HttpClient } from '../service/httpClient';

import {
  detailCategoryType,
  PAGE_TYPE,
  QUERY_KEY,
  searchCategoryType,
} from '../model/types';
import { useState } from 'react';
import { HttpError } from '../service/httpError';

const client = new HttpClient();
const movieWithTvApi = new MovieWithTvApi(client);

export const useList = <T = any,>() => {
  const [query, _] = useSearchParams();
  const { pathname } = useLocation();
  const [errors, setErrors] = useState('');
  const queryKey = query.get(QUERY_KEY.CURRENT);
  const page = Number(query.get(QUERY_KEY.PAGE));

  const currentPage = pathname.split('/')[1];

  const { data: list, isLoading } = useQuery<T>(
    [queryKey, page, currentPage],
    async () => {
      try {
        return await movieWithTvApi.listByCategory(
          page || 1,
          currentPage,
          queryKey || PAGE_TYPE.POPULAR
        );
      } catch (error) {
        console.info(error);
        error instanceof HttpError && setErrors(error.errorMassage);
        return;
      }
    }
  );

  return {
    list,
    isLoading,
    errors,
  };
};

export const useDetail = <T = any,>() => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const currentPage = pathname.split('/')[1];
  const itemId = Number(id);
  const [errors, setErrors] = useState('');

  const { data: detail, isLoading } = useQuery<T>(
    [id, currentPage],
    async () => {
      try {
        return await movieWithTvApi.detail(itemId, currentPage);
      } catch (error) {
        console.info(error);
        error instanceof HttpError && setErrors(error.errorMassage);
        return;
      }
    }
  );

  return {
    detail,
    isLoading,
    errors,
  };
};

export const useKeywords = <T = any,>() => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const currentPage = pathname.split('/')[1];
  const itemId = Number(id);
  const [errors, setErrors] = useState('');

  const { data: keywords, isLoading } = useQuery<T>(
    [id, currentPage, 'keywords'],
    async () => {
      try {
        return await movieWithTvApi.relatedList({
          id: itemId,
          currentPage,
          pageType: 'keywords',
        });
      } catch (error) {
        console.info(error);
        error instanceof HttpError && setErrors(error.errorMassage);
        return;
      }
    }
  );

  return {
    keywords,
    isLoading,
    errors,
  };
};

export const useRelatedList = <T = any,>() => {
  const [query, _] = useSearchParams();
  const { id } = useParams();
  const { pathname } = useLocation();
  const [errors, setErrors] = useState('');

  const queryKey = query.get(QUERY_KEY.TYPE) || detailCategoryType.VIDEO;
  const itemId = Number(id);
  const currentPage = pathname.split('/')[1];
  const page = Number(query.get(QUERY_KEY.PAGE) || 1);
  const language = queryKey === detailCategoryType.REVIEWS ? 'en' : 'ko';
  const { data: relatedList, isLoading } = useQuery<T>(
    [id, currentPage, queryKey, page],
    async () => {
      try {
        return await movieWithTvApi.relatedList({
          currentPage,
          id: itemId,
          pageType: queryKey,
          language,
          page,
        });
      } catch (error) {
        console.info(error);
        error instanceof HttpError && setErrors(error.errorMassage);
        return;
      }
    }
  );

  return {
    relatedList,
    isLoading,
    errors,
  };
};

export const useSearch = <T = any,>() => {
  const [query, _] = useSearchParams();
  const keyword = query.get(QUERY_KEY.KEYWORD) || undefined;
  const currentPage = query.get(QUERY_KEY.CURRENT) || searchCategoryType.MOVIE;
  const [errors, setErrors] = useState('');

  const {
    data: search,
    isLoading,
    isFetching,
  } = useQuery<T>(
    [currentPage, keyword],
    async () => {
      try {
        return await movieWithTvApi.search(keyword || '', currentPage);
      } catch (error) {
        console.info(error);
        error instanceof HttpError && setErrors(error.errorMassage);
        return;
      }
    },
    {
      enabled: !!keyword,
    }
  );

  return {
    search,
    isLoading: isLoading && isFetching,
    errors,
  };
};
