import { MigrationInterface, QueryRunner } from 'typeorm';

export class base1670163154094 implements MigrationInterface {
  name = 'base1670163154094';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`project_category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`technology\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`logo\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`project\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`type\` varchar(255) NOT NULL, \`role\` varchar(255) NOT NULL, \`duration\` varchar(255) NOT NULL, \`createTime\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`categoryId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`project_case_study\` (\`id\` int NOT NULL AUTO_INCREMENT, \`projectId\` int NULL, UNIQUE INDEX \`REL_81af9ff9292617bcfed637463d\` (\`projectId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`project_case_section\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`mainImage\` varchar(255) NULL, \`subsection\` varchar(255) NULL, \`caseStudyId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`project_technologies_technology\` (\`projectId\` int NOT NULL, \`technologyId\` int NOT NULL, INDEX \`IDX_2e780097cfd60204dd415ed7cf\` (\`projectId\`), INDEX \`IDX_c7d578080e24a8249d6754d67b\` (\`technologyId\`), PRIMARY KEY (\`projectId\`, \`technologyId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`project\` ADD CONSTRAINT \`FK_3caef906211aad45559039f11f9\` FOREIGN KEY (\`categoryId\`) REFERENCES \`project_category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`project_case_study\` ADD CONSTRAINT \`FK_81af9ff9292617bcfed637463dd\` FOREIGN KEY (\`projectId\`) REFERENCES \`project\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`project_case_section\` ADD CONSTRAINT \`FK_9ee416938cabfa93e4a0b6bdb3a\` FOREIGN KEY (\`caseStudyId\`) REFERENCES \`project_case_study\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`project_technologies_technology\` ADD CONSTRAINT \`FK_2e780097cfd60204dd415ed7cfd\` FOREIGN KEY (\`projectId\`) REFERENCES \`project\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`project_technologies_technology\` ADD CONSTRAINT \`FK_c7d578080e24a8249d6754d67b4\` FOREIGN KEY (\`technologyId\`) REFERENCES \`technology\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`project_technologies_technology\` DROP FOREIGN KEY \`FK_c7d578080e24a8249d6754d67b4\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`project_technologies_technology\` DROP FOREIGN KEY \`FK_2e780097cfd60204dd415ed7cfd\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`project_case_section\` DROP FOREIGN KEY \`FK_9ee416938cabfa93e4a0b6bdb3a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`project_case_study\` DROP FOREIGN KEY \`FK_81af9ff9292617bcfed637463dd\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`project\` DROP FOREIGN KEY \`FK_3caef906211aad45559039f11f9\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_c7d578080e24a8249d6754d67b\` ON \`project_technologies_technology\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_2e780097cfd60204dd415ed7cf\` ON \`project_technologies_technology\``,
    );
    await queryRunner.query(`DROP TABLE \`project_technologies_technology\``);
    await queryRunner.query(`DROP TABLE \`project_case_section\``);
    await queryRunner.query(
      `DROP INDEX \`REL_81af9ff9292617bcfed637463d\` ON \`project_case_study\``,
    );
    await queryRunner.query(`DROP TABLE \`project_case_study\``);
    await queryRunner.query(`DROP TABLE \`project\``);
    await queryRunner.query(`DROP TABLE \`technology\``);
    await queryRunner.query(`DROP TABLE \`project_category\``);
  }
}
