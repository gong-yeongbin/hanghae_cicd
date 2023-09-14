import { Test, TestingModule } from '@nestjs/testing';
import { BurgerService } from './burger.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Burger } from './entities/burger.entity';

describe('BurgerService', () => {
  let service: BurgerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BurgerService],
    }).compile();

    service = module.get<BurgerService>(BurgerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
