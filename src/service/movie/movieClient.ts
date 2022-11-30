import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;

type ParamsType = {
  id?: number;
  page?: number;
  keyword?: string;
};

export class MovieClient {
  private httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: `${BASE_URL}/movie`,
      params: {
        api_key: API_KEY,
        language: 'ko',
      },
    });
  }

  popularMovie = async <T>(params: ParamsType, moviePage: string) => {
    return this.httpClient.get<T>(moviePage, {
      params,
    });
  };

  nowPlaying = async <T>(params: ParamsType, moviePage: string) => {
    return this.httpClient.get<T>(moviePage, {
      params,
    });
  };

  upComing = async <T>(params: ParamsType, moviePage: string) => {
    return this.httpClient.get<T>(moviePage, {
      params,
    });
  };
  topRated = async <T>(params: ParamsType, moviePage: string) => {
    return this.httpClient.get<T>(moviePage, {
      params,
    });
  };

  recommendation = async <T>(id: number, moviePage: string) => {
    return this.httpClient.get<T>(`${id + ''}/${moviePage}`);
  };

  cast = async <T>(id: number, moviePage: string) => {
    return this.httpClient.get<T>(`${id + ''}/${moviePage}`);
  };

  reviews = async <T>(id: number, moviePage: string) => {
    return this.httpClient.get<T>(`${id + ''}/${moviePage}`);
  };

  keyword = async <T>(id: number, moviePage: string) => {
    return this.httpClient.get<T>(`${id + ''}/${moviePage}`);
  };

  detail = async <T>(id: number) => {
    return this.httpClient.get<T>(id + '');
  };

  search = async <T>(keyword: string) => {
    return axios.get<T>(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=ko&query=${keyword}`
    );
  };
}
