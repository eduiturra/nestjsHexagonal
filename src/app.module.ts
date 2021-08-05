import { Module } from '@nestjs/common';
import { AppController } from './presentation/controllers/app.controller';
import { UsersModule } from './infrastructure/ioc/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './infrastructure/ioc/posts.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    PostsModule],
  providers: [],
  controllers: [AppController],
})
export class AppModule {}
