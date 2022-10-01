type Genres = {
  id: number;
  name: string;
};

type Keyword = {
  id: number;
  name: string;
};

type Video = {
  id: string;
  key: string;
  name: string;
};

type Cast = {
  character: string;
  original_name: string;
  name: string;
  profile_path: string;
};

type ReviewAuthor = {
  avatar_path: string;
  name: string;
  rating: number;
};

type ReviewResult = {
  author: string;
  author_details: ReviewAuthor;
  created_at: Date;
  content: string;
};

export interface GetReview {
  id: number;
  page: number;
  results: ReviewResult[];
}

export interface GetKeyword {
  id: number;
  keywords: Keyword[];
}

export interface GetCast {
  id: number;
  cast: Cast[];
}

export interface GetVideos {
  id: number;
  results: Video[];
}

export interface GetMovies {
  page: number;
  results: Movie[];
  total_result: number;
  total_pages: number;
}

export interface Movie {
  backdrop_path: string;
  poster_path: string;
  id: number;
  title: string;
  overview: string;
  release_date: number;
  vote_average: number;
}

export interface IMovieDetail {
  backdrop_path: string;
  poster_path: string;
  id: number;
  overview: string;
  title: string;
  video: boolean;
  release_date: number;
  vote_average: number;
  genres: Genres[];
}

export interface TV {}
