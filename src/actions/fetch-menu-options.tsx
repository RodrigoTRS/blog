"use server"

import { api } from "@/lib/axios"

interface MenuOptionsResponse {
    title: string
    slug: string,
}

export async function fetchMenuOptions() {
    const response = await api.get<MenuOptionsResponse[]>("/menu_options")
    return response.data
}