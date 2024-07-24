import { Separator } from "@radix-ui/react-dropdown-menu";
import { BackToHomepageButton } from "./components/back-to-homepage-button";
import { fetchLatestPosts } from "@/actions/fetch-latest-posts";
import { PostEntry } from "./components/post-entry";

export default async function PostsPage() {
    const posts = await fetchLatestPosts({
        page: 1,
        perPage: 5
    })

    return (
        <section className="flex flex-col items-start w-full max-w-[720px]">

            <BackToHomepageButton />

            <div className="flex flex-col gap-6">
                {posts.map((post, index) => {
                    return (
                        <PostEntry
                        post={post}
                        key={post.id}
                        />
                    )})
                }
            </div>


        </section>
    )
}