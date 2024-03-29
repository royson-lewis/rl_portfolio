import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectCaseStudy } from './project-case-study.entity';

@Entity()
export class ProjectCaseSection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true, type: 'longtext' })
  description: string;

  @Column({ nullable: true })
  mainImage: string;

  @Column({ nullable: true })
  subsection: 'JSON';

  @ManyToOne(() => ProjectCaseStudy, (caseStudy) => caseStudy.caseSections)
  caseStudy: ProjectCaseStudy;
}
