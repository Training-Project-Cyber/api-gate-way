import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('Hihi: ', process.env.POSTGRES_DATABASE_TYPE);
    return 'Hello World!';
  }
}
