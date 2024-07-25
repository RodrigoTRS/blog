"use server"

import { api } from "@/lib/axios"
import { MenuOption } from "@/models/MenuOption"

interface MenuOptionsResponse {
    menuOptions: MenuOption[]
}

export async function fetchMenuOptions() {
    const response = await api.get<MenuOptionsResponse>("/menu")

    const {
        menuOptions
    } = response.data

    return menuOptions
}