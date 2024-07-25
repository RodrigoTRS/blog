import { ReactNode } from "react"

interface PageTitleProps {
    children: ReactNode
}

export function PageHeader({ children }: PageTitleProps) {
    return (
        <div className="flex items-center justify-between">
            {children}
        </div>
    )
}