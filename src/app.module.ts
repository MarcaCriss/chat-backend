import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { PusherService } from './pusher.service';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true })],
  controllers: [AppController],
  providers: [PusherService],
})
export class AppModule {}
