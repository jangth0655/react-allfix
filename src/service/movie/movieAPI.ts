import { checkError } from '../httpError';
import { MovieClient } from './movieClient';

export class MovieAPI {
  constructor(private api: MovieClient) {}

  moviesByCategory = async <T>(page: number, moviePage: string) => {
    try {
      const result = await this.api.movies<T>({ page }, moviePage);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };

  moviesByType = async <T>(id: number, moviePage: string) => {
    try {
      const result = await this.api.movie<T>(id, moviePage);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };

  detail = async <T>(id: number) => {
    try {
      const result = await this.api.detail<T>(id);
      return result;
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
      return result;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };
}
