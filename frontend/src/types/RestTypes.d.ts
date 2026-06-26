type PaginationMeta = {
  totalItems: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

type PaginatedType<T> = {
  data: T[];
  meta: PaginationMeta;
};

type RestResponse<T> = {
  data?: T;
  message?: string;
  status?: number;
};