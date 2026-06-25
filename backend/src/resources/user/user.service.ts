import { Injectable, ConflictException, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserColorDto } from './dto/user.dto';
import { regexFormatCPF, regexValidateCPF, regexValidateEmail } from '../../utils/regex.utils';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    if (!regexValidateEmail(dto.email)) {
      throw new BadRequestException('invalid E-mail');
    }

    if (!regexValidateCPF(dto.cpf)) {
      throw new BadRequestException('invalid CPF');
    }

    const exists = await this.userRepository.findOneBy({ email: dto.email });
    if (exists) {
      throw new ConflictException('User already exists');
    }

    const user = this.userRepository.create({
      ...dto,
      cpf: regexFormatCPF(dto.cpf),
    });

    return this.userRepository.save(user);
  }

  async updateUserColor(dto: UpdateUserColorDto): Promise<User> {
    const user = await this.userRepository.findOneBy({ id: dto.id });

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    user.favoriteColor = dto.favoriteColor;
    return this.userRepository.save(user);
  }
}