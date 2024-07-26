"use server"

import { api } from "@/lib/axios"

export interface UpdatePostRequest {
    id: string,
    title: string,
    categories: string[],
    content: string,
}

export async function updatePost({
    id,
    title,
    categories,
    content
}: UpdatePostRequest) {
    await api.patch(`/posts/id/${id}`, {
        title,
        categories,
        content
    })
}