import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(dto: CreateUserDto) {
    const exists = await this.userRepository.findOneBy({ email: dto.email });

    if (exists) {
      throw new ConflictException('User already exists');
    }

    const user = this.userRepository.create(dto);
    return await this.userRepository.save(user);
  }
  
  setUserPreferences(): string {
    return 'USER PREFERENCES';
  }

}
