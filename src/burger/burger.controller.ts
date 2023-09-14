import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BurgerService } from './burger.service';
import { CreateBurgerDto } from './dto/create-burger.dto';

@Controller('burger')
export class BurgerController {
  constructor(private readonly burgerService: BurgerService) {}

  @Post()
  create(@Body() createBurgerDto: CreateBurgerDto) {
    return this.burgerService.create(createBurgerDto);
  }

  @Get()
  findAll() {
    return this.burgerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.burgerService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.burgerService.remove(+id);
  }
}
