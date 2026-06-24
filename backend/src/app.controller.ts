import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/health-check')
  getHello(): string {
    return this.appService.health();
  }
}
