"use server"

import { api } from "@/lib/axios"

export interface UpdatePostRequest {
    id: string,
}

export async function deletePost({
    id,
}: UpdatePostRequest) {
    const response = await api.delete(`/posts/id/${id}`)
    const {
        post
    } = response.data

    return {
        post
    }
}