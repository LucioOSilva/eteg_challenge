import { Controller, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch('/update-user-preferences')
  setUserPreferences(): string {
    return this.userService.setUserPreferences();
  }
}
