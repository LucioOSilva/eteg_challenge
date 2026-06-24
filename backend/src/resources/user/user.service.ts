import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  setUserPreferences(): string {
    return 'USER PREFERENCES';
  }
}
