"use client"

import { Button } from "@/components/ui/button"
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { api } from "@/lib/axios"
import { LogOut } from "lucide-react"

export function SettingsModal() {

    async function handleLogout() {
        const response = await api.post("/auth/logout")
        console.log(response)
    }

    return (
        <DialogContent
            className="w-[400px]"
        >
            <DialogHeader>
                <DialogTitle>Settings</DialogTitle>
            </DialogHeader>
            <DialogFooter>
                <Button
                    variant="destructive"
                    className="flex items-center gap-2"
                    onClick={handleLogout}
                >
                    Logout
                    <LogOut className="w-4 h-4"/>
                </Button>
            </DialogFooter>
        </DialogContent>
    )
}