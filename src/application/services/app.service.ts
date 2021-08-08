import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { UsersRepository } from 'src/infrastructure/database/repositories/UsersRepository';
import { CreateUserDto } from 'src/presentation/dtos/user-create.dto';
import { UserCreateCommand } from '../commands/impl/user-create.command';

@Injectable()
export class AppService {
  constructor(
    private commandBus: CommandBus,
    private readonly userRepository: UsersRepository,
    ) {}

  async userCreateCommand() {
    return this.commandBus.execute(
      new UserCreateCommand('1' , 'sdsd')
    );
  }
  async userCreate(createUserDto: CreateUserDto) {
    this.userRepository.save(createUserDto);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
