import { ReactNode } from "react";

interface SidebarFooterProps {
    children: ReactNode
}

export function SidebarFooter({ children }: SidebarFooterProps) {
    return (
        <footer className="flex items-center justify-between w-full p-4 border-t">
            {children}
        </footer>
    )
}