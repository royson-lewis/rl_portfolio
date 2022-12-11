import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { LoggingInterceptor } from '../common/interceptors/logging/logging.interceptor';
import { TechnologyService } from './technology.service';
import { CreateTechnologyDto } from './technology.dto';
import handleSuccessResponse from '../../helper/response/handle-success';

@Controller('technologies')
@UseInterceptors(LoggingInterceptor)
export class TechnologyController {
  constructor(private technologyService: TechnologyService) {}

  @Post()
  async create(@Body() createProjectDto: CreateTechnologyDto) {
    return handleSuccessResponse(
      await this.technologyService.create(createProjectDto),
      'Technology created successfully!',
    );
  }

  @Get()
  async getAll() {
    return handleSuccessResponse(
      await this.technologyService.getAll(),
      'Technologies retrieved successfully!',
    );
  }

  @Get('/projects')
  async getTechnologyProjects() {
    return handleSuccessResponse(
      await this.technologyService.getTechnologyProjects(),
      'Projects by technologies retrieved successfully!',
    );
  }

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number) {
    return handleSuccessResponse(
      await this.technologyService.get(id),
      'Technology retrieved successfully!',
    );
  }
}
