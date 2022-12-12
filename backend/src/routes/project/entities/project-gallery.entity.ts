import { Column, Entity, ManyToMany, OneToMany,ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import {Project} from "./project.entity";
import {ProjectCategory} from "./project-category.entity";

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
