import {
  CategoryType,
  Navbar,
  PAGE_TYPE,
  searchCategoryType,
} from '../model/types';
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
    key: PAGE_TYPE.POPULAR,
    subTitle: '현재 인기 있는 영화 목록',
  },
  {
    title: '현재 상영중',
    key: PAGE_TYPE.NOW_PLAY,
    subTitle: '현재 상영중인 영화 목록',
  },
  {
    title: '개봉 예정',
    key: PAGE_TYPE.UPCOMING,
    subTitle: '개뵹 예정 영화 목록',
  },
  {
    title: '평점높은 영화',
    key: PAGE_TYPE.TOP_RATED,
    subTitle: '평점 높은 영화 목록',
  },
];

export const tvCategory: CategoryType[] = [
  {
    title: '인기 TV',
    key: PAGE_TYPE.POPULAR,
    subTitle: '현재 인기 있는 TV 목록',
  },
  {
    title: '현재 방영중',
    key: PAGE_TYPE.ON_THE_AIR,
    subTitle: '현재 방영중인 TV 목록',
  },
  {
    title: '평점높은 TV',
    key: PAGE_TYPE.TOP_RATED,
    subTitle: '평점 높은 영TV 목록',
  },
];

export const detailCategory: CategoryType[] = [
  {
    title: '트레일러',
    key: 'videos',
  },
  {
    title: '배우',
    key: 'credits',
  },
  {
    title: '리뷰',
    key: 'reviews',
  },
  {
    title: '추천',
    key: 'recommendations',
  },
];

export const searchCategory: CategoryType[] = [
  {
    title: '영화',
    key: searchCategoryType.MOVIE,
  },
  {
    title: 'TV',
    key: searchCategoryType.TV,
  },
];
