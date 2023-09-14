import { Module } from '@nestjs/common';
import { BurgerService } from './burger.service';
import { BurgerController } from './burger.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Burger } from './entities/burger.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Burger])],
  controllers: [BurgerController],
  providers: [BurgerService],
})
export class BurgerModule {}
