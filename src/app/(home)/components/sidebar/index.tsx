import { Categories } from "./categories";
import { LatestPosts } from "./latest-posts";
import { SidebarLoading } from "./loading";

interface SidebarProps {
    isLoading?: boolean
}

export function Sidebar({ isLoading = false }: SidebarProps) {
    if (isLoading) {
        return (
            <SidebarLoading />
        )
    }

    return (
        <aside className="flex flex-col gap-12">
            <LatestPosts />
            <Categories />
        </aside>
    )
}