"use server"

import { api } from "@/lib/axios"

interface CategoriesResponse {
    title: string
    slug: string,
}

export async function fetchCategories() {
    const response = await api.get<CategoriesResponse[]>("/categories")
    return response.data
}