export interface IRESTResponse<T> {
  statusCode?: number | null;
  data?: T | null;
  message?: string | null | any[];
}

export const RESTResponse = (
  statusCode: number = 500,
  data: any = null,
  message: string | null | any[] = null,
): IRESTResponse<any> => {
  return {
    statusCode,
    data,
    message: message ? (Array.isArray(message) ? message[0] : message) : null,
  };
};