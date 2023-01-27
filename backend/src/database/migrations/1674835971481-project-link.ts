import { MigrationInterface, QueryRunner } from 'typeorm';

export class projectLink1674835971481 implements MigrationInterface {
  name = 'projectLink1674835971481';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_6fce32ddd71197807027be6ad3\` ON \`project\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`project\` ADD \`link\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`project\` ADD UNIQUE INDEX \`IDX_6fce32ddd71197807027be6ad3\` (\`slug\`)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`project\` DROP INDEX \`IDX_6fce32ddd71197807027be6ad3\``,
    );
    await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`link\``);
    await queryRunner.query(
      `CREATE UNIQUE INDEX \`IDX_6fce32ddd71197807027be6ad3\` ON \`project\` (\`slug\`)`,
    );
  }
}
