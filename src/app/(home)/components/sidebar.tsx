import { Categories } from "./categories";
import { LatestPosts } from "./latest-posts";

export function Sidebar() {
    return (
        <aside className="flex flex-col gap-12">
            <LatestPosts />
            <Categories />
        </aside>
    )
}