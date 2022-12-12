import TechnologyTypes from "../technology/types";

export default interface ProjectTypes {
    id: number
    name: string
    slug: string
    mainImage: string
    description: string
    type: string
    role: string
    duration: string
    createTime: Date
    gallery?: Array<GalleryTypes>
}

export interface ProjectBySlugTypes extends ProjectTypes {
    category: CategoryTypes
    technologies: TechnologyTypes[]
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

export interface CategoryProjectsTypes extends CategoryTypes {
    projects: ProjectTypes[]
}
