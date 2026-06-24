import { Test, TestingModule } from '@nestjs/testing';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';
import { User } from '../user.entity';
import { CreateUserDto, UpdateUserColorDto } from '../dto/user.dto';

const mockUser: User = {
  id: 'uuid-123',
  fullName: 'John Doe',
  cpf: '352.028.590-82',
  email: 'john@email.com',
  favoriteColor: '#FF0000',
  observations: null,
  createdAt: new Date(),
};

const mockUserService = {
  createUser: jest.fn(),
  updateUserColor: jest.fn(),
};

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createUser', () => {
    const dto: CreateUserDto = {
      fullName: 'John Doe',
      cpf: '352.028.590-82',
      email: 'john@email.com',
      favoriteColor: '#FF0000',
    };

    it('deve criar um usuário com sucesso', async () => {
      mockUserService.createUser.mockResolvedValue(mockUser);

      const result = await controller.createUser(dto);

      expect(mockUserService.createUser).toHaveBeenCalledWith(dto);
      expect(result.cpf).toBe(dto.cpf);
      expect(result.email).toBe(dto.email);
    });

    it('deve lançar ConflictException se e-mail já existe', async () => {
      mockUserService.createUser.mockRejectedValue(new ConflictException());

      await expect(controller.createUser(dto)).rejects.toThrow(ConflictException);
    });
  });

  describe('updateUser', () => {
    const dto: UpdateUserColorDto = {
      id: 'uuid-123',
      favoriteColor: '#00FF00',
    };

    it('deve atualizar a cor com sucesso', async () => {
      const updatedUser = { ...mockUser, favoriteColor: dto.favoriteColor };
      mockUserService.updateUserColor.mockResolvedValue(updatedUser);

      const result = await controller.updateUser(dto);

      expect(mockUserService.updateUserColor).toHaveBeenCalledWith(dto);
      expect(result.favoriteColor).toBe(dto.favoriteColor);
    });

    it('deve lançar NotFoundException se usuário não existe', async () => {
      mockUserService.updateUserColor.mockRejectedValue(new NotFoundException());

      await expect(controller.updateUser(dto)).rejects.toThrow(NotFoundException);
    });
  });
});