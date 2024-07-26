"use server"

import { api } from "@/lib/axios"

export async function getPostCount() {
    const response = await api.get("/posts/count")
    const { count } = response.data

    return {
        count
    }
}