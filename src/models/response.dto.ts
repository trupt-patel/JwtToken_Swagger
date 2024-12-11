export class ResponseDto<T> {
    code: number;
    tag: string
    message: string | null | boolean;
    data?: T;
  }