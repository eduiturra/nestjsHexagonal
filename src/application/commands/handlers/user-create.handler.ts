import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UsersRepository } from 'src/infrastructure/database/repositories/UsersRepository';
import { User } from '../../../domain/models/User';
import { SharedService } from '../../../infrastructure/client/shared.service';
import { UserCreateCommand } from '../impl/user-create.command';

@CommandHandler(UserCreateCommand)
export class UserCreateHandler implements ICommandHandler<UserCreateCommand> {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly sharedService: SharedService,
    private readonly userRepository: UsersRepository
  ) {}

  async execute(command: UserCreateCommand) {
    const { heroId, dragonId } = command;
    console.log(command);
    var user = this.publisher.mergeObjectContext(
        new User("nombre", "email"),
     );
    await this.userRepository.save(user);

    user.killEnemy("1");
    user.commit();
  }
}