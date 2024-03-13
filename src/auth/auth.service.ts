import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientKafka,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    console.log('Có chạy hehe');
    this.authClient.emit('create_user', JSON.stringify(createUserDto));
  }
}
