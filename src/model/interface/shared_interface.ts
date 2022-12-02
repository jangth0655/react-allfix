import { Video } from '../types';

export interface GetVideos {
  id: number;
  results: Video[];
}

type ReviewAuthor = {
  avatar_path: string;
  name: string;
  rating: number;
};

export type ReviewResult = {
  author: string;
  author_details: ReviewAuthor;
  created_at: Date;
  content: string;
};

export interface GetReview {
  id: number;
  page: number;
  results: ReviewResult[];
  total_pages: number;
  total_results: number;
}

export interface MovieWithTVResult {
  backdrop_path: string;
  poster_path: string;
  id: number;
  name: string;
  title?: string;
  overview: string;
  first_air_date: string;
  vote_average: number;
  release_date: string;
}

export interface MovieWithTvList {
  page: number;
  results: MovieWithTVResult[];
  total_result: number;
  total_pages: number;
}
