"use server"

import { api } from "@/lib/axios"
import { Post } from "@/models/Post"


interface FetchLatestPostsRequest {
    page: number
    perPage: number
}


interface FetchLatestPostsResponse {
    page: number
    perPage: number
    totalPages: number
    posts: Post[]
}

export async function fetchLatestPosts({ page, perPage }: FetchLatestPostsRequest) {
    const response = await api.get<FetchLatestPostsResponse>("/posts", {
        params: {
            page,
            perPage
        }
    })

    const {
        posts,
        totalPages
    } = response.data

    return {
        page,
        perPage,
        totalPages,
        posts
    }
}