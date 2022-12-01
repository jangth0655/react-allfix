import { HttpClient } from './httpClient';
import { checkError } from './httpError';

export class MovieWithTvApi {
  constructor(private api: HttpClient) {}

  listByCategory = async (
    page: number,
    currentPage: string,
    pageType: string
  ) => {
    try {
      const result = await this.api.list({ page }, currentPage, pageType);
      return result.data;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };

  relatedList = async (
    id?: number,
    currentPage?: string,
    pageType?: string,
    language?: 'ko' | 'en'
  ) => {
    try {
      const result = await this.api.relatedList(
        id,
        currentPage,
        pageType,
        language
      );
      return result.data;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };

  detail = async (id?: number, currentPage?: string) => {
    try {
      const result = await this.api.detail(id, currentPage);
      return result.data;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };

  search = async (keyword?: string, currentPage?: string) => {
    if (!keyword || keyword === '') return;
    try {
      const result = await this.api.search(keyword, currentPage);
      return result.data;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };
}
