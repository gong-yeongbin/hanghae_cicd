import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'burger' })
export class Burger {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'integer' })
  price: number;
}
