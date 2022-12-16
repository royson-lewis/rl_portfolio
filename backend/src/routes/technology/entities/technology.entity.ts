import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '../../project/entities/project.entity';
import { ITechnology } from '../technology.interface';

@Entity()
export class Technology implements ITechnology {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  logo: string;

  @Column()
  featured: boolean;

  @Column()
  rank: number;

  @Column({ nullable: true })
  accentColor: string;

  @ManyToMany(() => Project, (project) => project.technologies)
  projects: Project[];
}
