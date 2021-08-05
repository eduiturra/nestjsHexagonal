import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UserUpdateCommand } from '../impl/user-update.command';

@CommandHandler(UserUpdateCommand)
export class UserUpdateHandler implements ICommandHandler<UserUpdateCommand> {
  constructor(
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: UserUpdateCommand) {
    const { data} = command;
    console.log(command);
  }
}