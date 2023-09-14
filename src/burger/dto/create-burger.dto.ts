import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBurgerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  readonly price: number = 0;
}
