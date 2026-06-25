import { User } from '../user.entity';

export const mockUser: User = {
  id: 'uuid-123',
  fullName: 'John Doe',
  email: 'john@email.com',
  cpf: '352.028.590-82',
  favoriteColor: '#ff0000',
  observations: null,
  createdAt: new Date(),
};