import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { UserCreateCommand } from '../commands/impl/user-create.command';

@Injectable()
export class AppService {
  constructor(private commandBus: CommandBus) {}

  async userCreate() {
    return this.commandBus.execute(
      new UserCreateCommand('1' , 'sdsd')
    );
  }
  getHello(): string {
    return 'Hello World!';
  }
}
