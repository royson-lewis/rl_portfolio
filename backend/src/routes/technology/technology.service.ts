import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTechnologyDto } from './technology.dto';
import { plainToClass } from 'class-transformer';
import { Technology } from './entities/technology.entity';

@Injectable()
export class TechnologyService {
  constructor(
    @InjectRepository(Technology)
    private technologyRepository: Repository<Technology>,
  ) {}

  async create(createTechnologyDto: CreateTechnologyDto): Promise<Technology> {
    const newTechnology = new Technology();
    Object.assign(newTechnology, plainToClass(Technology, createTechnologyDto));
    return await this.technologyRepository.manager.save(newTechnology);
  }

  async getAll(): Promise<Technology[]> {
    return await this.technologyRepository.find();
  }

  async getTechnologyProjects(): Promise<Technology[]> {
    return await this.technologyRepository.find({
      relations: {
        projects: true,
      },
    });
  }

  async get(id: number): Promise<Technology> {
    const technology = await this.technologyRepository.findOne({
      where: { id },
    });
    if (technology?.id) {
      return technology;
    } else {
      throw new HttpException(
        {
          message: 'No technology with this id exists',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
