import {ProjectCategory} from "./entities/project-category.entity";
import {ProjectCaseStudy} from "./entities/project-case-study.entity";
import {Technology} from "../technology/entities/technology.entity";
import {ProjectGallery} from "./entities/project-gallery.entity";

export interface IProject {
  id: number
  name: string
  slug: string
  mainImage: string
  description?: string
  category: ProjectCategory
  type: string
  role: string
  duration: string
  createTime: Date
  caseStudy: ProjectCaseStudy
  technologies: Technology[]
  gallery: ProjectGallery[]
}

export interface IGetProjectBySlugResponse extends IProject {
  prevProject: string,
  nextProject: string
}
