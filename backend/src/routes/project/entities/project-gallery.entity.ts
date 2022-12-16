import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class ProjectGallery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imgLink: string;

  @Column()
  alt: string;

  @ManyToOne(() => Project, (project) => project.gallery)
  project: Project;
}
