"use server"

import { api } from "@/lib/axios"

export interface CreatePostRequest {
    title: string,
    categories: string[],
    content: string,
}

export async function createPost({
    title,
    categories,
    content
}: CreatePostRequest) {
    await api.post("/posts", {
        title,
        categories,
        content
    })
}