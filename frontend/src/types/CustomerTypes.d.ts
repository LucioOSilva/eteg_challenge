type Customer = {
  id: string;
  fullName: string;
  cpf: string;
  email: string;
  favoriteColor: string;
  observations: string | null;
  createdAt: string;
};

type CreateCustomerPayload = {
  fullName: string;
  cpf: string;
  email: string;
  favoriteColor: string;
  observations?: string;
};

type UpdateCustomerColorPayload = {
  id: string;
  favoriteColor: string;
};
