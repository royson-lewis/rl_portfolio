import { MigrationInterface, QueryRunner } from 'typeorm';

export class descriptionLongtext1670951088828 implements MigrationInterface {
  name = 'descriptionLongtext1670951088828';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_6fce32ddd71197807027be6ad3\` ON \`project\``,
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
      `CREATE UNIQUE INDEX \`IDX_6fce32ddd71197807027be6ad3\` ON \`project\` (\`slug\`)`,
    );
  }
}
