import { User } from '../user.entity';

export const mockUser: User = {
  id: 'uuid-123',
  fullName: 'John Doe',
  email: 'john@email.com',
  cpf: '12345678901',
  favoriteColor: '#FF0000',
  observations: null,
  createdAt: new Date(),
};