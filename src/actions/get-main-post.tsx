"use server"

import { api } from "@/lib/axios"

interface PostResponse {
    id: string,
    title: string
    categories: {
        title: string,
        slug: string
    }[],
    content: string,
    slug: string,
    createdAt: Date,
    isMain: boolean
}

export async function getMainPost() {
    const response = await api.get<PostResponse[]>("/posts?isMain=true")
    return response.data[0]
}