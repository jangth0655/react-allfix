import { checkError } from '../httpError';
import { MovieClient } from './movieClient';

export class MovieAPI {
  constructor(private api: MovieClient) {}

  popular = async <T>(page: number, moviePage: string) => {
    try {
      const result = await this.api.popularMovie<T>({ page }, moviePage);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };

  nowPlay = async <T>(page: number, moviePage: string) => {
    try {
      const result = await this.api.nowPlaying<T>({ page }, moviePage);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };

  upComing = async <T>(page: number, moviePage: string) => {
    try {
      const result = await this.api.upComing<T>({ page }, moviePage);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };

  topRated = async <T>(page: number, moviePage: string) => {
    try {
      const result = await this.api.topRated<T>({ page }, moviePage);
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

  recommendation = async <T>(id: number, moviePage: string) => {
    try {
      const result = await this.api.recommendation<T>(id, moviePage);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };

  cast = async <T>(id: number, moviePage: string) => {
    try {
      const result = await this.api.cast<T>(id, moviePage);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };

  review = async <T>(id: number, moviePage: string) => {
    try {
      const result = await this.api.reviews<T>(id, moviePage);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        checkError(error);
      }
      console.warn(error);
    }
  };

  keyword = async <T>(id: number, moviePage: string) => {
    try {
      const result = await this.api.keyword<T>(id, moviePage);
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
