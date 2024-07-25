import { MainPost } from "./components/main-post";
import { PostCard } from "./components/post-card";
import { Separator } from "@/components/ui/separator";
import { Sidebar } from "./components/sidebar";
import { fetchLatestPosts } from "@/actions/fetch-latest-posts";
import { Pagination } from "@/components/pagination";
import { Breadcrumbs } from "@/app/(home)/components/bradcrumbs";



export default async function Home() {

  const numberOfPosts = 8

  const {
    posts,
    totalPages
  } = await fetchLatestPosts({
    page: 1, perPage: numberOfPosts
  })


  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="flex flex-col w-full items-center justify-center lg:col-span-2">

        <Breadcrumbs />

        <MainPost />

        <Separator className="my-6"/>

        <div className="w-full max-w-[720px] grid grid-cols-1 lg:grid-cols-2 gap-6">
          {
            posts.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  post={post}
                />
              )
            })
          }
        </div>
        <Pagination
          basePath="/posts"
          currentPage={1}
          perPage={numberOfPosts}
          totalPages={totalPages}
        />
      </div>

      <Sidebar />
    </section>
  );
}
