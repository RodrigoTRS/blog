import { Category } from "./Category"

export interface Post {
    id: string
    title: string
    slug: string
    content: string
    createdAt: string
    updatedAt: string
    categories: Category[]
}