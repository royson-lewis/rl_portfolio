import { MigrationInterface, QueryRunner } from 'typeorm';

export class projectLogoAndColor1674401351808 implements MigrationInterface {
  name = 'projectLogoAndColor1674401351808';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_6fce32ddd71197807027be6ad3\` ON \`project\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`project\` ADD \`logo\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`project\` ADD \`brandPrimaryColor\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`project\` ADD UNIQUE INDEX \`IDX_6fce32ddd71197807027be6ad3\` (\`slug\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`project_case_section\` DROP COLUMN \`description\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`project_case_section\` ADD \`description\` longtext NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`project_case_section\` DROP COLUMN \`description\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`project_case_section\` ADD \`description\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`project\` DROP INDEX \`IDX_6fce32ddd71197807027be6ad3\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`project\` DROP COLUMN \`brandPrimaryColor\``,
    );
    await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`logo\``);
    await queryRunner.query(
      `CREATE UNIQUE INDEX \`IDX_6fce32ddd71197807027be6ad3\` ON \`project\` (\`slug\`)`,
    );
  }
}
