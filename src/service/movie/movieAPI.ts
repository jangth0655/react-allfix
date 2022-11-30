import { checkError } from '../httpError';
import { MovieClient } from './movieClient';

export class MovieAPI {
  constructor(private api: MovieClient) {}

  moviesByCategory = async (page: number, moviePage: string) => {
    try {
      const result = await this.api.movies({ page }, moviePage);
      return result.data;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };

  moviesByType = async (id: number, moviePage: string) => {
    try {
      const result = await this.api.movie(id, moviePage);
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
