import axios, { AxiosInstance } from 'axios';
import { RelatedListType } from '../model/types';

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

  relatedList = async ({
    id,
    currentPage,
    pageType,
    language,
    page,
  }: RelatedListType) => {
    return this.httpClient.get(`${currentPage}/${id + ''}/${pageType}`, {
      params: {
        language,
        page,
      },
    });
  };

  detail = async (id?: number, currentPage?: string) => {
    return this.httpClient.get(`${currentPage}/${id + ''}`);
  };

  search = async (keyword?: string, currentPage?: string) => {
    return axios.get(
      `${BASE_URL}/search/${currentPage}?api_key=${API_KEY}&language=ko&query=${keyword}`
    );
  };
}
