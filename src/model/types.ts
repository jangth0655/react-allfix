export type Navbar = {
  key: string;
  name: string;
  pathname: string;
};

export enum MOVIE_PAGE {
  POPULAR = 'popular',
  NOW_PLAY = 'now_playing',
  UPCOMING = 'upcoming',
  TOP_RATED = 'top_rated',
  RECOMMENDATION = 'recommendations',
  CREDIT = 'credits',
  VIDEO = 'videos',
  REVIEW = 'reviews',
  KEYWORD = 'keywords',
  SEARCH = 'search',
}

export enum QUERY_KEY {
  CURRENT = 'current',
  PAGE = 'page',
}

export type CategoryType = {
  title: string;
  key: string;
  subTitle: string;
};
