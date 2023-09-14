import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  getHello(): string {
    console.log(process.env.DB_USER);
    return `Hello World ${this.configService.get('ENV')}`;
  }
}
