import { MigrationInterface, QueryRunner } from 'typeorm';

export class defaultCategories1670163172925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `insert into project_category (name, description) values ('UI/UX Design', 'Aliquam vitae in molestie elit faucibus nulla. Et nisl fames adipiscing placerat aliquet pulvinar tellus dictum sagittis. Mattis orci, et egestas purus quisque.')`,
    );
    await queryRunner.query(
      `insert into project_category (name, description) values ('Web Development', 'Aliquam vitae in molestie elit faucibus nulla. Et nisl fames adipiscing placerat aliquet pulvinar tellus dictum sagittis. Mattis orci, et egestas purus quisque.')`,
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
