import { Genre } from "./shared-interface";

export type Crew = {
  original_name: string;
  name: string;
  profile_path: string;
  character: string;
};

export interface GetTVCast {
  id: number;
  crew: Crew[];
}

type Keyword = {
  id: number;
  name: string;
};

export interface GetTVKeyword {
  id: number;
  results: Keyword[];
}

export interface GetTVs {
  page: number;
  results: TV[];
  total_result: number;
  total_pages: number;
}

export interface TV {
  backdrop_path: string;
  poster_path: string;
  id: number;
  name: string;
  overview: string;
  first_air_date: string;
  vote_average: number;
}

export interface ITVDetail {
  backdrop_path: string;
  poster_path: string;
  id: number;
  overview: string;
  name: string;
  first_air_date: string;
  vote_average: number;
  genres: Genre[];
}
