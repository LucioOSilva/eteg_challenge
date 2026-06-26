import { request } from './http';

export const listCustomersPaginated = (page = 1,limit = 10): Promise<RestResponse<PaginatedType<Customer>>> =>
  request<RestResponse<PaginatedType<Customer>>>('GET', `/api/users/list-paginated?page=${page}&limit=${limit}`);

export const createCustomer = (payload: CreateCustomerPayload): Promise<RestResponse<Customer>> =>
  request<RestResponse<Customer>>('POST', '/api/users/create', payload);

export const updateCustomerColor = (payload: UpdateCustomerColorPayload): Promise<RestResponse<Customer>> =>
  request<RestResponse<Customer>>('PATCH', '/api/users/update-user-color', payload);