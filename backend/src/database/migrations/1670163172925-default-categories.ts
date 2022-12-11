import { MigrationInterface, QueryRunner } from 'typeorm';

export class defaultCategories1670163172925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `insert into project_category (name) values ('UI/UX Design')`,
    );
    await queryRunner.query(
      `insert into project_category (name) values ('Web Development')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `delete from project_category where name='UI/UX Development'`,
    );
    await queryRunner.query(
      `delete from project_category where name='Web Development'`,
    );
  }
}
