import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../../application/services/app.service';
import { CreateUserDto } from '../dtos/user-create.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return '';
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    this.appService.userCreate(createUserDto);
    return 'This action adds a new user';
  }

}
