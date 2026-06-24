import { Body, Controller, HttpCode, HttpStatus, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserColorDto } from './dto/user.dto';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() dto: CreateUserDto): Promise<User> {
    return this.userService.createUser(dto);
  }

  @Patch('/update-user-color')
  updateUser(@Body() dto: UpdateUserColorDto): Promise<User> {
    return this.userService.updateUserColor(dto);
  }
}
