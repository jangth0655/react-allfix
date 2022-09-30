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
  video: boolean;
}

export interface TV {}
