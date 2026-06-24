import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserService } from '../user.service';
import { User } from '../user.entity';
import { CreateUserDto, UpdateUserColorDto } from '../dto/user.dto';
import { mockUser } from './mock';

const mockRepository = {
  findOneBy: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
};

describe('UserService', () => {
  let service: UserService;
  let repository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createUser', () => {
    const dto: CreateUserDto = {
      fullName: 'John Doe',
      email: 'john@email.com',
      favoriteColor: '#FF0000',
      cpf: '352.028.590-82',
    };

    it('deve criar um usuário com sucesso', async () => {
      mockRepository.findOneBy.mockResolvedValue(null);
      mockRepository.create.mockReturnValue(mockUser);
      mockRepository.save.mockResolvedValue(mockUser);

      const result = await service.createUser(dto);

      expect(mockRepository.findOneBy).toHaveBeenCalledWith({ email: dto.email });
      expect(mockRepository.create).toHaveBeenCalledWith(dto);
      expect(mockRepository.save).toHaveBeenCalledWith(mockUser);
      expect(result).toEqual(mockUser);
    });

    it('deve lançar ConflictException se e-mail já existe', async () => {
      mockRepository.findOneBy.mockResolvedValue(mockUser);

      await expect(service.createUser(dto)).rejects.toThrow(ConflictException);
      expect(mockRepository.create).not.toHaveBeenCalled();
      expect(mockRepository.save).not.toHaveBeenCalled();
    });
  });

  describe('updateUserColor', () => {
    const dto: UpdateUserColorDto = {
      id: 'uuid-123',
      favoriteColor: '#00FF00',
    };

    it('deve atualizar a cor do usuário com sucesso', async () => {
      const updatedUser = { ...mockUser, favoriteColor: dto.favoriteColor };
      mockRepository.findOneBy.mockResolvedValue(mockUser);
      mockRepository.save.mockResolvedValue(updatedUser);

      const result = await service.updateUserColor(dto);

      expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id: dto.id });
      expect(mockRepository.save).toHaveBeenCalledWith({ ...mockUser, favoriteColor: dto.favoriteColor });
      expect(result.favoriteColor).toBe(dto.favoriteColor);
    });

    it('deve lançar NotFoundException se usuário não existe', async () => {
      mockRepository.findOneBy.mockResolvedValue(null);

      await expect(service.updateUserColor(dto)).rejects.toThrow(NotFoundException);
      expect(mockRepository.save).not.toHaveBeenCalled();
    });
  });
});