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

  relatedList = async (id: number, currentPage: string, pageType: string) => {
    try {
      const result = await this.api.relatedList(id, currentPage, pageType);
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

  search = async (keyword: string) => {
    try {
      const result = await this.api.search(keyword);
      return result.data;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };
}
