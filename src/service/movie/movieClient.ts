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

  movies = async (params: ParamsType, moviePage: string) => {
    return this.httpClient.get(moviePage, {
      params,
    });
  };

  movie = async (id: number, moviePage: string) => {
    return this.httpClient.get(`${id + ''}/${moviePage}`);
  };

  detail = async (id: number) => {
    return this.httpClient.get(id + '');
  };

  search = async (keyword: string) => {
    return axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=ko&query=${keyword}`
    );
  };
}
