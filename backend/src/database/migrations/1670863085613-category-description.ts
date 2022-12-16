import { MigrationInterface, QueryRunner } from 'typeorm';

export class categoryDescription1670863085613 implements MigrationInterface {
  name = 'categoryDescription1670863085613';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`project_category\` ADD \`description\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`project_category\` DROP COLUMN \`description\``,
    );
  }
}
