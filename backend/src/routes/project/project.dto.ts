import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import {ProjectGallery} from "./entities/project-gallery.entity";

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  slug: string;

  @IsString()
  @IsNotEmpty()
  mainImage: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsNotEmpty()
  duration: string;

  @IsNumber()
  @IsNotEmpty()
  categoryId: number;

  @IsArray()
  @IsOptional()
  technologies: Array<number>;

  @IsArray()
  @IsNotEmpty()
  gallery: Array<ProjectGallery>;
}

export class CreateCaseStudyDto {
  @IsArray()
  @IsNotEmpty()
  caseSections: Array<CaseSectionDTO>;
}

export class UpdateCaseStudyDto {
  @IsArray()
  @IsNotEmpty()
  caseSections: Array<CaseSectionDTO>;
}

export class CaseSectionDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  mainImage?: string;

  @IsArray()
  @IsOptional()
  subsection?: Array<Record<string, string | number>>;
}
