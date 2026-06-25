import { Body, Controller, Get, HttpCode, HttpStatus, Patch, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserColorDto } from './dto/user.dto';
import { PaginationDto, PaginatedType } from '../../common/dto/pagination.dto';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/list-paginated')
  getAllUsersPaginated(@Query() pagination: PaginationDto): Promise<PaginatedType<User>> {
    return this.userService.getAllUsersPaginated(pagination);
  }

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
