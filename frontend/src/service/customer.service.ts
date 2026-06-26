import { request } from './http';

export const listCustomersPaginated = (page = 1,limit = 10): Promise<RestResponse<PaginatedType<Customer>>> =>
  request<RestResponse<PaginatedType<Customer>>>('GET', `/api/users/list-paginated?page=${page}&limit=${limit}`);

export const createCustomer = (payload: CreateCustomerPayload): Promise<Customer> =>
  request<Customer>('POST', '/api/users/create', payload);

export const updateCustomerColor = (payload: UpdateCustomerColorPayload): Promise<Customer> =>
  request<Customer>('PATCH', '/api/users/update-user-color', payload);