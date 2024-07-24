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

interface PostApiResponse {
    first: number,
    prev: number | null,
    next: number | null,
    last: number,
    pages: number,
    items: number,
    data: PostResponse[]
}

interface FetchLatestPostsRequest {
    page: number,
    perPage: number
}

export async function fetchLatestPosts({ page, perPage}: FetchLatestPostsRequest) {
    const response = await api.get<PostApiResponse>(`/posts?_sort=-createdAt&_page=${page}&_per_page=${perPage}`)
    return response.data.data
}