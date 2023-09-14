import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BurgerModule } from './burger/burger.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfigService } from './configs/typeorm-config/typeorm-config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeormConfigService,
    }),
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: '.env',
    }),
    BurgerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
