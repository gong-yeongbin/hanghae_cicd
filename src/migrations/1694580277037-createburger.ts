import { MigrationInterface, QueryRunner } from 'typeorm';

export class Createburger1694580277037 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE BURGER (id SERIAL, name varchar not null , price integer not null)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
