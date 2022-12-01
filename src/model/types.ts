export type Navbar = {
  key: string;
  name: string;
  pathname: string;
};

export const currentPage = {
  HOME: '/',
  MOVIE: '/movie',
  TV: '/tv',
  SEARCH: '/search',
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
}

export type CategoryType = {
  title: string;
  key: string;
  subTitle?: string;
};
