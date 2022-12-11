import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProjectCaseStudy } from './project-case-study.entity';
import { ProjectCategory } from './project-category.entity';
import { Technology } from '../../technology/entities/technology.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(() => ProjectCategory, (category) => category.projects)
  category: ProjectCategory;

  @Column()
  type: string;

  @Column()
  role: string;

  @Column()
  duration: string;

  @Column()
  @CreateDateColumn()
  createTime: Date;

  @OneToOne(() => ProjectCaseStudy, (caseStudy) => caseStudy.project)
  caseStudy: ProjectCaseStudy;

  @ManyToMany(() => Technology, (technology) => technology.projects)
  @JoinTable()
  technologies: Technology[];
}
