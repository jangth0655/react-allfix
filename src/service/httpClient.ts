import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;

type ParamsType = {
  id?: number;
  page?: number;
  keyword?: string;
};

export class HttpClient {
  private httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: `${BASE_URL}`,
      params: {
        api_key: API_KEY,
        language: 'ko',
      },
    });
  }

  list = async (params: ParamsType, currentPage: string, moviePage: string) => {
    return this.httpClient.get(`${currentPage}/${moviePage}`, {
      params,
    });
  };

  relatedList = async (
    id?: number,
    currentPage?: string,
    pageType?: string,
    language?: 'ko' | 'en'
  ) => {
    return this.httpClient.get(`${currentPage}/${id + ''}/${pageType}`, {
      params: {
        language,
      },
    });
  };

  detail = async (id?: number, currentPage?: string) => {
    return this.httpClient.get(`${currentPage}/${id + ''}`);
  };

  search = async (keyword: string) => {
    return axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=ko&query=${keyword}`
    );
  };
}
