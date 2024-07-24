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

interface FetchLatestPostsRequest {
    page: number,
    perPage: number
}

export async function fetchLatestPosts({ page, perPage }: FetchLatestPostsRequest) {
    const response = await api.get<PostResponse[]>(`/posts?_sort=createdAt&_order=asc&_page=${page}&_limit=${perPage}`)
    return {
        page,
        perPage,
        totalCount: 10,
        posts: response.data
    }
}