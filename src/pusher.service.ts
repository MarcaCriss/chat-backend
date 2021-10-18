import { Injectable } from '@nestjs/common';
import Pusher from 'pusher';

@Injectable()
export class PusherService {
  pusher: Pusher;

  constructor() {
    this.pusher = new Pusher({
      appId: process.env.APPID,
      key: process.env.KEY,
      secret: process.env.SECRET,
      cluster: process.env.CLUSTER,
      useTLS: true,
    });
  }

  async trigger(channel: string, message: string, data: any) {
    await this.pusher.trigger(channel, message, data);
  }
}
