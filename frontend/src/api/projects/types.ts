import TechnologyTypes from '../technology/types'

export default interface ProjectTypes {
  id: number
  name: string
  slug: string
  mainImage: string
  description?: string
  logo: string
  brandPrimaryColor?: string
  type: string
  role: string
  duration: string
  createTime: Date
  link?: string
  gallery?: Array<GalleryTypes>
}

export interface ProjectBySlugTypes extends ProjectTypes {
  category: CategoryTypes
  technologies: TechnologyTypes[]
  prevProject: string
  nextProject: string
}

export interface GalleryTypes {
  id: number
  imgLink: string
  alt: string
}

export interface CategoryTypes {
  id: number
  name: string
  description: string
}

export interface CaseStudyTypes {
  id: number
  caseSections: CaseSectionTypes[]
  description: string
}

export interface CaseSectionTypes {
  id: number
  title: string
  description: string
  mainImage: string
  subsection: Record<string, string>
}

export interface CategoryProjectsTypes extends CategoryTypes {
  projects: ProjectTypes[]
}
