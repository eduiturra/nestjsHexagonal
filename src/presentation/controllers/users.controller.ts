import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../application/services/app.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    this.appService.userCreate();
    return '';
  }
}
