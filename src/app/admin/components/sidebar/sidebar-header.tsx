import { ReactNode } from "react";

interface SidebarHeaderProps {
    children: ReactNode
}

export function SidebarHeader({ children }: SidebarHeaderProps) {
    return (
        <header className="flex items-center w-full p-4 border-b">
            {children}
        </header>
    )
}