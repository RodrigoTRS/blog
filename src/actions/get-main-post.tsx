"use server"

import { api } from "@/lib/axios"
import { Post } from "@/models/Post"

interface GetMainPostResponse {
    post: Post
}

export async function getMainPost() {
    const response = await api.get<GetMainPostResponse>("/posts/main")

    const {
        post
    } = response.data

    return post
}