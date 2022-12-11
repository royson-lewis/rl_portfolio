import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProjectCaseSection } from './project-case-section.entity';
import { Project } from './project.entity';

@Entity()
export class ProjectCaseStudy {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Project, (project) => project.caseStudy)
  @JoinColumn()
  project: Project;

  @OneToMany(() => ProjectCaseSection, (caseSection) => caseSection.caseStudy, {
    cascade: true,
  })
  caseSections: ProjectCaseSection[];
}
