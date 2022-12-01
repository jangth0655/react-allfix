import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;

type ParamsType = {
  id?: number;
  page?: number;
  keyword?: string;
};

export class TvClient {
  private httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: `${BASE_URL}/tv`,
      params: {
        api_key: API_KEY,
        language: 'ko',
      },
    });
  }

  tvs = async (params: ParamsType, tvPage: string) => {
    return this.httpClient.get(tvPage, {
      params,
    });
  };

  tv = async (id: number, tvPage: string) => {
    return this.httpClient.get(`${id + ''}/${tvPage}`);
  };

  detail = async (id: number) => {
    return this.httpClient.get(id + '');
  };

  search = async (keyword: string) => {
    return axios.get(
      `${BASE_URL}/search?api_key=${API_KEY}&language=ko&query=${keyword}`
    );
  };
}
