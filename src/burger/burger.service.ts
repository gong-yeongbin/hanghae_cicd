import { Injectable } from '@nestjs/common';
import { CreateBurgerDto } from './dto/create-burger.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Burger } from './entities/burger.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BurgerService {
  constructor(
    @InjectRepository(Burger)
    private burgerRepository: Repository<Burger>,
  ) {}

  async create(createBurgerDto: CreateBurgerDto) {
    const burgerEntity: Burger = await this.burgerRepository.save({
      ...createBurgerDto,
    });
    return burgerEntity;
  }

  async findAll() {
    return await this.burgerRepository.find();
  }

  async findOne(id: number) {
    return await this.burgerRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    return await this.burgerRepository.delete({ id });
  }
}
