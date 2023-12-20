export class HttpError extends Error {
  message: string;
  status: number;
  errors: any[];

  constructor(status: number, message: string, errors?: any[]) {
    super(message);

    this.message = message;
    this.status = status;
    this.errors = <any[]>errors;
  }
}
