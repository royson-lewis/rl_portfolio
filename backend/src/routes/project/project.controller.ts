import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { LoggingInterceptor } from '../common/interceptors/logging/logging.interceptor';
import { ProjectService } from './project.service';
import {
  CreateCaseStudyDto,
  CreateProjectDto,
  UpdateCaseStudyDto,
} from './project.dto';
import { Project } from './entities/project.entity';
import handleSuccessResponse from '../../helper/response/handle-success';

@Controller('projects')
@UseInterceptors(LoggingInterceptor)
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Post()
  async create(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectService.create(createProjectDto);
  }

  @Get()
  async getAll() {
    return handleSuccessResponse(
      await this.projectService.getAll(),
      'Projects retrieved successfully',
    );
  }

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number) {
    return handleSuccessResponse(
      await this.projectService.get(id),
      'Projects retrieved successfully',
    );
  }

  @Post(':id/case-study')
  async createCaseStudy(
    @Body() createCaseStudyDto: CreateCaseStudyDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return handleSuccessResponse(
      await this.projectService.createCaseStudy(createCaseStudyDto, id),
      'Case study created successfully!',
    );
  }

  @Get(':id/case-study')
  async getCaseStudy(@Param('id', ParseIntPipe) id: number) {
    return handleSuccessResponse(
      await this.projectService.getCaseStudy(id),
      'Case study retrieved successfully!',
    );
  }

  @Put(':id/case-study')
  async updateCaseStudy(
    @Body() updateCaseStudyDto: UpdateCaseStudyDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return handleSuccessResponse(
      await this.projectService.updateCaseStudy(updateCaseStudyDto, id),
      'Case study updated successfully!',
    );
  }
}
