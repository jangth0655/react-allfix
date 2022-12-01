import { checkError } from '../httpError';
import { TvClient } from './TvClient';

export class TvAPI {
  constructor(private api: TvClient) {}

  tvsByCategory = async (page: number, tvPage: string) => {
    try {
      const result = await this.api.tvs({ page }, tvPage);
      return result.data;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };

  tvsByType = async (id: number, tvPage: string) => {
    try {
      const result = await this.api.tv(id, tvPage);
      return result.data;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };

  detail = async (id: number) => {
    try {
      const result = await this.api.detail(id);
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
