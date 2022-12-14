export type Navbar = {
  key: string;
  name: string;
  pathname: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type Video = {
  id: string;
  key: string;
  name: string;
};

export const currentPage = {
  HOME: '/',
  MOVIE: '/movie',
  TV: '/tv',
  SEARCH: '/search',
};

export const searchCategoryType = {
  MOVIE: 'movie',
  TV: 'tv',
};

export const detailCategoryType = {
  VIDEO: 'videos',
  CREDITS: 'credits',
  REVIEWS: 'reviews',
  RECOMMENDATION: 'recommendations',
};

export enum PAGE_TYPE {
  POPULAR = 'popular',
  NOW_PLAY = 'now_playing',
  UPCOMING = 'upcoming',
  TOP_RATED = 'top_rated',
  RECOMMENDATION = 'recommendations',
  ON_THE_AIR = 'on_the_air',
  CREDIT = 'credits',
  VIDEO = 'videos',
  REVIEW = 'reviews',
  KEYWORD = 'keywords',
  SEARCH = 'search',
}

export enum QUERY_KEY {
  CURRENT = 'current',
  PAGE = 'page',
  TYPE = 'type',
  KEYWORD = 'keyword',
}

export type CategoryType = {
  title?: string;
  key: string;
  subTitle?: string;
};

export type RelatedListType = {
  id?: number;
  currentPage?: string;
  pageType?: string;
  language?: 'ko' | 'en';
  page?: number;
};
