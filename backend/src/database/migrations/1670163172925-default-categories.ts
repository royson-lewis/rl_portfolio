import { MigrationInterface, QueryRunner } from 'typeorm';

export class defaultCategories1670163172925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `insert into project_category (name, description) values ('UI/UX Design', 'Showcases projects that demonstrate my skills in creating intuitive and visually appealing user interface designs and user experiences.')`,
    );
    await queryRunner.query(
      `insert into project_category (name, description) values ('Web Development', 'Showcases projects that combine my skills in designing, as well as in front-end and back-end development technologies.')`,
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
