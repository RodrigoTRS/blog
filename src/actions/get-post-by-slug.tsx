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

interface GetPostByIdRequest {
    slug: string,
}

export async function getPostBySlug({ slug }: GetPostByIdRequest) {
    try {
        const response = await api.get<PostResponse[]>(`/posts?slug=${slug}`)

        if (response.data.length === 0) {
            throw new Error("Post doesn't exist.")
        }

        return response.data[0]
    } catch (error) {
        throw error
    }

}