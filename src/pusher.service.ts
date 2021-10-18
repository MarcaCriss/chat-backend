import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Pusher from 'pusher';

@Injectable()
export class PusherService {
  pusher: Pusher;

  constructor(private config: ConfigService) {
    this.pusher = new Pusher({
      appId: config.get('APPID'),
      key: config.get('KEY'),
      secret: config.get('SECRET'),
      cluster: config.get('CLUSTER'),
      useTLS: true,
    });
  }

  async trigger(channel: string, event: string, data: any) {
    await this.pusher.trigger(channel, event, data);
  }
}
