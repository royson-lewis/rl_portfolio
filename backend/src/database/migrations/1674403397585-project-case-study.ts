import { MigrationInterface, QueryRunner } from "typeorm";

export class projectCaseStudy1674403397585 implements MigrationInterface {
    name = 'projectCaseStudy1674403397585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_6fce32ddd71197807027be6ad3\` ON \`project\``);
        await queryRunner.query(`ALTER TABLE \`project\` ADD UNIQUE INDEX \`IDX_6fce32ddd71197807027be6ad3\` (\`slug\`)`);
        await queryRunner.query(`ALTER TABLE \`project_case_section\` CHANGE \`title\` \`title\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`project_case_section\` CHANGE \`title\` \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`project\` DROP INDEX \`IDX_6fce32ddd71197807027be6ad3\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_6fce32ddd71197807027be6ad3\` ON \`project\` (\`slug\`)`);
    }

}
