import { Injectable } from '@nestjs/common';
import { CreateBurgerDto } from './dto/create-burger.dto';

@Injectable()
export class BurgerService {
  private data: { id: number; name: string; price: number }[] = [];
  create(createBurgerDto: CreateBurgerDto) {
    this.data.push({ id: this.data.length + 1, ...createBurgerDto });
    return createBurgerDto;
  }

  findAll() {
    return this.data;
  }

  findOne(id: number) {
    return this.data.find((item) => item.id === id);
  }

  remove(id: number) {
    const index: number = this.data.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }
}
