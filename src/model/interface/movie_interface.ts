import { Genre } from '../types';
import { MovieWithTVResult } from './shared_interface';

type Keyword = {
  id: number;
  name: string;
};

export type Cast = {
  character: string;
  original_name: string;
  name: string;
  profile_path: string;
};

export interface GetMovieKeyword {
  id: number;
  keywords: Keyword[];
}

export interface GetMovieCast {
  id: number;
  cast: Cast[];
}

export interface GetMovies {
  page: number;
  results: MovieWithTVResult[];
  total_result: number;
  total_pages: number;
}

export interface Movie {
  backdrop_path: string;
  poster_path: string;
  id: number;
  title: string;
  name?: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface IMovieDetail {
  backdrop_path: string;
  poster_path: string;
  id: number;
  overview: string;
  title: string;
  video: boolean;
  release_date: string;
  vote_average: number;
  genres: Genre[];
}
