import { CategoryType, MOVIE_PAGE, Navbar } from '../model/types';
import { v4 } from 'uuid';

export const navbarData: Navbar[] = [
  { key: v4(), name: '홈', pathname: '/' },
  { key: v4(), name: '영화', pathname: '/movies' },
  { key: v4(), name: 'TV', pathname: '/tvs' },
  { key: v4(), name: '검색', pathname: '/search' },
];

export const movieCategory: CategoryType[] = [
  {
    title: '인기영화',
    key: MOVIE_PAGE.POPULAR,
    subTitle: '현재 인기 있는 영화 목록',
  },
  {
    title: '현재 상영중',
    key: MOVIE_PAGE.NOW_PLAY,
    subTitle: '현재 상영중인 영화 목록',
  },
  {
    title: '개봉 예정',
    key: MOVIE_PAGE.UPCOMING,
    subTitle: '개뵹 예정 영화 목록',
  },
  {
    title: '평점높은 영화',
    key: MOVIE_PAGE.TOP_RATED,
    subTitle: '평점 높은 영화 목록',
  },
];
