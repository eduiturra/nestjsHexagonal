import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CqrsModule } from '@nestjs/cqrs';
import { SharedModule } from './../src/infrastructure/ioc/shared.module';
import { UsersController } from './../src/presentation/controllers/users.controller';
import { Commands } from './../src/application/commands/impl';
import { CommandHandlers } from './../src/application/commands/handlers';
import { HeroKilledDragonEvent } from './../src/application/events/handlers/hero.handler';
import { HeroKilledDragonHandler } from './../src/application/events/impl/hero.event';
import { HeroesGameSagas } from './../src/application/sagas/hero.saga';
import { AppService } from './../src/application/app.service';
import { IUsersRepository } from './../src/application/ports/IUsersRepository';
import { UsersModule } from '../src/infrastructure/ioc/users.module';

class ConfigServiceMock {
  get(key: string): string {
    switch (key) {
      case 'API_SERVICE_ENDPOINT':
        return '';
    }
  }
}

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let userRepository = { findAll: () => ['test'] };
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule]  
    })
    .overrideProvider(IUsersRepository)
    .useValue(ConfigServiceMock)
    .compile();   
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', async () => {
     return await request(app.getHttpServer())
      .get('/users')
      .expect(200)

  });

  afterAll(async () => {
    await app.close();
  });
});

