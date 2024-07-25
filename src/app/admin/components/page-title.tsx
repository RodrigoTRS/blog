import { ReactNode } from "react"

interface PageTitleProps {
    children: ReactNode
}

export function PageTitle({ children }: PageTitleProps) {
    return (
        <h1 className="text-xl">
            {children}
        </h1>
    )
}