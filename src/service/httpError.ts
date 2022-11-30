import axios from 'axios';

export class HttpError extends Error {
  constructor(private status: number, public message: string) {
    super(message);
  }

  get errorMassage() {
    switch (this.status) {
      case 422:
        this.message = '키워드가 필요합니다.';
        break;
      case 401:
        this.message = 'API키가 올바르지 않습니다.';
        break;
      case 404:
        this.message = '페이지를 찾을 수 없습니다.';
        break;
    }
    return this.message;
  }
}

export function checkError(error: Error) {
  if (axios.isAxiosError(error) && error.response) {
    throw new HttpError(error.response.status, error.message);
  }
}
