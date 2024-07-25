"use server"

import { api } from "@/lib/axios"
import { Post } from "@/models/Post"

interface GetPostBySlugRequest {
    slug: string,
}

interface GetPostBySlugResponse {
    post: Post,
}

export async function getPostBySlug({ slug }: GetPostBySlugRequest) {
    const response = await api.get<GetPostBySlugResponse>(`/posts/slug/${slug}`)

    const {
        post
    } = response.data

    return post
}