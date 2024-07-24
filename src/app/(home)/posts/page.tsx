import { fetchLatestPosts } from "@/actions/fetch-latest-posts";
import { PostEntry } from "./components/post-entry";
import { Pagination } from "@/components/pagination";
import { Breadcrumbs } from "@/components/bradcrumbs";
import { Metadata } from "next";

interface PostsPageProps {
    searchParams?: { 
        page: number
    }
}

export const metadata: Metadata = {
    title: "Posts | Personal Blog",
  };
  


export default async function PostsPage({ searchParams }: PostsPageProps) {
    const currentPage = Number(searchParams?.page ?? 1)

    const { posts, perPage, totalCount } = await fetchLatestPosts({
        page: currentPage,
        perPage: 5
    })

    return (
        <section className="flex flex-col items-start w-full max-w-[720px]">
            <Breadcrumbs />

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
            
            <Pagination
                basePath="/posts"
                currentPage={currentPage}
                perPage={perPage}
                totalCount={totalCount}
            />

        </section>
    )
}

  