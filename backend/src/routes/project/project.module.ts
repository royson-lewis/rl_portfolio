import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { ProjectCaseStudy } from './entities/project-case-study.entity';
import { ProjectCategory } from './entities/project-category.entity';
import { Technology } from '../technology/entities/technology.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Project,
      ProjectCaseStudy,
      ProjectCategory,
      Technology,
    ]),
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
  exports: [ProjectService],
})
export class ProjectModule {}
