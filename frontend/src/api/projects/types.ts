export default interface ProjectTypes {
    id: number
    name: string
    description: string
    type: string
    role: string
    duration: string
    createTime: Date
}

export interface CategoryTypes {
    id: number
    name: string
}

export interface CategoryProjectsTypes extends CategoryTypes {
    projects: ProjectTypes[]
}
