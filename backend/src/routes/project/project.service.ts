import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import {
  CreateCaseStudyDto,
  CreateProjectDto,
  UpdateCaseStudyDto,
} from './project.dto';
import { ProjectCaseStudy } from './entities/project-case-study.entity';
import { plainToClass } from 'class-transformer';
import { ProjectCategory } from './entities/project-category.entity';
import { Technology } from '../technology/entities/technology.entity';
import { ProjectCaseSection } from './entities/project-case-section.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    @InjectRepository(ProjectCaseStudy)
    private projectCaseStudyRepository: Repository<ProjectCaseStudy>,
    @InjectRepository(ProjectCaseStudy)
    private projectCaseSectionRepository: Repository<ProjectCaseSection>,
    @InjectRepository(ProjectCategory)
    private projectCategoryRepository: Repository<ProjectCategory>,
    @InjectRepository(Technology)
    private technologyRepository: Repository<Technology>,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const newProject = new Project();

    // category
    const category = await this.projectCategoryRepository.findOne({
      where: {
        id: createProjectDto.categoryId,
      },
    });

    if (category) {
      newProject.category = category;
    } else {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    // technology
    if (createProjectDto.technologies?.length > 0) {
      const technologies = await this.technologyRepository?.findBy({
        id: In(createProjectDto.technologies || null),
      });

      if (technologies.length > 0) {
        newProject.technologies = technologies;
      } else {
        throw new HttpException('Technologies not found', HttpStatus.NOT_FOUND);
      }
    }

    delete createProjectDto.categoryId;
    delete createProjectDto.technologies;
    Object.assign(newProject, plainToClass(Project, createProjectDto));
    return await this.projectRepository.manager.save(newProject);
  }

  async getAll(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  async get(id: number): Promise<Project> {
    const project = await this.projectRepository.findOne({
      relations: {
        caseStudy: {
          caseSections: true,
        },
        category: true,
        technologies: true,
      },
      where: { id },
    });

    if (project?.id) {
      return project;
    } else {
      throw new HttpException(
        'No project with this id exists',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getCaseStudy(id: number): Promise<any> {
    const project = await this.projectRepository.findOne({
      relations: {
        caseStudy: {
          caseSections: true,
        },
      },
      where: { id },
    });

    if (project?.caseStudy?.id) {
      return project.caseStudy;
    } else {
      throw new HttpException(
        'No case study found for this project',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async createCaseStudy(
    createCaseStudyDto: CreateCaseStudyDto,
    id: number,
  ): Promise<ProjectCaseStudy> {
    const newCaseStudy = new ProjectCaseStudy();

    const project = await this.get(id);
    if (project) {
      newCaseStudy.project = project;
    } else {
      throw new HttpException(
        'Project not found, Please make sure you have created this project first',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!project.caseStudy) {
      Object.assign(
        newCaseStudy,
        plainToClass(ProjectCaseStudy, createCaseStudyDto),
      );
      return await this.projectCaseStudyRepository.manager.save(newCaseStudy);
    } else {
      throw new HttpException(
        'Case study already exists for this project',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async updateCaseStudy(
    updateCaseStudyDto: UpdateCaseStudyDto,
    id: number,
  ): Promise<any> {
    const project = await this.get(id);

    const newCaseStudy = new ProjectCaseStudy();

    const caseStudySections = [
      ...(project.caseStudy?.caseSections || []),
      ...updateCaseStudyDto.caseSections,
    ];

    if (project.caseStudy?.caseSections.length > 0) {
      Object.assign(
        newCaseStudy,
        plainToClass(ProjectCaseStudy, {
          ...project.caseStudy,
          caseSections: caseStudySections,
        }),
      );
      return await this.projectCaseStudyRepository.manager.save(newCaseStudy);
    } else {
      throw new HttpException(
        'No case study exists for this project',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
