import { MigrationInterface, QueryRunner } from 'typeorm';

export class projectGallery1670864882304 implements MigrationInterface {
  name = 'projectGallery1670864882304';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`project_gallery\` (\`id\` int NOT NULL AUTO_INCREMENT, \`imgLink\` varchar(255) NOT NULL, \`alt\` varchar(255) NOT NULL, \`projectId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`project_gallery\` ADD CONSTRAINT \`FK_93ed060a6fbe2d3e07ac02f9e20\` FOREIGN KEY (\`projectId\`) REFERENCES \`project\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`project_gallery\` DROP FOREIGN KEY \`FK_93ed060a6fbe2d3e07ac02f9e20\``,
    );
    await queryRunner.query(`DROP TABLE \`project_gallery\``);
  }
}
