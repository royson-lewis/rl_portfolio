import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Index
} from 'typeorm';
import { ProjectCaseStudy } from './project-case-study.entity';
import { ProjectCategory } from './project-category.entity';
import { Technology } from '../../technology/entities/technology.entity';
import {ProjectGallery} from "./project-gallery.entity";
import {IProject} from "../project.interface";

@Entity()
export class Project implements IProject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Index()
  @Column({ unique: true })
  slug: string;

  @Column()
  mainImage: string;

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

  @OneToMany(() => ProjectGallery, (gallery) => gallery.project, {
    cascade: true
  })
  gallery: ProjectGallery[];
}
