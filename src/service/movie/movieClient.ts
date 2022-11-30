import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;

const MoviePage = {
  POPULAR: 'popular',
  NOW_PLAY: 'now_playing',
  UPCOMING: 'upcoming',
  TOP_RATED: 'top_rated',
  RECOMMENDATION: 'recommendations',
  CREDIT: 'credits',
  VIDEO: 'videos',
  REVIEW: 'reviews',
  KEYWORD: 'keywords',
  SEARCH: 'search',
};

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

  popularMovie = async <T>(params: ParamsType) => {
    return this.httpClient.get<T>(MoviePage.POPULAR);
  };

  nowPlaying = async <T>(params: ParamsType) => {
    return this.httpClient.get<T>(MoviePage.NOW_PLAY);
  };

  upComing = async <T>(params: ParamsType) => {
    return this.httpClient.get<T>(MoviePage.UPCOMING);
  };
  topRated = async <T>(params: ParamsType) => {
    return this.httpClient.get<T>(MoviePage.TOP_RATED);
  };

  detail = async <T>(id: number) => {
    return this.httpClient.get<T>(id + '');
  };

  recommendation = async <T>(id: number) => {
    return this.httpClient.get<T>(`${id + ''}/${MoviePage.RECOMMENDATION}`);
  };

  cast = async <T>(id: number) => {
    return this.httpClient.get<T>(`${id + ''}/${MoviePage.CREDIT}`);
  };

  reviews = async <T>(id: number) => {
    return this.httpClient.get<T>(`${id + ''}/${MoviePage.REVIEW}`);
  };

  keyword = async <T>(id: number) => {
    return this.httpClient.get<T>(`${id + ''}/${MoviePage.KEYWORD}`);
  };

  search = async <T>(keyword: string) => {
    return axios.get<T>(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=ko&query=${keyword}`
    );
  };
}
