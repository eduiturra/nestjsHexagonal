import { Module } from '@nestjs/common';
import { SharedModule } from './shared.module';

@Module({
  imports: [SharedModule],
  providers: [
  ],
})
export class PostsModule {}
