import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { User } from '../../../domain/models/User';
import { SharedService } from '../../../infrastructure/client/shared.service';
import { UserCreateCommand } from '../impl/user-create.command';

@CommandHandler(UserCreateCommand)
export class UserCreateHandler implements ICommandHandler<UserCreateCommand> {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly sharedService: SharedService
  ) {}

  async execute(command: UserCreateCommand) {
    const { heroId, dragonId } = command;
    console.log(command);
    console.log(this.sharedService.getHello());
    var user = this.publisher.mergeObjectContext(
        new User("nombre", "email"),
     );
    
    user.killEnemy("1");
    user.commit();
  }
}