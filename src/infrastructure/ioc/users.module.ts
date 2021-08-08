import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from '../../application/services/app.service';
import { CommandHandlers } from '../../application/commands/handlers';
import { Commands } from '../../application/commands/impl';
import { HeroKilledDragonEvent } from '../../application/events/handlers/hero.handler';
import { HeroKilledDragonHandler } from '../../application/events/impl/hero.event';
import { IUsersRepository } from '../../application/ports/IUsersRepository';
import { HeroesGameSagas } from '../../application/sagas/hero.saga';
import { UsersController } from '../../presentation/controllers/users.controller';
import { UsersRepository } from '../database/repositories/UsersRepository';
import { SharedModule } from './shared.module';
@Module({
  imports: [CqrsModule,
    SharedModule, 
    TypeOrmModule.forFeature([UsersRepository])],
  controllers: [UsersController],
  providers: [
    ...Commands,
    ...CommandHandlers,
    HeroKilledDragonEvent,
    HeroKilledDragonHandler,
    HeroesGameSagas,
    AppService,
    ],
})
export class UsersModule {}
