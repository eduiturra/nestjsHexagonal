import { Module } from '@nestjs/common';
import { AppController } from './presentation/controllers/app.controller';
import { UsersModule } from './infrastructure/ioc/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule],
  providers: [],
  controllers: [AppController],
})
export class AppModule {}
