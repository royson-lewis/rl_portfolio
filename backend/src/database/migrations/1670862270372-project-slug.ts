import { MigrationInterface, QueryRunner } from 'typeorm';

export class projectSlug1670862270372 implements MigrationInterface {
  name = 'projectSlug1670862270372';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`project\` ADD \`slug\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`slug\``);
  }
}
