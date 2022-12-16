import { MigrationInterface, QueryRunner } from 'typeorm';

export class technologyAdditions1671211591642 implements MigrationInterface {
  name = 'technologyAdditions1671211591642';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_6fce32ddd71197807027be6ad3\` ON \`project\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`technology\` ADD \`featured\` tinyint NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`technology\` ADD \`rank\` int NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`technology\` ADD \`accentColor\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`project\` ADD UNIQUE INDEX \`IDX_6fce32ddd71197807027be6ad3\` (\`slug\`)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`project\` DROP INDEX \`IDX_6fce32ddd71197807027be6ad3\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`technology\` DROP COLUMN \`accentColor\``,
    );
    await queryRunner.query(`ALTER TABLE \`technology\` DROP COLUMN \`rank\``);
    await queryRunner.query(
      `ALTER TABLE \`technology\` DROP COLUMN \`featured\``,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX \`IDX_6fce32ddd71197807027be6ad3\` ON \`project\` (\`slug\`)`,
    );
  }
}
