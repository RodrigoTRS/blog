"use server"

import { api } from "@/lib/axios"
import { Category } from "@/models/Category"

interface CategoriesResponse {
    categories: Category[]
}

export async function fetchCategories() {
    const response = await api.get<CategoriesResponse>("/categories")
    return response.data
}