import { request } from './http';

export const listCustomersPaginated = async (page = 1, limit = 10): Promise<RestResponse<PaginatedType<Customer>> | undefined> => {
  try {
    return await request<RestResponse<PaginatedType<Customer>>>(
      'GET',
      `/api/users/list-paginated?page=${page}&limit=${limit}`
    );
  } catch (error) {
    console.error('Erro ao buscar clientes');
    return undefined;
  }
};

export const createCustomer = async (payload: CreateCustomerPayload): Promise<RestResponse<Customer> | undefined> => {
  try {
    return await request<RestResponse<Customer>>('POST', '/api/users/create', payload);
  } catch (error) {
    console.error('Erro ao criar cliente');
    return undefined;
  }
};

export const updateCustomerColor = async (payload: UpdateCustomerColorPayload): Promise<RestResponse<Customer> | undefined> => {
  try {
    return await request<RestResponse<Customer>>('PATCH', '/api/users/update-user-color', payload);
  } catch (error) {
    console.error('Erro ao atualizar cor do cliente');
    return undefined;
  }
};