import { MigrationInterface, QueryRunner } from 'typeorm';

export class slugUnique1670867573680 implements MigrationInterface {
  name = 'slugUnique1670867573680';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`project\` ADD UNIQUE INDEX \`IDX_6fce32ddd71197807027be6ad3\` (\`slug\`)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`project\` DROP INDEX \`IDX_6fce32ddd71197807027be6ad3\``,
    );
  }
}
