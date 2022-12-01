import { CategoryType, MOVIE_PAGE, Navbar, TV_PAGE } from '../model/types';
import { v4 } from 'uuid';

export const navbarData: Navbar[] = [
  { key: v4(), name: '홈', pathname: '/' },
  { key: v4(), name: '영화', pathname: '/movie' },
  { key: v4(), name: 'TV', pathname: '/tv' },
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

export const tvCategory: CategoryType[] = [
  {
    title: '인기 TV',
    key: TV_PAGE.POPULAR,
    subTitle: '현재 인기 있는 TV 목록',
  },
  {
    title: '현재 방영중',
    key: TV_PAGE.ON_THE_AIR,
    subTitle: '현재 방영중인 TV 목록',
  },
  {
    title: '평점높은 TV',
    key: TV_PAGE.TOP_RATED,
    subTitle: '평점 높은 영TV 목록',
  },
];
